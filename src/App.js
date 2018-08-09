import React, { Component } from 'react';
import './App.css';
import Editor from "./component/editor"
import Previewer from "./component/previewer"

let initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      textbody:initialText,
      editorMaximize:false,
      previewerMaximize:false
    }
    this.onChange=this.onChange.bind(this)
    this.handleEditorMaximize=this.handleEditorMaximize.bind(this);
    this.handlePreviewerMaximize = this.handlePreviewerMaximize.bind(this);
  }
  onChange(text){
    this.setState({
      textbody:text
    })
  }

  handleEditorMaximize(event){
    this.setState({
      editorMaximize:!this.state.editorMaximize
    })
  }

  handlePreviewerMaximize(event){
    this.setState({
      previewerMaximize:!this.state.previewerMaximize
    })
  }

  render() {
    let s = this.state
    const classes = !s.editorMaximize && !s.previewerMaximize ? ["",""] : s.editorMaximize? ["max","nullClass"] : ["nullClass","max"]
    return (
      <div className="App">
        <div className="middle">
          <div className="inner">
            <Editor propClass={classes[0]} onClick={this.handleEditorMaximize} onChange={this.onChange} value={this.state.textbody} />
            <Previewer propClass={classes[1]} onClick={this.handlePreviewerMaximize} text={this.state.textbody}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

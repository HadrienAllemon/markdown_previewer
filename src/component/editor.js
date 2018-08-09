import React, { Component } from 'react';
import Icon from "./icon.svg"
import Full from "../images/full.svg"
import $ from "jquery"

class Editor extends Component {
  constructor(props){
    super(props);
    this.state={
      body:"",
    }
    this.onChange = this.onChange.bind(this);
    this.expend=this.expend.bind(this);
  }
  onChange(event){
    this.props.onChange(event.target.value);
  }

  expend(event){
    const $editorWraper = $(".editorWraper");
    $editorWraper.toggleClass("fullScreen");
    console.log($editorWraper.attr("class").match(/fullscreen/gi));
  }
  render(){
    return (
      <div className={"editorWrapper " + this.props.propClass} >
        <div className="titleBar" >
          <img src={Icon} className="editicon" alt="editor-icon" />
          <p>Editor</p>
          <img src={Full} alt="expend button" onClick={this.props.onClick} className="expend" />
        </div>
        <textarea spellCheck="false" name="body" id="editor" value={this.props.value} onChange={this.onChange}/>
      </div>
    )
  }
}

export default Editor

import React, { Component } from 'react';
import marked from "marked"
import Icon from "./viewer.svg"
import Full from "../images/full.svg"

var myMarked = require('marked');
var renderer = new myMarked.Renderer()
renderer.link= function(href,title,text){
  return `<a target="_blank", href="${href}">${text}</a>`
}



class Previewer extends Component {
  getMarkedDownText(text){
    const rawMarking = marked(text,{sanitize: true, gfm: true, break: true, renderer:renderer});
    return {__html: rawMarking}
  }
  render(){
    console.log(this.getMarkedDownText(this.props.text));
    return (
      <div className={"previewerWrapper "+ this.props.propClass}>
        <div className="titleBar">
          <img src={Icon} className="editicon" alt="editor-icon" />
          <p>Viewer</p>
          <img src={Full} alt="expend button" onClick={this.props.onClick} className="expend" />
        </div>
        <div className="body" dangerouslySetInnerHTML= {this.getMarkedDownText(this.props.text)}/>
      </div>)
  }
}

export default Previewer

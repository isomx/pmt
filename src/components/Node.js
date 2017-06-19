/**
 * Created by Josh on 3/27/2017.
 */
/* eslint-disable */
import React, {Component} from "react";
import NodeMenu from "./NodeMenu";
import { MdTransitionEvent, MdTransitionAnchor, MdTransitionElement, transitionTypes } from '../lib/systemManager';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
export default class Node extends Component {
  constructor(props) {
    super(props);
    this.handleMouse = this.handleMouse.bind(this);
    this.enterNode = this.enterNode.bind(this);
  }
  componentDidMount() {

  }

  updateTree(editData) {
    //editData[190].parentId = 182;
    this.props.updateTree(editData);
  }
  handleMouse(e) {
    e.stopPropagation();
  }

  enterNode(e) {
    this.props.onEnterNode(this.props.node.id);
  }

  render() {
    const {node} = this.props;
    if (!node) return null;
    /**
     if (node.id == 190) {
            const {editData} = this.props;
            const that = this;
            setTimeout(function() {
                if (editData[190].parentId == 184) {
                    editData[190].parentId = 182;
                } else {
                    editData[190].parentId = 184;
                }

                that.props.updateTree(editData);
            }, 5000);
        }
     **/
    const colorClass = this.props.codeData[node.code].css;
    if (this.props.nodeOnly) {
      return(
        <div className={'orgChart'} style={{padding: '0px', minHeight: '0px', verticalAlign: 'middle'}}>
          <div className={'node ' + colorClass} ref={(elem) => { this.props.registerElem(node.id, elem); }}>
            <div className="title">{node.name}</div>
            <div className="content">{node.name}</div>
          </div>
        </div>
      );
    }
    return(
      <Card className={'node ' + colorClass} ref={(elem) => { this.props.registerElem(node.id, elem); }} onMouseDown={this.handleMouse} onTouchStart={this.handleMouse}>
        <NodeMenu node={node} />
        <CardTitle title={node.name}/>
        <CardText>
          <div style={{display: 'block'}}>{node.name}</div>
          <div style={{display: 'block', width: '100%'}}>
            <button onClick={this.enterNode}>Enter</button>
          </div>

        </CardText>
      </Card>
    );


    return(
      <div className={'node ' + colorClass} ref={(elem) => { this.props.registerElem(node.id, elem); }} onMouseDown={this.handleMouse} onTouchStart={this.handleMouse}>
        <NodeMenu node={node} />
        <div className="title">{node.name}</div>
        <div className="content">
          <div style={{display: 'block'}}>{node.name}</div>
          <div style={{display: 'block', width: '100%'}}>
            <button onClick={this.enterNode}>Enter</button>
          </div>
        </div>
      </div>
    );
  }
}
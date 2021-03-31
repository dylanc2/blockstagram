import React from 'react';
import Block from './Block';

class Feed extends React.Component {

    state = {
      showopt: false,
      blocks: [],
      count: 0
    }

    addBlock = (color) => {
        const newBlocks = this.state.blocks.slice();
        newBlocks.unshift(<Block color={color} key={this.state.count}></Block>);
        this.setState({
          blocks: newBlocks,
          count: this.state.count + 1
        });
        console.log(this.state.blocks);
      }

    pickColorlayout = () => {
      if (this.state.showopt == false) {
        this.setState({
          showopt: true
        })
      }
      else{
        this.setState({
            showopt: false
        })
      }
    }
    
    render() {
      return (
        <div className = 'mainfeed'>
        <div className="input">
        {this.state.blocks}
        </div>
        <div>
          <button className="button" onClick={this.pickColorlayout}>+ Post Block</button>
        </div>
        {/* inline if-else: condition ? true : false */}
        { this.state.showopt ? <div className="pickblock">  
        <div>
            <button className="red"  onClick={() => this.addBlock("rgb(134, 5, 5)")}></button>
            <button className="blue" onClick={() => this.addBlock("rgb(21, 0, 141)")}></button>
        </div>
        <div>
            <button className="green"  onClick={() => this.addBlock("rgb(59, 110, 0)")}></button>
            <button className="purple"  onClick={() => this.addBlock("rgb(58, 0, 97)")}></button>
        </div>
     </div>: null }   
      </div>
      );
    }
  }


  export default Feed;
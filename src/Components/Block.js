import React from 'react';

class Block extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    }
  }
    
  render() {

  const myStyle = {
    backgroundColor: this.state.color
    };

  return (
    <>
      <div className="blockers" style={myStyle}></div>
      <div className="bottom">
          <div className="white"></div>
      </div>
    </>
      );
    }
  }


  export default Block;
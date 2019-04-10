import React from 'react'

const MyDiv = ({ onDivClick, mycounter }) => {
  return (
    <div
      onClick={onDivClick}
    >
      <h1>{mycounter}</h1>
    </div>
  )
}

// class MyDiv extends React.Component {

//   render() {
//     return (
//       <div
//         onClick={this.props.onDivClick}
//       >
//         <h1>{this.props.mycounter}</h1>
//       </div>
//     )
//   }
// }

export default MyDiv

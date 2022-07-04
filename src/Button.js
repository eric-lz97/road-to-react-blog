import React, { useState } from 'react';


const Button = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);

        if(count === 0){
            setCount(0)
        }

    }

    return (
        <div>
            <p>How many items would you like? {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}


// THIS IS HOW TO CREATE A CLASS COMPONENT (OLD WAY OF REACT) 
// import React, { Component } from 'react'

// export default class Button extends Component {

//     constructor(props){
//         super(props);

//         this.state ={
//             count: 0,
//         }
//     }
//      increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//      decrement = () => {
//             this.setState({
//                 count: this.state.count - 1
//             })
//         if(this.count === 0){
//             this.setState(0)
//         }
//     }
//   render() {
//     return (
//         <div>
//         <p>How many items would you like? {this.count}</p>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//     </div>    )
//   }
// }


export default Button
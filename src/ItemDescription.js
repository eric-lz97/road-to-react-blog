import React from 'react'

function ItemDescription({title, description}) {
  return (
    <div>
      <p>{title}</p>  
      <p>{description}</p>  

    </div>
  )
}

export default ItemDescription

/* THIS IS THE OLD WAY TO START A REACT COMPONENT AND TBH A COMPLICATED WAY JUST FOCUS ON FUNCTIONAL COMPONENTS */
// import React, { Component } from 'react'

// export default class ItemDescription extends Component {
//     render() {
//         const {title,description} = this.props;
//         return (
//             <div>
//                 <p>{title}</p>
//                 <p>{description}</p>

//             </div>)
//     }
// }

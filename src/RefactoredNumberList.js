import React from 'react'
 
// const DeprecatedNumberList = ({numbers}) => {
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   )
// }

// -----------------------------------------------------

const ListItem = ({number}) => (
  //This element does  not need a key.
  <li>{number}</li>
)

// const NumberList = ({numbers}) => {
//   //The element inside the map needs the key!
//   const listItems = numbers.map((number) =>
//     <ListItem key={number.toString()} number={number}/>
//   );

//   return(
//     <ul>
//       {listItems}
//     </ul>
//   )
// }

// --------------------------------------------------------

const RefactoredNumberList = ({numbers}) => (
   <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} number={number} />
      )}
   </ul>
 )

export default RefactoredNumberList
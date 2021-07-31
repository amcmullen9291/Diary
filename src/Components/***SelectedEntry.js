// import React from 'react';
// import { useSelector } from 'react-redux';
// // import Likes  from './likes'


//  const SelectedEntry = () => {
//   const notes = useSelector((state) => state.Index.entries.data);

//    if (notes) {
//       var renderIndex = notes.map(entry => {
//         const {id, title, date } = entry.attributes;
//         console.log(entry.id);
//         return (<ul key={id}>
//           <li><a href={`/DearDiary/entry/${entry.id}`}>{title}</a></li>
//           <ul>{date}</ul>
//           {/* <ul><Likes/></ul> */}
//           </ul>)
//       })
//     }
//     {todos.map(entry => (
//       <ul key={entry.entry_id}>
//           <li><a href={`/DearDiary/entry/${entry.id}`}>{entry.title}</a></li>
//           <ul>{date}</ul>
//         <td></td>
//           </ul>))}
    
//     return(
//       <>
//       <div>{renderIndex}</div>
//       </>
//     )
//   }

//   // const title = notes[0].attributes.title;
//   // const title2 = notes[1].attributes.title;
//   // const title3 = notes[2].attributes.title;
// export default SelectedEntry;
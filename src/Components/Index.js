import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setEntries } from '../Actions/EntryActions';

const Index = () => {
  const [index, setIndex] = useState([]);

  const getIndex = async () => {
    try {
      const response = await fetch("http://localhost:5000/entries");
      const jsonData = await response.json();

      setIndex(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getIndex();
  }, []);

  console.log("setIndex:", index);
  return (
    <div id="sidenav">
        <a href="#">Current Entries</a>
        {index.map(entry => (
      <ul key={entry.entry_id}>
          <li><a href={`/DearDiary/entry/${entry.entry_id}`}>{entry.title}</a></li>
          <ul>{entry.date}</ul>
          </ul>))}
          <ul>
            <li>Hello!</li>
          </ul>
    </div>
    )
}
const mapStateToProps = (state) => {
  return {
    entry: state.entry
  }

}

     const mapDispatchToProps = (dispatch) => {
       console.log("function is being called")
       return{
         findEntry: (entry) => { dispatch({type: 'SELECTED_ENTRY', entry})}
       }
     }



  export default connect(mapStateToProps, mapDispatchToProps)(Index); 
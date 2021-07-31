import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedEntry } from '../Actions/EntryActions';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import axios from 'axios';
import Store from '../Store'


const ShowEntry = () => {
    const entry = useSelector((state) => state.entry);
    const entryID = useParams();
    // const dispatch = useDispatch();
    // const { title, date, content } = entry;
    console.log("Entry:", entry);
    console.log("ID:", entryID.id);
    const url = `http://localhost:5000/entries/${entryID.id}`
    console.log("url:", url);

    const fetchEntryContent = async () => {
        const response = await axios.get(url)
        .then(res => {Store.dispatch(selectedEntry(res))})
        .catch((error) => {
            console.log("Error:", error)
    })
        // dispatch(selectedEntry(response));
};
        useEffect(() => {
            if(entryID && entryID !== "") fetchEntryContent();
        }, [])

        if (Object.keys(entry).length > 0) {
            const { id, title, content, date } = entry.data;
            var entryDetails = (
              <>
              <div>
                <center className="details" key={id}>
                  <div>{title}</div>
                  <p>{content}</p>
                  <div>{date}</div>
                </center>
                </div>
              </>
            );
        }
return(
          <>
          <div className="App">
        <Logo/>
        <div id="sidenav2">
        <center><Link to={"/"}>R E T U R N H O M E</Link></center>
        </div>
            {/* <p className="details">{entryDetails}</p> */}
            {/* //for sample version */}
            <p className="details">
              <center><div>Well, Hello</div>
              <br/>
              <c><p className="sample-css">My name is Jacques cousteau I was born on July 21 1899. My favourite authors are Kipling, O. Henry and Steuart Edward White. My favourite flower is Lady Slipper and Tiger Lily. My favourite sports are Trout fishing, Hiking, shooting, football and boxing. My favourite studies are English, Zoology and Chemistry. I intend to travel and write.</p>
            <div>Tuesday July 30th 2021, 6:15:42 pm</div></c>
            <br/>
            </center>
            {/* //end addition */}
            </p>
            <a href="/"><button className="entrySubmit">Okay</button></a>
        
        </div>
        <div className="bottomMarker">✳ ✳ ✳ ✳  ✳ ✳ ✳ ✳ ✳ ✳ ✳ ✳ ✳ 🄳🄴🄰🅁 🄳🄸🄰🅁🅈</div>
      </>
      )
}

  
export default ShowEntry;
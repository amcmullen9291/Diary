import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import swal from 'sweetalert';
import axios from 'axios';

class Entry extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentDate: new Date(),
      day : moment(new Date()).format("dddd"),
      date: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
      title: '',
      content: '',
    }
  }
  
changeHandler = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

submitHandler = e => {
  e.preventDefault();
  console.log(this.state)
try {  
  axios.post('http://localhost:5000/newEntry', this.state)
.then(response => {console.log("Success:", response)})
  
} catch (error) {
  console.log("Error(s):", error)
}

  window.location = "/";
}

    render() {
      const {title, content, date } = this.state
      return (
          <>
        <div className="App">
        <center><h1 className="titleBanner"><Link to="/">ᗪEᗩᖇ ᗪIᗩᖇY..</Link></h1></center>
        <div className="paper">
        <form className="paperss" name="entry" id="entryForm" onSubmit={this.submitHandler}>
            {/* <input type="text"  className="entryHeader" name="title" placeholder="the reason for my visit:"></input><br/> */}
            <br/>
            <p className="titleLabel">Ｉ ｊｕｓｔ ｗａｎｔｅｄ ｔｏ ｔｅｌｌ ｙｏｕ ...</p><br/>
            <br/>
            <center><label className="titleLabel">ａｂｏｕｔ </label><input type="text" className="entryTitle" name="title" value={title} onChange={this.changeHandler}/></center>
            <textarea type="text" className="papers" name="content" value={content} onChange={this.changeHandler}/><br/>
            <br/>
            <input className="entryDate" type="text" name="date" readOnly="read-only" defaultValue={this.state.day + " " + this.state.date} onChange={this.changeHandler}/>
            <br/>
            {/* <input className="entrySubmit" type="submit" name="submit" value="Okay"></input> */}
            <button  className="entrySubmit" type="submit">Okay</button>
        </form>
        <p>//entries will not be saved on the sample version</p>
        </div>
        <center><form>
          <button className="myButton" onClick={NoSave}>Past Notes</button></form><Link className="myButton" to="#">B A C K H O M E</Link></center>        </div>
        </>
      )
    }
    
  }

     function NoSave(e){ 
       e.preventDefault();
       swal({
      title: "Hey, wait:",
      text: "You have not saved your entry. Deleting this can't be undone!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Sticks and Stones...", {
          icon: "info",
        }).then(function() {
          window.location = "/";
      });
      } else {
        swal("Oh, okay.");
      }
    });
     }

  export default Entry;
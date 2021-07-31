import React from 'react';
import { Link } from 'react-router-dom';
import Index from './Index';
import Logo from './Logo';
// import Logo from '../images/logo.gif';

class Home extends React.Component {

    render() {
      return (
          <>
        <div className="App">
        <Index/>
        <center><Logo/></center>
          <section className="MainLogo"></section>
          <center><h1 className="titleBanner">☆ 𝕃𝕠𝕧𝕖, 𝕞𝕖 </h1></center>
          <center><button  type="button" className="myButton" onClick={showMenu}>Past Notes</button><Link className="myButton" to="/DearDiary/NewEntry">Something New</Link></center>
          </div>
        </>
      )
    }
}
function showMenu() {
    var x = document.getElementById("sidenav");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  export default Home;
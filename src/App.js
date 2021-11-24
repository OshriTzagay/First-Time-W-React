import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Media from "./components/media";
import Car from "./components/cars";
import Name from "./components/names";
import MediaWithClass from "./components/mediaWclass";
import Worker from "./components/workers";

//! //////////////////////////////////////////////////////////////////////
//! 2 WAYS TO MAKE COMPONENT , The First - Class // The Second - Function.
//! //////////////////////////////////////////////////////////////////////

// ! The Class Component

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>This is Class Component.</h1>
        <img id="imgon" src="https://i.pinimg.com/564x/bb/21/f1/bb21f14026a14a502e206feeff9d5714.jpg"/>
        <Media />
        <Car />
        <Name name="Tzug" age="24" />
        <MediaWithClass video ="https://pixabay.com/videos/id-32621/"/>
        <div id="container"> 
        <Worker img="https://i.pinimg.com/564x/5f/f7/76/5ff7765c603157c920313155699fd001.jpg" name="Admasos Demoz" info="Oshri Tzagay's Hoe"/>
        <Worker img="https://i.pinimg.com/564x/91/cf/b4/91cfb43af94d1265cd62e4234f27f30b.jpg" name="Kobi Bryant" info="R.i.P"/>
        <Worker img="https://i.pinimg.com/564x/27/25/5b/27255b482416e7e20f3466b30381e46b.jpg" name="Mikey" info="Tzagay's BodyGuard"/>
        <Worker img="https://i.pinimg.com/564x/1e/f4/59/1ef45912bedf1da749febc51abb44ff5.jpg" name="Roni" info="PartyMaker"/>
        </div>


      </div>
    );
  }
}

export default App;

// ! The Function Component
// function App() {
// return (
//   <div className="App">
//     <div id="body">
//       <h1 id="title">This is our React FirstClass!</h1>

//       <iframe width="560" height="315" src="https://www.youtube.com/embed/7cDYYvOhKwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/K_9tX4eHztY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/Kbj2Zss-5GY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     </div>
//   </div>
// );
// }

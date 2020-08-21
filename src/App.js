import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Section0 from "./Components/Section0";
import Section1 from "./Components/Section1"
import Section2 from "./Components/Section2"
import Section3 from "./Components/Section3"
import Section4 from "./Components/Section4"
import Section5 from "./Components/Section5"
import {Animated} from "react-animated-css";



import dummyText from "./DummyText";
// import './App.css'
import './style.css'
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Navbar />
        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
            <Section0
                title="Section 0"
                subtitle={dummyText}
                dark={true}
                id="section1"
           />

        </Animated>
          
        
        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>

            <Section1
              title="Section 1"
              subtitle={dummyText}
              dark={false}
              id="section2"
            />
        </Animated>

        <Section2
          title="Section 2"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section3
          title="Section 3"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section4
          title="Section 4"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
        <Section5
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section6"
        />
      </div>
    );
  }
}

export default App;

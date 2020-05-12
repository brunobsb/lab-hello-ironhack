import React, { Component } from "react";
import "./App.css";
class App extends Component {

  render() {


    const testhead = {
      headline: 'Say hello to ReactJS',
      description: 'You will learn a Frontend framework from scratch, to become a ninja Developer.',
      age: '24',
      image: '',
    };


      const displayImage = () => {
        if(testhead.image) return <img src={testhead.image} />
          return <img src='/images/ironhack-logo.svg' width='50' height='50'/>
        };



    
    return (
      
    <div className="App">
        <header>
          <nav className="Mynavbar" >
              <div className="Mynavbarlogo" > {displayImage()}
              </div>
              <div className="Mynavbarmenu" >
                  <ul>
                      <li> <a href="/">Teste 11111</a> </li>
                      <li> <a href="/">Teste2</a> </li>
                  </ul>
              </div>
          </nav>
      </header>
      <div>
        <h1 id="headline">{testhead.headline}</h1>
        <h6 id="description">{testhead.description} </h6>
      </div>

      <div>
        <a class="button js-button" >Awesome!</a>
      </div>

      </div>
    );
  }
}

export default App;


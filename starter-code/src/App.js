import React, { Component } from "react";
import "./App.css";
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
class App extends Component {

  render() {


    const testhead = {
      headline: 'Say hello to  ReactJS',
      description: 'You will learn a Frontend framework from scratch, to become a ninja Developer.',
      age: '24',
      image: '',
    };


      const displayImage = () => {
        if(testhead.image) return <img src={testhead.image} />
          return <img src = '/images/ironhack-logo.svg' width = '60' height = '60'/>
        };

      const displayImagemenu = () => {
        return <img src ='/images/menu-top.svg' width = '25' height = '25'/> 
      }

      const displayImage1 = () => {
        return <img src ='/images/icon1.png' width = '180' height = '180'/> 
      }

      const displayImage2 = () => {
        return <img src ='/images/icon2.png' width = '180' height = '180'/> 
      }

      const displayImage3 = () => {
        return <img src ='/images/icon3.png' width = '180' height = '180'/> 
      }

      const displayImage4 = () => {
        return <img src ='/images/icon4.png' width = '180' height = '180'/> 
      }

       const displayImagereact = () => {
         return <img src ='/images/react-logo.svg' className="reactlogo" width = '300' height = '300'/> 
       }

    
    return (
      
    <div className="App">
    <div className="container-fluid, cover"  >
        <header>
          <nav className="Mynavbar" >
              <div className="Mynavbarlogo" > {displayImage()}
              </div>
              <div className="Mynavbarmenu" >
              {displayImagemenu()}

              </div>
          </nav>
      </header>

<div>
<div className="container reactlogosplit">
      
  <div className="container greetsize">
    <div className="col">
    <div className="row" id="headline">{testhead.headline}
    </div>
      </div>
      <div className="row" id="description">{testhead.description} </div>
      <div className="row">
      <a className="button js-button" >Awesome!</a>
      </div>
    </div>
    <div className="container logocontainer">

      {displayImagereact()}

    </div>
</div>

<div className="cardsOrder" >    
  
<div className="card" >
  <div className="card-body">
      {displayImage1()}
      <h5 className="card-title title">Declarative</h5>
      <p className="card-text text">React makes it painless to create interative UIs</p>
  </div>
</div>

<div className="card" >
  <div className="card-body">
      {displayImage2()}
      <h5 className="card-title title">Components</h5>
      <p className="card-text text">Build encapsulated components that manage their state.</p>
  </div>
</div>

<div className="card" >
  <div className="card-body">
      {displayImage3()}
      <h5 className="card-title title">Single-Way</h5>
      <p className="card-text text">A set of immutable values are passed to the components.</p>
  </div>
</div>

<div className="card" >
  <div className="card-body">
      {displayImage4()}
      <h5 className="card-title title">JSX</h5>
      <p className="card-text text">Statically-typed, designed to run on modern browsers.</p>
  </div>
</div>

</div>






  </div>
  







</div>


</div>


    );
  }
}

export default App;


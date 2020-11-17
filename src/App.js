import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import React from 'react';

import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '937f33b864884f96812aff26f314b51f'
 });

const particleOptions = {
        particles: {
          number: {
            value:150,
            density:{
              enable:true,
              value_area:800,
            }
          }      
        },
        interactivity:{
          detect_on:"window",
          events:{
            onhover:{
              enable:true,
              mode:'repulse',
            },
            onclick:{
              enable:true,
              mode:'push',
            },
            resize:true
          }
          
        },
      }
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input :'',
      imageUrl:'',
    }
  }

  onInputChange= (event)=>{
    this.setState({
      input:event.target.value
    })
  }
  onSearchSubmit= ()=>{
    this.setState({
      imageUrl:this.state.input
    })
    app.models.predict(
      "c0c0ac362b03416da06ab3fa36fb58e3",
      this.state.input
    ).then(
      function(response){
        console.log(response.outputs[0].data.regions);
      },
      function(err){
        //error code
      }
    );
  }


  render(){
  return (
    <div className="App">
      <Particles
      className='particles'
       params={particleOptions} />
      
      <Navigation/>
      <Rank/>
      <Logo/>
      <ImageLinkForm 
        onInputChange = {this.onInputChange}
        onSearchSubmit = {this.onSearchSubmit}
      />
      <FaceRecognition
        imageUrl={this.state.imageUrl}
      />
    </div>
  );
  }
}
export default App;

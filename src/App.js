import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

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
function App() {
  return (
    <div className="App">
      <Particles
      className='particles'
       params={particleOptions} />
      
      <Navigation/>
      <Rank/>
      <Logo/>
      <ImageLinkForm/>
    </div>
  );
}
export default App;

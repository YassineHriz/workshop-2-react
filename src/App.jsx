import logo from './logo.svg';
import './App.css';
import imageInSrc from './imageInSrc.jpg'
import './style.css'
function App() {
  return (
    <div className="App">
      <div style={{border: '1px solid black',maxWidth:'100vw' }}>
        <h1 className="title red">Your name here</h1>
        <br/>
        <img src={imageInSrc} alt="" width="1200" height="auto"/>
        <br/>
        <img src="/imageInPublic.jpg" alt="" width="1200" height="auto"/>
        <br/>
        <video width="320" height="240" controls>
          <source type='video/mp4' src='/norway video.mp4'/>
        </video>
      </div>
    </div>  
  );
}

export default App;

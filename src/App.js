import logo from './logo.svg';
import './App.css';


function App() {
  let image_url = "http://cbim.shiky.me:8081/get_batch";
  let src_img = $.getText('http://cbim.shiky.me:8081/accept/1')
  return (
    <div className="App">
      <header className="App-header">
        <img src={src_img} className="GeneratedImage" alt=""/>
        <button type="button" onClick={function(e){console.log(e);}}>do something</button>
        <a href={image_url}>do something</a>
      </header>
    </div>
  );
}

export default App;

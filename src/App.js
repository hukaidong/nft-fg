import logo from './logo.svg';
import './App.css';


function App() {
  let image_url = "http://cbim.shiky.me:8081/get_batch";
  let reject_url = "http://cbim.shiky.me:8081/reject_all";
  let accept_1 = "http://cbim.shiky.me:8081/accept/1";
  let item = []
  return (
    <div className="App">
      <header className="App-header">
        <img src={image_url} className="GeneratedImage" alt=""/>
        <a className='btn' href={reject_url}>Reject All</a>
        <a className='btn' href={accept_1}>Accept 1</a>
      </header>
    </div>
  );
}

export default App;

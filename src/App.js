import logo from './logo_kr.svg';
import './App.css';
import Gnblist from './Gnblist';


function App() {
  return (
    <header id="hd">
    <div className="container justify-content-between d-flex ">
        <h1><a href=''><img src={logo} className='d-block w-50 '/></a></h1>
        <ul id="gnb" className='d-flex w-100 justify-content-between ' >
          <Gnblist></Gnblist>
          </ul>
      </div>
    </header>
  
  );
}

export default App;

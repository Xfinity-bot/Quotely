import './App.css';
import Quote from './components/Quote';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import {useState,useEffect} from 'react'




function App() {
 
  const [flag, setflag] = useState(0);
  const refresh=(e)=>{
    e.preventDefault();
    setflag(flag+1);
    console.log(flag);

  }
  useEffect(() => {
   
  },[flag])
  const downloadHandler=(e)=>{
    e.preventDefault();
    console.log("ok");
    domtoimage.toBlob(document.getElementById('download'))
    .then(function (blob) {
        saveAs(blob, 'Quotes.png');
    });
  }
  return (
   <div className="ultimate-cont">
    <div className="main-cont"><Quote flag={flag} ></Quote>
    <div className="btn-cont">
      <button onClick={refresh} className="btn-refresh"> 
        <p>REFRESH</p>
        </button>
      <button className="btn-download" onClick={downloadHandler}>
        
       
        <p>DOWNLOAD</p>
    
      </button>
      </div>
    </div>
    <p className="dev-by">Developed By <spam>Xfinity</spam></p>
  </div>
   
  );
}

export default App;

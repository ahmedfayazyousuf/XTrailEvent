import { useState } from "react";
import '../Z_Styles/Nissan.css'
import firebase from "../../firbase"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import {useRef} from 'react';
import axios from "axios";
import {QrReader} from "react-qr-reader";
import './qrscan.css'


const QRScan = () =>{

    const [file, setFile] = useState("");
    const [count, setCount] = useState(0);
    const [map, setMap] = useState("");
    const navigate = useNavigate();
    const buttonRef = useRef(null);

    function handleScan  (data)  {    
      if(data!=null){  
        console.log(data.text)
          if(data.text === '1'){
            document.getElementById('hide').style.visibility = 'hidden'
            document.getElementById('modal').style.visibility = 'visible';
            document.getElementById('back').style.visibility = 'visible';
            
          }

          if(data.text === '2'){
            document.getElementById('hide').style.visibility = 'hidden'
            document.getElementById('modal').style.visibility = 'visible';
            document.getElementById('back').style.visibility = 'visible';
            
          }

          if(data.text === '3'){
            document.getElementById('hide').style.visibility = 'hidden'
            document.getElementById('modal').style.visibility = 'visible';
            document.getElementById('back').style.visibility = 'visible';
            
          }

          if(data.text === '4'){
            document.getElementById('hide').style.visibility = 'hidden'
            document.getElementById('modal').style.visibility = 'visible';
            document.getElementById('back').style.visibility = 'visible';
            
          }

          if(data.text === '5'){
            document.getElementById('hide').style.visibility = 'hidden'
            document.getElementById('modal').style.visibility = 'visible';
            document.getElementById('back').style.visibility = 'visible';
            setCount('5')
            
          }
      }
    };


      
  
    function handleError (err)  {
      console.error(err);
    };

    function Handlesubmit(){
      window.open(map, '_blank', 'noreferrer')
      document.getElementById('hide').style.visibility = 'visible'
      // document.getElementById('modal').style.visibility = 'hidden';
      // document.getElementById('back').style.visibility = 'hidden';
    }

    function Close(){

      if(count === '5'){
        
      }
      document.getElementById('modal').style.visibility = 'hidden';
      document.getElementById('back').style.visibility = 'hidden';
      document.getElementById('hide').style.visibility = 'hidden'

    }


    return(
      <div className="qrscan">

        <div id="modal" style={{position:'absolute', height:'400px', border:'2px solid',zIndex:'1000', width:'500px', background:'white', display:'flex', justifyContent:'center', alignItems:'center', visibility:'hidden'}}>
          <button onClick={Handlesubmit}>Click Here</button>
          <button id="hide" style={{visibility:'hidden'}} onClick={Close}>Scan Next Qr</button>
        </div>

        <div id="back" style={{height:'100vh', width:'100vw', position:'absolute', background:'black', opacity:'0.5', zIndex:'999', visibility:'hidden'}}>

        </div>
        <div className="scan">

        </div>
        <div className="scanframe" style={{zIndex:'1'}}>
        <QrReader
            constraints = {{facingMode: 'environment'} }
            
            //style={previewStyle}
            onError={handleError}
            onResult={handleScan}
            videoStyle={{height:'100%',width:'97%',padding:0,left:4,top:0,alignSelf:'center'}}
            videoContainerStyle={{height:'100%', width:'100%',left:0,padding:0}}
            containerStyle={{height:'80%',left:'15%',width:'70%',top:0}}

        />
        </div>
    </div>
    )
}

export default QRScan
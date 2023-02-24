import { useState } from "react";
import '../Z_Styles/Nissan.css'
import firebase from "../../firbase"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import {useRef} from 'react';
import axios from "axios";

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


    function handleChange(event) {
      setCount(count+event.target.files.length)
      console.log(event.target.files[0])
      
      if(count !== 0){
        document.getElementById("name").innerHTML = `${count+1} images selected`
      }
      
      for (let i = 0; i < event.target.files.length; i++) { 
        if(event.target.files.length>1){
          document.getElementById("name").innerHTML = `${count + event.target.files.length} images selected`
        }

        if(count === 0 && event.target.files.length === 1){
          document.getElementById("name").innerHTML = document.getElementById("name").innerHTML = event.target.files[i].name
        }
        // else if(i===0){
        //   document.getElementById("name").innerHTML = event.target.files[i].name
        // }


        const newImage = event.target.files[i];
        newImage["id"] = Math.random();
        setFile((prevState) => [...prevState, newImage]);
      }

    }

    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });

  async function Main(file) {
    try {
       const result = await toBase64(file);
       return result
    } catch(error) {
       console.error(error);
       return;
    }
    //...
 }



    function sendData (){

      buttonRef.current.disabled = true;

      file.map((file,index)=>{
        var lol = Main(file).then(data =>{
          console.log(data)
          const storage = getStorage();
          var storagePath = 'uploads/' + file.name ;
          const storageRef = ref(storage, storagePath);
          const uploadTask = uploadBytesResumable(storageRef, file);
  
          uploadTask.on('state_changed', (snapshot) => {
              // progrss function ....
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
            }, 
            (error) => { 
              // error function ....
              console.log(error);
            }, 
            () => {
              // complete function ....
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                const Image = firebase.firestore().collection("Images");
                const Image64= firebase.firestore().collection("Images64");
                Image.add({imageURL:downloadURL});
                // Image64.add({image:data});
                axios.post("https://photocloud.azurewebsites.net/upload", {
                  downloadURL
                    },{headers: {
                      'Access-Control-Allow-Origin': '*',
                      'Content-Type': 'application/json',
              }})
                navigate(`/Success`)
              });
            });
        });
      })
      
        
        


 
    }

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
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100vw', height:'100vh'}}>
          <div style={{display: 'flex', flexDirection: 'column', width: '100vw', height:'50%',alignItems:"center"}}>
              <div style={{padding: '40px', marginTop: '60px', marginBottom:"-30px"}}>
                <h3>Please upload an image you would like to add to the mosaic.</h3>
              </div>
              <input title="" id="image-file" multiple accept="image/*" type="file" onChange={handleChange} style={{color: 'transparent',marginBottom: "2%", width:"230px",display:"",textAlign:"center",justifyContent:"center", alignItems:"center"}} /> 
              <label id="name">No Image Selected</label>
 
          </div>

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
import { useState } from "react";
import '../Z_Styles/Nissan.css'
import firebase from "../../firbase"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import {useRef} from 'react';
import axios from "axios";

const Upload = () =>{

    const [file, setFile] = useState("");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const buttonRef = useRef(null);

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


    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100vw', height:'100vh'}}>
          <div style={{display: 'flex', flexDirection: 'column', width: '100vw', height:'50%',alignItems:"center"}}>
              <div style={{padding: '40px', marginTop: '60px', marginBottom:"-30px"}}>
                <h3>Please upload an image you would like to add to the mosaic.</h3>
              </div>
              <input title="" id="image-file" multiple accept="image/*" type="file" onChange={handleChange} style={{color: 'transparent',marginBottom: "2%", width:"230px",display:"",textAlign:"center",justifyContent:"center", alignItems:"center"}} /> 
              <label id="name">No Image Selected</label>
 
          </div>


          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height:'50%'}}>
            <button ref={buttonRef} id="signup" name="signup" type="submit" className="grab" style={{width:"230px",height: "50px", marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'black', backgroundColor: 'white', cursor: 'grab'}} onClick={sendData}>UPLOAD</button>
            
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fgetreadywhite.png?alt=media&token=e12d79b3-89f3-4550-971d-b5cd38152986" alt="Logo" style={{width: '20vh', marginTop: '5px', marginBottom: '10px'}}/>
                </div>
          </div>

          
        </div>
    )
}

export default Upload
import firebase from "../../firbase"
import { useState } from "react";

import { useEffect } from "react";

const  Home = () =>{
    const [data, setData] = useState([]);
    function toDataURL(url) {
        return fetch(url)
          .then((response) => {
            return response.blob();
          })
          .then((blob) => {
            return URL.createObjectURL(blob);
          });
      }

      async function getData(){

        const res = await fetch(`https://photocloud.azurewebsites.net/photos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        var data1 = await res.json();

        setData(data1)

        console.log(data1)
      }



      useEffect(()=>{
        getData();
      },[])

    function handleClick(){

        data.forEach(async (doc,index) => {
            var data = doc.Link

            const a = document.createElement("a");
            a.href = await toDataURL(data);
            a.download = "myImage.png";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

           
        })


        // const Image = firebase.firestore().collection("Images64").get().then(async (docs)=>{
        //     docs.forEach(async (doc,index) => {
        //         var data = doc.data().image;

        //         const a = document.createElement("a");
        //         a.href = await toDataURL(data);
        //         a.download = "myImage.png";
        //         document.body.appendChild(a);
        //         a.click();
        //         document.body.removeChild(a);

               
        //     })
        // });

        
        
    }


    
return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height:'100vh'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height:'50vh'}}>
            <h1>Howdy Admin!</h1>
            <button type="submit" className="grab" style={{width:"220px", marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'black', backgroundColor: 'white', cursor: 'grab'}} onClick={handleClick}>Download All Images</button>
        </div> 

        <div style={{display: 'flex', flexDirection: 'column', width: '100vw', height:'50vh'}}>
            <p style={{color: 'white', paddingTop: '100px'}}>Photo Mosaic App</p>
        </div> 
            
            
            
    </div>
)
}

export default Home
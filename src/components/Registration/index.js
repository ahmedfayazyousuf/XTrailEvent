import { Link } from "react-router-dom";
import nislogo from '../Z_Styles/Xtrail Expeditiion.png'
import nislogo2 from '../Z_Styles/Nissan Logo.png'
import rostawami from '../Z_Styles/AWR Logo.png'
import firebase from '../../firbase';
import { useNavigate } from 'react-router-dom';

const Registration = () =>{

  const navigate = useNavigate();

  function Handlesubmit() {
    const Users = firebase.firestore().collection("Users");
    const Email = document.getElementById("email").value;
    const Number = document.getElementById("no").value;
    const Name = document.getElementById("Name").value;

    Users.add({
      Name:Name,
      Email:Email,
      Number:Number,
      time: firebase.firestore.FieldValue.serverTimestamp()

  }).then((doc)=>{
      navigate('/instructions',{state:{id:doc.id}})
  })

  }

    return(
      <>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent:'center'}}>
          <div style={{display: 'flex', flexDirection: 'column', width:'50%'}}>
            <img id='head' style={{width: '100px', marginLeft: '10px'}} src={nislogo2} alt="Nissan Laptop Cover"/>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', width:'50%', textAlign: 'right', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <img id='head' style={{width: '180px', textAlign: 'right', marginRight: '10px'}} src={rostawami} alt="Nissan Laptop Cover"/>
          </div>
        </div>


      <div style={{display:"flex", flexDirection:"column", width:"100vw", justifyContent:"center", alignItems:"center", marginTop: '90px'}}>

        <div style={{display: 'flex', flexDirection: 'column', width: '70%', gap:'5px', alignItems: 'center', justifyContent:'center'}}>

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img id='head' style={{width: '270px'}} src={nislogo} alt="Nissan Laptop Cover"/>
          </div>

          <p style={{paddingRight: '50px', paddingLeft: '50px', color: 'black', fontSize: '22px', fontWeight: '0'}}>Register</p>
          
          <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <input type="text" placeholder='Name' id="Name" style={{background:"transparent", border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white'}}/> 
          </div>
          
          <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <input type="email" placeholder='Email' id='email' style={{background:"transparent", border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
          </div>

 
          <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <input type="number" placeholder='Phone (971 xx xxx xxxx)' id='no' style={{background:"transparent", border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
          </div>

          <div>
              <p id='error' style={{color:"red", marginBottom: '5px'}}></p>
          </div>

          <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>  
            <button style={{cursor: 'grab', width:"100%", height:'40px', padding: '5px', border: 'none', backgroundColor: 'black', color: 'white', borderRadius: '30px'}} onClick={Handlesubmit} variant="contained">SUBMIT</button>
          </div>

        </div>
      </div>

      </>

    )
}

export default Registration
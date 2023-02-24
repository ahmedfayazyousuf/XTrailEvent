import { Link } from "react-router-dom";
import nislogo from '../Z_Styles/nislogo.png'
import Tick from './tickicon.png'
const Registration = () =>{

    return(
      <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>

        <div style={{display: 'flex', flexDirection: 'column', width: '70%', gap:'5px', alignItems: 'center', justifyContent:'center'}}>

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img id='head' style={{width: '150px'}} src={nislogo} alt="Nissan Laptop Cover"/>
          </div>

          <h1 style={{paddingRight: '50px', paddingLeft: '50px', color: 'black', fontSize: '25px'}}>REGISTRATION</h1>
          
          <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <input type="text" placeholder='NAME' id="Name" style={{background:"transparent", borderRadius: '10px', border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white'}}/> 
          </div>
          
          <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <input type="email" placeholder='EMAIL' id='email' style={{background:"transparent", borderRadius: '10px', border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
          </div>


          <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <input type="number" placeholder='MOBILE (971 xx xxx xxxx)' id='no' style={{background:"transparent", borderRadius: '10px', border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
          </div>

          {/* <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <textarea className="form-control" type="textarea" name="message" id="message" rows='3' placeholder="For us, the answer is Yes. Now, what's your question?" required style={{height: '115px', marginBottom: '0px', width: '100%', border: '1px solid black', borderRadius: '10px', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddintTop: '10px', paddingRight: '10px', backgroundColor: 'white'}}/>
          </div> */}

          <div>
              <p id='error' style={{color:"red", marginBottom: '5px'}}></p>
          </div>

          <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center'}}>   
            <Link to={{pathname:"/instructions"}}>     
              <button style={{cursor: 'grab', width: '150px', height: '35px', padding: '5px', border: 'none', borderRadius: '10px', marginLeft: '20px', backgroundColor: 'black', color: 'white'}} variant="contained">SUBMIT</button>
            </Link>
            </div>

        </div>
      </div>

    )
}

export default Registration
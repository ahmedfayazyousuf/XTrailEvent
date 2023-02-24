import { Link } from "react-router-dom";
import xtrail from '../Z_Styles/xtrail.png'
import nislogo from '../Z_Styles/nislogo.png'

const  Instruction = () =>{
return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height:'100vh'}}>

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height:'100%'}}>

            <img id='head' style={{width: '150px'}} src={nislogo} alt="Nissan Laptop Cover"/>

            <h1 style={{fontWeight:'1000', fontSize: '30px', marginTop: '5px', marginBottom: '14px'}}>INSTRUCTIONS</h1>

            <div style={{maxWidth: '700px', minWidth: '250px', backgroundColor: 'white', opacity: '0.7', borderRadius: '20px', padding: '20px', margin: '20px', marginTop: '0'}}>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          
            <Link to={{pathname:"/qrscan"}}>
                <button type="submit" style={{width:"180px", borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}}>START</button>
            </Link>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%'}}>
                <img style={{minWidth: '100px', maxWidth: '250px', margin: '20px'}} src={xtrail} alt="tick"/>
            </div>
        
        </div> 

        

    </div>
)
}

export default Instruction
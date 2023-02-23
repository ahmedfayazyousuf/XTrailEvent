import Tick from './tickicon.png'
const Success = () =>{

    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100vw', height:'100%'}}>
          
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height:'50vh'}}>
          <img src= {Tick} alt="Logo" style={{width: '140px', marginTop: '20px', marginRight: '20px'}}/>
          </div>

          <div style={{height: '50vh', width: '100vw',marginTop:"40px"}}>
            <h1 style={{color: 'white', marginBottom:"-10px"}}>Upload Successful!</h1>
            <h1 style={{color: 'white', margin: '1px', padding: '1px'}}>Thank You!</h1>
            <div style={{marginTop:"40px"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fgetreadywhite.png?alt=media&token=e12d79b3-89f3-4550-971d-b5cd38152986" alt="Logo" style={{width: '20vh', marginTop: '5px', marginBottom: '10px'}}/>
            </div>
          </div>     

       
          
        </div>
    )
}

export default Success
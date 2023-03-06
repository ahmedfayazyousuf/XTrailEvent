import nislogo from '../Z_Styles/Xtrail Expeditiion.png'
import nislogo2 from '../Z_Styles/Nissan Logo.png'
import rostawami from '../Z_Styles/AWR Logo.png'
import photos from '../Z_Styles/Photos.png'

const  UploadImage = () =>{

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


        <div style={{display:"flex", flexDirection:"column", width:"100vw", justifyContent:"center", alignItems:"center", marginTop: '5vh'}}>

            <div style={{display: 'flex', flexDirection: 'column', width: '70%', gap:'5px', alignItems: 'center', justifyContent:'center'}}>
            
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img id='head' style={{width: '270px'}} src={nislogo} alt="Nissan Laptop Cover"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '5px'}}>
                    <img id='head' style={{width: '180px', textAlign: 'right', marginRight: '10px'}} src={photos} alt="Nissan Laptop Cover"/>
                </div>

                <p style={{color: 'black', fontSize: '22px', fontWeight: '0', marginBottom: '5px', marginTop: '-15px'}}>Please upload any images taken on your expedition</p>

            
                <button type="submit" style={{maxWidth: '700px', minWidth: '250px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab', borderRadius: '30px', marginBottom: '10px'}}>Choose Files</button>

                <button type="submit" style={{maxWidth: '700px', minWidth: '250px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab', borderRadius: '30px', marginBottom: '100px'}}>Upload</button>

        
        </div> 
    </div>
    </>
)
}

export default UploadImage
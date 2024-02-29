import Webcam from 'react-webcam';
import { useRef ,useState,useCallback} from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ClearIcon from '@mui/icons-material/Clear';
import zIndex from '@mui/material/styles/zIndex';
import './setimage.css'


function Webcamera(props) {

const webcamRef = useRef(null);
const [imgSrc, setImgSrc] = useState(null);

const capture = useCallback(() => {
  const imageSrc = webcamRef.current.getScreenshot();
  setImgSrc(imageSrc);
  console.log(imageSrc)

  props.imageurl64(imageSrc)

}, [webcamRef, setImgSrc]);

// const videoConstraints = {
//   facingMode: "user"
// };
return (
  <>

<div style={{display:"flex",justifyContent:"space-between",padding:"10px 0px"}}>
  <span id='CameraAlt' style={{border:'2px solid black',height:70,width:70,position:'absolute', top:'390px',left:'45%',borderRadius:'50%'}}>
  <CameraAltIcon id='CameraAltIcon'onClick={capture} style={{cursor:"pointer",position:'absolute',right:13,border:'0px solid black',top:13,height:'40px',width:'40px',borderRadius:'50%'}}/>
  </span>
                          
                            <ClearIcon onClick={props.closecameramodal} style={{cursor:"pointer",position:'absolute',left:'92%', top:'10px', zIndex:1}} id='closecamera'/>
                            </div>
 
  
    <Webcam     
      audio={false}
      style={{position:'relative'}}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      height={340}
      screenshotQuality={1}
      imageSmoothing={false}
      width={'100%'}
      // videoConstraints={videoConstraints}
      // videoConstraints={videoConstraints}
      mirrored={true}
      id='webcam'
    />
  

    {/* <button onClick={capture}>Capture photo</button> */}
    {/* {imgSrc && (
      <img
        src={imgSrc}
      />
    )} */}
  </>
);
};


export default Webcamera;

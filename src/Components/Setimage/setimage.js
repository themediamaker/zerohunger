import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./setimage.css";
// import Profile from '../../../public/images/userProfile.png'
import Cropper from "react-easy-crop";
import CloseIcon from "@mui/icons-material/Close";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import CropIcon from "@mui/icons-material/Crop";
import Compress from "browser-image-compression";
import getCroppedImg from "./GetcroppedImage";
import AttachmentIcon from '@mui/icons-material/Attachment';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Webcamera from './webcam'
import { IconButton } from "@mui/material";
// import 'bootstrap/dist/css/bootstrap.min.css';



// import { useContext } from "react";
// import { imageContext } from "@/src/Context/imageContext/Index";


// const getImagedata = (data)=>{
//   const {imagedata,setimagedata} =useContext(imageContext)
//   return  setimagedata(prevState => ({
//     ...prevState,
//     userImageBase64: data
//   }));
// }


export default class Setimage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = {
      // getPhotoUrl: `${sessionStorage.getItem(
      //   "Apipathurl"
      // )}${sessionStorage.getItem("apiname")}`,
      userImageBase64: "",
      isImageUploaded: false,
      isImageSelected: false,
     
      setForCropImage: null,
      openCropImageModal: false,
      crop: { x: 0, y: 0 },
      zoom: 1,
      rotation: 0,
     
      ImageName: "",
      ImageFileArr: [],
      ImageOriginalArr: [],
      isloadcomplete: false,
     iscameraopen:false,
     camerashow:false

    };

    

  

    // store image
    this.storeImage = this.storeImage.bind(this);
    this.Closecroppermodal = this.Closecroppermodal.bind(this);
    // this.getImagedata = this.getImagedata.bind(this)


  }

  // storeimage
  // componentDidMount(){
  //   this.setState({camerashow:true,iscameraopen:true})
  // }
  handleAttachmentClick = () => {
    if (this.fileInputRef.current) {
      this.fileInputRef.current.click();
    }
  };
  storeImage(e) {
    console.log(e);
    e.preventDefault();
    this.setState({ userImageBase64: "", isImageUploaded: false });
    //  alert('hello')
    if (e.target.files && e.target.files.length > 0) {
      this.setState({ isImageSelected: false });
    //   console.log(e.target.files);
      var fileArray = e.target.files[0];
      var fileName = e.target.files[0].name;
      this.setState({ ImageName: fileName, ImageOriginalArr: fileArray });
      var fileType = e.target.files[0].type;
      var fileSize = e.target.files[0].size;
      var fileExt = fileName.substring(
        fileName.lastIndexOf(".") + 1,
        fileName.length
      );
      if (Number(fileSize) < 5242880) {
        if (fileExt == "png" || fileExt == "jpg" || fileExt == "jpeg") {
          const options = {
            maxSizeMB: 1,
            useWebWorker: true,
          };
          this.setState({ openCropImageModal: true });
          Compress(fileArray, options).then((compressedBlob) => {
            // console.log("compressedBlob", compressedBlob);
            // console.log(URL.createObjectURL(compressedBlob));
            compressedBlob.lastModifiedDate = new Date();
            // Conver the blob to file
            const convertedBlobFile = new File(
              [compressedBlob],
              fileArray.name,
              {
                type: fileArray.type,
                lastModified: Date.now(),
              }
            );
            fileArray = convertedBlobFile;
            // console.log("convertedBlobFile", convertedBlobFile);
            var fileReader = new FileReader();
            var scope = this;
            fileReader.onload = function (fileLoadedEvent) {
              var srcData = fileLoadedEvent.target.result; // <--- data: base64
              scope.setState({ userImageBase64:srcData});
            };
            fileReader.readAsDataURL(fileArray);
            this.setState({ isImageUploaded: true });
          });
        } else {
          this.setState({ userImageBase64: "" });
          alert("PNG,JPG,JPEG images are supported only");
        }
      } else {
        alert("File size must be less than 5MB");
      }
    }
  }

  Closecroppermodal() {
    this.setState({ openCropImageModal: false });
  }


  onCropComplete(croppedArea, croppedAreaPixels) {
    this.setState({ croppedAreaPixels: croppedAreaPixels });
    // console.log(croppedArea, croppedAreaPixels);
  }
  onCropImage = async () => {
    
      try {
        const croppedImage = await getCroppedImg(
          this.state.userImageBase64,
          this.state.croppedAreaPixels,
          this.state.rotation
        );

        // console.log("donee", { croppedImage });
        var bloburl = URL.createObjectURL(croppedImage);
        var scope = this;
        var tempfilename="userprofile.png";
        function blobToFile(bloburl) {
          bloburl.lastModified = new Date();
          bloburl.name = scope.state.ImageName;

        
          return new File([bloburl], `${scope.state.ImageName ==""?tempfilename : scope.state.ImageName}`,{
            type: croppedImage.type,
          });
        }
        // console.log(bloburl);
        var fileArr = blobToFile(croppedImage);
        this.setState({
          setForCropImage: bloburl,
          openCropImageModal: false,
          ImageFileArr: fileArr,
          isImageSelected: true,
        });
        console.log(fileArr);
        this.props.callback(fileArr);

        // console.log(fileArr instanceof File);
        // console.log(fileArr instanceof Blob);
      } catch (e) {
        console.error(e);
      }
    
  };

 
  storecameraImage(){
      console.log("camera open")
      this.setState({camerashow:true,iscameraopen:true})
  }

  camerahandleClose(){
      this.setState({camerashow:false,iscameraopen:false})
  }

  imageurl64(e){
    console.log(e)
    this.setState({userImageBase64:e,isImageUploaded:true,openCropImageModal:true,iscameraopen:false,camerashow:false})
    // getImagedata(this.state.userImageBase64)
    // setimagedata(prevState => ({
    //   ...prevState,
    //   userImageBase64: newImageBase64
    // }));

  }
  // componentDidMount(){
  //   getImagedata(this.state.userImageBase64)
  // }
  
  render() {
 console.log(this.state.setForCropImage)

    return (
      <>

            <div className="container">
          
              
                    <div className="row">
                     {/*  attachment start*/}
                     
                          <div style={{display:"flex"}}>
                            {this.props.attachmentbutton?
                              <div id="attachment">
                              <label htmlFor="files" >
                            <IconButton>

                                <AttachmentIcon //onClick={this.handleAttachmentClick()}
                                />
                            </IconButton>

                              </label>
                              <input
                                type="file"
                                name="file"
                                id="files"
                                style={{background:'red'}}
                                hidden
                                onChange={(e) => this.storeImage(e)}
                                onClick={(e) => {
                                  e.target.value = "";
                                }}
                              />
                              </div>
                            :""}
                        
                        {this.props.camerabutton?

                            <div id="camera" style={{}}>
                              <label htmlFor="camera" style={{}}>
                              <IconButton onClick={(e) => this.storecameraImage(e)}>
                            <CameraAltIcon />
                            </IconButton>
                            </label>
                            </div>
                            :""}
                          </div>
                       
                        {/* attachment end */}


                        {/* camara open */}
                 
                 

                       
                         {/* camara open end */}


                        <div>
                        <Modal
                          fullscreen={true}
                          id="documentmodal"
                          animation={true}
                          show={this.state.openCropImageModal}
                          onHide={() => this.Closecroppermodal()}
                        >
                          {" "}
                          <Modal.Header>
                           
                            <div className="actionBtns">
                              <IconButton onClick={() => this.onCropImage()}>
                                <CropIcon/>
                              </IconButton>
                              <IconButton
                                onClick={() =>
                                  this.setState({
                                    rotation: this.state.rotation - 90,
                                  })
                                }
                              >
                                <RotateLeftIcon />
                              </IconButton>
                              <IconButton
                                onClick={() =>
                                  this.setState({
                                    rotation:this.state.rotation + 90,
                                  })
                                }
                              >
                                <RotateRightIcon />
                              </IconButton>
                              <IconButton>
                                <CloseIcon
                                  onClick={() =>
                                    this.setState({ openCropImageModal:false})
                                  }
                                />
                              </IconButton>
                            </div>
                          </Modal.Header>
                          <Modal.Body>
                            {this.state.isImageUploaded ? (
                              <Cropper
                                image={this.state.userImageBase64}
                                crop={this.state.crop}
                                zoom={this.state.zoom}
                                aspect={1 / 1}
                                rotation={this.state.rotation}
                                onCropChange={(crop) =>
                                  this.setState({ crop: crop })
                                }
                                onCropComplete={(
                                  croppedArea,
                                  croppedAreaPixels
                                ) =>
                                  this.onCropComplete(
                                    croppedArea,
                                    croppedAreaPixels
                                  )
                                }
                                onZoomChange={(zoom) =>
                                  this.setState({ zoom: zoom })
                                }
                              />
                            ) : (
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                Uploading...
                              </div>
                            )}
                          </Modal.Body>
                        </Modal>
                        </div>
                     

                     {/* camera modal */}
                     <div>
                     <Modal 
                    show={this.state.camerashow} style={{textAlign:'center'}} id='camerashow' >
        
        <Modal.Body id="camerabody">
{/* <h1>hello</h1> */}
    {
        this.state.iscameraopen?<Webcamera imageurl64={(e)=>this.imageurl64(e)} closecameramodal={this.camerahandleClose.bind(this)} style={{border:'10px solid black'}}/>:""
    }
</Modal.Body>
        
      </Modal>
                     </div>




{
this.props.showphoto?
  <div className="Adduserpic">
    <div className="Adduserpicinnerdiv">
                              <img
                                src={
                                  this.state.setForCropImage == null
                                    ? '/images/userProfile.png'
                                    // ? Profile
                                    : this.state.setForCropImage
                                }
                                alt="Logo"
                              />
                            </div>
                            </div>
:""
                              }

            </div>
          </div>
       
      </>
    );
  }
}

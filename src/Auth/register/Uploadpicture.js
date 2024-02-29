import React, { useEffect, useState } from 'react';
// import ImageUploading from 'react-images-uploading';
import { FaPen, FaTrash } from 'react-icons/fa';// Import icons from Font Awesome
import { makeRequest } from '@/src/Utils/Api';
import { useprofileupload } from '../../Utils/Allapiurl'
import { getuserid } from '@/src/Helper/usergetid';
// import React from 'react';
import Webcam from 'react-webcam';
import ImageUploading from 'react-images-uploading';
import SetImage from '../../Components/Setimage/setimage'
import { imageContext } from '@/src/Context/imageContext/Index';
import { useContext } from 'react';
import { decryptData } from '../../Utils/SecretData';

export function Uploadpicture({ next }) {

  const { imagedata, setImagedata } = useContext(imageContext)
  console.log(imagedata)
  const [images, setImages] = React.useState([]);
  const [error, seterror] = useState('')
  const maxNumber = 69;

  useEffect(() => {
    const getdata = getuserid()
    setImagedata(prevState => ({
      ...prevState,
      userid: getdata.userid
    }));
  }, [])
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit

    console.log(imageList, addUpdateIndex);
    setImages(imageList, addUpdateIndex);
    setImagedata(prevState => {
      const existingImageNames = (prevState.galleryImages || []).flat().map(image => image.name);
      const newImageNames = imageList.map(data => data['file'].name).filter(name => !existingImageNames.includes(name));
      const updatedGalleryImages = [...(prevState.galleryImages || []), newImageNames];
      return {
        ...prevState,
        galleryImages: updatedGalleryImages
      };
    });
  };


  const handleupload = () => {
    console.log(imagedata.userImage)
    if (imagedata.userImage == '' || imagedata.userImage === null) {
      seterror('Please Select Image')
    }
    else {
      seterror('')
      makeRequest('post', useprofileupload, { data: imagedata }).then((data) => {
        console.log(decryptData(data))
      })
      next()
    }
  }
  console.log(images)
  const profiledata = (e) => {
    setImagedata((prevState) => ({
      ...prevState,
      userImage: e.name
    }));
  }
  return (
    <div>
      <div>
        <h3>Create Profile Photo</h3>
        <SetImage callback={(e) => { profiledata(e) }} attachmentbutton={true} camerabutton={true} showphoto={true} /><br />
      </div>
      <br />
      {/* <CameraCapture/> */}

      {/* {WebcamCapture()} */}
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">

            {/* <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
         
              Click or Drop here
            </button> */}
            <div class="border border-dashed border-gray-500 relative" style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}>
              <span class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" />
              <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                <h4>
                  Click
                  <br />
                </h4>
                <p class="">Upload More Images</p>
              </div>
            </div>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>
            
              Remove all images
            </button> */}
            <span className='text-red-800'>{error}</span>
            {imageList.map((image, index) => (
              <div key={index} className="image-item flex items-center gap-4 p-4 hover:bg-gray-100 transition duration-300">
                <img src={image['data_url']} alt="" className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-grow"></div>
                <div className="image-item__btn-wrapper flex items-center gap-2">
                  <button onClick={() => onImageUpdate(index)} className="text-blue-500 hover:text-blue-700 transition duration-300">
                    <FaPen />
                  </button>
                  <button onClick={() => onImageRemove(index)} className="text-red-500 hover:text-red-700 transition duration-300">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

          </div>
        )}

      </ImageUploading>
      <button className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500' onClick={() => { handleupload() }}>Next</button>
    </div>
  );
}

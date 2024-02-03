import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        size="55%"
      >
        <form className="infoForm">
          <h3 style={{ color: "var(--orange" }}>Your Info</h3>

          <div>
            <input
              // value={formData.firstname}
              // onChange={handleChange}
              type="text"
              placeholder="First Name"
              name="firstname"
              className="infoInput"
            />
            <input
              // value={formData.lastname}
              // onChange={handleChange}
              type="text"
              placeholder="Last Name"
              name="lastname"
              className="infoInput"
            />
          </div>

          <div>
            <input
              // value={formData.worksAt}
              // onChange={handleChange}
              type="text"
              placeholder="Works at"
              name="worksAt"
              className="infoInput"
            />
          </div>

          <div>
            <input
              // value={formData.livesIn}
              // onChange={handleChange}
              type="text"
              placeholder="Lives in"
              name="livesIn"
              className="infoInput"
            />
            <input
              // value={formData.country}
              // onChange={handleChange}
              type="text"
              placeholder="Country"
              name="country"
              className="infoInput"
            />
          </div>

          <div>
            <input
              // value={formData.relationship}
              // onChange={handleChange}
              type="text"
              className="infoInput"
              placeholder="Relationship status"
              name="relationship"
            />
          </div>

          <div>
            Profile image
            <input type="file" name="profileImage" />
            Cover image
            <input type="file" name="coverImage" />
          </div>

          <button className="button infoButton" type="submit">
            Update
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ProfileModal;

// import { useDisclosure } from '@mantine/hooks';
// import { Modal, Button } from '@mantine/core';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
// import { updateUser } from '../../actions/userAction';
// import { uploadImage } from '../../actions/uploadActions';

// function ProfileModal({modalOpened, setModalOpened, data}) {
//   const [opened, { open, close }] = useDisclosure(false);

//   const {password, ...other} = data;
//   const[formData, setFormData] = useState(other);
//   const [profileImage, setProfileImage] = useState(null);
//   const [coverImage, setCoverImage] = useState(null);
//   const dispatch = useDispatch();
//   const params = useParams();
//   const {user} = useSelector((state)=>state.authReducer.authData)

//   const handleChange = (e)=>{
//     setFormData( {...formData, [e.target.name]:e.target.value})
//   }

//   const handleImageChange = (e)=>{
//     if(e.target.files && e.target.files[0]){
//       let img = e.target.files[0];
//       e.target.name === "profileImage"
//         ? setProfileImage(img)
//         : setCoverImage(img);
//     }
//   }

//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     let userData = formData;

//     if(profileImage){
//       const data = new FormData();
//       const fileName = Date.now()+profileImage.name;
//       data.append("name", fileName);
//       data.append("file",profileImage);
//       userData.profilePicture = fileName;

//       try{
//         dispatch(uploadImage(data))
//       }catch(error){
//         console.log(error)
//       }
//     }

//     if(coverImage){
//       const data = new FormData();
//       const fileName = Date.now()+coverImage.name;
//       data.append("name", fileName);
//       data.append("file",profileImage);
//       userData.coverPicture = fileName;

//       try{
//         dispatch(uploadImage(data))
//       }catch(error){
//         console.log(error)
//       }
//     }

//     dispatch(updateUser(params.id, userData));
//     setModalOpened(false)
//   }

//   return (
//     <>
//       <Modal
//         opened={modalOpened}
//         onClose={()=>setModalOpened(false)}
//         // title="Authentication"
//         size= '50 %'
//         overlayProps={{
//           backgroundOpacity: 0.55,
//           blur: 3,
//         }}
//       >
//         {/* Modal content */}
//         <form action="" className='infoForm'>
//             <h3>Your Info</h3>
//             <div>
//                 <input type="text" className="infoInput" name="firstname" placeholder='First Name'onChange={handleChange} value={formData.firstname}/>
//                 <input type="text" className="infoInput" name="lastname" placeholder='Last Name' onChange={handleChange} value={formData.lastname}/>

//             </div>
//             <div>
//                 <input type="text" className="infoInput" name="worksAt" placeholder='Works at'onChange={handleChange} value={formData.worksAt}/>
//             </div>
//             <div>
//                 <input type="text" className="infoInput" name="livesIn" placeholder='Lives in' onChange={handleChange} value={formData.livesIn} />
//                 <input type="text" className="infoInput" name="country" placeholder='Country' onChange={handleChange} value={formData.country}/>

//             </div>
//             <div>
//                 <input type="text" className="infoInput" name="relationship" placeholder='Relationship Status' onChange={handleChange} value={formData.relationship} />
//             </div>

//             <div>
//                 Profile Image
//                 <input type="file" name='profileImage' onChange={handleImageChange} />
//                 Cover Image
//                 <input type="file" name='coverImage' onChange={handleImageChange}/>
//             </div>

//             <button className="button infoButton" onClick={handleSubmit}>Update</button>
//         </form>
//       </Modal>

//       {/* <Button onClick={open}>Open modal</Button> */}
//     </>
//   );
// }

// export default ProfileModal;

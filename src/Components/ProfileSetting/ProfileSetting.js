"use client"

import React, { useState } from 'react';
import EditEmail from "../ProfileSetting/EditEmail"
import ChangePassword from "../ProfileSetting/ChangePassword"
import AlertUpadte from "../ProfileSetting/AlertUpadte"
import CallPrefrence from "../ProfileSetting/CallPrefrence"
import Privacy from "../ProfileSetting/Privacy"
import Setting from "../ProfileSetting/Setting"
import DeactiveProfile from "../ProfileSetting/DeactiveProfile"
import DeleteProfile from "../ProfileSetting/DeleteProfile"
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SecurityIcon from '@mui/icons-material/Security';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BlockIcon from '@mui/icons-material/Block';
import LogoutIcon from '@mui/icons-material/Logout';
const ProfileSetting = () => {
	
		const [showEditEmail, setShowEditEmail] = useState(true);
		const [showChangePassword, setShowChangePassword] = useState(false);
		const [showAlertUpdates, setShowAlertUpdates] = useState(false);
		const [showCallPreferences, setShowCallPreferences] = useState(false);
		const [showPrivacy, setShowPrivacy] = useState(false);
		const [showDeactivateProfile, setShowDeactivateProfile] = useState(false);
		const [showDeeleteProfile, setShowDeeleteProfile] = useState(false);
		const [setting,setSetting] = useState(false)

		const toggleEditEmail = (e) => {

			setShowEditEmail(!showEditEmail);
			setShowChangePassword(false); 
			setShowAlertUpdates(false); 
			setShowCallPreferences(false); 
			setShowPrivacy(false);
			setShowDeactivateProfile(false)
			setShowDeeleteProfile(false)
			setSetting(false)
		};
	
		const toggleChangePassword = () => {
			setShowChangePassword(!showChangePassword);
			setShowEditEmail(false); 
			setShowAlertUpdates(false); 
			setShowCallPreferences(false); 
			setShowPrivacy(false);
			setShowDeactivateProfile(false)
			setShowDeeleteProfile(false)
			setSetting(false)
		};
	
		const toggleAlertUpdates = () => {
			setShowAlertUpdates(!showAlertUpdates);
			setShowEditEmail(false); 
			setShowChangePassword(false); 
			setShowCallPreferences(false); 
			setShowPrivacy(false);
			setShowDeactivateProfile(false)
			setShowDeeleteProfile(false)
			setSetting(false)
		};
	
		const toggleCallPreferences = () => {
			setShowCallPreferences(!showCallPreferences);
			setShowEditEmail(false); 
			setShowChangePassword(false); 
			setShowAlertUpdates(false); 
			setShowPrivacy(false);
			setShowDeactivateProfile(false)
			setShowDeeleteProfile(false)
			setSetting(false)
		};

		const togglePrivacy = () => {
			setShowPrivacy(!showPrivacy);
			setShowEditEmail(false);
			setShowChangePassword(false);
			setShowAlertUpdates(false);
			setShowCallPreferences(false);
			setShowDeactivateProfile(false)
			setShowDeeleteProfile(false)
			setSetting(false)
		};



		const toggleDeactivateProfile = () => {
			setShowDeactivateProfile(!showDeactivateProfile);
			setShowEditEmail(false);
			setShowChangePassword(false);
			setShowAlertUpdates(false);
			setShowCallPreferences(false);
			setShowPrivacy(false);
			setShowDeeleteProfile(false)
			setSetting(false)
		};
	

const toggleDeleteProfile =()=>{
			setShowEditEmail(false);
			setShowChangePassword(false);
			setShowAlertUpdates(false);
			setShowCallPreferences(false);
			setShowPrivacy(false);
			setShowDeactivateProfile(false)
			setSetting(false)
			setShowDeeleteProfile(!showDeeleteProfile)
}

const toggleSettingsProfile= () =>{
	setSetting(!setting)
	setShowEditEmail(false);
			setShowChangePassword(false);
			setShowAlertUpdates(false);
			setShowCallPreferences(false);
			setShowPrivacy(false);
			setShowDeactivateProfile(false)
			setShowDeeleteProfile(false)
}



  return (
    <>


<div className="w-full flex ">

	<aside className="w-64 "  aria-label="Sidebar">
	<span class="font-bold">Profile Settings</span>
		<div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
		
			<ul className="space-y-2">
				<li>
				<div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" >
						<EmailIcon/>
						
						<span onClick={toggleEditEmail} className="ml-3 cursor-pointer">Edit e-mail Address</span>
						
					</div>
				</li>
				<li>
					<button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
					<LockIcon/>
				  <span onClick={toggleChangePassword} className="ml-3 cursor-pointer">Change Password</span>
                 
            </button>
				
				</li>
				<li>
					<div
						className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<AddAlertIcon/>
						<span onClick={toggleAlertUpdates} className="ml-3 cursor-pointer">Alert & Updates</span>

					</div>
				</li>
				<li>
					<div
						className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
					<SmartphoneIcon/>
						<span onClick={toggleCallPreferences} className="ml-3 cursor-pointer">Call Preferences</span>

					</div>
				</li>
				<li>
					<div
						className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<SecurityIcon/>
						<span onClick={togglePrivacy} className="ml-3 cursor-pointer">Privacy</span>
					</div>
				</li>
				<li>
					<div
						className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
								clip-rule="evenodd"></path>
						</svg>
						<span   onClick={toggleSettingsProfile}  className="ml-3 cursor-pointer">Profile Settings</span>
					</div>
				</li>
				<li>
					<div
						className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
								clip-rule="evenodd"></path>
						</svg>
						<span onClick={toggleDeactivateProfile} className="ml-3 cursor-pointer">Deactivate Profile</span>
					</div>
				</li>
				<li>
					<div
						className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
					<DeleteForeverIcon/>
						<span  onClick={toggleDeleteProfile} className="ml-3 cursor-pointer">Delete Profile</span>
					</div>
				</li>


                <li>
					<div
						className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
								clip-rule="evenodd"></path>
						</svg>
						<span  className="ml-3 cursor-pointer">Ignored Profiles</span>
					</div>
				</li>
                <li>
					<div
						className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<BlockIcon/>
						<span  className="ml-3 cursor-pointer">Blocked Profiles</span>
					</div>
				</li>
                <li>
					<div
						className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						
						<LogoutIcon/>
						<span  className="ml-3 cursor-pointer">Logout</span>
					</div>
				</li>
			</ul>

			

		</div>


	</aside>

	{showEditEmail && (
                    <div className="bg-gray-100 dark:bg-gray-800 h-full w-full p-4 shadow-md ml-8">
                        <EditEmail />
                    </div>
                )}
                {showChangePassword && (
                    <div className="bg-gray-100 dark:bg-gray-800 h-full w-full p-4 shadow-md ml-8">
                        <ChangePassword />
                    </div>
                )}

{showAlertUpdates && (
                    <div className="bg-gray-100 dark:bg-gray-800 h-full w-full p-4 shadow-md ml-8">
                        <AlertUpadte />
                    </div>
                )}

{showCallPreferences && (
                    <div className="bg-gray-100 dark:bg-gray-800 h-full w-full p-4 shadow-md ml-8">
                        <CallPrefrence />
                    </div>
                )}

{showPrivacy && (
                    <div className="bg-gray-100 dark:bg-gray-800 h-full w-full p-4 shadow-md ml-8">
                        <Privacy />
                    </div>
                )}
				 {showDeactivateProfile && (
                    <div className="bg-gray-100 dark:bg-gray-800 h-full w-full p-4 shadow-md ml-8">
                        <DeactiveProfile />
                    </div>
                )}



{showDeeleteProfile && (
                    <div className="bg-gray-100 dark:bg-gray-800 h-full w-full p-4 shadow-md ml-8">
                        <DeleteProfile />
                    </div>
                )}



{setting && (
                    <div className="bg-gray-100 dark:bg-gray-800 h-full w-full p-4 shadow-md ml-8">
                        <Setting />
                    </div>
                )}

 
</div>


    </>
  )
}

export default ProfileSetting
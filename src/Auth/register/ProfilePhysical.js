import React from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import { getuserid } from '@/src/Helper/usergetid'
import { useContext } from 'react'
import {DashboardContext} from '../../Context/dashboard/index'
import { useEffect } from 'react'
const ProfilePhysical = ({profile,pre}) => {
  const { userdata, isuserloading, isuserprofileloading, userprofiledata } = useContext(DashboardContext)
  const userdetails = getuserid()
  const apiData = isuserprofileloading && JSON.parse(userprofiledata).userdata[0]
  // console.log(apiData)
  const initialFormValues = {
    userid: userdetails.userid || '',
    meritalStatus: '',
    caste: '',
    dosh: '',
    willingToMarry: '',
    countryLivingIn: '',
    stateLivingIn: '',
    cityLivingIn: '',

  };
    const formik = useFormik({
        initialValues:initialFormValues,
        onSubmit: (values) => {
            values.userid = userdetails.userid
            console.log(values)
            profile(values)
          console.log(values);
        },


        validate: (values) => {
            const errors = {};
      
      
            if (!values.meritalStatus) {
              errors.meritalStatus = 'Required';
            }
            if (!values.caste) {
              errors.caste = 'Required';
            }
            if (!values.dosh) {
              errors.dosh = "required";
            } if (!values.willingToMarry) {
              errors.willingToMarry = "required"
            } if (!values.countryLivingIn) {
              errors.countryLivingIn = "required";
            } if (!values.stateLivingIn) {
              errors.stateLivingIn = "required"
            } if (!values.cityLivingIn) {
              errors.cityLivingIn = "required"
            } 
      
            return errors;
          },


      });
      useEffect(() => {
        if (isuserprofileloading) {
          const mergedData = {
            ...initialFormValues,
            ...apiData,
          };
          formik.setValues(mergedData);
          
        }
      }, [isuserprofileloading]);

    return (
        <div>


            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">





                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={formik.handleSubmit} >
                        <div className="flex space-x-4">
                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    MERITAL STATUS
                                </label>
                                <div className="relative mt-2">
                                    <select
                                       id="meritalStatus"
                                       name="meritalStatus"
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.meritalStatus}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="text-red-500 text-sm mt-1">
              {formik.touched.meritalStatus && formik.errors.meritalStatus}
            </div>
                            </div>

                           
                        </div>

                        
                       
                        <div className="flex space-x-4">
                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    CASTE
                                </label>
                                <div className="relative mt-2">
                                    <select
                                             id="caste"
                                             name="caste"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.caste}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="JainOther">Jain Other</option>
                                        <option value="Parsi">Parsi</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="text-red-500 text-sm mt-1">
              {formik.touched.caste && formik.errors.caste}
            </div>
                            </div>

                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    DOSH (optional)
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="dosh"
                                        name="dosh"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.dosh}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">Yes</option>
                                        <option value="Don't Know">Don't Know</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="text-red-500 text-sm mt-1">
              {formik.touched.dosh && formik.errors.dosh}
            </div>
                            </div>
                        </div>

                 
                        <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Willing to marry from other communities
              </label>
              <div className="mt-2 flex items-center">
                <input
                  id="gender-male"
                  name="willingToMarry"
                  type="radio"
                  value="yes"
                  checked={formik.values.willingToMarry === 'yes'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label htmlFor="gender-male" className="ml-2 text-sm text-gray-700">Yes</label>
                <input
                  id="gender-female"
                  name="willingToMarry"
                  type="radio"
                  value="no"
                  checked={formik.values.willingToMarry === 'no'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-radio h-4 w-4 ml-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label htmlFor="gender-female" className="ml-2 text-sm text-gray-700">No</label>
              </div>
            
            </div>
            <div className="text-red-500 text-sm mt-1">
              {formik.touched.willingToMarry && formik.errors.willingToMarry}
            </div>

                        <div className="flex space-x-4">
                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    COUNTRY LIVING IN
                                </label>
                                <div className="relative mt-2">
                                    <select
                                      id="countryLivingIn"
                                      name="countryLivingIn"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.countryLivingIn}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="India">India</option>
                                        <option value="U.K">U.K</option>
                                        <option value="Japan">Japan</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>

                                <div className="text-red-500 text-sm mt-1">
              {formik.touched.countryLivingIn && formik.errors.countryLivingIn}
            </div>
                            </div>

                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    STATE LIVING IN
                                </label>
                                <div className="relative mt-2">
                                    <select
                                          id="stateLivingIn"
                                          name="stateLivingIn"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          value={formik.values.stateLivingIn}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Delhi">Delhi</option>
                                        {/* <option value="user3"></option> */}
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="text-red-500 text-sm mt-1">
              {formik.touched.stateLivingIn && formik.errors.stateLivingIn}
            </div>
                            </div>
                        </div>


                        <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    CITY LIVING IN
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="cityLivingIn"
                                          name="cityLivingIn"
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          value={formik.values.cityLivingIn}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="Faridabad">Faridabad</option>
                                        <option value="Sonipat">Sonipat</option>
                                        <option value="karnal">karnal</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className="text-red-500 text-sm mt-1">
              {formik.touched.cityLivingIn && formik.errors.cityLivingIn}
            </div>
                            </div>


                            <div className='mt-4 gap-3 flex justify-center items-center'>
                <button   className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500 ' onClick={()=>{pre()}}>Previous</button>
                <button  type="submit" className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
              </div>



                    </form>




                </div>


            </div>







        </div>
    )
}

export default ProfilePhysical
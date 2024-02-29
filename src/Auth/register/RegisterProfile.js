import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useContext } from 'react';
import { DashboardContext } from '@/src/Context/dashboard';
import { useState } from 'react';
import Selectlist from '../../Components/SelectList/SelectInput'
import { getuserid } from '@/src/Helper/usergetid';
// import { DatePicker, Datetimepicker } from '../../Components/Calendar/Calender'
import { DatePicker, Stack } from 'rsuite'
import 'rsuite/DatePicker/styles/index.css';
import { getdateconvert } from '@/src/Elements/getdateconverter';
import { decryptData } from '@/src/Utils/SecretData';

const RegisterProfile = ({ handlesumbit, pre }) => {

  const { userdata, isuserloading, isuserprofileloading, userprofiledata } = useContext(DashboardContext)
  const logindata = isuserloading && JSON.parse(decryptData(userdata.data))
  console.log(logindata)
  const [selectlist, setselectlist] = useState(logindata?.createprofilefor)
  const [dateofbirth, Setdateofbirth] = useState('')
  const [isdatcheck, setdatacheck] = useState(false)
console.log(decryptData(userdata.data))
  const apiData = isuserprofileloading && JSON.parse(userprofiledata).userdata[0]
  // console.log(apiData)

  const formattedDate = getdateconvert(apiData?.dateofBirth)
  const userdetail = getuserid()
  const initialFormValues = {
    userid: userdetail.userid || '',
    assignedTo:'',
    name: logindata?.username || '',
    gender: logindata?.gender,
    religion: '',
    motherTongue: '',
    dateofBirth: ''
  };


  // console.log(dateofbirth)
  const formik = useFormik({
    initialValues: initialFormValues,

    onSubmit: (values) => {
      console.log(values)
      values.userid = userdetail.userid
      values.assignedTo = selectlist
      values.dateofBirth = dateofbirth
      console.log(values)
      handlesumbit(values);
    },


    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.gender) {
        errors.gender = "required";
      }
      if (!values.religion) {
        errors.religion = "required"
      } if (!values.motherTongue) {
        errors.motherTongue = "required"
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
      setselectlist(isuserprofileloading ? apiData?.assignedTo : 'self')
    }
  }, [isuserprofileloading]);
  const disableDate = (date) => {
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    return date > eighteenYearsAgo;
  };
  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit} >
            <div>
              <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                PROFILE CREATED FOR
              </label>
              <div className="relative mt-2">
                <Selectlist
                  defultvalue={selectlist}
                  headlabel={'Create Profile For'}
                  options={['self', 'Son', 'Daughter', 'Brother', 'Sister', 'Relative/Friend', 'Client-Marriage Bureau']}
                  name={'createprofilefor'}
                  setselectlist={setselectlist}
                  disabled={isuserloading}
                // onChange={Formik.handleChange}
                />
              </div>
            </div>

            <div className="text-red-500 text-sm mt-1">
              {formik.touched.assignedTo && formik.errors.assignedTo}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                FullName
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  type="text"
                  autoComplete="name"
                  disabled={isuserloading}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            </div>
            <div className="text-red-500 text-sm mt-1">
              {formik.touched.name && formik.errors.name}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                GENDER
              </label>
              <div className="mt-2 flex items-center">
                <input
                  id="gender-male"
                  name="gender"
                  type="radio"
                  value="male"
                  checked={formik.values.gender === 'male'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isuserloading}
                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label htmlFor="gender-male" className="ml-2 text-sm text-gray-700">Male</label>
                <input
                  id="gender-female"
                  name="gender"
                  type="radio"
                  value="female"
                  checked={formik.values.gender === 'female'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isuserloading}
                  className="form-radio h-4 w-4 ml-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label htmlFor="gender-female" className="ml-2 text-sm text-gray-700">Female</label>
              </div>
              <div className="text-red-500 text-sm mt-1">
                {formik.touched.gender && formik.errors.gender}
              </div>
            </div>


            <div className="mt-4 flex space-x-4">
              {/* Year Field */}
              <div className="flex-shrink-0">
                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                  DATE OF BIRTH
                </label>
                <Stack spacing={10} direction="column" alignItems="flex-start" cursore="pointer">
                  <DatePicker
                    format="MM/dd/yyyy"
                    id='dateofbirth'
                    name='dateofbirth'
                    disabledDate={disableDate}
                    onChange={(date) => Setdateofbirth(date)}
                    defaultValue={isuserprofileloading ? new Date(formattedDate) : ''}
                  />
                </Stack>
              </div>
            </div>


            <div>
              <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                RELIGION
              </label>
              <div className="relative mt-2">
                <select
                  id="religion"
                  name="religion"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.religion}
                  // disabled={isuserloading}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="Hindu">Hindu</option>
                  <option value="muslim">muslim</option>
                  <option value="Tamil">Tamil</option>
                  {/* Add more options as needed */}
                </select>
                <div className="text-red-500 text-sm mt-1">
                  {formik.touched.religion && formik.errors.religion}
                </div>
              </div>
            </div>

            <div>
              <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                MOTHER TONGUE
              </label>
              <div className="relative mt-2">
                <select
                  id="motherTongue"
                  name="motherTongue"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.motherTongue}
                  // disabled={isuserloading}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim-shia">Muslim-shia</option>
                  <option value="Sikh">Sikh</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="text-red-500 text-sm mt-1">
                {formik.touched.motherTongue && formik.errors.motherTongue}
              </div>
            </div>
            <div>
              <div className='mt-4 gap-3 flex justify-center items-center'>
                <button className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500 ' onClick={() => { pre() }}>Previous</button>
                <button type="submit" className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
              </div>
              {/* <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              > Next
              </button> */}
            </div>

          </form>
        </div>


      </div>







    </>
  )
}

export default RegisterProfile
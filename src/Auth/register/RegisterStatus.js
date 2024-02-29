import React from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { getuserid } from '@/src/Helper/usergetid';
import { useEffect } from 'react';
import { useContext } from 'react';
import { DashboardContext } from '../../Context/dashboard';
import { genHeightNumberRange } from '../../Elements/getheight'
import { feetToCm } from '../../Elements/getheight'
import { physicalStatus } from '../../Utils/physicalStatus'
import { educationData } from '../../Utils/educationdata'
import { professions } from '../../Utils/professions'


const RegisterStatus = ({ statusprofile, pre }) => {
    const { userdata, isuserloading, isuserprofileloading, userprofiledata } = useContext(DashboardContext)
    const apiData = isuserprofileloading && JSON.parse(userprofiledata).userdata[0];
    console.log(apiData)
    const userdetails = getuserid()
    const initialFormValues = {
        userid: userdetails.userid || '',
        height: '',
        physicalStatus: '',
        education: '',
        employedId: '',
        occupation: '',
        currency: '',
        annualIncome: '',
        familyStatus: '',
        familyType: '',
        familyValues: '',
        ancestralOrigin: '',
        message: '',
        agreeToPrivacyPolicy: true,

    };
    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema: Yup.object({
            height: Yup.string().required('Height is required'),
            physicalStatus: Yup.string().required('physicalStatus is required'),
            education: Yup.string().required('education is required'),
            employedId: Yup.string().required('employedId is required'),
            occupation: Yup.string().required('occupation is required'),
            currency: Yup.string().required('currency is required'),
            annualIncome: Yup.string().required('annualIncome is required'),
            familyStatus: Yup.string().required('familyStatus is required'),
            familyValues: Yup.string().required('familyValues is required'),
            ancestralOrigin: Yup.string().required('ancestralOrigin is required'),
            message: Yup.string().required('aboutMyself is required'),
        }),
        onSubmit: (values) => {
            // Handle form submission logic here
            console.log(values);
            values.userid = userdetails.userid
            statusprofile(values)

        },
    });
    const heightdata = genHeightNumberRange(4, 6)
    const heightsInCm = genHeightNumberRange(4, 6).map(feetToCm);
    const finalheight = heightdata.map((feet, index) => `${feet} ft/${heightsInCm[index]} cm`);
    console.log(educationData)
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
                                    HEIGHT
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="height"
                                        name="height"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.height}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        {
                                            finalheight.map((data) => {
                                                return (
                                                    <><option value={data}>{data}</option></>
                                                )
                                            })
                                        }
                                     
                                    </select>
                                </div>
                                {formik.touched.height && formik.errors.height && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.height}</p>
                                )}
                            </div>

                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    PHYSICAL STATUS
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="physicalStatus"
                                        name="physicalStatus"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.physicalStatus}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        {physicalStatus.map((data) => {
                                            return <option value={data.value}>{data.value}</option>
                                        })}
                                        {/* <option value="user1">User 1</option>
                                        <option value="user2">User 2</option>
                                        <option value="user3">User 3</option> */}
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                {formik.touched.physicalStatus && formik.errors.physicalStatus && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.physicalStatus}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    EDUCATION
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="education"
                                        name="education"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.education}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        {educationData.map((data) => {
                                            return <option key={data.id} value={data.name}>{data.name}</option>
                                        })}
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                {formik.touched.education && formik.errors.education && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.education}</p>
                                )}
                            </div>

                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    EMPLOYED IN
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="employedId"
                                        name="employedId"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.employedId}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        {professions.map((data) => {
                                            return <option key={data.id} value={data.name}>{data.name}</option>
                                        })}
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                {formik.touched.employedId && formik.errors.employedId && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.employedId}</p>
                                )}

                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    OCCUPATION
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="occupation"
                                        name="occupation"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.occupation}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        {professions.map((data) => {
                                            return <option key={data.id} value={data.name}>{data.name}</option>
                                        })}

                                    </select>
                                </div>
                                {formik.touched.occupation && formik.errors.occupation && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.occupation}</p>
                                )}

                            </div>

                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    CURRENCY
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="currency"
                                        name="currency"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.currency}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="user1">$</option>
                                        <option value="user2">User 2</option>
                                        <option value="user3">User 3</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                {formik.touched.currency && formik.errors.currency && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.currency}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    ANNUNAL INCOME
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="annualIncome"
                                        name="annualIncome"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.annualIncome}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="user1">3-4 LPA</option>
                                        <option value="user2">4-6 LPA</option>
                                        <option value="user3">6-8 LPA</option>
                                        <option value="user3">More then 8 LPA</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                {formik.touched.annualIncome && formik.errors.annualIncome && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.annualIncome}</p>
                                )}
                            </div>

                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    FAMILY STATUS
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="familyStatus"
                                        name="familyStatus"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.familyStatus}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="user1">Middle</option>
                                        <option value="user2">Richest</option>
                                        {/* <option value="user3">User 3</option> */}
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                {formik.touched.familyStatus && formik.errors.familyStatus && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.familyStatus}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="familyType" className="block text-sm font-medium leading-6 text-gray-900">
                                FAMILY TYPE
                            </label>
                            <div className="mt-2 flex items-center">
                                <input
                                    id="family-type-joint"
                                    name="familyType"
                                    type="radio"
                                    value="Joint"
                                    checked={formik.values.familyType === 'Joint'}
                                    onChange={formik.handleChange}
                                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                {formik.touched.familyType && formik.errors.familyType && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.familyType}</p>
                                )}
                                <label htmlFor="family-type-joint" className="ml-2 text-sm text-gray-700">
                                    Joint
                                </label>
                                <input
                                    id="family-type-nuclear"
                                    name="familyType"
                                    type="radio"
                                    value="Nuclear"
                                    checked={formik.values.familyType === 'Nuclear'}
                                    onChange={formik.handleChange}
                                    className="form-radio h-4 w-4 ml-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                {formik.touched.familyType && formik.errors.familyType && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.familyType}</p>
                                )}
                                <label htmlFor="family-type-nuclear" className="ml-2 text-sm text-gray-700">
                                    Nuclear
                                </label>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    FAMILY VALUES
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="familyValues"
                                        name="familyValues"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.familyValues}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="Orthodor">Orthodor</option>
                                        <option value="Taditional">Taditional</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="Liberal">Liberal</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                            </div>
                            {formik.touched.familyValues && formik.errors.familyValues && (
                                <p className="mt-2 text-sm text-red-500">{formik.errors.familyValues}</p>
                            )}
                            <div className="flex-shrink-0 flex-grow">
                                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">
                                    ANCESTRAL ORIGIN
                                </label>
                                <div className="relative mt-2">
                                    <select
                                        id="ancestralOrigin"
                                        name="ancestralOrigin"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.ancestralOrigin}
                                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="" disabled selected>
                                            Select an option
                                        </option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                {formik.touched.ancestralOrigin && formik.errors.ancestralOrigin && (
                                    <p className="mt-2 text-sm text-red-500">{formik.errors.ancestralOrigin}</p>
                                )}
                            </div>
                        </div>



                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">ABOUT MYSELF</label>
                            <div class="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                            {formik.touched.message && formik.errors.message && (
                                <p className="mt-2 text-sm text-red-500">{formik.errors.message}</p>
                            )}
                        </div>
                        <div className="flex items-center">
                            <input
                                id="agreeToPrivacyPolicy"
                                name="agreeToPrivacyPolicy"
                                type="checkbox"
                                checked={formik.values.agreeToPrivacyPolicy}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="agreeToPrivacyPolicy" className="text-sm leading-6 text-gray-600" id="switch-1-label">
                                By selecting this, you agree to our{' '}
                                <a href="#" className="font-semibold text-indigo-600">
                                    privacy&nbsp;policy
                                </a>
                                .
                            </label>
                        </div>
                        {formik.touched.agreeToPrivacyPolicy && formik.errors.agreeToPrivacyPolicy && (
                            <div className="text-red-500">{formik.errors.agreeToPrivacyPolicy}</div>
                        )}












                        <div className='mt-4 gap-3 flex justify-center items-center'>
                            <button className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500 ' onClick={() => { pre() }}>Previous</button>
                            <button type="submit" className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
                        </div>











                    </form>




                </div>


            </div>






        </div>
    )
}

export default RegisterStatus
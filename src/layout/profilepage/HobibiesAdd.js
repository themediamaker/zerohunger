import React from 'react'


import { useRouter } from 'next/navigation';
const HobibiesAdd = () => {
    const router = useRouter();
    const handle = () => {



        router.push('/user/hobbies');
    }


    return (
        <>

            <div className="flex items-center justify-center overflow-hidden bg-gray-50 p-3">
                <div className="bg-white  w-full rounded-lg shadow-lg p-6">
                    <div className="grid grid-cols-6 gap-4">


                        <div class="family-description  max-w-lg mx-auto mt-4 ">
                            <button onClick={handle} class="btn-small bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                Add
                            </button>
                            <h2 class="text-lg text-gray-700">
                                About My Family
                            </h2>
                            <h5>Not Specified </h5>
                        </div>


                    </div>
                </div>
            </div>







        </>
    )
}

export default HobibiesAdd
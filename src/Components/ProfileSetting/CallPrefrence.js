import React from 'react'

const CallPrefrence = () => {
  return (
    <>


<div>
    <label class="block text-sm text-gray-700 font-bold mb-2">Let us know when we can call you:</label>
    <div class=" flex-row">
        <div class=" mr-4">
            <input type="radio" id="callUpdates" name="callPreference" value="Call when there are important updates/offers" class="mr-2"/>
            <label for="callUpdates" class="mr-4">Call when there are important updates/offers</label>
        </div>

        <div class=" mr-4">
            <input type="radio" id="call1Month" name="callPreference" value="Call after 1 month" class="mr-2"/>
            <label for="call1Month" class="mr-4">Call after 1 month</label>
        </div>

        <div class=" mr-4">
            <input type="radio" id="call3Months" name="callPreference" value="Call after 3 months" class="mr-2"/>
            <label for="call3Months" class="mr-4">Call after 3 months</label>
        </div>

        <div class=" mr-4">
            <input type="radio" id="call6Months" name="callPreference" value="Call after 6 months" class="mr-2"/>
            <label for="call6Months" class="mr-4">Call after 6 months</label>
        </div>

        <div class="">
            <input type="radio" id="neverCall" name="callPreference" value="Never" class="mr-2"/>
            <label for="neverCall">Never</label>
        </div>
    </div>
    <div class="flex items-end mt-4">
        <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
            Submit
            <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
    </div>
</div>



    </>
  )
}

export default CallPrefrence
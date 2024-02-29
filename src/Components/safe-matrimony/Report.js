import React from 'react'
import CaptchaTest from "../../Components/safe-matrimony/CaptchaTest "
const Report = () => {
  return (
    <>

<div className='w-full'>
<div className='w-1/2 mr-4'>
    <p className="font-bold">Grievance Officer</p>
    <p>Mr. Dinesh John</p>
    <p>Contact Address: M/s. Matrimony.com Limited, No.94, TVH Beliciaa Towers, Tower - 2, 5th Floor, MRC Nagar, Chennai, Tamil Nadu – 600028</p>
    <p>Phone: <a href="tel:+918939455547">+91-8939455547</a></p>
    <p>Email: <a href="mailto:reportfraud@bharatmatrimony.com">reportfraud@bharatmatrimony.com</a></p>
</div>

<p className="font-bold">Grievance Form Only for Public Complaints relating to content on the site</p>


<div className='w-1/2 mr-4'>
    <p className="font-bold"><span style={{ color: 'red' }}>*</span>Your Name:</p>
    <input type="text" placeholder="Name" className="border border-gray-300 rounded-md px-2 py-1 mb-2" />
    
    <p className="font-bold"><span style={{ color: 'red' }}>*</span>Your E-Mail ID:</p>
    <input type="email" placeholder="Email ID" className="border border-gray-300 rounded-md px-2 py-1 mb-2" />
    
    <p className="font-bold"><span style={{ color: 'red' }}>*</span>Your Contact Number:</p>
    <input type="tel" placeholder="Mobile Number" className="border border-gray-300 rounded-md px-2 py-1 mb-2" />
    
    <p className="font-bold"><span style={{ color: 'red' }}>*</span>Please mark the web portal which hosts the issue(s) encountered by you :</p>
    <select className="border border-gray-300 rounded-md px-2 py-1 mb-2">
    <option selected="selected" value="0"> Select Your Domain </option>
						<option value="AssameseMatrimony.com">AssameseMatrimony.com</option>
						<option value="BengaliMatrimony.com">BengaliMatrimony.com</option>
						<option value="BharatMatrimony.com">BharatMatrimony.com</option>
						<option value="GujaratiMatrimony.com">GujaratiMatrimony.com</option>
						<option value="HindiMatrimony.com">HindiMatrimony.com</option>
						<option value="KannadaMatrimony.com">KannadaMatrimony.com</option>
						<option value="KeralaMatrimony.com">KeralaMatrimony.com</option>
						<option value="MarathiMatrimony.com">MarathiMatrimony.com</option>
						<option value="MarwadiMatrimony.com">MarwadiMatrimony.com</option>
						<option value="OriyaMatrimony.com">OriyaMatrimony.com</option>
						<option value="ParsiMatrimony.com">ParsiMatrimony.com</option>
						<option value="PunjabiMatrimony.com">PunjabiMatrimony.com</option>
						<option value="SindhiMatrimony.com">SindhiMatrimony.com</option>
						<option value="TamilMatrimony.com">TamilMatrimony.com</option>
						<option value="TeluguMatrimony.com">TeluguMatrimony.com</option>
						<option value="UrduMatrimony.com">UrduMatrimony.com</option>
						<option value="EliteMatrimony.com">EliteMatrimony.com</option>
						<option value="AssitedMatrimony.com">AssitedMatrimony.com</option>
        {/* Add options here */}
    </select>
    
    <p className="font-bold"><span style={{ color: 'red' }}>*</span>Please share the link (URL) of the Page which you are reporting against:</p>
    <input type="url" placeholder="URL" className="border border-gray-300 rounded-md px-2 py-1 mb-2" />
</div>

<div className='w-1/2 mr-4'>
    <p className="text-sm"><span style={{ color: 'red' }}>*</span>Please tell us the reason for your complaint/concern. Choose an option which most closely matches with your concern. If you are unsure which option to choose, please select the last option. Thanks</p>
</div>

<div className='w-full mr-4'>
    <p className="font-bold">Please tell us the reason for your complaint/concern. Choose an option which most closely matches with your concern. If you are unsure which option to choose, please select the last option. Thanks</p>
    
    <input type="checkbox" id="personalData" name="reason" value="personalData" />
    <label className="text-sm" >The content exposes personal data while violating Terms & Conditions and/or Privacy Policy of concerned website.</label><br />
    
    <input type="checkbox" id="harmfulContent" name="reason" value="harmfulContent" />
    <label className="text-sm" >The content is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic and/or unlawful in any manner.</label><br />
    
    <input type="checkbox" id="threateningContent" name="reason" value="threateningContent" />
    <label className="text-sm" >The content threatens the unity, integrity, defence, security or sovereignty of India and/or friendly relations with foreign states.</label><br />
    
    <input type="checkbox" id="infringement" name="reason" value="infringement" />
    <label className="text-sm" >The content infringes a patent, trademark, copyright or other proprietary rights.</label><br />
    
    <input type="checkbox" id="moneyLaundering" name="reason" value="moneyLaundering" />
    <label className="text-sm" >The content encourages money laundering or gambling.</label><br />
    
    <input type="checkbox" id="virusContent" name="reason" value="virusContent" />
    <label  className="text-sm">The content hosts software viruses or any other computer code designed to harm the functionality of any computer resource.</label><br />
    
    <input type="checkbox" id="harmToMinors" name="reason" value="harmToMinors" />
    <label className="text-sm" >The content harms minors in any way.</label><br />
    
    <input type="checkbox" id="otherReason" name="reason" value="otherReason" />
    <label  >Other</label><br />
    <input type="text" id="otherReasonDescription" name="otherReasonDescription" placeholder="Other reasons" />
</div>

</div>

<div className='w-1/2 mr-4'>
    <p className="font-bold"><span style={{ color: 'red' }}>*</span>Please describe your complaint/concern in detail:</p>
    <textarea id="complaintDetails" name="complaintDetails" rows="4" className="border w-1/2 border-gray-300 rounded-md px-2 py-1 mb-2"></textarea>
</div>
<div className='w-1/2'>
    <CaptchaTest/>
</div>

    </>
  )
}

export default Report
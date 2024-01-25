import React from 'react'
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function Step3() {

    const { activeStep, setActiveStep, completeSteps } = useContext(Message_data)

    return (
        <div className='text-black px-8'>
            <IoChevronBackCircleSharp onClick={(e) => setActiveStep(null)} fontSize={25} className='-mt-4 mb-2 cursor-pointer' />
            <h1 className='text-2xl font-bold mb-5 flex items-center justify-start'><span className='flex-[1]'>Step 2: Fighting Back - Filing a Cybercrime Report</span><button onClick={(e) => (
                setActiveStep(null),
                completeSteps(3, 'upi')
            )} className='flex-[0.15] text-sm bg-black text-white rounded-lg px-2 py-2 mx-2'>Mark Done</button></h1>
            <p>You&apos;ve gathered the evidence, now it&apos;s time to sound the alarm! Filing a cybercrime report puts the pressure on the scammers and gets your case officially started. Here&apos;s how to do it in India:</p>
            <h2 className='mt-5 font-bold'>Option 1: National Cybercrime Portal (Quickest)</h2>
            <p>This user-friendly website lets you report scams related to UPI, banking, social media, and more. Visit <a href="https://cybercrime.gov.in/">cybercrime.gov.in</a> and click &quot;Report Other Cybercrime&quot;.</p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li>Register (or log in) with your phone number and create a password.</li>
                <li>Select &quot;UPI/Mobile Fraud&quot; from the complaint categories.</li>
                <li>Fill in the details about the scam: date, time, amount, recipient&apos;s name, etc.</li>
                <li>Attach screenshots or evidence files if possible.</li>
                <li>Submit your report and keep a copy of the reference number for future reference.</li>
            </ul>
            <h2 className='mt-5 font-bold'>Option 2: Cybercrime Helpline (1930)</h2>
            <p>Prefer talking it out? Dial 1930, the national cybercrime helpline, available 24/7. Explain the scam to the operator who will help you lodge a complaint.</p>
            <h2 className='mt-5 font-bold'>Option 3: Local Police Station</h2>
            <p>While online reporting is encouraged, you can also visit your nearest police station and file a written complaint. Remember to carry copies of your evidence.</p>
            <h2 className='mt-5 font-bold'>Bonus Tip: Report to Your Bank & NPCI</h2>
            <p>Contact your bank and the NPCI (National Payments Corporation of India) through their app, website, or customer care hotline. They can block your UPI PIN and initiate fraud investigation.</p>
            <h2 className='mt-5 font-bold'>Remember:</h2>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li>The faster you report, the higher the chance of recovering your funds.</li>
                <li>Be accurate and provide all details you have.</li>
                <li>Keep copies of all reports and correspondence.</li>
            </ul>
            <p>Filing a cybercrime report might seem daunting, but it&apos;s a crucial step in holding scammers accountable. Don&apos;t hesitate to take action! In the next step, we&apos;ll discuss reporting the scam to your bank and the NPCI which will help you recover your funds.</p>
        </div >
    )
}

export default Step3
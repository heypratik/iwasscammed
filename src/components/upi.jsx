import React from 'react'
import Step1 from './upi/step1'
import Step2 from './upi/step2'
import Step3 from './upi/step3'
import Link from 'next/link'
import { useState } from 'react'
import { Message_data } from "../context/context";
import { GiFishingHook } from "react-icons/gi";
import { useContext } from "react";

const steps = [
    [1, 'Collect all the information about the scam and the scammer', 'step1'],
    [2, 'File a cybercrime report', 'step2'],
    [3, 'Banks & NPCI', 'step3'],
]

function UPI({ amountLost, scamDays }) {

    const { activeStep, setActiveStep, checkStep, completeSteps } = useContext(Message_data)

    return (
        <div className='w-full'>
            {activeStep === 'step1' && <Step1 />}
            {activeStep === 'step2' && <Step2 />}
            {activeStep === 'step3' && <Step3 />}
            {activeStep === null && <div className='text-black w-full  px-8'>

                <h1 className='text-3xl font-bold text-center mb-8'>Steps to Report UPI Scam</h1>
                <div className='flex items-center justify-between mb-5'>
                    <p className='text-sm font-semibold'>Your Amount Lost: {amountLost}</p>
                    <p className='text-sm font-semibold'>Eligible to Recover: {scamDays == 3 ? "Most likely, yes." : "Might be harder now"}</p>
                </div>

                <hr className='my-5' />

                {steps && steps.map(([key, value, Component]) => (
                    <div key={key} className={`flex flex-row my-4 relative ${checkStep(key, "upi") ? "opacity-50" : "opacity-100"}`}>
                        <div className={`${checkStep(key, "upi") ? "opacity-100" : "opacity-0"}`}><hr className='my-5 absolute -bottom-1.5 right-0 w-full z-10' /></div>
                        <p className='flex-[0.2] text-base font-semibold'>Step {key} : </p>
                        <p className='flex-1 text-base font-semibold'>{value}</p>
                        <div className='flex-[0.4] flex items-center justify-end'>
                            <button onClick={(e) => setActiveStep(`step${key}`)} className='text-sm bg-black text-white rounded-lg px-2 py-1 mx-2'>Start</button>
                            {/* <button className='text-sm bg-black text-white rounded-lg px-2 py-1 mx-2' onClick={(e) => completeSteps(key, 'upi')}>Mark Done</button> */}
                        </div>
                    </div>
                ))}
            </div>}
            <div className='w-full border border-red-600 rounded-md text-red-600 p-4 mt-8'>
                <span className='flex items-center justify-start gap-3 font-bold'><GiFishingHook /> Personalized Tips:</span>
                <ul className='list-disc list-inside text-base  ml-6 mt-4'>
                    {amountLost === "Above Rs: 99,000" && <li>Because your amount is over 99,000, you will need to file an FIR as well as a cybercrime report. Please visit your neareast police station for both.</li>}
                    {amountLost !== "Above Rs: 99,000" && <li>Because your amount is under 99,000, you don&apos;t need to file an FIR. You can just report online on the cybercrime portal.</li>}
                    {scamDays === 7 && <li>Because you have reported the scam after 7 days, it might be harder to recover your money. But you should still try.</li>}
                    {scamDays !== 7 && <li>Because you have reported the scam within 7 days, it might be easier to recover your money.</li>}
                    <li>Report the transaction as unauthorized in banks as soon as possible. This increases your chances of banks refunding back the money back to you.</li>
                </ul>
            </div>
        </div>
    )
}

export default UPI
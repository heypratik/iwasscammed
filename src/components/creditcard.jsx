import React from 'react'
import Step1 from './creditcard/step1'
import Step2 from './creditcard/step2'
import Step3 from './creditcard/step3'
import Link from 'next/link'
import { useState } from 'react'
import { Message_data } from "../context/context";
import { useContext } from "react";
// const steps = {
//     1: 'Collect all the information about the scam and the scammer',
//     2: 'Call your credit card company & report the scam ASAP (Time Sensitive)',
//     3: 'File a cybercrime report',
// }

const steps = [
    [1, 'Collect all the information about the scam and the scammer', 'step1'],
    [2, 'Call your credit card company & report the scam ASAP (Time Sensitive)', 'step2'],
    [3, 'File a cybercrime report', 'step3'],
]

function CreditCard({ amountLost, scamDays }) {

    const { activeStep, setActiveStep, checkStep } = useContext(Message_data)

    return (
        <>
            {activeStep === 'step1' && <Step1 />}
            {activeStep === 'step2' && <Step2 />}
            {activeStep === 'step3' && <Step3 />}
            {activeStep === null && <div className='text-black w-full px-8'>
                <h1 className='text-3xl font-bold text-center mb-8'>Steps to Report Credit Card Scam</h1>
                <div className='flex items-center justify-between mb-5'>
                    <p className='text-sm font-semibold'>Your Amount Lost: {amountLost}</p>
                    <p className='text-sm font-semibold'>Eligible to Recover: {scamDays == 3 ? "Most likely, yes." : "Might be harder now"}</p>
                </div>

                <hr className='my-5' />

                {steps && steps.map(([key, value, Component]) => (
                    <div className={`flex flex-row my-4 relative ${checkStep(key, "cc") ? "opacity-50" : "opacity-100"}`}>
                        <div className={`${checkStep(key, "cc") ? "opacity-100" : "opacity-0"}`}><hr className='my-5 absolute -bottom-1.5 right-0 w-full z-10' /></div>
                        <p className='flex-[0.2] text-base font-semibold'>Step {key} : </p>
                        <p className='flex-1 text-base font-semibold'>{value}</p>
                        <div className='flex-[0.4] flex items-center justify-end'>
                            <button onClick={(e) => setActiveStep(`step${key}`)} className='text-sm bg-black text-white rounded-lg px-2 py-1 mx-2'>Start</button>
                            <button className='text-sm bg-black text-white rounded-lg px-2 py-1 mx-2'>Mark Done</button>
                        </div>
                    </div>
                ))}
            </div>}
        </>
    )
}

export default CreditCard
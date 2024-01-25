import React from 'react'
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function Step1() {

    const { activeStep, setActiveStep, completeSteps } = useContext(Message_data)

    return (
        <div className='text-black px-8'>
            <IoChevronBackCircleSharp onClick={(e) => setActiveStep(null)} fontSize={25} className='-mt-4 mb-2 cursor-pointer' />
            <h1 className='text-2xl font-bold mb-5 flex items-center justify-start'><span className='flex-[1]'>Step 1: Uncovering the Truth - Gathering Proof in a UPI Scam </span><button onClick={(e) => (
                setActiveStep(null),
                completeSteps(1, 'upi')
            )} className='flex-[0.1] text-sm bg-black text-white rounded-lg px-2 py-1 mx-2'>Mark Done</button></h1>
            <p>Falling victim to a UPI scam can be terrifying. Anger and frustration are natural, but in the midst of it all, you have a powerful weapon: information. Knowing details about the scam and the scammer helps get your money back and bring those responsible to justice.</p>
            <h2 className='mt-5 font-bold'>1. Track the Transaction Trail:</h2>
            <p>Open your UPI app or bank statement and find the suspicious transaction(s). Note down:</p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li>Date and Time: When did the money disappear?</li>
                <li>Amount: How much was taken?</li>
                <li>Recipient Name: Who got the money?</li>
                <li>Transaction Reference Number: This unique code helps authorities track the money.</li>
                <li>Screenshot all the transactions</li>
            </ul>
            <p>Every detail matters, so don&apos;t miss anything.</p>
            <h2 className='mt-5 font-bold'>2. Remember the First Contact:</h2>
            <p>Think back to how the scam started. Was it a call, text, tempting link, QR code scan, or website visit? Knowing the source helps understand the scam&apos;s tricks.</p>
            <h2 className='mt-5 font-bold'>3. Decode the Bait:</h2>
            <p>What story did the scammer spin? Did they promise easy money, a dream job, or even love? Unmasking the "hook" exposes their tricks. Write down what they said to lure you in.</p>
            <h2 className='mt-5 font-bold'>4. Secure Digital Footprints:</h2>
            <p>Did your interaction with the scammer leave any digital traces? Websites visited, emails exchanged, or even phone recordings can be valuable clues for investigators. Keep them safe before they disappear.</p>
            <h2>Remember:</h2>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li>Act fast! Evidence disappears quickly.</li>
                <li>Don&apos;t delete anything! Even small details can be important.</li>
                <li>Record or screenshot if possible! Visual proof speaks volumes.</li>
            </ul>
            <p>In the next step we will report the transactions to Cybercrime, Bank & NPCI.</p>
        </div>
    )
}

export default Step1
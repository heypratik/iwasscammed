import React from 'react'
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function Step1() {

    const { activeStep, setActiveStep, completeSteps } = useContext(Message_data)

    return (
        <div className='text-black px-8 my-10'>
            <IoChevronBackCircleSharp onClick={(e) => setActiveStep(null)} fontSize={25} className='-mt-4 mb-2 cursor-pointer' />
            <h1 className='text-2xl font-bold mb-5 flex items-center justify-start'>Victim to a Credit Card Scam? Act Now: <button onClick={(e) => (
                setActiveStep(null),
                completeSteps(1, 'cc')
            )} className='text-sm bg-black text-white rounded-lg px-2 py-1 mx-2'>Mark Done</button></h1>
            <p><span>Falling victim to a credit card scam can be nerve-wracking.</span><span> Before you dive into panic mode,</span><span> take a deep breath and gather your bearings.</span><span> The </span><strong>first step</strong><span> in fighting back effectively is </span><strong>collecting as much information as possible about the scam and the scammer.</strong><span> This intel will be crucial for reporting the crime,</span><span> blocking further damage,</span><span> and potentially recovering your lost funds.</span></p>
            <p className='mt-5'><strong>Here&apos;s how to become a credit card crime sleuth:</strong></p>
            <p className='mt-5'><strong>1. Identify the type of scam:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><strong>Skimming:</strong><span>&nbsp;Did your card details get copied at an ATM,</span><span>&nbsp;gas station,</span><span>&nbsp;or restaurant?</span><span>&nbsp;Look for suspicious devices attached to card readers.</span></li>
                <li><strong>Lost or stolen card:</strong><span>&nbsp;Did you lose your card,</span><span>&nbsp;or think it may have been stolen?</span><span>&nbsp;Track back your recent movements and retrace your steps.</span></li>
                <li><strong>Phishing:</strong><span>&nbsp;Did you receive suspicious emails or calls asking for your card details?</span><span>&nbsp;Analyze the sender&apos;s address and verify directly with your card issuer.</span></li>
                <li><strong>Data breach:</strong><span>&nbsp;Have you recently received notifications about a data breach involving a company you store your card information with?</span><span>&nbsp;Check your credit report and monitor your statements for any unusual activity.</span></li>
            </ul>
            <p className='mt-5'><strong>2. Collect evidence:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><strong>Emails:</strong><span>&nbsp;Forward any scam emails you received to your bank and/or report them to phishing reporting websites.</span></li>
                <li><strong>Phone calls:</strong><span>&nbsp;Take detailed notes about the calls,</span><span>&nbsp;including the time,</span><span>&nbsp;date,</span><span>&nbsp;phone number,</span><span>&nbsp;and any information you may have divulged.</span></li>
                <li><strong>Suspicious transactions:</strong><span>&nbsp;Screenshot any unauthorized charges on your online banking or credit card app.</span><span>&nbsp;Note the time and amount of each transaction.</span></li>
                <li><strong>Physical evidence:</strong><span>&nbsp;If you suspect skimming,</span><span>&nbsp;keep the receipt from the compromised card reader along with your notes.</span></li>
            </ul>
            <p className='mt-5'><strong>3. Document everything:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><span>Create a timeline of events outlining the scam,</span><span>&nbsp;including any interactions with the scammer and your attempts to rectify the situation.</span></li>
                <li><span>Keep copies of all communications,</span><span>&nbsp;evidence,</span><span>&nbsp;and reports in a safe place.</span></li>
            </ul>
            <p className='mt-5'><strong>Remember:</strong><span> The more information you have,</span><span> the stronger your case will be.</span><span> By acting quickly and meticulously,</span><span> you can not only minimize the damage but also assist authorities in tracking down the perpetrators.</span></p>

            <p className='mt-5'><strong>Additional tips:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><strong>Contact the merchants</strong><span>&nbsp;involved in any unauthorized transactions,</span><span>&nbsp;especially if they were online purchases.</span></li>
                <li><strong>Change your passwords</strong><span>&nbsp;for all online accounts associated with your credit card.</span></li>
                <li><strong>Consider placing a freeze on your credit report</strong><span> to prevent further identity theft.</span></li>
            </ul>
            <p><span>By following these steps and staying informed,</span><span> you can turn the tables on credit card scammers and protect your financial future.</span></p>
        </div>
    )
}

export default Step1
import React from 'react'
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function Step2() {

    const { activeStep, setActiveStep, completeSteps } = useContext(Message_data)

    return (
        <div className='text-black px-8'>
            <IoChevronBackCircleSharp onClick={(e) => setActiveStep(null)} fontSize={25} className='-mt-4 mb-2 cursor-pointer' />
            <h1 className='text-2xl font-bold mb-5 flex items-center justify-start'><span className='flex-[1]'>Step 2: Sound the Alarm! Report the Credit Card Scam to Your Bank (No Time to Waste!)</span> <button onClick={(e) => (
                setActiveStep(null),
                completeSteps(2, 'cc')
            )} className='flex-[0.1] text-sm bg-black text-white rounded-lg px-2 py-1 mx-2'>Mark Done</button></h1>
            <p className='mt-5'><span>You&apos;ve gathered intel about the scam,</span><span> pieced together the puzzle of the financial crime,</span><span> and now it&apos;s time to take action in India.</span><span> The next critical step is </span><strong>reporting the scam to your credit card issuer.</strong><span> This is a </span><strong>time-sensitive matter</strong><span>,</span><span> so don&apos;t delay!</span><span> The quicker you act,</span><span> the better your chances of minimizing damage and recovering your lost funds.</span></p>
            <p className='mt-5'><strong>Here&apos;s how to report the scam:</strong></p>
            <p className='mt-5'><strong>1. There are multiple ways to report:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li>
                    <p><strong>Phone:</strong><span> This is the fastest and most direct way to contact your bank.</span><span> Look for the customer service number on the back of your card or on your bank&apos;s website.</span><span> Be prepared to answer security questions and explain the situation clearly.</span><span> Remember,</span><span> in India,</span><span> most banks have a toll-free helpline dedicated to credit card issues.</span><span> Look for numbers starting with 1800.</span></p>
                </li>
            </ul>
            <p><strong>Secure online portal:</strong><span> Many banks in India offer the option to report fraud through their online banking platforms.</span><span> This can be a convenient option if you&apos;re unable to reach someone by phone.</span></p>
            <p><strong>In-person visit:</strong><span> If you have a branch of your bank nearby,</span><span> you can visit them in person to report the scam.</span><span> This can be helpful if you have additional questions or need assistance with paperwork.</span></p>
            <p className='mt-5'><strong>2. Be prepared to provide:</strong></p>
            <ul>
                <li><span>Your personal information (name,</span><span>&nbsp;address,</span><span>&nbsp;phone number)</span></li>
                <li><span>Your credit card number and account information</span></li>
                <li><span>The details of the scam,</span><span>&nbsp;including the type of scam,</span><span>&nbsp;the date and time it occurred,</span><span>&nbsp;and any amount of money lost</span></li>
                <li><span>Any evidence you have collected,</span><span>&nbsp;such as emails,</span><span>&nbsp;phone call notes,</span><span>&nbsp;or suspicious transactions</span></li>
            </ul>
            <p className='mt-5'><strong>3. What to expect:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><span>Your bank will likely freeze your credit card to prevent further unauthorized activity.</span></li>
                <li><span>They may open an investigation into the scam and ask you for additional information.</span></li>
                <li><span>You may be issued a new credit card with a new number.</span></li>
                <li><span>Depending on the type of scam and your bank&apos;s policies,</span><span>&nbsp;you may be reimbursed for any lost funds.</span></li>
            </ul>
            <p className='mt-5'><strong>Helpful Resources in India:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><strong>Find your bank&apos;s customer service number:</strong><span>&nbsp;Most banks in India have a dedicated toll-free helpline for credit card issues.</span><span>&nbsp;Look for numbers starting with 1800.</span><span>&nbsp;You can also find the number on your bank&apos;s website or on the back of your credit card.</span></li>
                <li><strong>Report fraud online:</strong><span>&nbsp;Many banks in India have dedicated fraud reporting pages on their websites.</span><span>&nbsp;Look for a link labeled "Report Fraud" or "Suspicious Activity.</span><span>"</span></li>
            </ul>
            <p><strong>Remember:</strong><span> The sooner you report the scam,</span><span> the better chance you have of protecting yourself and preventing further damage.</span><span> Don&apos;t hesitate to contact your bank,</span><span> even if you&apos;re unsure about the specifics of the scam.</span><span> They are there to help and will guide you through the process.</span></p>
            <p><span>By taking these steps and staying vigilant,</span><span> you can navigate the aftermath of a credit card scam and emerge stronger than ever.</span></p>
            <p className='mt-5'><strong>Additional tips:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><span>Be aware of common credit card scams in India,</span><span>&nbsp;such as skimming,</span><span>&nbsp;phishing,</span><span>&nbsp;and OTP fraud.</span></li>
                <li><span>Never share your credit card details with anyone,</span><span>&nbsp;over the phone,</span><span>&nbsp;email,</span><span>&nbsp;or online.</span></li>
                <li><span>Regularly check your credit card statements for any unauthorized transactions.</span></li>
                <li>If you lose your credit card, report it to your bank immediately.</li>
            </ul>
            <p><span>By following these tips,</span><span> you can help protect yourself from credit card scams.</span></p>
            <p>I hope this information is helpful! Please let me know if you have any other questions.</p>
        </div>
    )
}

export default Step2
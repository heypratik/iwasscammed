import React from 'react'
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function Step3() {

    const { activeStep, setActiveStep, completeSteps } = useContext(Message_data)

    return (
        <div className='text-black px-8'>
            <IoChevronBackCircleSharp onClick={(e) => setActiveStep(null)} fontSize={25} className='-mt-4 mb-2 cursor-pointer' />
            <h1 className='text-2xl font-bold mb-5 flex items-center justify-start'><span className='flex-[1]'>Step 3: Double Defense - Reporting to Bank & NPCI</span><button onClick={(e) => (
                setActiveStep(null),
                completeSteps(3, 'upi')
            )} className='flex-[0.15] text-sm bg-black text-white rounded-lg px-2 py-2 mx-2'>Mark Done</button></h1>
            <p>You&apos;ve filed a cybercrime report and gathered evidence. Now, let&apos;s double down on the defense by informing your bank and the National Payments Corporation of India (NPCI) about the UPI scam. By taking these steps, you can block further damage, initiate investigations, and increase the chances of recovering your funds.</p>
            <h2 className='mt-5 font-bold'>1. Reporting to Your Bank:</h2>
            <p className='mt-5'>Every bank has its own procedures for reporting fraud. Here&apos;s a general guide:</p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><strong>Contact your bank immediately.</strong> Use their app, website, or customer care hotline. The faster you act, the better.</li>
                <li><strong>Explain the scam clearly.</strong> Provide details like date, time, amount, recipient name, and transaction reference number.</li>
                <li><strong>Request immediate blocking of your UPI PIN.</strong> This prevents further unauthorized transactions.</li>
                <li><strong>If necessary, freeze your bank account.</strong> This protects remaining funds if additional risk is suspected.</li>
                <li><strong>Follow the bank&apos;s instructions for documenting the fraud.</strong> They may ask for screenshots, statements, cybercrime report and/or a written complaint.</li>
                <li><strong>Keep a copy of any communication with the bank for future reference.</strong></li>
            </ul>
            <h2 className='mt-5 font-bold'>2. Reporting to NPCI:</h2>
            <p className='mt-5'>NPCI oversees UPI transactions in India. Reporting to them provides an additional layer of investigation and support. Please report here: <a href="https://www.npci.org.in/what-we-do/upi/dispute-redressal-mechanism" className=' underline'>https://www.npci.org.in/what-we-do/upi/dispute-redressal-mechanism</a></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li>Click on Complaints & Select the Nature of Transactions</li>
                <li>Select the issue as Fraudulent Transaction</li>
                <li>Fill in the details of the fraudulent transaction(s).</li>
                <li>Attach screenshots or evidence if possible.</li>
                <li>Fill out all the details like VPA (Your Payment UPI ID), Amount, etc.</li>
                <li>Submit your report and note down the reference number for future reference.</li>
            </ul>
            <h2 className='mt-5 font-bold'>Remember:</h2>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><strong>Reporting to both your bank and NPCI strengthens your case.</strong></li>
                <li><strong>Be cooperative and provide all requested information accurately.</strong></li>
                <li><strong>Keep track of all communication and reference numbers.</strong></li>
            </ul>
            <p>Reporting to your bank and NPCI might seem like another step, but it&apos;s crucial for claiming your money back and making those responsible face consequences. Remember, you&apos;re not alone in this fight against UPI scams. Stay informed and stay vigilant!</p>
        </div >
    )
}

export default Step3
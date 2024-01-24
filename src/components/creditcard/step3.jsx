import React from 'react'
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function Step3() {

    const { activeStep, setActiveStep, completeSteps } = useContext(Message_data)

    return (
        <div className='text-black px-8'>
            <IoChevronBackCircleSharp onClick={(e) => setActiveStep(null)} fontSize={25} className='-mt-4 mb-2 cursor-pointer' />
            <h2 className='text-2xl font-bold mb-5 flex items-center justify-start'><span className='flex-[1]'>Step 3: Fight Back! File a Cybercrime Report in India (Don't Let the Scammers Win)</span> <button onClick={(e) => (
                setActiveStep(null),
                completeSteps(3, 'cc')
            )} className='flex-[0.1] text-sm bg-black text-white rounded-lg px-2 py-1 mx-2'>Mark Done</button></h2>
            <p><span>You've swiftly alerted your bank about the fraudulent activity,</span><span> safeguarding your finances.</span><span> Now,</span><span> it's time to take the fight to the virtual streets and report the cybercrime!</span><span> Filing a report with the authorities in India is crucial for:</span></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><strong>Holding the perpetrators accountable:</strong><span>&nbsp;By providing detailed information,</span><span>&nbsp;you help authorities track down the scammers and bring them to justice.</span></li>
                <li><strong>Strengthening the anti-fraud ecosystem:</strong><span>&nbsp;Your report contributes to valuable data that helps authorities identify patterns and develop better prevention strategies.</span></li>
                <li><strong>Protecting yourself and others:</strong><span>&nbsp;A documented report can potentially strengthen your case for compensation and serve as a deterrent for future scams.</span></li>
            </ul>
            <p className='mb-5'><span>Here's how to effectively file a cybercrime report in India:</span></p>
            <p><strong>1. Choose your platform:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><strong>Cybercrime Reporting Portal:</strong><span>&nbsp;This user-friendly online platform launched by the Ministry of Home Affairs is specifically designed for reporting cybercrimes,</span><span>&nbsp;including credit card fraud.</span><span>&nbsp;Visit&nbsp;</span><a target="_blank" rel="noopener noreferrer" href="https://cybercrime.gov.in/">https://cybercrime.gov.in/</a><span>&nbsp;and register to file your report.</span></li>
                <li><strong>National Cyber Crime Helpline:</strong><span>&nbsp;Dial 155260,</span><span>&nbsp;the toll-free helpline available 24/7 to report cybercrimes across India.</span></li>
                <li><strong>Local Police Station:</strong><span>&nbsp;You can also visit your nearest police station and file a written complaint.</span></li>
            </ul>
            <p><strong>2. Gather your evidence:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li>Compile all the information you've gathered about the scam, including:</li>
                <li>Type of scam (phishing, skimming, etc.<span>)</span></li>
                <li><span>Date and time of the incident</span></li>
                <li><span>Amount of money lost (if any)</span></li>
                <li><span>Suspicious emails,</span><span>&nbsp;phone calls,</span><span>&nbsp;or text messages</span></li>
                <li><span>Bank statements highlighting unauthorized transactions</span></li>
                <li><span>Any other relevant details that might aid the investigation</span></li>
            </ul>
            <p><strong>3. Be prepared to provide:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li>Your personal information (name, address, phone number)</li>
                <li>Credit card details (number, expiry date)</li>
                <li><span>Bank account information (if applicable)</span></li>
                <li><span>Any additional documents supporting your claim</span></li>
            </ul>
            <p><strong>4. Follow up:</strong></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><span>Keep a copy of the complaint reference number for future reference.</span></li>
                <li><span>Maintain communication with the investigating officer and provide any additional information they may request.</span></li>
                <li><span>Consider seeking legal advice if necessary,</span><span>&nbsp;especially for recovering lost funds.</span></li>
            </ul>
            <p><strong>Bonus tip:</strong><span> Familiarize yourself with India's cybercrime laws,</span><span> such as the Information Technology Act,</span><span> 2000.</span><span> Knowing your rights and the legal framework can empower you to navigate the process effectively.</span></p>
            <p className='mt-5'><span>Remember,</span><span> reporting cybercrime is not just about seeking personal justice; it's about contributing to a safer digital environment for everyone.</span><span> By taking this crucial step,</span><span> you play a vital role in curbing online fraud and protecting yourself and others from future scams.</span></p>
            <p className='mt-5'><span>Here are some additional resources that you may find helpful:</span></p>
            <ul className=' list-disc mr-auto px-10 py-5'>
                <li><strong>Cyber Dos and Don'ts:</strong><a target="_blank" rel="noopener noreferrer" href="https://bard.google.com/%3C0%3Ehttps://www.cuny.edu/wp-content/uploads/sites/4/page-assets/about/administration/offices/cis/information-security/security-awareness/Cyber-Dos-and-Donts.pdf"><span>https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/about/administration/offices/cis/information-security/security-awareness/Cyber-Dos-and-Donts.pdf</span></a></li>
                <li><strong><span>Cyber Jagrukta Abhiyan:</span></strong> <a target="_blank" rel="noopener noreferrer" href="https://cybercrime.gov.in/"><span>https://cybercrime.gov.in/</span></a></li>
                <li><strong><span>CERT-In (Indian Computer Emergency Response Team):</span></strong> <a target="_blank" rel="noopener noreferrer" href="https://www.cert-in.org.in/"><span>https://www.cert-in.org.in/</span></a></li>
            </ul>
            <p><span>By staying informed and taking proactive steps, you can navigate the digital world with confidence and resilience.</span></p>
        </div>
    )
}

export default Step3
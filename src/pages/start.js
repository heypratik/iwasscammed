import React, {useState} from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select.jsx"
import { IoIosInformationCircleOutline } from "react-icons/io";
import CreditCard from "@/components/creditcard.jsx";
import UPI from "@/components/upi.jsx";

export default function Start() {

    const [selectedScam, setSelectedScam] = useState(null)
    const [amountLost, setAmountLost] = useState(0)
    const [scamDays, setScamDays] = useState(3)
    const [start, setStart] = useState(false)

    function handleNext() {
      setStart(true)
    }


  return (
    <div className="flex items-center justify-center bg-[#f6f6f6] min-h-screen w-full overflow-scroll">
        <div className="bg-white rounded-lg w-[70%] px-20 py-20 my-20 flex items-center justify-center flex-col relative shadow-[0_3px_20px_rgb(0,0,0,0.1)]">

          {start && selectedScam =='creditcard' && <CreditCard selectedScam={selectedScam} amountLost={amountLost} scamDays={scamDays}/>}
          {start && selectedScam =='upi' && <UPI selectedScam={selectedScam} amountLost={amountLost} scamDays={scamDays}/>}

          {!start && 
          <>
          <h2 className="text-black text-center font-medium text-xl mb-10">Tell us more about the scam / fraud</h2>
        <Select  onValueChange={(e) => setSelectedScam(e)}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Scam/Fraud Category" className="text-black"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup >
          <SelectLabel>Scam/Fraud Category</SelectLabel>
          <SelectItem value="creditcard">Credit Card Scam</SelectItem>
          <SelectItem value="upi">UPI Related Scam</SelectItem>
          <SelectItem value="bank">NEFT/RTGS/IMPS Related Scam</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <Select onValueChange={(e) => setAmountLost(e)}>
      <SelectTrigger className="w-[280px] mt-5">
        <SelectValue placeholder="Amount Lost" className="text-black"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup >
          <SelectLabel>Amount Lost</SelectLabel>
          <SelectItem value="Under Rs: 10,000/-">Under Rs: 10,000/-</SelectItem>
          <SelectItem value="Rs: 10,000/- to Rs: 99,000">Rs: 10,000/- to Rs: 99,000</SelectItem>
          <SelectItem value="Above Rs: 99,000">Above Rs: 99,000</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <Select onValueChange={(e) => setScamDays(e)}>
      <SelectTrigger className="w-[280px] mt-5">
        <SelectValue placeholder="When did the scam take occur?" className="text-black"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup >
          <SelectLabel>When did the scam take occur?</SelectLabel>
          <SelectItem value={3}>In the last 3 days</SelectItem>
          <SelectItem value={4}>More than 3 days have passed but under 7 days</SelectItem>
          <SelectItem value={7}>More than 7 days have passed.</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <button disabled={selectedScam === null || amountLost === 0} onClick={(e) => handleNext()} className="text-white bg-black rounded-md mt-5 px-6 py-2 disabled:bg-gray-400">Next</button>
    </>}

    <span className="text-gray-600 text-sm flex items-center absolute bottom-3"><IoIosInformationCircleOutline className="mr-2"/> This is a informational website. We do not report the scams to authorities but we show users how they can report the scams/fraud.</span>
        </div>
    </div>
  )
}
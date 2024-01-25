import React, {useEffect, useState} from "react"
import Navbar from "../components/Navbar"
// import Footer from "admin-components/Footer"
import { CheckIcon } from '@heroicons/react/outline'
import toast, { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import {BsFillLightningChargeFill} from 'react-icons/bs'
import { TbFishHook } from "react-icons/tb";
import Link from "next/link";

export default function IndexPage() {

  function notify(status) {
    if (status === 'success') {
      toast.success('You will be notified on launch!')
    } else {
      toast.error('Something went wrong.')
    }

  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [email, setEmail] = useState('')

  async function submit(e) {
    e.preventDefault()
    
    if (emailRegex.test(email)) {
      notify('success')
      await fetch('/api/admin/email', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
  
      },
        body: JSON.stringify({email: email})
      })

      setEmail('')
    } else {
      notify('error')
    }
  }

    

  return (
    <div className="overflow-x-hidden">
    <Head>
    <link rel="icon" type="image/png" sizes="32x32" href="/paperr-favicon.svg" />
      <title>Report Scams & Protect Citizens | iwasscammed </title>
      <meta name="description" content="iwasscammed helps you with the latest information on how to report scams & frauds so you can report & recover funds easily" />
      <meta name="robots" content="follow, index" />
      <meta property="og:description" content="iwasscammed helps you with the latest information on how to report scams & frauds so you can report & recover funds easily" name="description" />
      <meta property="og:title" content="Report Scams & Protect Citizens | iwasscammed " />

      <meta name="twitter:title" content="Report Scams & Protect Citizens | iwasscammed " />
      <meta name="twitter:description" content="iwasscammed helps you with the latest information on how to report scams & frauds so you can report & recover funds easily" />
      {/* <meta property="og:image" content={imageUrl || siteData.socialBanner} />

      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleName} />
      <meta property="og:description" content={description} />
     

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={siteData.websiteUrl} />
      <meta property="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={titleName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} /> */}
    </Head>
    <Toaster position="top-center" reverseOrder={false} />
    <Navbar />

    <div className="relative overflow-hidden mt-16 bg-white">
        <div className="absolute inset-y-0 w-full" aria-hidden="true">
          <div className="relative h-screen">
            <svg
              className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
            </svg>
            <svg
              className="h-full absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
            </svg>
          </div>
        </div>

        <div className="h-full relative pt-0 pb-6 sm:pb-6">

          <div className="h-full flex items-center justify-center mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-5xl">
                <span className="block">Spot, Report, Protect: Your Anti-Fraud Companion.</span>
                {/* <span className="block text-gray-800">= Superscribe</span> */}
              </h1>
    <p className="mt-3 max-w-md mx-auto text-base font-medium text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              iwasscammed.org helps your report any type of fraud let it be credit card, UPI or bank fraud. We also help you protect yourself from fraud by providing you with the latest fraud news and tips to protect yourself from fraud. 
              </p>

              <div id="notify" className="flex items-center justify-center mt-5 text-sm font-medium text-gray-600">
                <div className="hidden w-[30%] xl:flex border border-gray-400 rounded-xl p-2 items-center justify-center">
                <p className="mx-4 ">🔒 Step by Step Guide </p>
                <p className="mx-4 ">⚡ Free Forever  </p>
                </div>
              </div>

                  <div className="flex items-center justify-center my-8">
                  <div className=" xl:w-11/12 w-full ">
                  <img src={'https://cdn.statically.io/img/i.imgur.com/zTCbdcf.png'} width={1080} height={720} alt={'Banner Image'} />
                  </div>
                  </div>
            
            </div>
          </div>
        </div>

      </div>
                    <hr />

       <div id="features" className="bg-gray-100 py-16">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 border text-2xl border-gray-300 rounded-md flex items-center justify-center">
                <BsFillLightningChargeFill color="black"/>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Step by Step Guide to Report Fraud  
                </h2>
                <p className="mt-4 text-lg text-gray-700">Caught in a scam? We&apos;ve got your back! Our website is all about making it easy for you to report credit card, UPI, and bank scams. No need for complicated steps – we&apos;ve created a straightforward guide just for you. Whether you&apos;re new to reporting or looking for quick answers, we&apos;re here to support you. Let&apos;s join hands to outsmart scams and protect each other!
                </p>
                <div className="mt-6">
                  <Link
                    prefetch={false}
                    href="/start"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-700"
                  >
                    Report Fraud
                  </Link>
                </div>
              </div>
            </div>
          
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                width={1080}
                height={720}
                src={'https://cdn.statically.io/img/i.imgur.com/O1FC1ad.jpeg'}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
              <span className="h-12 w-12 border text-2xl border-gray-300 rounded-md flex items-center justify-center">
              <TbFishHook color="black"/>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Latest Info to Protect Yourself from Fraud
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                Discover a fast and easy way to report scams on our website. We&apos;re here to help you if you&apos;ve been scammed with credit cards, UPI, or bank-related frauds. Our site is designed to make reporting simple. It&apos;s like a helpful guide that shows you what to do step by step. Stay safe and let&apos;s fight scams together! 
                </p>
                <div className="mt-6">
                  <Link
                    prefetch={false}
                    href="/start"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-700"
                  >
                    Report Scam
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                height={720}
                width={1080}
                src={'https://cdn.statically.io/img/i.imgur.com/swiO0WC.jpeg'}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* <Footer /> */}
    
    </div>
  )
}


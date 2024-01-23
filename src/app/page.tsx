'use client'
import React, { useEffect, useState } from 'react'
import RangeSlider from './components/RangeSlider'
import Chart from './components/Chart'
import useSWR from 'swr'


const fetcher = (args: any) => fetch(args).then(res => res.json())

export default function Home() {
  let [display, setDisplay] = useState(false)
  let [range, setRange] = useState(0)


  const { data, error, isLoading } = useSWR('https://stockanalysis-production.up.railway.app/', fetcher)


  console.log(data, error, isLoading, 'kitana')

  function showMenu() {
    setDisplay(!display)
  }

  let riskScore;
  const [rangeValues, setRangeValues] = useState<any>([])

  useEffect(() => {
    if (isLoading == false) {
      [riskScore] = data?.filter((val: any) => val.RiskScore == range);
      let newValue = Object.values(riskScore)
      setRangeValues(newValue.filter(val => typeof val !== 'string'))

    }
  }, [range, data])


  function setSlider(val: number) {
    setRange(val)
  }



  return (
    <main className='h-[300vh] '>
      <header className='flex  justify-between px-10 py-5'>
        <span className='font-bold text-pretty' id='logo'>ATAfrica</span>
        <nav className='relative basis-0 lg:basis-[60%] md:static'>
          <button onClick={showMenu} className="hamburger flex lg:hidden">
            <span className='invisible'>menu</span>
            <span></span><span></span>
          </button>
          <ul className={`bg-white   w-3/4  justify-evenly  flex right-0 ${display ? 'fixed mobilemenu pl-10  flex-col' : 'hidden'}`}>
            <li>Capital Investment</li>
            <li>Financing</li>
            <li>Trading Services</li>
            <li>Find Broker</li>
            <li>Portfolio</li>
          </ul>
          <ul className={`justify-evenly hidden lg:flex`}>
            <li>Capital Investment</li>
            <li>Financing</li>
            <li>Trading Services</li>
            <li>Find Broker</li>
            <li>Portfolio</li>
          </ul>
        </nav>
      </header>
      <section className='px-10 min-h-[90svh] flex justify-center items-center flex-col text-center '>
        <h1 className=' text-5xl md:text-7xl font-bold pt-20 '>Invest in <span className='introtext'>low-risk, high <br className='hidden md:inline' /> reward</span> stocks</h1>
        <p className='text-base md:text-2xl leading-10 md:leading-relaxed'>Get the best rates and profits investing with ATAfrica</p>
        <div className='leading-relaxed mt-4'><button className='bg-blue-700 text-white/80 p-4 text-xl md:px-6 font-semibold rounded-xl'>Get Started</button></div>
      </section>

      <section className="info flex flex-col justify-center items-center px-10">
        <h2 className='font-bold text-3xl'>Why Invest with us?</h2>
        <div className="card-wrapper my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card justify-center p-10 flex flex-col  rounded-3xl bg-blue-200">
            <span className='inline-block cardtext font-bold p-4 mb-5 text-6xl'>1</span>
            <span className='block text-2xl md:text-3xl'>We have the best leverage management to allow you carry on great investment</span>
          </div>
          <div className="card p-10 flex flex-col  justify-center  rounded-3xl bg-emerald-200">
            <span className='inline-block cardtext font-bold p-4 mb-5 text-6xl'>2</span>
            <span className='block text-2xl md:text-3xl'>We are always up to date with the latest occurence to help you invest in the best stocks</span>
          </div>
          <div className="card p-10 flex flex-col  rounded-3xl bg-teal-400">
            <span className='inline-block cardtext font-bold p-4 mb-5 text-6xl'>3</span>
            <span className='block text-2xl md:text-3xl'>We have a good pay out system</span>
          </div>
        </div>
      </section>
      <section className="risk-analysis  min-h-[100vh] gap-10 flex flex-col items-center  justify-center">
        <RangeSlider value={range} onChange={setSlider} />
        <div className="w-[70%] mx-auto">
          <Chart chartData={rangeValues} />
          <div className='flex gap-10 my-5 '>
            <div className='flex gap-3'><span>Tbills</span><span>0%</span> </div>
            <div className='flex gap-3'><span>Alternative</span><span>0%</span></div>
          </div>
        </div>
      </section>
      <section className="subscribe flex flex-col justify-center items-center">
        <div className='flex justify-center flex-col leading-relaxed w-[90svw] md:w-[70svw]  my-20 p-10 bg-[#726dff] items-center rounded-2xl'>
          <h2 className='font-semibold text-2xl'>Like real time stock info? </h2>
          <p className='text-lg'>Enter your mail and we will send them your way</p>
          <div className='w-5/6 md:w-4/6 flex my-5 md:bg-white flex-col md:flex-row gap-3 rounded-full'>
            <input type="text" placeholder='Enter Email address' className='px-4 py-3 md:bg-transparent md:w-[85%] rounded outline-none border-none' name="" id="" />
            <button className='text-white bg-blue-700 rounded-full px-4 py-2 '>Subscribe</button>
          </div>
          <p className='text-center'>Your privacy is important to us, so we will never spam you or share your info with third parties. Take a look at our privacy policy. You can unsubscribe at any time.</p>
        </div>
      </section>
      <footer>
        <div className='flex justify-evenly p-10 gap-10 flex-wrap'>
          <div className="logo font-bold">ATAfrica</div>
          <div>
            <p className='font-semibold mb-3 text-xl'>Investing</p>
            <ul className='flex flex-col '>
              <li className='mb-3'>Automated Investing</li>
              <li className='mb-3'>Stock Investing</li>
              <li className='mb-3'>Explore all investments</li>
              <li className='mb-3'>Retirement</li>
              <li className='mb-3'>College</li>
              <li className='mb-3'>Tax loss Harvesting</li>
              <li className='mb-3'>White papers</li>
            </ul>
          </div>
          <div>
            <p className='font-semibold mb-3 text-xl'>Learn</p>
            <ul className='flex flex-col '>
              <li className='mb-3'>Blog</li>
              <li className='mb-3'>Help Center</li>
              <li className='mb-3'>Home Planning Guide</li>
              <li className='mb-3'>Financial Health Guide</li>
              <li className='mb-3'>Equity and IPO Guide</li>
              <li className='mb-3'>IRA Contributions Calculator</li>
            </ul>
          </div>
          <div className="about">
            <p className='font-semibold mb-3 text-xl'>About</p>
            <ul className='flex flex-col '>
              <li className='mb-3'>About Us</li>
              <li className='mb-3'>Newsroom</li>
              <li className='mb-3'>Reviews</li>
              <li className='mb-3'>Careers</li>
              <li className='mb-3'>Legal</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}

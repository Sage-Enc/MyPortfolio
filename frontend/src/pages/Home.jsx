import React from 'react'
import rotatingBanner from '../assets/PortfolioBannerElement.png'
import bitmoji from '../assets/BitMeditate.png'

function Home() {
  return (
    <div>
        <div id='banner' className='font-SourceCodePro bg-[#222327] border-b-2 border-neutral-600 text-[#E5E5E5]  sm:flex  sm:flex-row-reverse sm:justify-center'>
        <div id="bannerLeft" className='relative sm:w-2/5 sm:pt-4'>
          <img src={rotatingBanner} alt="" className='rotateAnimation w-full h-auto' />
          <img src={bitmoji} className='floatAnimation absolute top-14 left-11 w-5/6' />
        </div>
        <div id="bannerRight" className='sm:w-2/5'>
        <br className='hidden sm:block' />
        <br className='hidden lg:block' />
        <br className='hidden lg:block' />
        <br className='hidden xl:block' />
          <p className='text-justify text-4xl m-auto sm:relative sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
            &lt;&gt; <br />
            Hello <span className='text-[#6343A3] font-semibold'>World</span>, <br />
            I am <span className='text-[#6343A3] font-semibold'>Rutveek</span> <br />
            aka <span className='text-[#6343A3] font-semibold'>SAGE</span> <br />
            &lt;/&gt;
          </p> 
          <br />
          <p className='text-justify sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            {/* &lt;&gt; */}
            <br />Your <span className='text-[#6343A3] font-semibold'>WebDev</span> Partner <br />
            {/* &lt;/&gt; */}
          </p>
          <br className='hidden xl:block' />
          <br className='hidden xl:block' />
          <br />
          {/* <div className='animated-text'>
            <p></p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
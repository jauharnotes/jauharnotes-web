import React from 'react'
import Layout from '../components/Layout'

function contact() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full mt-20 text-center">
        <h2 className='font-bold text-2xl lg:text-3xl'>Get in touch</h2>
        <p className='max-w-2xl leading-relaxed mt-4'>If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below or send an email to jauharnotes@gmail.com and ~let's talk.</p>
      </div>

      <div className="mt-10 lg:mt-20 flex flex-wrap justify-center gap-14 md:mx-14 lg:flex-nowrap">
        <div className="mt-6 flex w-full flex-row items-center justify-center h-[500px]">
          <form className='flex flex-col gap-4 w-[500px]'>
            <input type="text" name='name' placeholder='Your Name' className='px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'/>
            <input type="email" name='email' placeholder='Your Email' className='px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer'/>
            <p className="invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.</p>
            <textarea name="message" id="message" cols={30} rows={10} placeholder='Your Message...' className='px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'/>
            <button className="flex justify-around items-center gap-3 bg-base hover:bg-[#094B49] active:bg-[#04302e] focus:outline-none focus:ring focus:ring-[#055e59] px-3 py-2 rounded-md font-bold text-white w-72">
              Send
              <svg width="101" height="16" viewBox="0 0 101 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M99.5 7.83315L2 7.83315M99.5 7.83315L93.6668 1.99998M99.5 7.83315L93.6668 13.6665" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </form>
        </div>

        <div className="mt-6 flex w-full flex-col items-center lg:items-start justify-center">
          <iframe className='mx-4 lg:mx-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.217426442578!2d106.83591831527181!3d-6.365901564046742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec139b9eae79%3A0xd3318d3768c807f5!2sJl.%20Karya%20Bakti%203%2C%20Pondok%20Cina%2C%20Kecamatan%20Beji%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016424!5e0!3m2!1sid!2sid!4v1652022328390!5m2!1sid!2sid" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade'></iframe>

          <h2 className='uppercase font-bold mt-6 mb-2'>Depok - Jawa Barat, Indonesia</h2>
          <p>Jl. Karya Bakti 3  RT 02/01 Beji Depok</p>
        </div>
      </div>
    </Layout>
  )
}

export default contact

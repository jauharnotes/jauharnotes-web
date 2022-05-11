import React from 'react'
import DetailPorto from '../components/DetailPorto'
import Layout from '../components/Layout'
import TechnicalSheet from '../components/TechnicalSheet'
import { data } from '../data'

function detail() {
  return (
    <Layout>
      <div className="flex h-[750px] items-center justify-center">
        <div className="w-full flex-col items-center justify-center text-center md:px-[120px]">
          <div className="mt-7 flex w-full items-center justify-between px-4 py-2">
            <a
              href="#"
              className="font-bold flex items-center gap-3 rounded-md bg-base px-6 py-2 text-xs text-slate-300 transition-all duration-200 ease-out hover:scale-x-110 hover:bg-[#094B49] md:text-sm"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.087 2H28V9.91304M14.4348 4.26087H2V28H25.7391V15.5652L14.4348 4.26087ZM25.7391 4.26087L13.3043 16.6957L25.7391 4.26087Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              VISIT THE WEBSITE
            </a>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.jauharnotes.com/detail" target='_blank' className='transition-all ease-out delay-150 hover:scale-125'>
              <img
                src="/img/icons/facebook-color.svg"
                alt="facebook icon"
                className="h-auto w-5 md:w-8"
              />
              </a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.jauharnotes.com/detail&title=&summary=&source=" target='_blank' className='transition-all ease-out delay-150 hover:scale-125'>
              <img
                src="/img/icons/linkedin-logo.svg"
                alt="linkedin icon"
                className="h-auto w-5 md:w-8"
              />
              </a>
              <a href="https://twitter.com/intent/tweet?text=https%3A//www.jauharnotes.com/detail" target='_blank' className='transition-all ease-out delay-150 hover:scale-125'>
              <img
                src="/img/icons/twitter-color.svg"
                alt="twitter icon"
                className="h-auto w-5 md:w-8"
              />
              </a>
            </div>
          </div>
          <div className='h-[76vh] justify-center gap-4 lg:overflow-auto scrollbar-hide hover:scrollbar-default px-6'>
            <DetailPorto link={data[0].link} img={data[0].img} />
            <TechnicalSheet />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default detail

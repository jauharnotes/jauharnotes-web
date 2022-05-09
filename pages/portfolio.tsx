import React from 'react'
import Layout from '../components/Layout'
import Product from '../components/Product'
import { data } from '../data'

function portfolio() {
  return (
    <Layout>
      <div className="px-6">
        <h2 className="mt-14 text-center text-2xl font-bold lg:text-3xl">
          My Portfolio
        </h2>
        <div className="flex h-[76vh] flex-wrap justify-center gap-4 lg:overflow-auto pt-10">
          {data.map((item: any) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default portfolio

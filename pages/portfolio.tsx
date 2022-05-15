import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import PortoImage from '../components/PortoImage'
import { data } from '../data'
import { AnimatePresence, motion } from 'framer-motion'

function portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio &mdash; jauharnotes</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6"
        >
          <h2 className="mt-14 mb-4 text-center text-2xl font-bold lg:text-3xl">
            My Portfolio
          </h2>
          <div className="flex h-[76vh] flex-wrap justify-center gap-4 pt-10 scrollbar-hide hover:scrollbar-default lg:overflow-auto">
            {data.map((item: any) => (
              <PortoImage key={item.id} img={item.img} link={item.link} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default portfolio

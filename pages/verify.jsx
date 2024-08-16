import React, { useEffect, useState } from 'react'
import createProduct from '../stripe/createProduct'
import { demodedicated } from '../data/demo'
import Head from 'next/head'

const Verifying = () => {
  const createProductFunc = async item => {
    await createProduct(item)
  }
  // const [called, setCalled] = useState(1);
  // useEffect(() => {
  //   console.log(demodedicated.length, "length")
  //   demodedicated?.slice(40,50).map((item) => {
  //     createProductFunc(item);
  //   });
  // });

  return (
    <>
      <Head>
        <title>Verification QuantVPS</title>
      </Head>
      <p>Hello</p>
    </>
  )
}

export default Verifying

import React, { useEffect } from 'react'
import { getActiveServers } from '@/datawagon'
import { useState } from 'react'
import helpStripe from '@/stripe/helpers'

const Connect = () => {
  throw 'enough' /*
  const [serversFull, setServersFull] = useState([]);
  const [services, setServices] = useState([]);
  const [handle, setHandle] = useState([]);
  useEffect(() => {
    (async () => {
      return await getActiveServers();
    })().then(setServersFull)
  }, [])

  useEffect(() => {
    if (serversFull?.products?.product?.length > 0) {
      const all = []
      serversFull.products.product.forEach(srv => {
        all.push({ serviceid: srv.id, orderid: srv.orderid, ip: srv.dedicatedip, status: srv.status })
      })
      setServices(all)
    }
  }, [serversFull])

  useEffect(() => {
    if (services) {
      const all = []
      Promise.all(services.map(async srv => {
        const { data } = await helpStripe.subscriptions.search({
          query: `metadata[\'orderid\']:\'${srv.orderid}\'`,
        })
        return data.length > 0 ? { srv, data: data.map(v => ({ id: v.id, metadata: v.metadata })) } : null
      })).then(v => v ? setHandle(v) : null)
    }
  }, [services])

  useEffect(() => {
    if (handle.length > 0) {
      // console.log({ handle })
      handle.filter(v => v).forEach(async item => {
        const meta = { ip: item.srv.ip, status: item.srv.status, serviceid: item.srv.serviceid }
        item.data.forEach(async sub => {
        console.log(await helpStripe.subscriptions.update(sub.id, { metadata: { ...meta, ...sub.metadata } }))
          // console.log({ id: sub.id, metadata: { ...meta, ...sub.metadata } })
        })
      });
    }
  }, [handle])

  return <p>{JSON.stringify({ handle })}</p>*/
}

export default Connect

'use client'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { boot, Intercom, show, shutdown, update } from '@intercom/messenger-js-sdk'
import { MyContext } from '@/pages/_app'

const getHash = async () => {
  const response = await fetch('/api/hash', {method: 'POST'})
  return await response.json()
}

const openChat = () => {
  window.Intercom ? window.Intercom('show') : show()
}

const IntercomProvider = ({ children }) => {
  const app_id = process.env.NEXT_PUBLIC_INTERCOM_APP_ID
  const { thisUser } = useContext(MyContext)
  const { user_hash, clerk_id: user_id, email } = thisUser ?? {}
  const [hash, setHash] = useState(null)

  const loadIntercom = useCallback(
    user_hash => {
      if (hash === null && !user_hash) {
        Intercom({ app_id })
        setHash('')
      } else if (user_hash && hash == '') {
        shutdown()
        boot({ user_hash, user_id, email, app_id })
        setHash(user_hash)
        update()
      }
    },
    [app_id, email, hash, user_id]
  )
  useEffect(() => {
    loadIntercom(user_hash)
  }, [loadIntercom, user_hash])

  return <>{children}</>
}

export { IntercomProvider, getHash, openChat }

import { GoogleTagManager } from '@next/third-parties/google'
import React from 'react'

export default function TagMan() {
  const GTMID = process.env.NEXT_PUBLIC_GTMID
  const DEBUG = process.env.NEXT_PUBLIC_GTMDEBUG ? { debug: true } : {}
  return <GoogleTagManager gtmId={GTMID} {...DEBUG} />
}

import React, { useContext, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { MyContext } from '@/pages/_app'
import Link from 'next/link'

const Tabs = () => {
  const router = useRouter()
  const { pathname } = router
  const routeWithoutSlash = pathname.substring(1)
  const { allMySevers, currentServer } = useContext(MyContext)
  const [translateD, setTranslateD] = useState('')
  const [translateDH, setTranslateDH] = useState('')
  const [widthT, setWidthT] = useState('100px')
  const [hoverOnlySection, setHoverOnlySection] = useState(false)

  const tabRef = useRef()

  const commonLinkCls =
    'text-[14px] text-nowrap cursor-pointer py-[16px] px-[12px]'
  const opacityLinkCls =
    allMySevers?.length > 0 && currentServer?.ourServer?.status === 'active'
      ? commonLinkCls
      : 'text-[14px] opacity-50 text-nowrap py-[16px] px-[12px]'

  const navLinks = [
    { name: 'Overview', path: '/dashboard', cls: commonLinkCls },
    {
      name: 'Control Panel',
      path: '/dashboard/control-panel',
      cls: opacityLinkCls
    },
    { name: 'Backups', path: '/dashboard/backups', cls: opacityLinkCls },
    { name: 'Monitoring', path: '/dashboard/monitoring', cls: opacityLinkCls },
    {
      name: 'Deploy New Server',
      path: '/dashboard/order-new-server',
      cls: commonLinkCls
    },
    { name: 'Billing', path: '/dashboard/billing', cls: commonLinkCls },
    { name: 'Support', path: '/dashboard/support', cls: commonLinkCls }
  ]

  useEffect(() => {
    const item = tabRef.current
    const handleEnter = evt => {
      if (evt.target.tagName === 'A') {
        const rect = evt.target.getBoundingClientRect()
        setTranslateDH(rect.left)
        setWidthT(rect.width)
        setHoverOnlySection(true)
      }
    }
    const handleLeave = evt => {
      setHoverOnlySection(false)
      setTranslateD('')
      setTranslateDH('')
      setWidthT('100px')
    }
    if (item) {
      item.addEventListener('mouseover', handleEnter)
      item.addEventListener('mouseleave', handleLeave)
    }
    return () => {
      item.removeEventListener('mouseover', handleEnter)
      item.removeEventListener('mouseleave', handleLeave)
    }
  }, [tabRef])

  return (
    <div className='overflow-x-auto border-b' ref={tabRef}>
      <div className='px-[20px] w-full relative flex items-center gap-[14px] '>
        {/* TODO underline menu feature fix */}
        {translateD !== '' &&
          <div
            style={{ left: translateD, width: widthT }}
            className={
              'absolute bottom-0 transition-all duration-300 ease-in-out z-10 w-[100px] h-[2px] bg-main'
            }></div>
        }
        {translateDH !== '' && hoverOnlySection &&
          <div
            style={{ left: translateDH, width: widthT }}
            className={
              'absolute bottom-[7px] rounded-[4px] transition-all duration-300 ease-in-out -z-10  h-[35px] bg-opacity-50 bg-gray-200'
            }></div>
        }
        {navLinks.map((item, index) =>
          <Link
            key={index}
            href={item.path}
            className={item.cls + (item.path === pathname ? ' active' : '')}>
            {item.name}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Tabs

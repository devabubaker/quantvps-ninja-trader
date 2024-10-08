// TODO unused
import React from 'react'
import { Drawer } from 'vaul'
const CustomDrawer = ({
  children,
  className,
  showModal,
  setShowModal,
  onClose,
  preventDefaultClose
}) => {
  const closeModal = ({ dragged }) => {
    if (preventDefaultClose && !dragged) {
      return
    }
    // fire onClose event if provided
    onClose && onClose()

    // if setShowModal is defined, use it to close modal
    if (setShowModal) {
      setShowModal(false)
      // else, this is intercepting route @modal
    } else {
      router.back()
    }
  }
  return (
    <Drawer.Root
      open={setShowModal ? showModal : true}
      onOpenChange={open => {
        if (!open) {
          closeModal({ dragged: true })
        }
      }}>
      <Drawer.Overlay className='fixed inset-0 z-40 bg-gray-100 bg-opacity-10 backdrop-blur' />
      <Drawer.Portal>
        <Drawer.Content
          className={cn(
            'fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white',
            className
          )}>
          <div className='sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit'>
            <div className='my-3 h-1 w-12 rounded-full bg-gray-300' />
          </div>
          {children}
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default CustomDrawer

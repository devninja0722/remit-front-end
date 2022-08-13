import { Dialog, Transition } from '@headlessui/react'
import { classNames } from 'app/functions'
import React, { Fragment, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onDismiss: () => void
  minHeight?: number
  maxHeight?: number
  initialFocusRef?: React.RefObject<any>
  children?: React.ReactNode
  padding?: number
  minWidth?: number
  maxWidth?: number
  className?: string
  disableBackdrop?: boolean
}

export function applyModalFilter(isOpen: boolean) {
  if (isOpen)
    document.documentElement.classList.add('modal-open')
  else
    document.documentElement.classList.remove('modal-open')
}

export default function Modal({
  isOpen,
  onDismiss,
  minHeight = 0,
  maxHeight = 90,
  initialFocusRef,
  children,
  padding = 5,
  minWidth = 360,
  maxWidth = 420,
  className = '',
  disableBackdrop = false
}: ModalProps) {

  //@TODO: reverse this and add  backdrop-blur-md to Dialog and Dialog.Overlay when 'backdrop-filter' is widely supported.
  useEffect(() => {

    if (!disableBackdrop)
      applyModalFilter(isOpen)
  }, [isOpen, disableBackdrop])
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={onDismiss} className="fixed inset-0 z-10 overflow-y-hidden">
          <Dialog.Overlay className="fixed inset-0 bg-dark opacity-20 backdrop-blur-md backdrop-filter" />
          <div className="flex items-center justify-center h-screen px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="flex justify-center transition-all transform"
                style={{
                  width: 'auto',
                  minWidth: `${minWidth}px`,
                  maxWidth: `${maxWidth}px`,
                  padding: `${padding}px`
                }}
              >
                {/* <div className="w-full p-px rounded bg-gradient-to-r from-blue to-red"> */}
                <div className={classNames(
                  "w-full p-2 rounded-2.5 bg-white transition-all",
                  "text-primary",
                  className ?? '',
                )}
                >
                  <div className="grid justify-center w-full h-full px-2 py-2 pt-8 space-y-2 overflow-y-hidden text-center transition-all rounded-2" >
                    {children}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

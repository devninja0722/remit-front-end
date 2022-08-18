import React, { useState, useMemo } from 'react'
import Modal from 'app/components/Modal'
import Button from 'app/components/Button'
import { PlusIcon, XIcon } from '@heroicons/react/solid'

interface ConfirmationModalProps {
  isOpen: boolean
  caption: string
  content: string
  successCaption: string
  dismissCaption: string
  onSuccess: () => void
  onDismiss: () => void
}

const ConfirmationModal = ({
  isOpen,
  caption,
  content,
  successCaption,
  dismissCaption,
  onSuccess,
  onDismiss,
}: ConfirmationModalProps) => {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} className="w-96">
      <div className="flex items-center justify-between w-full px-4 py-4 font-bold text-md font-montserrat">
        <p>{caption}</p>
        <Button size='sm' variant='empty' onClick={onDismiss}><XIcon width={16} height={16} className="text-red" /></Button>
      </div>
      <hr className="border-t-1 border-stroke" />
      <div className="grid gap-4 p-2 text-xs font-montserrat md:text-sm">
        <div className="grid gap-2 p-2 font-semibold text-center md:gap-4" style={{ maxHeight: "640px", overflow: 'auto' }}>
          {content}
        </div>
        <div className="grid grid-cols-2 gap-2 px-2 pb-3.5">
          <Button onClick={onDismiss} className="grid !font-black" variant="outlined" color="red"><p className="font-bold">{dismissCaption}</p></Button>
          <Button onClick={onSuccess} className="grid ">{successCaption}</Button>
        </div>
      </div>
    </Modal >
  )
}

export default ConfirmationModal

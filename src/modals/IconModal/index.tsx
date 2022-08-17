import React, { useCallback, useEffect, useState } from 'react'

import Modal from 'app/components/Modal'
import Button from 'app/components/Button'

interface IconModalProps {
  isOpen: boolean
  onDismiss: () => void
  icon: JSX.Element,
  caption: string,
  content: string,
  button?: string
}

const IconModal = ({
  isOpen,
  onDismiss,
  icon,
  caption,
  content,
  button = "Done"
}: IconModalProps) => {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={75} maxWidth={20}>
      <div className="grid p-4 gap-2 text-center">
        <div className="mt-4" >{icon}</div>
        <div className="font-bold text-md font-montserrat">{caption}</div>
        <div className="text-sm font-montserrat">{content}</div>
        <Button size="sm" onClick={onDismiss} className="font-montserrat">{button}</Button>
      </div>
    </Modal>
  )
}

export default IconModal

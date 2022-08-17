import React, { useCallback, useEffect, useState } from 'react'

import Modal from 'app/components/Modal'
import Image from 'next/image'
import Button from 'app/components/Button'

interface PendingModalProps {
  isOpen: boolean
  onDismiss: () => void
  caption: string,
  content: string,
}

const PendingModal = ({
  isOpen,
  onDismiss,
  caption,
  content,
}: PendingModalProps) => {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={75} maxWidth={20}>
      <div className="grid p-4 gap-2 text-center">
        <div className="mt-4" ><Image src="/img/pending.svg" alt="pending" width={42} height={56} /></div>
        <div className="font-bold text-md font-montserrat">{caption}</div>
        <div className="text-sm font-montserrat">{content}</div>
        <Button size="sm" onClick={onDismiss} className="font-montserrat">Done</Button>
      </div>
    </Modal>
  )
}

export default PendingModal

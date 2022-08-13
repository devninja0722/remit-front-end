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
      <Image src="/img/pending.svg" alt="pending" width={42} height={56} />
      <div className="font-bold text-md font-montserrat">{caption}</div>
      <div className="text-sm font-montserrat">{content}</div>
      <Button size="sm" onClick={onDismiss} className="font-montserrat">Done</Button>
    </Modal>
  )
}

export default PendingModal

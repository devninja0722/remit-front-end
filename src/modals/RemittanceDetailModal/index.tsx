import React, { useState, useMemo, useEffect } from 'react'
import Modal from 'app/components/Modal'
import { STATUS, SUBORDERS } from 'app/constants/remittances'
import { classNames, formatWithCurrency } from 'app/functions'
import { DocumentTextIcon } from '@heroicons/react/outline'
import Button from 'app/components/Button'

interface RemittanceDetailModalProps {
  isOpen: boolean
  onDismiss: () => void
  orderId: string | number | null
}

const RemittanceDetailModal = ({
  isOpen,
  onDismiss,
  orderId,
}: RemittanceDetailModalProps) => {
  const [subOrders, setSubOrders] = useState<any>([])
  const [detailTimer, setDetailTimer] = useState({ h: 1, m: 0, s: 0 })

  const updateSubOrder = (id: any, status: string) => {
    console.log(id, status)
    const newOrders = [...subOrders]
    const order = newOrders.filter(item => item.id === id)
    if (order)
      order[0].confirmStatus = status
    setSubOrders(newOrders)
  }

  useEffect(() => {
    setSubOrders(SUBORDERS.filter(item => item.orderId.toString() === orderId?.toString()))
  }, [orderId])

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} className="min-w-60" maxWidth={800}>
      <div className="grid gap-4 p-4 text-xs font-montserrat md:text-sm">
        <div className="grid gap-2 p-2 font-semibold text-center md:gap-4" style={{ maxHeight: "640px", overflow: 'auto' }}>
          <div className="flex bg-gray px-3 py-3 text-sm !font-semibold rounded min-w-full w-fit">
            <div className="flex flex-1">
              <div className="flex items-center w-2/12 min-w-32"><p className="">Sub order ID</p></div>
              <div className="flex items-center w-1/12 min-w-24"><p className="">TXN type</p></div>
              <div className="flex items-center w-1/12 min-w-24"><p className="">Recipient</p></div>
              <div className="flex items-center w-1/12 min-w-28"><p className="">Bank</p></div>
              <div className="flex items-center w-3/12 min-w-44"><p className="">Beneficiary bank account</p></div>
              <div className="flex items-center w-2/12 min-w-32"><p className="">Transfer amount</p></div>
              <div className="flex items-center w-3/12 min-w-44"><p className="">Status</p></div>
              <div className="flex items-center w-1/12 min-w-24"><p className="">Time</p></div>
              <div className="flex items-center w-1/12 min-w-24"><p className="">Recipient</p></div>
              <div className="flex items-center min-w-48"><p className="">Confirm status</p></div>
            </div>
          </div>
          {subOrders.map((item: any, id: any) =>
            <div className="flex min-w-6 px-3 py-3 text-sm" key={id}>
              <div className="flex flex-1">
                <div className="flex items-center w-2/12 min-w-32"><p className="">{item.id}</p></div>
                <div className="flex items-center w-1/12 min-w-24"><p className="">{item.txnType}</p></div>
                <div className="flex items-center w-1/12 min-w-24"><p className="">{item.recipientName}</p></div>
                <div className="flex items-center w-1/12 min-w-28"><p className="">{item.bank}</p></div>
                <div className="flex items-center w-3/12 min-w-44"><p className="">{item.beneficiaryBankAccount}</p></div>
                <div className="flex items-center w-2/12 min-w-32"><p className="">{formatWithCurrency(item.transferAmount, item.transferCurrency)}</p></div>
                <div className="flex items-center w-3/12 min-w-44"><p className={classNames("text-xs px-1.5 py-0.5 rounded-md text-normal", item.status === STATUS.pending ? "text-warning bg-warning/20" : "")}>{item.status}</p></div>
                <div className="flex items-center w-1/12 min-w-24"><p className="">{detailTimer.h.toString().padStart(2, '0')} : {detailTimer.m.toString().padStart(2, '0')} : {detailTimer.s.toString().padStart(2, '0')}</p></div>
                <div className="flex items-center w-1/12 min-w-24"><p className="">{item.recipientStatus !== STATUS.none ? <DocumentTextIcon className="text-blue" width={24} /> : '-'}</p></div>
                <div className="flex items-center min-w-48">{item.confirmStatus === STATUS.none ? <div className='flex space-x-2'><Button size="sm" variant="empty" className="text-success font-semibold" onClick={() => updateSubOrder(item.id, STATUS.received)}>RECEIVED</Button><p className='text-disabled'>|</p><Button size="sm" variant="empty" color="red" className="font-semibold" onClick={() => updateSubOrder(item.id, STATUS.notReceived)}>NOT RECEIVED</Button></div> : <p className={classNames("px-1.5 rounded-md text-xs", item.confirmStatus === STATUS.received ? "text-success bg-success/20" : "text-red bg-red/20")}>{item.confirmStatus}</p>}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal >
  )
}

export default RemittanceDetailModal
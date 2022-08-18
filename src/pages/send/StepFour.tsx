import { DocumentTextIcon } from "@heroicons/react/outline"
import Button from "app/components/Button"
import { STATUS, DEPOSITS } from "app/constants/transactions"
import { classNames, formatWithCurrency } from "app/functions"
import ConfirmationModal from "app/modals/ConfirmationModal"
import IconModal from "app/modals/IconModal"
import Image from "next/image"
import { useState } from "react"

const StepFour = ({ handleMove }: any) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmTimer, setConfirmTimer] = useState({ h: 1, m: 0, s: 0 })
  const [deposits, setDeposits] = useState(DEPOSITS)

  const [selectedId, setSelectedId] = useState(-1)

  const updateDeposit = (id: number, status: string) => {
    const newDeposits = [...deposits];
    const deposit = newDeposits.find(item => item.id === id)
    if (deposit) {
      deposit.status = status
      deposit.confirmStatus = STATUS.confirmed
    }
    setDeposits(newDeposits)
  }

  return (
    <div className="flex flex-col h-full gap-4 lg:gap-6">
      <div className="flex items-center justify-between font-bold text-md lg:text-lg">
        <p>Confirmation</p>
        <div className="flex items-center space-x-1 text-base font-semibold lg:text-md">
          <Image src="/img/time-square.svg" width={24} height={24} alt="time" />
          <p>{confirmTimer.h.toString().padStart(2, '0')} : {confirmTimer.m.toString().padStart(2, '0')} : {confirmTimer.s.toString().padStart(2, '0')}</p>
        </div>
      </div>
      <div className="rounded border-1 border-stroke">
        <div className="grid gap-4 p-4 lg:p-6 lg:gap-6 text-primary">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between font-bold text-md lg:text-lg">
              <p>Funds deposit status</p>
            </div>
            <div className="bg-gray flex px-3 py-2 text-sm !font-semibold rounded">
              <div className="flex items-center w-1/12"><p className="">TXN Type</p></div>
              <div className="flex items-center w-2/12"><p className="">Depositer</p></div>
              <div className="flex items-center w-2/12"><p className="">Deposit Amount</p></div>
              <div className="flex items-center w-2/12"><p className="">Status</p></div>
              <div className="flex items-center w-2/12"><p className="">Time</p></div>
              <div className="flex items-center w-1/12"><p className="">Receipt</p></div>
              <div className="flex items-center w-2/12"><p className="">Confirm status</p></div>
            </div>
            {deposits.map((item, i) =>
              <div className="bg-white flex px-3 py-2 text-sm lg:text-base !font-semibold" key={i}>
                <div className="flex items-center w-1/12"><p className="text-sm text-success">{item.txnType}</p></div>
                <div className="flex items-center w-2/12"><p className="">{item.depositer}</p></div>
                <div className="flex items-center w-2/12"><p className="">{formatWithCurrency(item.depositAmount, item.currency)}</p></div>
                <div className="flex items-center w-2/12"><p className={classNames("text-xs px-1.5 py-0.5 rounded-md", item.status === STATUS.none ? "text-primary bg-none" : item.status === STATUS.received ? "text-success bg-success/20" : item.status === STATUS.notReceived ? "text-red bg-red/20" : item.status === STATUS.processing ? "text-dark-purple bg-gray-purple" : "text-disabled bg-disabled/20")}>{item.status === STATUS.none ? '-' : item.status}</p></div>
                <div className="flex items-center w-2/12"><p className="">{item.time !== STATUS.none ? `${item.time?.h.toString().padStart(2, '0')} : ${item.time?.m.toString().padStart(2, '0')} : ${item.time?.s.toString().padStart(2, '0')}` : '-'}</p></div>
                <div className="flex items-center w-1/12"><p className="">{item.receipt !== STATUS.none ? <DocumentTextIcon width={24} height={24} className="text-blue" /> : '-'}</p></div>
                <div className="flex items-center w-2/12"><p className={classNames("text-sm", item.confirmStatus === STATUS.none ? "text-primary" : item.confirmStatus === STATUS.appeal ? "text-success" : item.confirmStatus === STATUS.confirmed ? "text-disabled" : "")}>{item.confirmStatus ? (item.confirmStatus === STATUS.notConfirmed ? <Button variant="empty" size="sm" onClick={() => { setSelectedId(item.id), setConfirmOpen(true) }}>{item.confirmStatus}</Button> : item.confirmStatus) : '-'}</p></div>
              </div>
            )}
          </div>
          <div className="py-2 border-y-1 border-stroke">
            <div className="flex justify-between my-1 font-bold">
              <p>Total deposit</p><p className="text-md">{formatWithCurrency(100, "SGD")}</p>
            </div>
          </div>
          <div className="grid gap-2 text-xs font-semibold md:text-sm">
            <p><span className="text-red">*</span> The platform will continue to deposit funds for you, you can wait for updates on this page or go to the remittance history page to check the progress and confirm the deposit status</p>
            <p><span className="text-red">*</span> All funds will be deposited into the assigned beneficiary bank account within 1 hour, and any amount deposited that is not completed within 1 hour will be refunded to the remitters bank account</p>
          </div>
        </div>
        <div className="flex justify-between px-8 py-6 border-t-1 border-stroke">
          <Button variant="outlined" color="blue" size="sm" className="!px-8" onClick={() => handleMove(3)}>Back</Button>
          <Button variant="filled" color="blue" size="sm" className="!px-8" onClick={() => setModalOpen(true)}>Complete</Button>
        </div>
      </div>
      <IconModal isOpen={modalOpen} onDismiss={() => setModalOpen(false)} caption="Success" content="Fund deposit status are completed!" icon={<Image src="/img/icon/success.svg" width={72} height={72} alt="success" />} />
      <ConfirmationModal isOpen={confirmOpen} caption="Confirmation status" content="Attention! please check your account deposit status carefully before confirming" successCaption="Received" dismissCaption="Not received" onSuccess={() => { setConfirmOpen(false), updateDeposit(selectedId, STATUS.received) }} onDismiss={() => { setConfirmOpen(false), updateDeposit(selectedId, STATUS.notReceived) }} />
    </div>
  )
}

export default StepFour
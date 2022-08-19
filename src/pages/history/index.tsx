import Button from "app/components/Button"
import Container from "app/components/Container"
import RemittanceView from "app/features/history/RemittanceView"
import { formatWithCurrency } from "app/functions"
import IconModal from "app/modals/IconModal"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"

const RemittanceHistory = ({ handleMove }: any) => {
  const [modalOpen, setModalOpen] = useState(false)

  // const updateDeposit = (id: number, status: string) => {
  //   const newDeposits = [...deposits];
  //   const deposit = newDeposits.find(item => item.id === id)
  //   if (deposit) {
  //     deposit.status = status
  //     deposit.confirmStatus = STATUS.confirmed
  //   }
  //   setDeposits(newDeposits)
  // }

  return (
    <Container id="history-page" className="!border-0" maxWidth="7xl">
      <Head>
        <title key="title">Remitance History | RemitWise</title>
        <meta key="description" name="description" content="Remittance History RemitWise" />
      </Head>
      <div className="flex-col w-full h-screen px-4 pt-20 bg-white md:px-8 lg:flex lg:flex-row lg:pt-32">
        <div className="flex flex-col h-full gap-4 lg:gap-6">
          <div className="flex items-center justify-between font-bold text-md lg:text-lg">
            <p>Your remittance</p>
          </div>
          <div className="rounded border-1 border-stroke">
            <div className="grid gap-4 p-4 lg:p-6 lg:gap-6 text-primary">
              <RemittanceView />
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
          {/* <ConfirmationModal isOpen={confirmOpen} caption="Confirmation status" content="Attention! please check your account deposit status carefully before confirming" successCaption="Received" dismissCaption="Not received" onSuccess={() => { setConfirmOpen(false), updateDeposit(selectedId, STATUS.received) }} onDismiss={() => { setConfirmOpen(false), updateDeposit(selectedId, STATUS.notReceived) }} /> */}
        </div>
      </div>
    </Container>
  )
}

export default RemittanceHistory
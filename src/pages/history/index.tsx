import Button from "app/components/Button"
import Container from "app/components/Container"
import RemittanceView from "app/features/history/RemittanceView"
import AppealOrderModal from "app/modals/AppealOrderModal"
import Head from "next/head"
import { useState } from "react"

const RemittanceHistory = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Container id="history-page" className="!border-0" maxWidth="7xl">
      <Head>
        <title key="title">Remitance History | RemitWise</title>
        <meta key="description" name="description" content="Remittance History RemitWise" />
      </Head>
      <div className="flex-col w-full h-screen px-4 pt-20 bg-white md:px-8 lg:flex lg:flex-row lg:pt-32">
        <div className="flex flex-col w-full h-full gap-4 lg:gap-6">
          <div className="flex items-center justify-between font-bold text-md lg:text-lg">
            <p>Your remittance</p>
          </div>
          <div className="rounded border-1 border-stroke">
            <div className="grid gap-4 p-4 lg:p-6 lg:gap-6 text-primary">
              <RemittanceView />
              <div className="border-t-1 border-stroke py-4">
                <Button size="sm" className="w-28" onClick={() => setOpen(true)}>Appeal</Button>
              </div>
            </div>
          </div>
          <AppealOrderModal isOpen={isOpen} onSuccess={() => setOpen(false)} onDismiss={() => setOpen(false)} />
        </div>
      </div>
    </Container>
  )
}

export default RemittanceHistory
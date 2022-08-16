import { CheckIcon } from "@heroicons/react/solid"
import Container from "app/components/Container"
import { SEND_STEPS } from "app/constants/steps"
import { classNames } from "app/functions"
import Head from "next/head"
import { useState } from "react"

const SendMoney = () => {
  const [step, setStep] = useState(1)

  return (
    <Container id="send-page" className="!border-0" maxWidth="7xl">
      <Head>
        <title key="title">Send Money | RemitWise</title>
        <meta key="description" name="description" content="Send Money RemitWise" />
      </Head>
      <div className="flex w-full h-screen bg-white pt-12 lg:pt-20">
        <div className="min-w-80 border-r border-stroke bg-white pt-10">
          <hr className="w-60 border-stroke rotate-90 origin-left translate-x-6 translate-y-6" />
          <div className="grid gap-6">
            {SEND_STEPS.map((item, index) =>
              <div key={index} className="z-10">
                <div className="flex items-center space-x-4">
                  <div className={classNames("flex w-12 h-12 justify-center items-center p-2 rounded-full", step === index + 1 ? "bg-light-green" : step > index + 1 ? "bg-transparent" : "bg-transparent")}>
                    <div className={classNames("flex w-8 h-8 justify-center items-center rounded-full font-bold", step === index + 1 ? "bg-success text-white" : step > index + 1 ? "bg-white text-success border-success border-2" : "bg-stroke text-disabled")}>
                      {step <= index + 1 ? index + 1 : <CheckIcon width={18} />}
                    </div>
                  </div>
                  <p className={classNames(step === index + 1 ? "font-bold" : step > index + 1 ? "font-semibold" : "font-normal")}>{item.title}</p>
                </div>
                <p className="ml-16 h-4 text-sm -mt-2">{step > index + 1 ? item.message : ""}</p>
              </div>
            )}
          </div>
          <hr className="w-full border-stroke my-6" />
          <div className="grid uppercase font-semibold">
            <p className="text-sm text-disabled">24 Hour Limit</p>
            <p className="text-base text-primary">$ 1,000,000 OF $ 1,000,000 REMAINING</p>
          </div>
        </div>
        <div className="bg-disabled w-full">

        </div>
      </div>
    </Container>
  )
}

export default SendMoney
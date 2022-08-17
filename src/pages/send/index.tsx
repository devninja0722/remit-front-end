import { CheckIcon } from "@heroicons/react/solid"
import Container from "app/components/Container"
import { SEND_STEPS } from "app/constants/steps"
import { classNames } from "app/functions"
import Head from "next/head"
import { useEffect, useState } from "react"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"

const SendMoney = () => {
  const [step, setStep] = useState(1)
  const [wndWidth, setWndWidth] = useState(innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWndWidth(innerWidth)
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container id="send-page" className="!border-0" maxWidth="7xl">
      <Head>
        <title key="title">Send Money | RemitWise</title>
        <meta key="description" name="description" content="Send Money RemitWise" />
      </Head>
      <div className="flex-col lg:flex lg:flex-row w-full h-screen bg-white pt-6 lg:pt-20">
        <div className="lg:min-w-80 h-36 lg:h-full border-b lg:border-r border-stroke bg-white pt-10 overflow-hidden">
          <div className="lg:translate-x-0" style={{ translate: wndWidth >= 1024 ? 0 : `calc(${wndWidth / 2}px - ${9 + (step - 1) * 19.5}rem` }}>
            <hr className="w-[58.5rem] lg:w-60 border-stroke lg:rotate-90 origin-left translate-x-36 lg:translate-x-6 translate-y-6" />
            <div className="flex lg:grid gap-6">
              {SEND_STEPS.map((item, index) =>
                <div key={index} className="grid z-10">
                  <div className="grid lg:flex items-center justify-items-center gap-2 lg:gap-4">
                    <div className={classNames("flex w-12 h-12 justify-center items-center p-2 rounded-full", step === index + 1 ? "bg-light-green" : step > index + 1 ? "bg-transparent" : "bg-transparent")}>
                      <div className={classNames("flex w-8 h-8 justify-center items-center rounded-full font-bold", step === index + 1 ? "bg-success text-white" : step > index + 1 ? "bg-white text-success border-success border-2" : "bg-stroke text-disabled")}>
                        {step <= index + 1 ? index + 1 : <CheckIcon width={18} />}
                      </div>
                    </div>
                    <p className={classNames("w-72 text-center lg:text-left", step === index + 1 ? "font-bold" : step > index + 1 ? "font-semibold" : "font-normal")}>{item.title}</p>
                  </div>
                  <p className="lg:ml-16 h-4 text-sm lg:-mt-2 text-center lg:text-left">{step > index + 1 ? item.message : ""}</p>
                </div>
              )}
            </div>
          </div>
          <hr className="hidden lg:grid w-full border-t-1 border-stroke my-6" />
          <div className="hidden lg:grid uppercase font-semibold">
            <p className="text-sm text-disabled">24 Hour Limit</p>
            <p className="text-base text-primary">$ 1,000,000 OF $ 1,000,000 REMAINING</p>
          </div>
        </div>
        <div className="bg-white w-full p-6 md:p-8 lg:p-10">
          {step === 1 && <StepOne handleMove={setStep} />}
          {step === 2 && <StepTwo handleMove={setStep} />}
        </div>
        <div className="grid lg:hidden w-full px-6 md:px-8">
          <hr className="grid lg:hidden w-full border-t-1 border-stroke mb-4" />
          <div className="gridlg:hidden uppercase font-semibold">
            <p className="text-sm text-disabled">24 Hour Limit</p>
            <p className="text-sm md:text-base text-primary">$ 1,000,000 OF $ 1,000,000 REMAINING</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SendMoney
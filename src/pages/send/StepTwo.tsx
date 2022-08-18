import Button from "app/components/Button"
import { RECIPIENTS } from "app/constants/recipient"
import RecipientView from "app/features/send/RecipientView"
import Image from "next/image"
import { useState } from "react"

const StepTwo = ({ handleMove }: any) => {
  const [localTimer, setLocalTimer] = useState({ h: 1, m: 0, s: 0 })
  return (
    <div className="flex flex-col h-full gap-4 lg:gap-6">
      <div className="flex justify-between font-bold text-md lg:text-lg">
        <p>Local recipient</p>
        <div className="flex items-center space-x-1 text-base font-semibold lg:text-md">
          <Image src="/img/time-square.svg" width={24} height={24} alt="time" />
          <p>{localTimer.h.toString().padStart(2, '0')} : {localTimer.m.toString().padStart(2, '0')} : {localTimer.s.toString().padStart(2, '0')}</p>
        </div>
      </div>
      <div className="rounded border-1 border-stroke">
        <div className="grid gap-4 p-4 lg:p-6 lg:gap-6 text-primary">
          <div className="flex flex-col space-y-3">
            {RECIPIENTS.map((item, i) => <RecipientView key={i} data={item} />)}
          </div>
          <div className="grid gap-2 text-xs font-semibold md:text-sm">
            <p><span className="text-red">*</span> Please complate all transfer orders within 1 hour, orders not complate in more than one hour will be proccess by the system as a failure</p>
            <p><span className="text-red">*</span> Please upload transfer proof documents and size must be between 10KB and 2MB in jpg/jpeg/png/mp4/pdf format</p>
          </div>
        </div>
        <div className="flex justify-between px-8 py-6 border-t-1 border-stroke">
          <Button variant="outlined" color="blue" size="sm" className="!px-8" onClick={() => handleMove(1)}>Back</Button>
          <Button variant="filled" color="blue" size="sm" className="!px-8" onClick={() => handleMove(3)}>Continue</Button>
        </div>
      </div>
    </div>
  )
}

export default StepTwo
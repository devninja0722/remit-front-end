import Button from "app/components/Button"
import Image from "next/image"
import { useState } from "react"

const StepThree = ({ handleMove }: any) => {
  const [localTimer, setLocalTimer] = useState({ h: 1, m: 0, s: 0 })
  return (
    <div className="flex flex-col gap-4 lg:gap-6 h-full">
      <div className="flex justify-between text-md lg:text-lg font-bold">
        <p>Local recipient</p>
        <div className="flex text-base lg:text-md font-semibold items-center space-x-1">
          <Image src="/img/time-square.svg" width={24} height={24} alt="time" />
          <p>{localTimer.h.toString().padStart(2, '0')} : {localTimer.m.toString().padStart(2, '0')} : {localTimer.s.toString().padStart(2, '0')}</p>
        </div>
      </div>
      <div className="border-1 border-stroke rounded">
        <div className="grid p-4 lg:p-6 gap-4 lg:gap-6 text-primary">
          <div className="flex flex-col lg:flex-row space-x-0 space-y-4 lg:space-x-8 lg:space-y-0">
          </div>
          <div className="grid gap-2 font-semibold text-xs md:text-sm">
            <p><span className="text-red">*</span> Please complate all transfer orders within 1 hour, orders not complate in more than one hour will be proccess by the system as a failure</p>
            <p><span className="text-red">*</span> Please upload transfer proof documents and size must be between 10KB and 2MB in jpg/jpeg/png/mp4/pdf format</p>
          </div>
        </div>
        <div className="flex border-t-1 border-stroke justify-between px-8 py-6">
          <Button variant="outlined" color="blue" size="sm" className="!px-8" onClick={() => handleMove(2)}>Back</Button>
          <Button variant="filled" color="blue" size="sm" className="!px-8" onClick={() => handleMove(4)}>Continue</Button>
        </div>
      </div>
    </div>
  )
}

export default StepThree
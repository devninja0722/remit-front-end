import Button from "app/components/Button"
import Input from "app/components/Input"
import { CURRENCIES } from "app/constants/currencies"
import { useState } from "react"

const StepOne = () => {
  const [sendAmount, setSendAmount] = useState("0.00")
  const [sendCurrency, setSendCurrency] = useState(CURRENCIES[0])
  return (
    <div className="flex flex-col gap-6 h-full">
      <p className="text-lg font-bold">Transfer Amount</p>
      <div className="border border-stroke rounded">
        <div className="grid px-6 py-6 gap-2 text-primary">
          <div>
            Send
            <div className="bg-gray rounded h-20 mt-4 p-6">
              <Input.Currency value={sendAmount} currencyCode={sendCurrency} handleInput={setSendAmount} handleSelect={setSendCurrency} fontSize="16" />
            </div>
          </div>
        </div>
        <div className="flex border-t border-stroke justify-end px-8 py-6">
          <Button variant="filled" color="dark-blue" className="!px-8">Continue</Button>
        </div>
      </div>
    </div>
  )
}

export default StepOne
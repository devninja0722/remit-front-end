import Button from "app/components/Button"
import Input from "app/components/Input"
import { CURRENCIES } from "app/constants/currencies"
import { BANKS, Accounts } from "app/constants/banks"
import { useState } from "react"
import Select, { components } from "react-select"
import Image from "next/image"

var bankList: any[] = []
Accounts.map((item, i) => bankList.push({
  value: item.id,
  label: `${item.name} - ${item.bank} - ${item.currency} - ${item.id}`,
}))

const StepOne = () => {
  const [sendAmount, setSendAmount] = useState("0.00")
  const [sendCurrency, setSendCurrency] = useState(CURRENCIES[0])
  const [sendAccount, setSendAccount] = useState(bankList[0])
  const [receiveAmount, setReceiveAmount] = useState("0.00")
  const [receiveCurrency, setReceiveCurrency] = useState(CURRENCIES[0])
  const [receiveAccount, setReceiveAccount] = useState(bankList[0])

  return (
    <div className="flex flex-col gap-6 h-full">
      <p className="text-lg font-bold">Transfer Amount</p>
      <div className="border border-stroke rounded">
        <div className="grid px-6 py-6 gap-6 text-primary">
          <div>
            <p className="font-semibold">Send</p>
            <div className="grid gap-4 bg-gray rounded mt-4 p-6">
              <Input.Currency value={sendAmount} currencyCode={sendCurrency} handleInput={setSendAmount} handleSelect={setSendCurrency} fontSize="16" />
              <Select
                id="send-account" instanceId="send-account"
                defaultValue={sendAccount}
                options={bankList}
                components={{
                  Control: ({ children, ...rest }: any) => {
                    return (
                      <components.Control {...rest} className="p-1 pl-3">
                        <Image src={`/img/send/${Object.values(BANKS).filter(item => item.name === children[0].props.children[0].props.data.label.split(' - ')[1])[0].id}.svg`} alt="bank" width={34} height={24} /> {children}
                      </components.Control>
                    )
                  }
                }}
                onChange={(event: any) => {
                  setSendAccount(event.value)
                }}
              />
            </div>
          </div>
          <div>
            <p className="font-semibold">Received</p>
            <div className="grid gap-4 bg-gray rounded mt-4 p-6">
              <Input.Currency value={receiveAmount} currencyCode={receiveCurrency} handleInput={setReceiveAmount} handleSelect={setReceiveCurrency} fontSize="16" />
              <Select
                id="receive-account" instanceId="receive-account"
                defaultValue={receiveAccount}
                options={bankList}
                components={{
                  Control: ({ children, ...rest }: any) => (
                    <components.Control {...rest} className="p-1 pl-3">
                      <Image src={`/img/send/${Object.values(BANKS).filter(item => item.name === children[0].props.children[0].props.data.label.split(' - ')[1])[0].id}.svg`} alt="bank" width={34} height={24} /> {children}
                    </components.Control>
                  )
                }}
                onChange={(event: any) => {
                  setReceiveAccount(event.value)
                }}
              />
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
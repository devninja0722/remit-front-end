import Button from "app/components/Button"
import Input from "app/components/Input"
import { CURRENCIES } from "app/constants/currencies"
import { BANKS, Accounts } from "app/constants/banks"
import { useState } from "react"
import Select, { components } from "react-select"
import Image from "next/image"
import { ExclamationCircleIcon } from "@heroicons/react/outline"
import BankAccountModal from "app/modals/BankAccountModal"

var bankList: any[] = []
Accounts.map((item, i) => bankList.push({
  value: item.id,
  label: `${item.name} - ${item.bank} - ${item.currency} - ${item.id}`,
}))

const StepOne = ({ handleMove }: any) => {
  const [sendAmount, setSendAmount] = useState("0.00")
  const [sendCurrency, setSendCurrency] = useState(CURRENCIES[0])
  const [sendAccount, setSendAccount] = useState(bankList[0])
  const [receiveAmount, setReceiveAmount] = useState("0.00")
  const [receiveCurrency, setReceiveCurrency] = useState(CURRENCIES[0])
  const [receiveAccount, setReceiveAccount] = useState(bankList[0])

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4 lg:gap-6 h-full">
      <p className="text-md lg:text-lg font-bold">Transfer Amount</p>
      <div className="border-1 border-stroke rounded">
        <div className="grid p-4 lg:p-6 gap-4 lg:gap-6 text-primary">
          <div>
            <p className="font-semibold">Send</p>
            <div className="grid gap-2 lg:gap-4 bg-gray rounded mt-4 p-3 lg:p-6">
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
            <div className="grid gap-2 lg:gap-4 bg-gray rounded mt-4 p-3 lg:p-6">
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
          <div className="flex text-sm lg:text-base justify-between items-start">
            <p className="font-semibold">Exchange Rate</p>
            <div>
              <p className="font-bold text-right">1 CNY = 0,2000 SGD</p>
              <p className="text-xs lg:text-sm text-right">Locked-in 1 hour</p>
            </div>
          </div>
          <hr className="border-t-1 border-stroke" />
          <div className="flex text-xs lg:text-sm items-center"><ExclamationCircleIcon className="mr-2 w-4 h-4 text-blue" /> Bank account name must be match the platform authentication name</div>
        </div>
        <div className="flex border-t-1 border-stroke justify-end px-8 py-6">
          <Button variant="filled" color="blue" size="sm" className="!px-8" onClick={() => setModalOpen(true)}>Continue</Button>
        </div>
      </div>

      <BankAccountModal
        isOpen={modalOpen}
        onSuccess={() => handleMove(2)}
        onDismiss={() => setModalOpen(false)}
        caption="Create new bank account"
      />
    </div>
  )
}

export default StepOne
import Button from "app/components/Button"
import { STATUS, TRANSACTIONS, BENFICIARY } from "app/constants/transactions"
import { classNames, formatWithCurrency } from "app/functions"

const StepFour = ({ handleMove }: any) => {
  return (
    <div className="flex flex-col h-full gap-4 lg:gap-6">
      <div className="flex justify-between items-center font-bold text-md lg:text-lg">
        <p>Remittance details</p>
      </div>
      <div className="rounded border-1 border-stroke">
        <div className="grid gap-4 p-4 lg:p-6 lg:gap-6 text-primary">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center font-bold text-md lg:text-lg">
              <p>Local transfer history</p>
              <div className="flex text-sm lg:text-base font-semibold space-x-1"><p>TXN type :</p><p className="text-red">Transfer</p></div>
            </div>
            <div className="bg-gray flex px-3 py-2 text-sm lg:text-base !font-semibold rounded">
              <div className="flex w-5/12 lg:w-7/12"><p className="w-1/3">Local recipient</p><p className="w-2/3 hidden lg:flex">Local beneficiary bank account</p></div>
              <div className="flex w-7/12 lg:w-5/12"><p className="w-3/5">Total amount</p><p className="w-2/5">Status</p></div>
            </div>
            {TRANSACTIONS.map((item, i) =>
              <div className="bg-white flex px-3 py-2 text-sm lg:text-base !font-semibold" key={i}>
                <div className="grid lg:flex w-5/12 lg:w-7/12"><p className="w-1/3">{item.recipient}</p><p className="w-2/3">{item.bankAccount}</p></div>
                <div className="flex w-7/12 lg:w-5/12 items-center"><p className="w-3/5">{formatWithCurrency(item.totalAmount, item.currency)}</p><p className={classNames("text-center text-xs px-2.5 py-0.5 rounded-md", item.status === STATUS.success ? "bg-success/20 text-success" : "bg-gray text-secondary")}>{item.status}</p></div>
              </div>
            )}
          </div>
          <div className="border-t-1 border-stroke py-2">
            <div className="flex justify-between my-1 font-bold">
              <p>Total cost</p><p>{formatWithCurrency(3000, "CNY")}</p>
            </div>
            <div className="flex justify-between my-1 font-semibold">
              <p>Total to beneficiary bank account</p><p>{formatWithCurrency(1500, "SGD")}</p>
            </div>
          </div>
          <div className="border-t-1 border-stroke py-2">
            <div className="flex justify-between my-1 font-bold">
              <p>Exchange rate</p><p>{formatWithCurrency(1, "CNY")} = {formatWithCurrency(20000, "SGD")}</p>
            </div>
          </div>
          <div className={classNames("flex-col justify-between px-6 py-4 space-y-2 bg-gray border-stroke transition-all rounded-md")}>
            <div className="text-base lg:text-md font-bold">Beneficiary bank account</div>
            <div className="border-t-1 my-2 border-secondary/20"></div>
            <div className="flex justify-between text-sm lg:text-base">
              <p className="font-semibold">Name</p><p className="font-bold">{BENFICIARY.name}</p>
            </div>
            <div className="flex justify-between text-sm lg:text-base">
              <p className="font-semibold">Account number</p><p className="font-bold">{BENFICIARY.accountNumber}</p>
            </div>
            <div className="flex justify-between text-sm lg:text-base">
              <p className="font-semibold">Bank name</p><p className="font-bold">{BENFICIARY.bankName}</p>
            </div>
            <div className="flex justify-between text-sm lg:text-base">
              <p className="font-semibold">Swift code</p><p className="font-bold">{BENFICIARY.swiftCode}</p>
            </div>
            <div className="justify-between text-sm xs:grid md:flex lg:text-base">
              <p className="font-semibold">Issuing bank</p><p className="font-bold text-right">{BENFICIARY.issuingBank}</p>
            </div>
            <div className="justify-between text-sm xs:grid md:flex lg:text-base">
              <p className="font-semibold">Account owner address</p><p className="font-bold text-right">{BENFICIARY.ownerAddress}</p>
            </div>
            <div className="flex justify-between text-sm lg:text-base">
              <p className="font-semibold">Transfer amount</p><p className="font-bold">{formatWithCurrency(BENFICIARY.transferAmount, BENFICIARY.currency)}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-8 py-6 border-t-1 border-stroke">
          <Button variant="outlined" color="blue" size="sm" className="!px-8" onClick={() => handleMove(2)}>Back</Button>
          <Button variant="filled" color="blue" size="sm" className="!px-8" onClick={() => handleMove(4)}>Continue</Button>
        </div>
      </div>
    </div>
  )
}

export default StepFour
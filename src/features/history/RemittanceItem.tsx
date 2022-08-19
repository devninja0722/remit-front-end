import { ChevronDownIcon } from "@heroicons/react/solid"
import Button from "app/components/Button"
import { STATUS } from "app/constants/remittances"
import { classNames, formatWithCurrency } from "app/functions"
import { useEffect, useState } from "react"

interface RemittanceItemProps {
  item: {
    id: string,
    date: string,
    inOut: string,
    sentFrom: string,
    sentAmount: number,
    sentCurrency: string,
    recipient: string,
    recipientAmount: number,
    recipientCurrency: string,
    status: string,

    remittanceAccountName: string,
    remittanceBank: string,
    remittanceBankAccount: string,
    beneficiaryAccountName: string,
    beneficiaryBank: string,
    beneficiaryBankAccount: string
  }
}

const RemittanceItem = ({ item }: RemittanceItemProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const [colWidth, setColWidth] = useState<number | undefined>(0)

  useEffect(() => {
    const handleResize = () => {
      setColWidth(document.getElementById(item.id)?.clientWidth)
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [item.id]);

  return (
    <>
      <div className="bg-white flex justify-between items-center px-3 py-3 text-sm lg:text-base !font-semibold text-dark-blue min-w-full w-fit cursor-pointer" id={item.id} onClick={() => setCollapsed(!collapsed)}>
        <div className="flex flex-1">
          <div className="flex items-center w-1/12 min-w-24"><p className="text-sm text-primary">{item.id}</p></div>
          <div className="flex items-center min-w-32"><p className="">{item.date}</p></div>
          <div className="flex items-center w-1/12 min-w-16"><p className="text-success">{item.inOut}</p></div>
          <div className="flex items-center w-2/12 min-w-32"><p className="">{item.sentFrom}</p></div>
          <div className="flex items-center w-2/12 min-w-32"><p className="">{formatWithCurrency(item.sentAmount, item.sentCurrency)}</p></div>
          <div className="flex items-center w-1/12 min-w-36"><p className="">{item.recipient}</p></div>
          <div className="flex items-center w-2/12 min-w-32"><p className="">{formatWithCurrency(item.recipientAmount, item.recipientCurrency)}</p></div>
          <div className="flex items-center w-1/12 min-w-24"><p className={classNames("text-xs px-1.5 rounded-md", item.status === STATUS.delivery ? "text-success bg-success/20" : "text-dark-purple bg-gray-purple")}>{item.status}</p></div>
        </div>
        <div className="flex min-w-6"><ChevronDownIcon className={classNames("text-blue transition-all", collapsed ? "rotate-0" : "rotate-180")} width={18} height={18} /></div>
      </div>
      {!collapsed &&
        <div className="mx-3 overflow-auto" style={{ width: `calc(${colWidth}px - 1.5rem)` }}>
          <div className="flex bg-gray/60 px-4 py-2 md:py-4 text-sm !font-semibold min-w-full w-fit items-center">
            <div className="flex flex-1">
              <div className="flex items-center w-3/12 min-w-44"><p className="">Remittance account name</p></div>
              <div className="flex items-center w-2/12 min-w-36"><p className="">Remittance bank</p></div>
              <div className="flex items-center w-3/12 min-w-44"><p className="">Remittance bank account</p></div>
              <div className="flex items-center w-3/12 min-w-44"><p className="">Beneficiary account name</p></div>
              <div className="flex items-center w-2/12 min-w-36"><p className="">Beneficiary bank</p></div>
              <div className="flex items-center w-3/12 min-w-44"><p className="">Beneficiary bank account</p></div>
            </div>
            <div className="flex min-w-6">Details</div>
          </div>
          <div className="flex px-4 py-2 md:py-4 my-1 text-sm md:text-base !font-semibold min-w-full w-fit items-center text-primary">
            <div className="flex flex-1">
              <div className="flex items-center w-3/12 min-w-44"><p className="">{item.remittanceAccountName}</p></div>
              <div className="flex items-center w-2/12 min-w-36"><p className="">{item.remittanceBank}</p></div>
              <div className="flex items-center w-3/12 min-w-44"><p className="">{item.remittanceBankAccount}</p></div>
              <div className="flex items-center w-3/12 min-w-44"><p className="">{item.beneficiaryAccountName}</p></div>
              <div className="flex items-center w-2/12 min-w-36"><p className="">{item.beneficiaryBank}</p></div>
              <div className="flex items-center w-3/12 min-w-44"><p className="">{item.beneficiaryBankAccount}</p></div>
            </div>
            <div className="flex min-w-6"><Button size="sm" variant="empty">Details</Button></div>
          </div>
        </div>
      }
    </>
  )
}

export default RemittanceItem
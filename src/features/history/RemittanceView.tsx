import { SearchIcon } from "@heroicons/react/solid"
import Button from "app/components/Button"
import Input from "app/components/Input"
import NavLink from "app/components/NavLink"
import { REMITTANCES, STATUS } from "app/constants/remittances"
import { classNames } from "app/functions"
import RemittanceDetailModal from "app/modals/RemittanceDetailModal"
import { useEffect, useState } from "react"
import RemittanceHeader from "./RemittanceHeader"
import RemittanceItem from "./RemittanceItem"

const RemittanceView = () => {
  const [isOpen, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const [filterOption, setFilterOption] = useState(0)
  const [filterText, setFilterText] = useState("")
  const [filteredItems, setFilteredItems] = useState(REMITTANCES)

  const handleOpenDetailModal = (id: any) => {
    setSelectedId(id)
    setOpen(true)
  }

  useEffect(() => {
    setFilteredItems(REMITTANCES.filter(item => RegExp(["/*", STATUS.processing, STATUS.delivery][filterOption]).test(item.status)).filter(item => JSON.stringify(item).includes(filterText)))
  }, [filterOption, filterText])

  return (
    <>
      <div className="grid items-center min-w-full gap-2 p-2 font-bold transition-all rounded-md justtify-end md:justify-between md:flex bg-gray text-md lg:text-lg w-fit">
        <div className="flex space-x-4">
          <Button size="sm" color="dark-blue" variant={filterOption === 0 ? "filled" : "empty"} className={classNames("min-w-16 md:min-w-28 text-sm md:text-base font-semibold")} onClick={() => setFilterOption(0)}>All transfer</Button>
          <Button size="sm" color="dark-blue" variant={filterOption === 1 ? "filled" : "empty"} className={classNames("min-w-16 md:min-w-28 text-sm md:text-base font-semibold")} onClick={() => setFilterOption(1)}>In progress</Button>
          <Button size="sm" color="dark-blue" variant={filterOption === 2 ? "filled" : "empty"} className={classNames("min-w-16 md:min-w-28 text-sm md:text-base font-semibold")} onClick={() => setFilterOption(2)}>Delivered</Button>
        </div>
        <div className='flex justify-end align-middle'>
          <Input.Text value={filterText} handleInput={setFilterText} placeholder="Search" className="text-base font-semibold" />
          <Button variant="empty" size="sm" className="absolute bg-white m-[4px] mr-2 h-[30px] text-disabled/50 hover:text-disabled rounded-none"><SearchIcon width={24} /></Button>
        </div>
      </div>
      <div className="flex flex-col space-y-3 overflow-auto">
        <RemittanceHeader />
        {filteredItems.length ? filteredItems.map((item, i) =>
          <RemittanceItem key={i} item={item} handleDetail={handleOpenDetailModal} />
        ) : REMITTANCES.length ?
          <p className="p-4 font-semibold text-center text-disabled">No matching result!</p> :
          <div className="flex flex-col items-center p-4 space-y-4 font-semibold text-center text-disabled">
            <p>There is no record of any remittance yet!</p>
            <NavLink href="/send">
              <a id={`send-nav-link`}>
                <Button size="sm" className="w-32">Send money</Button>
              </a></NavLink>
          </div>
        }
      </div>
      <RemittanceDetailModal isOpen={isOpen} onDismiss={() => setOpen(false)} orderId={selectedId} />
    </>
  )
}

export default RemittanceView
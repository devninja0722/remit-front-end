import { SearchIcon } from "@heroicons/react/solid"
import Button from "app/components/Button"
import Input from "app/components/Input"
import { REMITTANCES } from "app/constants/remittances"
import { classNames } from "app/functions"
import { useState } from "react"
import RemittanceHeader from "./RemittanceHeader"
import RemittanceItem from "./RemittanceItem"

const RemittanceView = () => {
  const [filterOption, setFilterOption] = useState(0)
  const [filterText, setFilterText] = useState("")

  return (
    <div className="flex flex-col space-y-3 overflow-auto">
      <div className="flex items-center justify-between min-w-full p-2 font-bold rounded-md bg-gray text-md lg:text-lg w-fit">
        {/* <p>Funds deposit status</p> */}
        <div className="flex space-x-4">
          <Button size="sm" color="dark-blue" variant={filterOption === 0 ? "filled" : "empty"} className={classNames("min-w-28 text-base font-semibold")} onClick={() => setFilterOption(0)}>All transfer</Button>
          <Button size="sm" color="dark-blue" variant={filterOption === 1 ? "filled" : "empty"} className={classNames("min-w-28 text-base font-semibold")} onClick={() => setFilterOption(1)}>In progress</Button>
          <Button size="sm" color="dark-blue" variant={filterOption === 2 ? "filled" : "empty"} className={classNames("min-w-28 text-base font-semibold")} onClick={() => setFilterOption(2)}>Delivered</Button>
        </div>
        <div className='flex justify-end align-middle'>
          <Input.Text value={filterText} handleInput={setFilterText} placeholder="Search" className="text-base font-semibold" />
          <Button variant="empty" size="sm" className="absolute bg-white m-[4px] mr-2 h-[30px] text-disabled/50 hover:text-disabled rounded-none"><SearchIcon width={24} /></Button>
        </div>
      </div>
      <RemittanceHeader />
      {REMITTANCES.map((item, i) =>
        <RemittanceItem key={i} item={item} />
      )}
    </div>
  )
}

export default RemittanceView
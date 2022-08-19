import { REMITTANCES } from "app/constants/remittances"
import RemittanceHeader from "./RemittanceHeader"
import RemittanceItem from "./RemittanceItem"

const RemittanceView = () => {
  return (
    <div className="flex flex-col space-y-3 overflow-auto">
      <div className="flex items-center justify-between min-w-full font-bold text-md lg:text-lg w-fit">
        {/* <p>Funds deposit status</p> */}
      </div>
      <RemittanceHeader />
      {REMITTANCES.map((item, i) =>
        <RemittanceItem key={i} item={item} />
      )}
    </div>
  )
}

export default RemittanceView

const RemittanceHeader = () => {
  return (
    <div className="flex bg-gray px-3 py-2 text-sm !font-semibold rounded min-w-full w-fit">
      <div className="flex flex-1">
        <div className="flex items-center w-1/12 min-w-24"><p className="">Order ID</p></div>
        <div className="flex items-center min-w-32"><p className="">Date</p></div>
        <div className="flex items-center w-1/12 min-w-16"><p className="">IN / OUT</p></div>
        <div className="flex items-center w-2/12 min-w-32"><p className="">Sent from</p></div>
        <div className="flex items-center w-2/12 min-w-32"><p className="">Sent amount</p></div>
        <div className="flex items-center w-1/12 min-w-36"><p className="">Receipt</p></div>
        <div className="flex items-center w-2/12 min-w-32"><p className="">Receipt Amount</p></div>
        <div className="flex items-center w-1/12 min-w-24"><p className="">Status</p></div>
      </div>
      <div className="flex min-w-6"></div>
    </div>
  )
}

export default RemittanceHeader
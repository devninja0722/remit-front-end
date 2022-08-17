import { ChevronDownIcon, CloudUploadIcon, PlusIcon, XIcon } from "@heroicons/react/solid"
import Button from "app/components/Button"
import { STATUS } from "app/constants/recipient"
import { classNames } from "app/functions"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useDropzone } from "react-dropzone"

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderTopWidth: 1,
  borderColor: '#ECECEC',
  color: '#0595F8',
  outline: 'none',
  cursor: 'pointer',
  transition: 'all .24s ease-in-out'
}

const focusedStyle = {
  backgroundColor: '#0595F833',
}

const RecipientView = ({ data, i }: any) => {
  const [isOpen, setOpen] = useState(false)
  const [recipientTimer, setRecipientTimer] = useState({ h: 1, m: 0, s: 0 })

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isFocused,
  } = useDropzone({
    accept: {
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      'image/png': ['.png'],
      'video/mp4': ['.mp4'],
      'application/pdf': ['.pdf'],
    },
    minSize: 10000,
    maxSize: 50000000
  })

  const [fileList, setFileList] = useState<File[]>(acceptedFiles)

  useEffect(() => {
    setFileList(acceptedFiles)
  }, [acceptedFiles])

  const handleRemoveFile = useCallback((i: number) => {
    var tempList = fileList;
    setFileList(fileList.filter((item) => item.name !== tempList[i].name))
  }, [fileList])

  const itemList = fileList.map((file: any, i) =>
    <div key={i} className={classNames("flex flex-col")}>
      <div className="flex">
        <div className="flex w-full space-x-4 text-blue">
          <div className="flex items-center justify-center text-xs uppercase rounded-full border-1 border-blue w-9 h-9"><p>{file.type.split('/')[1]}</p></div>
          <div className="flex-col">
            <p className="text-sm font-semibold">{file.name}</p>
            <p className="text-xs">{Number(file.size / 1000).toFixed(2)} KB</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {data.status === STATUS.failure ? <Button size="sm" className="w-40 h-9">Agree and retransfer</Button> : <p className="text-sm text-success">Transferred</p>}<Button size="sm" className="h-9" variant="outlined">Appeal</Button><Button variant="empty" color="red" onClick={() => { handleRemoveFile(i) }}><XIcon width={12} /></Button>
        </div>
      </div>
    </div>)

  const style: any = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {})
  }), [isFocused]);

  return (
    <div className="grid">
      <div className={classNames("flex justify-between bg-gray rounded-md px-3 lg:px-6 py-2 lg:py-4 pr-2 lg:pr-4 border-1 border-stroke transition-all", isOpen ? "rounded-b-none" : "")} onClick={() => setOpen(!isOpen)}>
        <div className="flex items-center space-x-2 text-sm md:text-base text-blue"><p>Recipient: </p><p className="font-semibold uppercase">{data.name}</p></div>
        <div className="flex items-center space-x-3">
          {data.status === STATUS.pending && <p>{recipientTimer.h.toString().padStart(2, '0')} : {recipientTimer.m.toString().padStart(2, '0')} : {recipientTimer.s.toString().padStart(2, '0')}</p>
          }
          <p className={classNames("text-xs px-2 py-1 rounded-md max-w-24 md:max-w-lg truncate font-semibold", data.status === STATUS.success ? "text-success bg-success/20" : data.status === STATUS.pending ? "text-warning bg-warning/20" : "text-red bg-red/20")}><span>{data.status}</span></p>
          <ChevronDownIcon width={18} height={18} className={classNames("transition-all", isOpen ? "rotate-180" : "rotate-0")} />
        </div>
      </div>
      <div className={classNames("flex-col justify-between px-6 py-4 border-1 border-y-0 border-stroke transition-all", isOpen ? "rounded-t-none flex" : "hidden")}>
        <div className="flex justify-between text-sm lg:text-base">
          <p className="font-semibold">Name</p><p className="font-bold">{data.name}</p>
        </div>
        <div className="flex justify-between text-sm lg:text-base">
          <p className="font-semibold">Account number</p><p className="font-bold">{data.accountNumber}</p>
        </div>
        <div className="flex justify-between text-sm lg:text-base">
          <p className="font-semibold">Bank name</p><p className="font-bold">{data.bankName}</p>
        </div>
        <div className="flex justify-between text-sm lg:text-base">
          <p className="font-semibold">Swift code</p><p className="font-bold">{data.swiftCode}</p>
        </div>
        <div className="justify-between text-sm xs:grid md:flex lg:text-base">
          <p className="font-semibold">Issuing bank</p><p className="font-bold text-right">{data.issuingBank}</p>
        </div>
        <div className="justify-between text-sm xs:grid md:flex lg:text-base">
          <p className="font-semibold">Account owner address</p><p className="font-bold text-right">{data.ownerAddress}</p>
        </div>
        <div className="flex justify-between text-sm lg:text-base">
          <p className="font-semibold">Transfer amount</p><p className="font-bold">{data.currency} {data.transferAmount}</p>
        </div>
      </div>
      <div className={classNames("flex-col rounded-b-md border-1 border-stroke px-4 py-2", isOpen ? "flex" : "hidden")}>
        <div className="items-center pt-2 pb-4 pr-2 space-y-2 overflow-auto max-h-36">{itemList.length ? itemList : <p className="flex items-center justify-center h-full p-4 text-sm text-center">No files uploaded</p>}</div>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <div className="flex p-6 space-x-2 text-xs justify-items-center md:text-sm text-primary">
            <PlusIcon className="text-white rounded bg-blue" width={18} />
            <p className="font-bold text-center text-blue">Add file</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RecipientView
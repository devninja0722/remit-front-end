import { CloudUploadIcon } from "@heroicons/react/outline"
import Button from "app/components/Button"
import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useDropzone } from "react-dropzone"
import { classNames } from "app/functions"
import { XIcon } from "@heroicons/react/solid"
import IconModal from "app/modals/IconModal"

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#0595F8',
  borderStyle: 'dashed',
  color: '#0595F8',
  outline: 'none',
  cursor: 'pointer',
  transition: 'all .24s ease-in-out'
}

const focusedStyle = {
  backgroundColor: '#0595F833',
}

const StepZero = ({ handleMove }: any) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviewed, setReviewed] = useState(true)

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
      {i > 0 && <hr className="border-t-1 border-stroke w-full my-2" />}
      <div className="flex">
        <div className="flex space-x-4 w-full">
          <div className="flex uppercase border-1 border-blue text-blue text-xs w-9 h-9 justify-center items-center rounded-full"><p>{file.type.split('/')[1]}</p></div>
          <div className="flex-col">
            <p className="text-sm font-semibold">{file.name}</p>
            <p className="text-xs">{Number(file.size / 1000).toFixed(2)} KB</p>
          </div>
        </div>
        <Button variant="empty" color="red" onClick={() => { handleRemoveFile(i) }}><XIcon width={12} /></Button>
      </div>
    </div>)

  const style: any = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {})
  }), [isFocused]);

  return (
    <div className="flex flex-col gap-4 lg:gap-6 h-full">
      <p className="text-md lg:text-lg font-bold">Bank statements</p>
      <div className="border-1 border-stroke rounded">
        <div className="grid p-4 lg:p-6 gap-4 lg:gap-6 text-primary">
          <div className="flex flex-col lg:flex-row space-x-0 space-y-4 lg:space-x-8 lg:space-y-0">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <div className="grid justify-items-center gap-2 lg:h-80 p-8 lg:p-16 text-xs md:text-sm text-primary">
                <CloudUploadIcon className="text-blue" width={72} />
                <p className="font-bold text-center">Drop and drag file</p>
                <p className="text-sm md:text-base">Or</p>
                <Button variant="filled" size="sm" className="!px-8">Browse</Button>
              </div>
            </div>
            <div className="lg:min-w-60 lg:w-7/12 max-h-40 lg:max-h-80 overflow-auto px-4 py-2 items-center">{itemList.length ? itemList : <p className="text-center text-sm flex items-center justify-center h-full">No files uploaded</p>}</div>
          </div>
          <div className="grid gap-2 font-semibold text-xs md:text-sm">
            <p><span className="text-red">*</span> Upload the bank statement of the remittance bank account within the last 20 days and video recording of the remittance bank account flow</p>
            <p><span className="text-red">*</span> No new funds has been transferred to the remittance bank account for at least 10 days, except for wealth management redemptions</p>
            <p><span className="text-red">*</span> Size must be between 10KB and 50MB in jpg/jpeg/mp4/pdf/png format</p>
          </div>
        </div>
        <div className="flex border-t-1 border-stroke justify-between px-8 py-6">
          <Button variant="outlined" color="blue" size="sm" className="!px-8" onClick={() => handleMove(1)}>Back</Button>
          <Button variant="filled" color="blue" size="sm" className="!px-8" onClick={() => { setReviewed(!reviewed); setModalOpen(true) }}>Continue</Button>
        </div>
      </div>
      <IconModal
        isOpen={modalOpen}
        onDismiss={() => { setModalOpen(false); reviewed && handleMove(2) }}
        icon={<Image src={`/img/icon/${reviewed ? "success" : "pending"}.svg`} alt="icon" width={reviewed ? 72 : 42} height={reviewed ? 72 : 56} />}
        caption={reviewed ? "Success" : "Under review"}
        content={reviewed ? "Awesome your bank statement has been reviewed and approved!" : "Your bank statement is being reviewed please do not close this page"}
      />
    </div>
  )
}

export default StepZero
import { PlusIcon, XIcon } from "@heroicons/react/solid"
import Button from "app/components/Button"
import Input from "app/components/Input"
import Modal from "app/components/Modal"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useDropzone } from "react-dropzone"
import { classNames } from "app/functions"

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#0595F888',
  borderStyle: 'dashed',
  color: '#0595F8',
  outline: 'none',
  cursor: 'pointer',
  transition: 'all .24s ease-in-out'
}

const focusedStyle = {
  backgroundColor: '#0595F833',
}

interface AppealOrderModalProps {
  isOpen: boolean
  onSuccess: () => void
  onDismiss: () => void
}

const AppealOrderModal = ({
  isOpen,
  onSuccess,
  onDismiss
}: AppealOrderModalProps) => {
  const [orderId, setOrderId] = useState("")
  const [description, setDescription] = useState("")

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
    <Modal isOpen={isOpen} onDismiss={onDismiss} className="min-w-60" maxWidth={800}>
      <div className="flex items-center justify-between w-full px-4 py-4 font-bold text-md font-montserrat">
        <p>Appeal</p>
        <Button size='sm' variant='empty' onClick={onDismiss}><XIcon width={16} height={16} className="text-red" /></Button>
      </div>
      <hr className="border-t-1 border-stroke" />
      <div className="grid gap-4 p-2 text-xs font-montserrat md:text-sm">
        <div className="grid gap-4 p-2 font-semibold text-left md:gap-4" style={{ maxHeight: "640px", overflow: 'auto' }}>
          <div className="grid gap-2">
            <p>Order ID</p>
            <Input.Number value={orderId} handleInput={setOrderId} placeholder="Order ID" />
          </div>
          <div className="grid gap-2">
            <p>Description</p>
            <Input.TextArea value={description} handleInput={setDescription} placeholder="Please describe the problem you are experiencing" />
          </div>
          <div className="grid gap-2">
            <p>Documents</p>
            <div className="flex flex-col space-y-2">
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <div className="flex items-center space-x-2 my-2 text-blue text-xs md:text-sm">
                  <PlusIcon width={24} className="text-blue" /><p className=" font-bold text-center">Choose file</p>
                </div>
              </div>
              <div className="py-2 mx-1 items-center">{itemList.length ? itemList : <p className="text-center text-sm flex items-center justify-center h-full">No files uploaded</p>}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 px-2 pb-3.5">
          <Button onClick={onDismiss} className="grid !font-black" variant="empty" color="red"><p className="font-bold">Cancel</p></Button>
          <Button onClick={onSuccess} className="grid ">Submit</Button>
        </div>
      </div>
    </Modal >
  )
}

export default AppealOrderModal
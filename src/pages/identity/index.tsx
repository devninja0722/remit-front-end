import type { NextPage } from "next"
import { useState, useMemo } from "react"
import Select from "react-select"
import Head from "next/head"
import Container from "app/components/Container"
import Input from "app/components/Input"
import Button from "app/components/Button"
import PendingModal from "app/modals/PendingModal"
import Image from "next/image"
import { CheckIcon, PlusIcon, XIcon } from "@heroicons/react/solid"
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#CED9FF',
  backgroundColor: '#F9FAFF',
  color: '#0595F8',
  outline: 'none',
  transition: 'all .24s ease-in-out'
};

const focusedStyle = {
  backgroundColor: '#0595F833',
};

const IdentifyVerification: NextPage = () => {
  const langOptions = [
    { value: "en", label: "English" },
    { value: "zh", label: "中文" },
  ]
  const defaultLang = langOptions[0]

  const jobOptions = [
    { value: "ceo", label: "CEO" },
    { value: "cto", label: "CTO" },
    { value: "engineer", label: "Engineer" },
    { value: "developer", label: "Developer" },
    { value: "intern", label: "Intern" },
  ]

  const [name, setName] = useState("")
  const [zhName, setZhName] = useState("")
  const [employer, setEmployer] = useState("")
  const [address, setAddress] = useState("")

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isFocused,
  } = useDropzone({ accept: { 'video/*': [] } });

  const files = acceptedFiles.map((file: any, i) => <li key={i}>{file.path}</li>);

  const style: any = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {})
  }), [
    isFocused
  ]);

  const [step, setStep] = useState(1)

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Container id="identity-page" maxWidth="full">
      <Head>
        <title>Identify Verification | RemitWise</title>
        <meta name="description" content="RemitWise" />
      </Head>

      <div className="px-8 py-6 transition-all md:px-16 md:py-12 lg:px-36 lg:py-16">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold font-poppins md:text-xl">Logo</div>
          <Select id="lang-select" instanceId="lang-select" options={langOptions} defaultValue={defaultLang} className="text-xs font-semibold w-36 md:text-sm" />
        </div>
        {step === 1 && <div className="grid space-y-6 rounded-2.5 bg-white min-w-80 md:max-w-2xl lg:max-w-3xl mx-auto mt-16 md:mt-16 p-8">
          <div className="grid py-2 space-y-4 md:space-y-10">
            <div className="text-xl font-semibold md:text-2xl">Identify Verification</div>
            <div className="grid space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="grid space-y-3 text-xs md:text-sm">
                  <label>Full english name</label>
                  <Input.Text value={name} handleInput={setName} placeholder="Enter your full name" />
                </div>
                <div className="grid space-y-3 text-xs md:text-sm">
                  <label>Full chinese name (if applicable)</label>
                  <Input.Text value={zhName} handleInput={setZhName} placeholder="Enter your chinese name" />
                </div>
                <div className="grid space-y-3 text-xs md:text-sm">
                  <label>Employer</label>
                  <Input.Text value={employer} handleInput={setEmployer} placeholder="Your employer" />
                </div>
                <div className="grid space-y-3 text-xs md:text-sm">
                  <label>Job title</label>
                  <Select id="job-select" instanceId="job-select" options={jobOptions} defaultValue={jobOptions[0]} className="text-xs font-semibold md:text-sm" placeholder="Job title" />
                </div>
                <div className="grid col-span-1 space-y-3 text-xs md:text-sm md:col-span-2">
                  <label>Address of residence</label>
                  <Input.TextArea value={address} handleInput={setAddress} placeholder="Your residence address" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:flex md:justify-end">
            <Button className="w-full md:w-1/5" size="sm" disabled={name === "" || employer === "" || address === ""} onClick={() => setStep(2)}>Continue</Button>
          </div>
        </div>}
        {step === 2 && <div className="grid space-y-6 rounded-2.5 bg-white max-w-xs md:max-w-md lg:max-w-lg mx-auto mt-4 md:mt-8 p-8">
          <div className="grid py-2 space-y-4 md:space-y-10">
            <div className="text-xl font-semibold md:text-2xl">Identify Verification</div>
            <div className="grid space-y-5">
              <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-2">
                <div className="grid space-y-1 text-xs md:text-sm">
                  <Image src="/img/identity/good.svg" alt="good" width={162} height={118} />
                  <label className="grid space-y-3 text-xs md:text-sm">Good</label>
                </div>
                <div className="grid space-y-1 text-xs md:text-sm">
                  <Image src="/img/identity/cropped.svg" alt="cropped" width={162} height={118} />
                  <label className="grid space-y-3 text-xs md:text-sm">Not cropped</label>
                </div>
                <div className="grid space-y-1 text-xs md:text-sm">
                  <Image src="/img/identity/blurred.svg" alt="blurred" width={162} height={118} />
                  <label className="grid space-y-3 text-xs md:text-sm">Not blur</label>
                </div>
                <div className="grid space-y-1 text-xs md:text-sm">
                  <Image src="/img/identity/reflected.svg" alt="reflected" width={162} height={118} />
                  <label className="grid space-y-3 text-xs md:text-sm">Not reflective</label>
                </div>
              </div>
              <div className="grid space-y-3 text-xs md:text-sm">
                <label className="flex items-center gap-2"><CheckIcon className="text-success" width={18.5} /> Government-issued</label>
                <label className="flex items-center gap-2"><CheckIcon className="text-success" width={18.5} /> Original fullsize, unedited document</label>
                <label className="flex items-center gap-2"><CheckIcon className="text-success" width={18.5} /> Place documents against a single-coloured background</label>
                <label className="flex items-center gap-2"><CheckIcon className="text-success" width={18.5} /> Readable, well-lit, coloured images</label>
                <label className="flex items-center gap-2"><XIcon className="text-red" width={18.5} /> No black and white images</label>
                <label className="flex items-center gap-2"><XIcon className="text-red" width={18.5} /> No edited or expired documents</label>
              </div>
              <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-2">
                <div className="grid space-y-3 text-xs md:text-sm">
                  <Image src="/img/identity/front.svg" alt="front" width={170} height={107} />
                  <label className="grid space-y-3 text-xs md:text-sm">Front side</label>
                </div>
                <div className="grid space-y-3 text-xs md:text-sm">
                  <Image src="/img/identity/back.svg" alt="back" width={170} height={107} />
                  <label className="grid space-y-3 text-xs md:text-sm">Back side</label>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:flex">
            <Button className="w-full" size="sm" onClick={() => setStep(3)}>Continue</Button>
          </div>
        </div>}
        {step === 3 && <div className="grid space-y-6 rounded-2.5 bg-white max-w-xs md:max-w-md lg:max-w-lg mx-auto mt-16 md:mt-16 p-8">
          <div className="grid py-2 space-y-4 md:space-y-10">
            <div className="text-xl font-semibold md:text-2xl">Identify Verification</div>
            <div className="grid space-y-5">
              <label className="font-bold">Record video yourself</label>
              <div className="grid space-y-3 text-xs font-semibold md:text-sm">
                <label className="flex items-center gap-2"><CheckIcon className="p-0.5 rounded-md text-white bg-success" width={18.5} /> Take a video of yourself with neutral expression</label>
                <label className="flex items-center gap-2"><CheckIcon className="p-0.5 rounded-md text-white bg-success" width={18.5} /> Make sure your whole face is visible, centred</label>
                <label className="flex items-center gap-2"><CheckIcon className="p-0.5 rounded-md text-white bg-success" width={18.5} /> Video length should be greater than 10 second</label>
              </div>
            </div>
          </div>

          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <div className="grid items-center h-40 p-12 text-xs font-bold tracking-wider text-center justify-items-center md:text-sm"><PlusIcon className="text-blue" width={32} /> Choose a file</div>
          </div>
          <ul>{files}</ul>

          <div className="grid md:flex">
            <Button className="w-full" size="sm" onClick={() => setModalOpen(true)}>Continue</Button>
          </div>

          <PendingModal
            isOpen={modalOpen}
            onDismiss={() => setModalOpen(false)}
            caption="Under review"
            content="You will receive an email once verifiction complete. Estimated completed date: 2022-06-17 (UTC)"
          />
        </div>}
      </div>
    </Container>
  )
}

export default IdentifyVerification

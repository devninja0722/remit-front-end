import type { NextPage } from "next"
import { useState, useCallback } from "react"
import Select from "react-select"
import Head from "next/head"
import Container from "app/components/Container"
import Input from "app/components/Input"
import Button from "app/components/Button"
import Tooltip from 'app/components/Tooltip'
import { escapeRegExp } from 'app/functions'

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

  return (
    <Container id="identify-verification" className="h-[100vh]" maxWidth="full">
      <Head>
        <title>Identify Verification | RemitWise</title>
        <meta name="description" content="RemitWise" />
      </Head>

      <div className="h-full px-8 py-6 transition-all bg-center bg-cover bg-compound md:px-16 md:py-12 lg:px-36 lg:py-16">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold font-poppins md:text-xl">Logo</div>
          <Select id="lang-select" instanceId="lang-select" options={langOptions} defaultValue={defaultLang} className="text-xs font-semibold w-36 md:text-sm" />
        </div>
        <div className="grid space-y-6 rounded-2.5 bg-white min-w-80 md:max-w-2xl lg:max-w-3xl mx-auto mt-16 md:mt-16 p-8">
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
            <Button className="w-full md:w-1/5" size="sm">Continue</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default IdentifyVerification

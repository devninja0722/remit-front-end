import type { NextPage } from "next"
import { useState, useRef } from "react"
import Select from "react-select"
import Head from "next/head"
import Container from "app/components/Container"
import Input from "app/components/Input"
import { escapeRegExp } from 'app/functions'

const SignIn: NextPage = () => {
  const langOptions = [
    { id: 1, value: "en", label: "English" },
    { id: 2, value: "zh", label: "中文" },
  ]
  const defaultLang = langOptions[0]

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)

  const handleEmailInput = (value: string) => {
    setEmail(value);
    setEmailError(!(value === '' || /^[a-zA-Z0-9]+((?:\.[a-zA-Z0-9]+?)?)+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(escapeRegExp(value))))
  }

  return (
    <Container id="dashboard-page" className="h-[100vh]" maxWidth="full">
      <Head>
        <title>SignIn | RemitWise</title>
        <meta name="description" content="RemitWise" />
      </Head>

      <div className="bg-cover bg-center bg-compound h-full px-36 py-16">
        <div className="flex justify-between align-center">
          <div className="font-poppins text-xl">Logo</div>
          <Select id="lang-select" instanceId="lang-select" options={langOptions} defaultValue={defaultLang} className="w-36" />
        </div>
        <div className="rounded-2.5 bg-white w-1/2 min-w-96 mx-auto mt-8 p-8">
          <div className="grid py-2 space-y-10">
            <div className="text-2xl">Logo</div>
            <div className="grid space-y-5">
              <div className="grid space-y-5">
                <div className="grid space-y-3">
                  <label>Email</label>
                  <Input.Email value={email} handleInput={handleEmailInput} error={emailError} />
                </div>
                <div className="grid space-y-3">
                  <label>Password</label>
                  <input />
                  <div className="text-sm text-blue">
                    Forget password?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SignIn

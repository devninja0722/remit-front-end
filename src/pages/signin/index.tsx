import type { NextPage } from "next"
import { useState } from "react"
import Select from "react-select"
import Head from "next/head"
import Container from "app/components/Container"
import Input from "app/components/Input"
import Button from "app/components/Button"
import { escapeRegExp } from 'app/functions'

const SignIn: NextPage = () => {
  const langOptions = [
    { value: "en", label: "English" },
    { value: "zh", label: "中文" },
  ]
  const defaultLang = langOptions[0]

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [twoFA, setTwoFA] = useState("")
  const [twoFAError, setTwoFAError] = useState(false)
  const [password, setPassword] = useState("")

  const handleEmailInput = (value: string) => {
    setEmail(value);
    setEmailError(!(value === '' || /^[a-zA-Z0-9]+((?:\.[a-zA-Z0-9]+?)?)+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(escapeRegExp(value))))
  }

  const handleTwoFAInput = (value: string) => {
    setTwoFA(value);
    setTwoFAError(!(value === '' || /^[0-9][0-9][0-9][0-9][0-9][0-9]$/.test(escapeRegExp(value))))
  }

  const handlePasswordInput = (value: string) => {
    setPassword(value);
  }

  return (
    <Container id="dashboard-page" className="h-[100vh]" maxWidth="full">
      <Head>
        <title>SignIn | RemitWise</title>
        <meta name="description" content="RemitWise" />
      </Head>

      <div className="bg-cover bg-center bg-compound h-full px-8 py-8 md:px-16 md:py-12 lg:px-36 lg:py-16 transition-all">
        <div className="flex justify-between align-center">
          <div className="font-poppins text-lg md:text-xl font-semibold">Logo</div>
          <Select id="lang-select" instanceId="lang-select" options={langOptions} defaultValue={defaultLang} className="w-36 text-sm md:text-base font-semibold" />
        </div>
        <div className="grid space-y-6 rounded-2.5 bg-white w-80 md:w-96 mx-auto mt-20 md:mt-16 p-8">
          <div className="grid py-2 space-y-10">
            <div className="text-xl md:text-2xl font-semibold">Logo</div>
            <div className="grid space-y-5">
              <div className="grid space-y-5">
                <div className="grid space-y-3">
                  <label>Email</label>
                  <Input.Email value={email} handleInput={handleEmailInput} error={emailError} />
                </div>
                <div className="grid space-y-3">
                  <label>2 FA</label>
                  <Input.Number value={twoFA} handleInput={handleTwoFAInput} error={twoFAError} />
                </div>
                <div className="grid space-y-3">
                  <label>Password</label>
                  <Input.Password value={password} handleInput={handlePasswordInput} />
                  <div className="flex justify-end">
                    <Button variant="empty" color="blue" size="sm">Forget password?</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid space-y-5">
            <Button>Login</Button>
            <div className="flex justify-between text-xs md:text-sm px-2">
              <span>New account on RemitWise?</span>
              <Button variant="empty" color="blue" size="sm">Create new account</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SignIn

import type { NextPage } from "next"
import { useState } from "react"
import Select from "react-select"
import Head from "next/head"
import Container from "app/components/Container"
import Input from "app/components/Input"
import Button from "app/components/Button"
import { escapeRegExp } from 'app/functions'

const SignUp: NextPage = () => {
  const langOptions = [
    { value: "en", label: "English" },
    { value: "zh", label: "中文" },
  ]
  const defaultLang = langOptions[0]

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [emailCode, setEmailCode] = useState("")
  const [emailCodeError, setEmailCodeError] = useState(false)
  const [areaCode, setAreaCode] = useState("+1")
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState(false)
  const [phoneCode, setPhoneCode] = useState("")
  const [phoneCodeError, setPhoneCodeError] = useState(false)

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [refCode, setRefCode] = useState("")
  const [refCodeError, setRefCodeError] = useState(false)

  const handleEmailInput = (value: string) => {
    setEmail(value)
    setEmailError(!(value === '' || /^[a-zA-Z0-9]+((?:\.[a-zA-Z0-9]+?)?)+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(escapeRegExp(value))))
  }

  const handleEmailCodeInput = (value: string) => {
    setEmailCode(value)
    setEmailCodeError(!(value === '' || /^[0-9]{6}$/.test(escapeRegExp(value))))
  }

  const handleAreaCodeInput = (value: string) => {
    setAreaCode(value);
    setPhoneError(!(phone === '' || RegExp(`^[0-9]{${11 - value.length}}$`).test(escapeRegExp(phone))))
  }

  const handlePhoneInput = (value: string) => {
    setPhone(value)
    setPhoneError(!(value === '' || RegExp(`^[0-9]{${11 - areaCode.length}}$`).test(escapeRegExp(value))))
  }

  const handlePhoneCodeInput = (value: string) => {
    setPhoneCode(value)
    setPhoneCodeError(!(value === '' || /^[0-9]{10}$/.test(escapeRegExp(value))))
  }

  const handlePasswordInput = (value: string) => {
    setPassword(value)
    setPasswordError(confirmPassword !== value)
  }

  const handleConfirmPasswordInput = (value: string) => {
    setConfirmPassword(value)
    setPasswordError(password !== value)
  }

  const handleRefCodeInput = (value: string) => {
    setRefCode(value)
    setRefCodeError(!(value === '' || /^[0-9]{6}$/.test(escapeRegExp(value))))
  }

  return (
    <Container id="dashboard-page" className="h-[100vh]" maxWidth="full">
      <Head>
        <title>SignUp | RemitWise</title>
        <meta name="description" content="RemitWise" />
      </Head>

      <div className="bg-cover bg-center bg-compound h-full px-8 py-6 md:px-16 md:py-12 lg:px-36 lg:py-16 transition-all">
        <div className="flex justify-between align-center">
          <div className="font-poppins text-lg md:text-xl font-semibold">Logo</div>
          <Select id="lang-select" instanceId="lang-select" options={langOptions} defaultValue={defaultLang} className="w-36 text-sm md:text-base font-semibold" />
        </div>
        <div className="grid space-y-6 rounded-2.5 bg-white min-w-80 md:max-w-2xl lg:max-w-3xl mx-auto mt-4 md:mt-16 p-8">
          <div className="grid py-2 space-y-4 md:space-y-10">
            <div className="text-xl md:text-2xl font-semibold">Sign Up</div>
            <div className="grid space-y-5">
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                <div className="grid space-y-3 text-sm md:text-base">
                  <label>Email</label>
                  <Input.Email value={email} handleInput={handleEmailInput} error={emailError} hasControl />
                </div>
                <div className="grid space-y-3 text-sm md:text-base">
                  <label>Email Verification Code</label>
                  <Input.Number value={emailCode} handleInput={handleEmailCodeInput} error={emailCodeError} placeholder="123xxx" />
                </div>
                <div className="grid space-y-3 text-sm md:text-base">
                  <label>Phone</label>
                  <Input.Phone value={phone} areaCode={areaCode} handleSelect={handleAreaCodeInput} handleInput={handlePhoneInput} error={phoneError} hasControl />
                </div>
                <div className="grid space-y-3 text-sm md:text-base">
                  <label>SMS Verification Code</label>
                  <Input.Number value={phoneCode} handleInput={handlePhoneCodeInput} error={phoneCodeError} placeholder="123xxx" />
                </div>
                <div className="grid space-y-3 text-sm md:text-base">
                  <label>Password</label>
                  <Input.Password value={password} handleInput={handlePasswordInput} />
                </div>
                <div className="grid space-y-3 text-sm md:text-base">
                  <label>Confirm Password</label>
                  <Input.Password value={confirmPassword} handleInput={handleConfirmPasswordInput} error={passwordError} />
                </div>
                <div className="grid space-y-3 text-sm md:text-base col-span-1 md:col-span-2">
                  <label>Referal code(optional)</label>
                  <Input.Number value={refCode} handleInput={handleRefCodeInput} error={refCodeError} placeholder="123xxx" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex space-x-4 items-center text-xs md:text-sm px-2 w-1/3">
              <span className="flex justify-center">Already have account?</span>
              <Button variant="empty" color="blue" size="sm" className="h-9">Sign In</Button>
            </div>
            <Button className="w-1/6" size="sm">Sign Up</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SignUp

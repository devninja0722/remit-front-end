import type { NextPage } from "next"
import { useState, useCallback } from "react"
import Select from "react-select"
import Head from "next/head"
import Container from "app/components/Container"
import Input from "app/components/Input"
import Button from "app/components/Button"
import Tooltip from 'app/components/Tooltip'
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
  const [emailCodeTooltip, setEmailCodeTooltip] = useState(false)

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
    setPhoneError(!(phone === '' || RegExp(`^[0-9]{${12 - value.length}}$`).test(escapeRegExp(phone))))
  }

  const handlePhoneInput = (value: string) => {
    setPhone(value)
    setPhoneError(!(value === '' || RegExp(`^[0-9]{${12 - areaCode.length}}$`).test(escapeRegExp(value))))
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
    <Container id="signup-page" maxWidth="full">
      <Head>
        <title>Sign Up | RemitWise</title>
        <meta name="description" content="RemitWise" />
      </Head>

      <div className="px-8 py-6 transition-all md:px-16 md:py-12 lg:px-36 lg:py-16">
        <div className="flex justify-between align-center">
          <div className="text-lg font-semibold font-poppins md:text-xl">Logo</div>
          <Select id="lang-select" instanceId="lang-select" options={langOptions} defaultValue={defaultLang} className="text-xs font-semibold w-36 md:text-sm" />
        </div>
        <div className="grid space-y-6 rounded-2.5 bg-white min-w-80 md:max-w-2xl lg:max-w-3xl mx-auto mt-4 md:mt-16 p-8">
          <div className="grid py-2 space-y-4 md:space-y-10">
            <div className="text-xl font-semibold md:text-2xl">Sign Up</div>
            <div className="grid space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="grid space-y-3 text-xs md:text-sm">
                  <label>Email</label>
                  <Input.Email value={email} handleInput={handleEmailInput} error={emailError} hasControl />
                </div>
                <Tooltip text="Verification code sent to Test@gmail.com and then enter verification code" show={emailCodeTooltip}>
                  <div className="grid space-y-3 text-xs md:text-sm">
                    <label>Email Verification Code</label>
                    <Input.Number value={emailCode} handleInput={handleEmailCodeInput} error={emailCodeError} placeholder="123xxx" onMouseEnter={useCallback(() => setEmailCodeTooltip(true), [setEmailCodeTooltip])} onMouseLeave={useCallback(() => setEmailCodeTooltip(false), [setEmailCodeTooltip])} />
                  </div>
                </Tooltip>
                <div className="grid space-y-3 text-xs md:text-sm">
                  <label>Phone</label>
                  <Input.Phone value={phone} areaCode={areaCode} handleSelect={handleAreaCodeInput} handleInput={handlePhoneInput} error={phoneError} hasControl />
                </div>
                <div className="grid space-y-3 text-xs md:text-sm">
                  <label>SMS Verification Code</label>
                  <Input.Number value={phoneCode} handleInput={handlePhoneCodeInput} error={phoneCodeError} placeholder="123xxx" />
                </div>
                <div className="grid space-y-3 text-xs md:text-sm">
                  <label>Password</label>
                  <Input.Password value={password} handleInput={handlePasswordInput} />
                </div>
                <div className="grid space-y-3 text-xs md:text-sm">
                  <label>Confirm Password</label>
                  <Input.Password value={confirmPassword} handleInput={handleConfirmPasswordInput} error={passwordError} />
                </div>
                <div className="grid col-span-1 space-y-3 text-xs md:text-sm md:col-span-2">
                  <label>Referal code(optional)</label>
                  <Input.Number value={refCode} handleInput={handleRefCodeInput} error={refCodeError} placeholder="123xxx" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:flex md:justify-between">
            <div className="flex items-center justify-between w-full px-2 text-xs md:justify-start md:space-x-4 md:text-sm md:w-1/2">
              <span className="flex justify-center">Already have account?</span>
              <Button variant="empty" color="blue" size="sm" className="h-9">Sign In</Button>
            </div>
            <Button className="w-full md:w-1/4" size="sm">Sign Up</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SignUp

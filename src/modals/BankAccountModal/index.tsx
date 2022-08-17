import React, { useCallback, useEffect, useState } from 'react'
import Modal from 'app/components/Modal'
import Button from 'app/components/Button'
import ReactFlagsSelect from "react-flags-select"
import Select, { components } from 'react-select'
import { XIcon } from '@heroicons/react/solid'
import { COUNTRIES } from 'app/constants/countries'
import { CURRENCIES } from 'app/constants/currencies'
import { Accounts } from 'app/constants/banks'
import Input from 'app/components/Input'
import { escapeRegExp } from 'app/functions'

var countryList: any[] = []
COUNTRIES.map((item, i) => countryList.push(item.code))

var currencyList: any[] = []
CURRENCIES.map((item, i) => currencyList.push({
  value: item,
  label: item,
}))

var bankList: any[] = []
Accounts.map((item, i) => bankList.push({
  value: item.id,
  label: `${item.name} - ${item.bank} - ${item.currency} - ${item.id}`,
}))

interface BankAccountModalProps {
  isOpen: boolean
  onSuccess: () => void
  onDismiss: () => void
  caption: string,
}

const BankAccountModal = ({
  isOpen,
  onSuccess,
  onDismiss,
  caption,
}: BankAccountModalProps) => {

  const [countrySelect, setCountrySelect] = useState("US")
  const [currencySelect, setCurrencySelect] = useState(currencyList[0])
  const [bankSelect, setBankSelect] = useState(bankList[0])
  const [accountName, setAccountName] = useState("")

  const [areaCode, setAreaCode] = useState("+1")
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState(false)
  const [relationship, setRelationship] = useState("")

  const [accountNumber, setAccountNumber] = useState("")
  const [accountNumberError, setAccountNumberError] = useState(false)

  const [bankName, setBankName] = useState("")
  const [swiftCode, setSwiftCode] = useState("")
  const [swiftCodeError, setSwiftCodeError] = useState(false)
  const [issuingBank, setIssuingBank] = useState("")

  const [ownerAddress, setOwnerAddress] = useState("")

  const handleAreaCodeInput = (value: string) => {
    setAreaCode(value);
    setPhoneError(!(phone === '' || RegExp(`^[0-9]{${12 - value.length}}$`).test(escapeRegExp(phone))))
  }

  const handlePhoneInput = (value: string) => {
    setPhone(value)
    setPhoneError(!(value === '' || RegExp(`^[0-9]{${12 - areaCode.length}}$`).test(escapeRegExp(value))))
  }

  const handleAccountNumberInput = (value: string) => {
    setAccountNumber(value)
    setAccountNumberError(!(value === '' || /^[0-9]{12}$/.test(escapeRegExp(value))))
  }

  const handleSwiftCodeInput = (value: string) => {
    setSwiftCode(value)
    setSwiftCodeError(!(value === '' || /^[0-9]{4}$/.test(escapeRegExp(value))))
  }

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxWidth={648} className="w-96">
      <div className="flex w-full items-center justify-between font-bold text-md font-montserrat px-4 py-4">
        <p>{caption}</p>
        <Button size='sm' variant='empty' onClick={onDismiss}><XIcon width={16} height={16} className="text-red" /></Button>
      </div>
      <hr className="border-t-1 border-stroke" />
      <div className="grid font-montserrat p-4 gap-4 text-xs md:text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 font-semibold text-left overflow-auto" style={{ maxHeight: "640px" }}>
          <div className="grid gap-2">
            Your country
            <ReactFlagsSelect
              selected={countrySelect}
              onSelect={setCountrySelect}
              countries={countryList}
              showSelectedLabel={true}
              selectedSize={13}
              showOptionLabel={true}
              optionsSize={13}
              placeholder={"Select your country"}
              searchable={true}
              searchPlaceholder={"Type country name"}
            />
          </div>
          <div className="grid gap-2">
            Currency
            <div style={{ translate: "0 -3px" }}>
              <Select
                id="new-currency" instanceId="new-currency"
                defaultValue={currencySelect}
                options={currencyList}
                onChange={(event: any) => {
                  setCurrencySelect(event.value)
                }}
                components={{
                  Control: ({ children, ...rest }: any) => {
                    return (
                      <components.Control {...rest} className="">
                        {children}
                      </components.Control>
                    )
                  }
                }}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <p>My account</p>
            <Select
              id="new-account" instanceId="new-account"
              defaultValue={bankSelect}
              options={bankList}
              onChange={(event: any) => {
                setBankSelect(event.value)
              }}
            />
          </div>
          <div className="grid gap-2">
            <p>Account name</p>
            <Input.Text value={accountName} handleInput={setAccountName} placeholder="Account name" className="!font-sm" />
          </div>
          <div className="grid gap-2">
            <label>Phone</label>
            <Input.Phone value={phone} areaCode={areaCode} handleSelect={handleAreaCodeInput} handleInput={handlePhoneInput} error={phoneError} />
          </div>
          <div className="grid gap-2">
            <p>Relationship of application</p>
            <Input.Text value={relationship} handleInput={setRelationship} placeholder="Relationship of application" />
          </div>
          <div className="grid gap-2">
            <label>Account number</label>
            <Input.Number value={accountNumber} handleInput={handleAccountNumberInput} error={accountNumberError} />
          </div>
          <div className="grid gap-2">
            <p>Bank name</p>
            <Input.Text value={bankName} handleInput={setBankName} placeholder="Bank name" />
          </div>
          <div className="grid gap-2">
            <label>Swift code</label>
            <Input.Number value={swiftCode} handleInput={handleSwiftCodeInput} error={swiftCodeError} />
          </div>
          <div className="grid gap-2">
            <p>Issuing bank(if applicable)</p>
            <Input.Text value={issuingBank} handleInput={setIssuingBank} placeholder="Bank name" />
          </div>
          <div className="grid col-span-1 space-y-3 text-xs md:text-sm md:col-span-2">
            <label>Account owner address</label>
            <Input.TextArea value={ownerAddress} handleInput={setOwnerAddress} placeholder="Your residence address" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button size="sm" onClick={onDismiss} className="font-montserrat !px-8 !font-black" variant="empty" color="red"><p className="font-bold">Cancel</p></Button>
          <Button size="sm" onClick={onSuccess} className="font-montserrat !px-8">Create</Button>
        </div>
      </div>
    </Modal >
  )
}

export default BankAccountModal

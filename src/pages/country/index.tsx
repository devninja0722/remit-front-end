import type { NextPage } from "next"
import { useState } from "react"
import Select from "react-select"
import Head from "next/head"
import Container from "app/components/Container"
import Button from "app/components/Button"
import ReactFlagsSelect from "react-flags-select"
import { COUNTRIES } from 'app/constants/countries'
import Image from "next/image"

var countryList: any[] = []
COUNTRIES.map((item, i) => countryList.push(item.code))

const SelectCountry: NextPage = () => {
  const langOptions = [
    { value: "en", label: "English" },
    { value: "zh", label: "中文" },
  ]
  const defaultLang = langOptions[0]

  const docOptions = [
    { value: "personal", label: "Personal information" },
    { value: "document", label: "Government-issued ID" },
    { value: "facial", label: "Facial recognition" },
  ]

  const [select, setSelect] = useState("US")
  const onSelect = (code: any) => setSelect(code)

  return (
    <Container id="dashboard-page" className="h-[100vh]" maxWidth="full">
      <Head>
        <title>Select Country | RemitWise</title>
        <meta name="description" content="RemitWise" />
      </Head>

      <div className="bg-cover bg-center bg-compound h-full px-8 py-6 md:px-16 md:py-12 lg:px-36 lg:py-16 transition-all">
        <div className="flex justify-between align-center">
          <div className="font-poppins text-lg md:text-xl font-semibold">Logo</div>
          <Select id="lang-select" instanceId="lang-select" options={langOptions} defaultValue={defaultLang} className="w-36 text-sm md:text-base font-semibold" />
        </div>
        <div className="grid space-y-6 rounded-2.5 bg-white w-80 md:w-96 mx-auto mt-20 md:mt-16 p-8">
          <div className="grid py-2 space-y-4 md:space-y-10">
            <div className="text-xl md:text-2xl font-semibold">Select Country</div>
            <div className="grid space-y-5">
              <div className="grid gap-5 grid-cols-1">
                <div className="grid space-y-3 text-sm md:text-base">
                  <label>Please ensure your country of residence matches your valid ID. Your privilages could change based on the selection</label>
                </div>
                <div className="grid space-y-3 text-sm md:text-base">
                  <label className="font-semibold">Your country</label>
                  <ReactFlagsSelect
                    selected={select}
                    onSelect={onSelect}
                    countries={countryList}
                    showSelectedLabel={true}
                    selectedSize={14}
                    showOptionLabel={true}
                    optionsSize={14}
                    placeholder={"Select your country"}
                    searchable={true}
                    searchPlaceholder={"Type country name"}
                  />
                </div>
              </div>
              <div className="grid gap-5 grid-cols-1">
                <div className="grid space-y-3 text-sm md:text-base">
                  <label className="font-bold">Requirement</label>
                  <label className="flex items-center gap-2"><Image src="/img/personal.svg" alt="personal" width={18} height={18} /> Personal information</label>
                  <label className="flex items-center gap-2"><Image src="/img/document.svg" alt="document" width={18} height={18} /> Government-issued ID</label>
                  <label className="flex items-center gap-2"><Image src="/img/facial.svg" alt="facial" width={18} height={18} /> Facial recognition</label>
                  <label className="flex items-center gap-2"><Image src="/img/time.svg" alt="time" width={18} height={18} /> Review time: 10 days</label>
                </div>
                <div className="grid space-y-3 text-sm md:text-base">
                  <label className="font-semibold">Government-issued document</label>
                  <Select id="doc-select" instanceId="doc-select" options={docOptions} defaultValue={docOptions[0]} className="text-sm md:text-base" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Button size="sm">Continue</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SelectCountry

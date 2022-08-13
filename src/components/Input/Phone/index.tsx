import React from 'react'
import Select, { StylesConfig } from 'react-select';
import Button from 'app/components/Button'
import { classNames, escapeRegExp } from 'app/functions'
import { COUNTRIES } from 'app/constants/countries';

const defaultClassName = 'bg-white'

var countryList: any[] = []
COUNTRIES.map((item, i) => countryList.push({
  value: item.dial_code,
  label: item.dial_code,
}))

export const Input = React.memo(
  ({
    value,
    areaCode,
    handleSelect,
    handleInput,
    error,
    placeholder,
    hasControl,
    className = defaultClassName,
    ...rest
  }: {
    value: string | number
    areaCode: string
    handleSelect: (input: string) => void
    handleInput: (input: string) => void
    error?: boolean
    placeholder?: string
    hasControl?: boolean
    fontSize?: string
    align?: 'right' | 'left'
  } & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) => {
    const enforcer = (nextUserInput: string) => {
      handleInput(nextUserInput)
    }

    return (
      <div className='flex justify-end align-middle'>
        <Select
          id="country-select" instanceId="country-select"
          defaultValue={{ value: areaCode, label: areaCode }}
          options={countryList}
          className="w-24 text-sm text-center"
          onChange={(event: any) => {
            handleSelect(event.value)
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: '#0595f888',
              primary: '#0595f8',
            },
          })}
        />
        <input
          {...rest}
          value={value}
          onChange={(event) => {
            enforcer(event.target.value.replace(/,/g, '.'))
          }}
          // universal input options
          inputMode="text"
          autoComplete="off"
          autoCorrect="off"
          // text-specific options
          type="number"
          pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$"
          placeholder={placeholder || 'Enter your code'}
          spellCheck="false"
          className={classNames(
            'relative text-base outline-none px-4 w-32 h-[38px] border flex-auto overflow-hidden overflow-ellipsis placeholder-light-gray focus:placeholder-dark-gray rounded-r-1 transition-all ease-in',
            className, error ? 'border-red focus:border-red' : 'border-stroke focus:border-blue'
          )}
        />
        {hasControl && <Button variant="link" size="sm" className="absolute bg-white m-[4px] h-[30px] text-blue/90 hover:text-blue border-l rounded-none">Send</Button>}
      </div>
    )
  }
)

Input.displayName = 'PhoneInput'

export default Input

// const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group

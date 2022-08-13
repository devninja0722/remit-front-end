import { classNames, escapeRegExp } from 'app/functions'

import React from 'react'


const defaultClassName = 'bg-white'

export const Input = React.memo(
  ({
    value,
    handleInput,
    error,
    placeholder,
    className = defaultClassName,
    ...rest
  }: {
    value: string | number
    handleInput: (input: string) => void
    error?: boolean
    fontSize?: string
    align?: 'right' | 'left'
  } & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) => {
    const enforcer = (nextUserInput: string) => {
      handleInput(nextUserInput)
    }

    return (
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
        type="text"
        placeholder={placeholder || 'Enter your text'}
        spellCheck="false"
        className={classNames(
          'relative text-base outline-none px-4 h-[38px] border flex-auto overflow-hidden overflow-ellipsis placeholder-light-gray focus:placeholder-dark-gray rounded-1 transition-all ease-in',
          className, error ? 'border-red focus:border-red' : 'border-stroke focus:border-blue'
        )}
      />
    )
  }
)

Input.displayName = 'TextInput'

export default Input

// const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group

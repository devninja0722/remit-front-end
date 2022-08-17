import React, { useState } from 'react'
import { classNames } from 'app/functions'
import Button from 'app/components/Button'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'

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

    const [show, setShow] = useState(false)
    return (
      <div className='flex justify-end align-middle'>
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
          type={show ? "text" : "password"}
          pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$"
          placeholder={placeholder || 'Enter your password'}
          spellCheck="false"
          className={classNames(
            'relative outline-none px-4 h-[38px] border flex-auto overflow-hidden overflow-ellipsis placeholder-light-gray focus:placeholder-dark-gray rounded-1 transition-all ease-in',
            className, error ? 'border-red focus:border-red' : 'border-stroke focus:border-blue'
          )}
        />
        <Button variant="link" size="sm" className="absolute bg-white m-[4px] h-[30px] text-primary hover:text-blue" onClick={() => setShow(!show)}>{show ? <EyeIcon width={16} /> : <EyeOffIcon width={16} />}</Button>
        {/* <Button variant="link" size="sm" className="absolute bg-white m-[4px] h-[30px] text-primary hover:text-blue" onMouseDown={() => setShow(true)} onMouseUp={() => setShow(false)}>{show ? <EyeIcon width={16} /> : <EyeOffIcon width={16} />}</Button> */}
      </div>
    )
  }
)

Input.displayName = 'PasswordInput'

export default Input

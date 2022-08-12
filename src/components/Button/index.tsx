import React, { FC, ReactNode } from 'react'
import { classNames } from 'app/functions'

import Dots from '../Dots'
import Loader from '../Loader'

export type ButtonColor = 'red' | 'blue'
export type ButtonSize = 'xs' | 'sm' | 'lg' | 'default' | 'none'
export type ButtonVariant = 'outlined' | 'filled' | 'empty' | 'link'

const DIMENSIONS = {
  xs: 'px-2 h-[28px] !border',
  sm: 'px-3 h-[40px]',
  md: 'px-4 h-[50px]',
  lg: 'px-6 h-[60px]',
}

const SIZE = {
  xs: 'text-xs rounded',
  sm: 'text-sm rounded',
  md: 'rounded',
  lg: 'text-lg rounded',
}

const FILLED = {
  default: 'bg-transparent opacity-90 hover:opacity-100',
  red: 'bg-red bg-opacity-90 w-full text-white hover:bg-opacity-100 disabled:bg-opacity-90',
  blue: 'bg-blue bg-opacity-90 w-full text-white hover:bg-opacity-100 disabled:bg-opacity-90',
}

const OUTLINED = {
  default: 'bg-transparent opacity-90 hover:opacity-100',
  red: 'border border-red bg-opacity-40 outline-red text-red opacity-100 hover:opacity-60 disabled:opacity-40',
  blue: 'bg-transparent outline-blue border border-blue text-blue',
}

const EMPTY = {
  default:
    'flex bg-transparent justify-center items-center disabled:opacity-50 disabled:cursor-auto bg-opacity-90 hover:bg-opacity-100',
  red: 'text-red text-opacity-90 hover:text-opacity-100 focus:text-opacity-100 whitespace-nowrap focus:ring-0',
  blue: 'text-blue text-opacity-90 hover:text-opacity-100 focus:text-opacity-100 whitespace-nowrap focus:ring-0',
}

const LINK = {
  default: 'text-primary hover:text-high-emphesis focus:text-high-emphesis whitespace-nowrap focus:ring-0',
  blue: 'text-blue text-opacity-90 hover:text-opacity-100 focus:text-opacity-100 whitespace-nowrap focus:ring-0',
}

const VARIANT = {
  outlined: OUTLINED,
  filled: FILLED,
  empty: EMPTY,
  link: LINK,
}

type Button = React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> & {
  Dotted: FC<DottedButtonProps>
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode
  endIcon?: ReactNode
  color?: ButtonColor
  size?: ButtonSize
  variant?: ButtonVariant
  fullWidth?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      color = 'blue',
      size = 'md',
      variant = 'filled',
      startIcon = undefined,
      endIcon = undefined,
      fullWidth = false,
      loading,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(
          // @ts-ignore TYPE NEEDS FIXING
          VARIANT[variant][color ?? 'default'],
          // @ts-ignore TYPE NEEDS FIXING
          SIZE[size],
          // @ts-ignore TYPE NEEDS FIXING
          variant !== 'empty' ? DIMENSIONS[size] : '',
          fullWidth ? 'w-full' : '',
          'font-medium flex items-center justify-center gap-1 transition-all ease-in',
          className
        )}
        {...rest}
      >
        {loading ? (
          <Loader stroke="currentColor" />
        ) : (
          <>
            {startIcon && startIcon}
            {children}
            {endIcon && endIcon}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

interface DottedButtonProps extends ButtonProps {
  pending: boolean
}

export const ButtonDotted: FC<DottedButtonProps> = ({ pending, children, ...rest }) => {
  const buttonText = pending ? <Dots>{children}</Dots> : children
  return (
    <Button {...rest} {...(pending && { disabled: true })}>
      {buttonText}
    </Button>
  )
}

export default Button

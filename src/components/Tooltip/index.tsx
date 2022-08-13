import Popover, { PopoverProps } from 'app/components/Popover'
import React, { ReactNode, useCallback, useState } from 'react'

interface TooltipProps extends Omit<PopoverProps, 'content'> {
  text: ReactNode
}

interface TooltipContentProps extends Omit<PopoverProps, 'content'> {
  content: ReactNode
}

const Tooltip = ({ text, ...rest }: TooltipProps) => {
  return (
    <Popover
      content={
        <div className="mx-4 px-3 py-1.5 font-medium bg-dark-blue text-white text-center transition-all rounded-1 text-sm">
          {text}
        </div>
      }
      {...rest}
    />
  )
}

export default Tooltip

export const TooltipContent = ({ content, ...rest }: TooltipContentProps) => {
  return <Popover content={<div className="w-64 py-[0.6rem] px-4 break-words">{content}</div>} {...rest} />
}

export const MouseoverTooltip = ({ children, ...rest }: Omit<TooltipProps, 'show'>) => {
  const [show, setShow] = useState(false)
  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])
  return (
    <Tooltip {...rest} show={show}>
      <div onMouseEnter={open} onMouseLeave={close}>
        {children}
      </div>
    </Tooltip>
  )
}

export const MouseoverTooltipContent = ({ content, children, ...rest }: Omit<TooltipContentProps, 'show'>) => {
  const [show, setShow] = useState(false)
  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])
  return (
    <TooltipContent {...rest} show={show} content={content}>
      <div
        style={{ display: 'inline-block', lineHeight: 0, padding: '0.25rem' }}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        {children}
      </div>
    </TooltipContent>
  )
}


export const MouseoverContent = ({ content, children, ...rest }: Omit<TooltipContentProps, 'show'>) => {
  const [show, setShow] = useState(false)
  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])
  return (
    <>
      <div
        onMouseEnter={open}
        onMouseLeave={close}
      >
        {children}
      </div>
      {show && content}
    </>
  )
}
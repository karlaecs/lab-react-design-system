import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import React, { InputHTMLAttributes, ReactNode } from 'react'

export interface ITextInputRoot {
  children: ReactNode
}

const TextInputRoot = ({ children }: ITextInputRoot) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 py-4 px-3 rounded bg-gray-800  w-full focus-within:ring-2 ring-cyan-300'
      )}
    >
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export type ITextInputProps = InputHTMLAttributes<HTMLInputElement>

const TextInputDefault = (props: ITextInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-sm placeholder:text-gray-400"
      {...props}
    />
  )
}

TextInputDefault.displayName = 'TextInput.Input'

export interface ITextInputIcon {
  children: ReactNode
}

const TextInputIcon = ({ children }: ITextInputIcon) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
}

TextInputIcon.displayName = 'TextInput.Icon'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputDefault,
  Icon: TextInputIcon,
}

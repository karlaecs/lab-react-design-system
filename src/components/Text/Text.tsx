import React from 'react'
import clsx from 'clsx'
export type TextSize = 'sm' | 'md' | 'lg'

import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'
export interface ITextProps {
  size?: TextSize
  children: ReactNode
  asChild?: boolean
}

const Text = ({ size = 'md', children, asChild }: ITextProps) => {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      className={clsx('text-gray-100 font-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Comp>
  )
}

export default React.memo(Text)

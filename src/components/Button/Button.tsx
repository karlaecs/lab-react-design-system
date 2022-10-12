import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'
import clsx from 'clsx'

export interface IButtonProps {
  children: ReactNode
  asChild?: boolean
}

const Button = ({ children, asChild }: IButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return <Comp className={clsx('text-gray-100 font-sans')}>{children}</Comp>
}

export default React.memo(Button)

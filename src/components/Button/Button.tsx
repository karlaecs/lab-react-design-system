import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface IButtonProps {
  children: ReactNode
  asChild?: boolean
}

const Button = ({ children, asChild }: IButtonProps) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp>{children}</Comp>
}

export default React.memo(Button)

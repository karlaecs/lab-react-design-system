import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { TextInput, ITextInputRoot } from './TextInput'
import { Envelope } from 'phosphor-react'
import Text from '../Text/Text'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your e-mail address" />
      </>
    ),
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div>
          {Story()}
          <Text size="sm">Required field</Text>
        </div>
      )
    },
  ],
} as Meta<ITextInputRoot>

export const Default: StoryObj<ITextInputRoot> = {}

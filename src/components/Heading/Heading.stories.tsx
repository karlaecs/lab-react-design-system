import { Meta, StoryObj } from "@storybook/react"
import { Heading, IHeadingProps } from "./Heading"

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem Ipsum",
    size: "md"
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio"
      }
    }
  }
} as Meta<IHeadingProps>

export const Default: StoryObj<IHeadingProps> = {}

export const Small: StoryObj<IHeadingProps> = {
  args: {
    size: "sm"
  }
}

export const Large: StoryObj<IHeadingProps> = {
  args: {
    size: "lg"
  }
}

export const CustomComponent: StoryObj<IHeadingProps> = {
  args: {
    asChild: true,
    children: (<h1>H1 Heading</h1>)
  },
  argTypes: {
    children: {
      table: {
        disable: true 
      }
    },
    asChild: {
      table: {
        disable: true 
      }
    }
  }
}
import React from "react";
import { Button, ButtonProps } from "@kvib/react/src/button";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Komponenter/Knapper/Button",
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    colorScheme: {
      control: {
        type: "radio",
        options: ["green", "blue"],
      },
    },
    size: {
      defaultValue: "md",
      type: { name: "string", required: false },
      description: "demo description",
      control: {
        type: "radio",
        options: ["sm", "md"],
      },
    },
    disabled: {
      defaultValue: false,
      control: "boolean",
    },
    leftIcon: {
      defaultValue: "",
      control: "text",
    },
    rightIcon: {
      defaultValue: "",
      control: "text",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const Component = Template.bind({});
Component.args = {
  variant: "primary",
  colorScheme: "green",
  size: "sm",
};

Component.storyName = "Button";

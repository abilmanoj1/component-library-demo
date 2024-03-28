import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField"

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {
    label: "Primary 😃",
    size: "large",
    textColor: "black",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: "Secondary 😇",
    textColor:"green"
  },
};

export const Danger: Story = {
  args: {
    ...Primary.args,
    label: "Delete Button ⛔️",
  },
};
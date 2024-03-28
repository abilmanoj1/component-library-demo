import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary 😃",
    size: "large",
    type: "primary",
    onClick: () => {
      alert("Primary button clicked!");
    },
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    type: "secondary",
    label: "Secondary 😇",
    onClick: () => {
      alert("secondary button clicked!");
    },
  },
};

export const Danger: Story = {
  args: {
    ...Primary.args,
    type: "danger",
    label: "Delete Button ⛔️",
    onClick: () => {
      alert("Danger button clicked!");
    },
  },
};
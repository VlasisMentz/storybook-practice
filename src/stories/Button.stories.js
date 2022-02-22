import Button from '../Button';

export default {
  title: 'A Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'handleClick' },
  },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'white',
  label: 'Press Me',
  size: 'sm',
};

export const Danger = Template.bind({});
Danger.args = {
  backgroundColor: 'black',
  label: 'Danger',
  size: 'lg',
  color: 'red',
};

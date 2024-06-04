import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button/Button';
import { string } from 'prop-types';

interface ButtonProps {
  label: string,
}

export default {
  title: 'Button',
  component: Button,
  label,
};

export const Text = () => <Button onClick = {'clicked'}>Clicked</Button>

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span>{label}</span>
  </Button>
)
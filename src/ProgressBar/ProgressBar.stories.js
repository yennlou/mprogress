import React from 'react'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import ProgressBar from './ProgressBar.component'

export default {
  component: ProgressBar,
  title: 'ProgressBar',
  decorators: [withKnobs]
}

export const Default = () => <ProgressBar now={object('now', 0.8)} />

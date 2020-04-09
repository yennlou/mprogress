import React from 'react'
import { Observable } from 'rxjs'

import ProgressBarRx from './ProgressBarRx.component'

export default {
  component: ProgressBarRx,
  title: 'ProgressBarRx'
}

const observable = new Observable(subscriber => {
  let progress = 0
  const intervalId = setInterval(() => {
    subscriber.next(progress)
    progress += 0.1
    if (progress > 1) {
      subscriber.complete()
      clearInterval(intervalId)
    }
  }, 1000)
})

export const Default = () => <ProgressBarRx observable={observable} />

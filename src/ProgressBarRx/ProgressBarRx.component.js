/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import ProcessBar from '../ProgressBar'

const ProcessBarRx = ({ observable }) => {
  const [now, setNow] = useState(0)
  useEffect(() => {
    const subscription = observable.subscribe(now => setNow(now))
    return () => { subscription.unsubscribe() }
  }, [])
  return (
    <ProcessBar now={now} />
  )
}

export default ProcessBarRx

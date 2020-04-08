import React from 'react'
import PropTypes from 'prop-types'
import {
  ProgressWrapper,
  ProgressInner
} from './ProgressBar.styles'

const ProgressBar = ({ now }) => {
  return (
    <ProgressWrapper>
      <ProgressInner style={{ width: parseInt(now * 100) + '%' }} />
    </ProgressWrapper>
  )
}

ProgressBar.propTypes = {
  now: PropTypes.number
}

ProgressBar.defaultProps = {
  now: 0
}

export default ProgressBar

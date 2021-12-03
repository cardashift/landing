import React from 'react'
import RoundSquare from './RoundSquare'

function LogoCircle() {
  const circle = {
      background: 'transparent',
      border: '1.39619px solid rgba(255, 255, 255, 0.4)',
      boxShadow:
        'inset -6.98093px -6.98093px 13.9619px #FAFBFF, inset 6.98093px 6.98093px 13.9619px #A6ABBD',
      borderRadius: '50%',
      position: 'absolute',
    },
    largeCircle = {
      ...circle,
      right: '-680px',
      height: 1318,
      width: 1318,
    }
  const mediumCercle = {
    ...circle,
    width: 830,
    height: 830,
  }
  const smallCircle = {
    ...circle,
    width: 410,
    height: 410,
  }

  return (
    <div className="flex items-center justify-center" style={largeCircle}>
      <RoundSquare icon="/images/arrows.svg" />
      <span className="flex items-center justify-center" style={mediumCercle}>
        <RoundSquare icon="/images/stim.svg" />
        <span style={smallCircle}>
          <RoundSquare icon="/images/matters.svg" />
        </span>
      </span>
    </div>
  )
}

export default LogoCircle

import React from 'react'

function RoundSquare({ icon, style }) {
  const square = {
    ...style,
    background: '#EBECF0',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '-10px -10px 20px #FAFBFF, 10px 10px 20px #A6ABBD',
    borderRadius: 40,
    width: 150,
    height: 150,
    position: 'absolute',
  }
  return (
    <div className="flex items-center justify-center" style={square}>
      {icon}
    </div>
  )
}

export default RoundSquare

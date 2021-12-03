import React from 'react'

function RoundSquare({ icon }) {
  const square = {
    background:
      'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%), #EBECF0',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '-10px -10px 20px #FAFBFF, 10px 10px 20px #A6ABBD',
    borderRadius: 40,
    width: 150,
    height: 150,
  }

  return (
    <div className="flex items-center justify-center" style={square}>
      <img src={icon} />
    </div>
  )
}

export default RoundSquare

import React from 'react'

function MobileHeader() {
  return (
    <div className="flex md:hidden items-center mt-8">
      <img
        src="/images/logo.svg"
        className="mx-auto"
        width="170px"
        height="29px"
      />
      <div>
        <img src="/images/hamburger-icon.svg" width="66px" height="66px" />
      </div>
    </div>
  )
}

export default MobileHeader

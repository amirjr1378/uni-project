import React, { cloneElement, FC } from 'react'

type PropType = {
  icon?: FC
}

const BaseSelectTrailingIcon = (props: PropType) => {
  const getTrailingIconElement = () => {
    if (props.icon) {
      const icon = <props.icon />
      return cloneElement(icon, {
        className: 'h-4 w-4 text-[#939597]',
        'aria-hidden': 'true',
      })
    }
    return null
  }
  return (
    <>
      {props.icon && (
        <div className="absolute inset-y-0 right-0 p-3 flex items-center pointer-events-none">
          {getTrailingIconElement()}
        </div>
      )}
    </>
  )
}

export default BaseSelectTrailingIcon

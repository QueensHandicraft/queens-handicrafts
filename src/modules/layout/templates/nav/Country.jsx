'use client'
import CountrySelect from "../../../layout/components/country-select"
import { Text, clx, useToggleState } from "@medusajs/ui"

import { ArrowRightMini, XMark } from "@medusajs/icons"

function Country({ props }) {
  const toggleState = useToggleState()

  return (

    <div
      className="flex justify-between"
      onMouseEnter={toggleState.open}
      onMouseLeave={toggleState.close}
    >
      {props && (
        <CountrySelect
          toggleState={toggleState}
          isNav={true}
          regions={props} />
      )}
    </div>

  )

}
export default Country
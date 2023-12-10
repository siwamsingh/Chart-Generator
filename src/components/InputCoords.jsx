import React from 'react'
function InputCoords({coords,label,onCoordChange}) {
  return (
    <div className="px-2 ">
      <input
          className="outline-none border px-4  w-full md:w-1/2 -translate-y-1  bg-transparent py-2 my-2"
          type="text"
          placeholder={label}
          value={coords}
          onChange={(e) =>
            onCoordChange && onCoordChange(e.target.value)
          }
        />
    </div>
  )
}
export default InputCoords

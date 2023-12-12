import React from 'react'
function InputData({value,label,onValueChange}) {
  return (
    <div>
      <input
          className="outline-none border px-4  w-full md:w-32 -translate-y-1 bg-transparent py-1.5 my-2"
          type="number"
          placeholder={label}
          value={value}
          onChange={(e) =>
            onValueChange && onValueChange(Number(e.target.value))
          }
        />
    </div>
  )
}
export default InputData

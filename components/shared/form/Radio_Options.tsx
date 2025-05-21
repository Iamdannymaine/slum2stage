"use client"

interface RadioOptionProps {
  id: string
  name: string
  value: string
  label: string
  onChange: () => void
}

export function RadioOption({ id, name, value, label, onChange }: RadioOptionProps) {
  return (
    <div className="flex items-center space-x-2">
      <input type="radio" id={id} name={name} className="h-4 w-4" value={value} onChange={onChange} />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </div>
  )
}

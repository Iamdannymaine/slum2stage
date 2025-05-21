"use client"

import { Label } from "@/components/ui/label"
import { RadioOption } from "./Radio_Options"

interface Option {
  id: string
  value: string
  label: string
}

interface RadioGroupProps {
  label: string
  name: string
  options: Option[]
  onChange: (value: string) => void
}

export function RadioGroup({ label, name, options, onChange }: RadioGroupProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <RadioOption
            key={option.id}
            id={option.id}
            name={name}
            value={option.value}
            label={option.label}
            onChange={() => onChange(option.value)}
          />
        ))}
      </div>
    </div>
  )
}

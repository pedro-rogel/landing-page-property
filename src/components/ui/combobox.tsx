"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const socialNetwork = [
  {
    value: "https://www.linkedin.com/company/mbras-solu%C3%A7%C3%B5es-imobili%C3%A1rias/",
    label: "Linkedin",
  },
  {
    value: "https://www.instagram.com/mbrasempreendimentos/",
    label: "Instagram",
  },
  {
    value: "",
    label: "X",
  },
  {
    value: "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-MBRAS-EI_IE5440702.13,18.htm",
    label: "Glassdoor",
  },
  {
    value: "https://www.youtube.com/@mbrasempreendimentos",
    label: "Youtube",
  },
]

export function ExampleCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? socialNetwork.find((framework) => framework.value === value)?.label
            : "Selecione a rede social "}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Selecione a rede..." />
          <CommandList>
            <CommandEmpty>Rede não encontrada.</CommandEmpty>
            <CommandGroup>
              {socialNetwork.map((socialNetwork) => (
                <CommandItem
                  key={socialNetwork.value}
                  value={socialNetwork.value}
                  onSelect={(currentValue) => {
                    window.location.href = socialNetwork.value
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {socialNetwork.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
import { ReactNode } from 'react'

export type steps = {
  label: string
}

export type Props = {
  steps: steps[]
  active: number
  children?: ReactNode
  setStep: (state: number) => void
}

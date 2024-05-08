export type Props = {
  priceType: 'Basic' | 'Advanced' | 'Full'
  onClick: () => void
  items: string[]
  title: string
  buttonTitle: string
  selectPrice?: string
  selected?: string
}

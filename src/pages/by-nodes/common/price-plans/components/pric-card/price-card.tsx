import { CheckIcon } from '../../../../../../icons'
import { PriceCard as PriceCardComponent } from './style'
import { Props } from './types'
export const PriceCard = ({
  priceType,
  onClick,
  title,
  buttonTitle,
  items,
  selected,
}: Props) => {
  return (
    <PriceCardComponent
      data-aos='zoom-in'
      className={selected === priceType ? 'active' : ''}
    >
      <img src='/assets/images/logo.png' alt='' />
      <h2>{title}</h2>
      <hr />
      <p>Services included</p>
      <ul>
        {items.map((list, index) => (
          <li key={index}>
            <CheckIcon style={{ color: '#08F02D' }} /> <span>{list}</span>
          </li>
        ))}
      </ul>
      <button onClick={onClick}>{buttonTitle}</button>
    </PriceCardComponent>
  )
}

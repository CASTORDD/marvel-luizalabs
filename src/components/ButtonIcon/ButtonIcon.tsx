import { ButtonWrapper, Title, Icon, Tip } from './styles'

import { ReactComponent as Heart } from './img/heart.svg'
import { ReactComponent as Order } from './img/order.svg'

export type ButtonIconProps = {
  className?: string
  icon: 'order' | 'heart'
  title?: string
  tip?: string
  onClick: () => void
}

const ButtonIcon = ({
  className,
  icon,
  title,
  tip,
  onClick
}: ButtonIconProps) => {
  const icons = {
    heart: <Heart />,
    order: <Order />
  }

  return (
    <ButtonWrapper className={className} onClick={() => onClick()}>
      <Icon>{icons[icon]}</Icon>
      {!!title && <Title>{title}</Title>}
      {!!tip && <Tip className="tip">{tip}</Tip>}
    </ButtonWrapper>
  )
}

export default ButtonIcon

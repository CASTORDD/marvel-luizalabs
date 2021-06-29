import { Wrapper } from './styles'

import { ReactComponent as Img } from './img/Marvel_Logo.svg'

export type LogoProps = {
  size?: 'normal' | 'small'
  hideOnMobile?: boolean
}

const Logo = ({ size = 'normal', hideOnMobile = true }: LogoProps) => {
  return (
    <Wrapper size={size} hideOnMobile={hideOnMobile} to={'/'}>
      <Img />
      <span className="text">Search heros</span>
    </Wrapper>
  )
}

export default Logo

import { Wrapper } from './styles'

import { ReactComponent as Img } from './img/Marvel_Logo.svg'

export type LogoProps = {
  size?: 'normal' | 'small'
  hideonmobile: boolean
}

const Logo = ({ size = 'normal', hideonmobile = true }: LogoProps) => {
  return (
    <Wrapper size={size} hideonmobile={hideonmobile} to={'/'}>
      <Img />
      <span className="text">Search heros</span>
    </Wrapper>
  )
}

export default Logo

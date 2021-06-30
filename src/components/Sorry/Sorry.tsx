import Gif from './img/sorry.gif'
import { SorryWrapper, Title } from './styles'

export type SorryProps = {
  title: string
}

const Sorry = ({ title }: SorryProps) => {
  return (
    <SorryWrapper>
      <Title>{title}</Title>
      <img src={Gif} alt="" />
    </SorryWrapper>
  )
}

export default Sorry

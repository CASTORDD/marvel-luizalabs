import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Logo, Search } from 'components'
import { Wrapper, Intro } from './styles'

export type HeaderProps = {
  heroInfo?: boolean
}

const Header = ({ heroInfo = false }: HeaderProps) => {
  const location = useLocation()
  const [hasHero, sethasHero] = useState(false)

  useEffect(() => {
    isHero(location.pathname)
  }, [location, heroInfo])

  const isHero = (path: any) => {
    const str = path
    str.indexOf('hero') !== -1 ? sethasHero(true) : sethasHero(false)
  }

  return (
    <Wrapper heroInfo={hasHero}>
      <Logo size={hasHero ? 'small' : 'normal'} hideonmobile={false} />
      {!hasHero && (
        <Intro>
          <h1>EXPLORE O UNIVERSO</h1>
          <p>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrira em breve!
          </p>
        </Intro>
      )}
      <Search hasHero={hasHero} />
    </Wrapper>
  )
}

export default Header

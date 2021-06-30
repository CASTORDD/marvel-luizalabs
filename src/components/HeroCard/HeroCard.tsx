import ButtonIcon from 'components/ButtonIcon'
import { useHistory } from 'react-router-dom'
import { CardWrapper, HeroData } from './styles'

const HeroCard = ({ hero, setFavorite, active, nfavorites }: any) => {
  const history = useHistory()

  const goHero = async (id: number) => {
    await history.push(`/hero/${id}`)
  }

  return (
    <CardWrapper>
      <img
        src={`${hero.thumbnail.path}/standard_fantastic.${hero.thumbnail.extension}`}
        alt=""
        onClick={() => goHero(hero.id)}
      />
      <HeroData>
        <span onClick={() => goHero(hero.id)}>{hero.name}</span>
        <ButtonIcon
          icon="heart"
          onClick={() => setFavorite(hero.id)}
          className={`btnFavorite ${active ? 'active' : ''} ${
            nfavorites === 5 && 'disabled'
          }`}
        />
      </HeroData>
    </CardWrapper>
  )
}

export default HeroCard

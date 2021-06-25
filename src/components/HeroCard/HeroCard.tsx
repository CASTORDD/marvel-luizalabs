import { useHistory } from 'react-router-dom'
import { CardWrapper, HeroData } from './styles'

const HeroCard = ({ hero }: any) => {
  const history = useHistory()

  const goHero = async (id: number) => {
    await history.push(`/hero/${id}`)
  }

  return (
    <CardWrapper onClick={() => goHero(hero.id)}>
      <img
        src={`${hero.thumbnail.path}/standard_fantastic.${hero.thumbnail.extension}`}
        alt=""
      />
      <HeroData>
        <span>{hero.name}</span>
      </HeroData>
    </CardWrapper>
  )
}

export default HeroCard

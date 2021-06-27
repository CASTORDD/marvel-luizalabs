import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getHerosL } from 'store/modules/heros/thunks'

import { HeroCard, ButtonIcon } from 'components'
import { HerosWrapper, Controls, HeaderList } from './styles'

const HerosList = ({ heros }: any) => {
  const dispatch = useDispatch()
  const [vLimit, setVLimit] = useState(10)
  const [vOffset, setVoffset] = useState(0)
  const [vName, setVname] = useState('')
  const [vOrder, serVoder] = useState(false)
  const [vFavourite, setFavourite] = useState(false)

  useEffect(() => {
    dispatchHeros()
  }, [vLimit, vOffset, vOrder])

  async function dispatchHeros() {
    await dispatch(
      getHerosL({
        limit: vLimit,
        offset: vOffset,
        name: vName !== null ? vName : '',
        order: vOrder ? 'name' : 'modified'
      })
    )
  }

  const handleOrder = () => {
    serVoder(!vOrder)
  }

  const handleFavorite = () => {
    setFavourite(!vFavourite)
  }

  return (
    <>
      <HeaderList>
        <div className="count">{`Encontrados ${heros?.total} herois`}</div>
        <Controls>
          <ButtonIcon
            className={vOrder ? 'active' : ''}
            icon="order"
            title="Ordernar por nome - A/Z"
            onClick={() => handleOrder()}
            tip="Ordernar os resultados pelo nome"
          />
          {/* <span>switch</span> */}
          <ButtonIcon
            className={vFavourite ? 'active' : ''}
            icon="heart"
            title="Somente favoritos"
            onClick={() => handleFavorite()}
            tip="Filtrar os favoritos"
          />
        </Controls>
      </HeaderList>
      {heros?.count > 0 ? (
        <HerosWrapper>
          {heros.results.map((hero: any, index: any) => {
            return <HeroCard key={index} hero={hero} />
          })}
        </HerosWrapper>
      ) : (
        <p>Nao temdados</p>
      )}
    </>
  )
}

export default HerosList

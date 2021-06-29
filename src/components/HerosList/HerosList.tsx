import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getHerosL } from 'store/modules/heros/thunks'

import { HeroCard, ButtonIcon } from 'components'
import { HerosWrapper, Controls, HeaderList } from './styles'
import { Pager } from 'components'
import { isMobile } from 'utils/IsMobile'

const HerosList = ({ heros }: any) => {
  const dispatch = useDispatch()
  const [vLimit, setVLimit] = useState(20)
  const [vOffset, setVoffset] = useState(0)
  const [vOrder, serVoder] = useState(false)
  const [vFavourite, setFavourite] = useState(false)

  const [pages, setPages] = useState(0)
  const [page, setPage] = useState(1)
  const [btnPages, setBtnPages] = useState([])

  useEffect(() => {
    dispatchHeros()

    if (heros && heros.total !== 0) {
      setPages(Math.ceil(heros.total / vLimit))
    }

    const pl = [] as any
    const dl = isMobile() ? 3 : 4
    for (let i = 0; i <= dl; i++) {
      pl.push(page > 1 ? page - 1 + i : page + i)
    }
    setBtnPages(pl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, vLimit, vOffset, vOrder])

  async function dispatchHeros() {
    await dispatch(
      getHerosL({
        limit: vLimit,
        offset: vOffset,
        name: '',
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

  const handlePage = (pg: number) => {
    setPage(pg)
  }

  const handleChangeOffset = (val: number) => {
    const f1 = val - 1
    setVoffset(f1 * vLimit)
  }

  const handleChangeLimit = (value: any) => {
    setVLimit(value)
  }

  const handleFirst = () => {
    setPage(1)
    setVoffset(0)
  }

  const handleNext = () => {
    setPage(page + 1)
    setVoffset(page * vLimit)
  }

  const handlePrev = () => {
    setPage(page - 1)
    setVoffset(vOffset - vLimit)
  }

  const handleLast = () => {
    setPage(pages)
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
        <>
          <HerosWrapper>
            {heros.results.map((hero: any, index: any) => {
              return <HeroCard key={index} hero={hero} />
            })}
          </HerosWrapper>
          <Pager
            total={heros.total}
            page={page}
            btnPages={btnPages}
            limit={vLimit}
            handlePage={handlePage}
            handleChangeOffset={handleChangeOffset}
            handleChangeLimit={handleChangeLimit}
            handleFirst={handleFirst}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleLast={handleLast}
          />
        </>
      ) : (
        <p>Nao temdados</p>
      )}
    </>
  )
}

export default HerosList

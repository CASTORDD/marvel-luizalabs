import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getHerosL, setListHeros } from 'store/modules/heros/thunks'

import { HeroCard, ButtonIcon } from 'components'
import { HerosWrapper, Controls, HeaderList } from './styles'
import { Pager } from 'components'
import { isMobile } from 'utils/IsMobile'
import { getCookie, setCookie } from 'utils/Cookie'

const HerosList = ({ heros, favoritesHeros }: any) => {
  const dispatch = useDispatch()
  const [vLimit, setVLimit] = useState(20)
  const [vOffset, setVoffset] = useState(0)
  const [vOrder, serVoder] = useState(false)
  const [vFavourite, setFavourite] = useState(false)
  const [favorites, setFavorites] = useState<any>([])
  const [nfav, setNfav] = useState(0)

  const [pages, setPages] = useState(0)
  const [page, setPage] = useState(1)
  const [btnPages, setBtnPages] = useState([])

  useEffect(() => {
    getCookie('favorites') === undefined && setCookie('favorites', [], {})
    dispatchHeros()
    dispatchFavoritesHeros()

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
  }, [page, vLimit, vOffset, vOrder, favorites])

  useEffect(() => {
    getFavorites()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  async function dispatchFavoritesHeros() {
    await dispatch(setListHeros(favorites))
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

  const list: any = favorites.length > 0 ? favorites : []
  const setFavorite = (heroId: number) => {
    const d = new Date(Date.now() + 60 * 60 * 24 * 3600)
    const index = list.indexOf(heroId)
    index === -1
      ? (list.length < 5 && list.push(heroId),
        setCookie('favorites', list, { expires: d }))
      : (list.splice(index, 1), setCookie('favorites', list, { expires: d }))
    getFavorites()
  }

  const getFavorites = () => {
    const favoritesList = getCookie('favorites')
    setFavorites(favoritesList)
    setNfav(favorites.length)
  }

  const isActive = (id: any) => {
    return favorites.includes(id) ? true : false
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
          <ButtonIcon
            className={vFavourite ? 'active' : ''}
            icon="heart"
            title="Somente favoritos"
            onClick={() => handleFavorite()}
            tip="Filtrar os favoritos"
          />
        </Controls>
      </HeaderList>
      {!vFavourite &&
        (heros?.count > 0 ? (
          <>
            <HerosWrapper>
              {heros.results.map((hero: any, index: any) => {
                return (
                  <HeroCard
                    key={index}
                    hero={hero}
                    setFavorite={(heroId: number) => setFavorite(heroId)}
                    active={isActive(hero.id)}
                    nfavorites={nfav}
                  />
                )
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
        ))}
      {vFavourite && (
        <HerosWrapper>
          {favoritesHeros?.map((hero: any, index: any) => {
            return (
              <HeroCard
                key={index}
                hero={hero}
                setFavorite={(heroId: number) => setFavorite(heroId)}
                active={isActive(hero.id)}
                nfavorites={nfav}
              />
            )
          })}
        </HerosWrapper>
      )}
    </>
  )
}

export default HerosList

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getHerosL } from 'store/modules/heros/thunks'

import { HeroCard } from 'components'
import { HerosWrapper } from './styles'

const HerosList = ({ heros }: any) => {
  const dispatch = useDispatch()
  const [vLimit, setVLimit] = useState(10)
  const [vOffset, setVoffset] = useState(0)
  const [vName, setVname] = useState('')

  useEffect(() => {
    dispatchHeros()
  }, [vLimit, vOffset])

  async function dispatchHeros() {
    await dispatch(
      getHerosL({
        limit: vLimit,
        offset: vOffset,
        name: vName !== null ? vName : ''
      })
    )
  }

  return (
    <>
      <h2>Heros List</h2>
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

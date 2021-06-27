import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getHerosL } from 'store/modules/heros/thunks'
import { Wrapper, Input, Icon } from './styles'

export type SearchProps = {
  hasHero?: boolean
  name?: string
  limit?: number
  offset?: number
  order?: string
}

const Search = ({ hasHero }: SearchProps) => {
  const dispatch = useDispatch()
  const [preName, setPreName] = useState('')

  const handleSetName = (name: string) => {
    if (name.length <= 0) {
      dispatchClearHeros()
    }
    setPreName(name)
  }

  const handleSearch = (key: string) => {
    if (preName.length > 3 && key === 'Enter') {
      dispatchHeros(preName)
    }
  }

  async function dispatchHeros(name?: string) {
    await dispatch(getHerosL({ limit: 20, offset: 0, name: name, order: '' }))
  }

  async function dispatchClearHeros() {
    await dispatch(getHerosL({ limit: 20, offset: 0, order: '' }))
  }

  return (
    <Wrapper hasHero={hasHero}>
      <Input
        hasHero={hasHero}
        name="search"
        type="text"
        placeholder="Procure por heróis"
        onChange={(evt) => handleSetName(evt.target.value)}
        onKeyDown={(evt) => handleSearch(evt.key)}
      />
      <Icon size="24" />
    </Wrapper>
  )
}

export default Search

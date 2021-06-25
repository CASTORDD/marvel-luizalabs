import { Wrapper, Input, Icon } from './styles'

export type SearchProps = {
  hasHero?: boolean
}

const Search = ({ hasHero }: SearchProps) => {
  return (
    <Wrapper hasHero={hasHero}>
      <Input
        hasHero={hasHero}
        name="search"
        type="text"
        placeholder="Procure por heróis"
      />
      <Icon size="24" />
    </Wrapper>
  )
}

export default Search

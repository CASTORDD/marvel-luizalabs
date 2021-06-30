import { connect } from 'react-redux'

import { HerosList } from 'components'

const Home = ({ heros, favoritesHeros }: any) => {
  return <HerosList heros={heros} favoritesHeros={favoritesHeros} />
}

const mapStateToProps = (state: any) => ({
  heros: state?.heros.herosList,
  favoritesHeros: state?.heros?.favoritesHeros
})

export default connect(mapStateToProps, null)(Home)

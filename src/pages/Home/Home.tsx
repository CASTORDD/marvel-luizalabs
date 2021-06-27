import { connect } from 'react-redux'

import { HerosList } from 'components'

const Home = ({ heros }: any) => {
  return <HerosList heros={heros} />
}

const mapStateToProps = (state: any) => ({
  heros: state?.heros.herosList
})

export default connect(mapStateToProps, null)(Home)

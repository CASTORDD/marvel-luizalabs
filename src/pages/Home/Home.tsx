import { connect } from 'react-redux'

import { HerosList } from 'components'

const Home = ({ heros }: any) => {
  return (
    <div className="container">
      <HerosList heros={heros} />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  heros: state?.heros.herosList
})

export default connect(mapStateToProps, null)(Home)

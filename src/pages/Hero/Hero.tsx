import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getHero } from 'store/modules/heros/thunks'

import { HeroInfo } from 'components'

import './styles.css'

const Hero = ({ data }: any) => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatchHero()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch])

  async function dispatchHero() {
    await dispatch(getHero(parseInt(id)))
  }

  return <HeroInfo data={data} />
}

const mapStateToProps = (state: any) => ({
  data: state?.heros?.hero
})

export default connect(mapStateToProps, null)(Hero)

import { useState } from 'react'

import { formatDate } from 'utils/Date'

import { ButtonIcon, DetailList } from 'components'
import {
  WrapperInfo,
  Description,
  WrapperIcons,
  IconInfo,
  WrapperRating,
  CompRating,
  WrapperModified,
  WrapperImage,
  ImageHero,
  WrapperLists
} from './styles'

import { ReactComponent as IconComics } from './img/comics.svg'
import { ReactComponent as IconMovies } from './img/movies.svg'

const HeroInfo = ({ data }: any) => {
  const [rating, setRating] = useState(0)

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  return (
    <>
      {data ? (
        <>
          <WrapperInfo name={data.name}>
            <Description>
              <ButtonIcon
                className="btn"
                icon="heart"
                onClick={() => console.log('favorite -->')}
              />
              <h1>{data.name}</h1>
              {!!data.description && <p>{data.description}</p>}
              <WrapperIcons>
                <IconInfo>
                  <h4>Comics</h4>
                  <div className="data">
                    <IconComics />
                    <span>
                      {data?.comics?.returned > 0
                        ? data?.comics?.returned
                        : '---'}
                    </span>
                  </div>
                </IconInfo>
                <IconInfo>
                  <h4>Movies</h4>
                  <div className="data">
                    <IconMovies />
                    <span>
                      {data?.series?.returned > 0
                        ? data?.series?.returned
                        : '---'}
                    </span>
                  </div>
                </IconInfo>
              </WrapperIcons>
              <WrapperRating>
                <h4>Rating :</h4>
                <CompRating
                  onClick={handleRating}
                  ratingValue={rating}
                  size={20}
                  label={false}
                  transition
                  fillColor="#ea1e2b"
                  emptyColor="#8F8F8F"
                  className="rating"
                />
              </WrapperRating>
              <WrapperModified>
                <h4>Último quadrinho :</h4>
                <span>{formatDate(data.modified)}</span>
              </WrapperModified>
            </Description>
            <WrapperImage>
              <ImageHero
                src={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}
              />
            </WrapperImage>
          </WrapperInfo>
          <WrapperLists>
            <DetailList
              data={data.comics}
              title="Comics"
              visible={data.comics.returned}
            />
            <DetailList
              data={data.series}
              title="Series"
              visible={data.series.returned}
            />
            <DetailList
              data={data.stories}
              title="Stories"
              visible={data.stories.returned}
            />
            <DetailList
              data={data.events}
              title="events"
              visible={data.events.returned}
            />
          </WrapperLists>
        </>
      ) : (
        <p>Don have info</p>
      )}
    </>
  )
}

export default HeroInfo

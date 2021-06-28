import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import Rating from 'react-simple-star-rating'

export const WrapperInfo = styled.div<{ name: string }>`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
  ${({ name }) => css`
    &::after {
      color: rgba(255, 255, 255, 0.8);
      content: '${name}';
      position: absolute;
      top: 68rem;
      left: 1rem;
      z-index: -1;
      font-size: 15rem;
      font-weight: bold;
      line-height: 0.7;
      text-transform: uppercase;

      ${media.greaterThan('medium')`
        font-size: 30rem;
        top: 20rem;
        left: 10rem;
      `}
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    padding: 0 ${theme.spacings.small};
    margin: ${theme.spacings.xxlarge} 0;

    ${media.greaterThan('medium')`
      width: 30%;
    `}

    .btn {
      width: 16px;
      position: absolute;
      top: 10px;
      right: 0;
      padding: 0;
      span {
        margin: 0;
      }
    }

    h1 {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
    }

    p {
      font-size: ${theme.font.sizes.small};
      line-height: 1.5;
      margin: ${theme.spacings.small} 0;
    }
  `}
`

export const WrapperIcons = styled.div`
  display: flex;
`

export const IconInfo = styled.div`
  ${({ theme }) => css`
    width: 50%;

    h4 {
      width: 100%;
      margin: 0 0 ${theme.spacings.xxsmall} 0;
    }

    .data {
      display: flex;
      align-items: center;
    }

    svg {
      width: 2.4rem;
      fill: ${theme.colors.red};
    }
    span {
      padding: 0 ${theme.spacings.xxsmall};
    }
  `}
`

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
  `}
`

export const WrapperRating = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.small} 0;
  `}
`

export const CompRating = styled(Rating)`
  ${({ theme }) => css`
    display: inline-block;
    &.rating {
      padding: 0 0 0 ${theme.spacings.xxsmall};
    }
  `}
`

export const WrapperModified = styled.div`
  ${({ theme }) => css`
    display: flex;
    span {
      padding: 0 0 0 ${theme.spacings.xsmall};
    }
  `}
`
export const WrapperImage = styled.div`
  ${media.greaterThan('medium')`
    width: 70%;
  `}
`

export const ImageHero = styled.img`
  display: block;
  margin: 0 auto;
`

export const WrapperLists = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.large} 0;
    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`

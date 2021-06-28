import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: 100%;
    height: 5rem;
    margin: 0 0 -5px 0;
    background-color: ${theme.colors.red};
    ${media.greaterThan('medium')`
      height: 10rem;
    `};
  `}
`

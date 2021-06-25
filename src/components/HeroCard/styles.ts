import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const CardWrapper = styled.li`
  ${({ theme }) => css`
    width: 40.8%;
    display: inline-block;
    margin: 0 ${theme.spacings.xsmall} ${theme.spacings.small};
    cursor: pointer;

    ${media.greaterThan('medium')`
      width: 22.2%;
    `}

    img {
      width: 100%;
      border-bottom: 6px solid ${theme.colors.red};
    }
  `}
`

export const HeroData = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    padding: ${theme.spacings.xsmall} 0;

    span {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
    }
  `}
`

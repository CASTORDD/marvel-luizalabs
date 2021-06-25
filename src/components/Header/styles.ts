import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HeaderProps } from './Header'

const wrapperModifiers = {
  heroInfo: () => css`
    flex-direction: row;
    justify-content: flex-start;
  `
}

export const Wrapper = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme, heroInfo }) => css`
    ${!!heroInfo && wrapperModifiers.heroInfo}
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};
    ${media.lessThan('medium')``}
  `}
`

export const Intro = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    p {
      padding: ${theme.spacings.xsmall} 0;
    }
  `}
`

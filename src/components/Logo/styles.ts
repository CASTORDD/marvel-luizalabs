import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from './Logo'

const wrapperModifiers = {
  normal: () => css`
    align-items: flex-end;
    svg {
      width: 20rem;
    }
  `,
  small: () => css`
    align-items: center;
    svg {
      width: 15rem;
    }
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 10rem;

      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  width: fit-content;
  display: flex;

  ${({ theme, size, hideOnMobile }) => css`
    ${!!size && wrapperModifiers[size]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}

    .text {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      padding: 0 0 0 ${theme.spacings.xsmall};
    }
  `}
`

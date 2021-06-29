import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Link } from 'react-router-dom'

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

export const Wrapper = styled(Link)<LogoProps>`
  ${({ theme, size, hideOnMobile }) => css`
    width: fit-content;
    display: flex;
    text-decoration: none;
    ${!!size && wrapperModifiers[size]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}

    .text {
      color: ${theme.colors.darkGray};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      padding: 0 0 0 ${theme.spacings.xsmall};
    }
  `}
`

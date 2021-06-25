import styled, { css } from 'styled-components'
import { Search } from '@styled-icons/ionicons-solid/Search'
import { SearchProps } from './Search'

export const Wrapper = styled.div<SearchProps>`
  ${({ theme, hasHero }) => css`
    position: relative;
    width: 100%;
    max-width: 70%;
    border-radius: ${theme.border.round};
    background-color: rgba(237, 29, 36, 0.1);
    padding: 0 ${theme.spacings.xsmall};
    ${!!hasHero && WrapperModifier.bgc}
    ${!!hasHero && WrapperModifier.margin}
  `}
`
const WrapperModifier = {
  bgc: () => css`
    background-color: #fff;
  `,
  margin: () => css`
    margin: 0 0 0 3rem;
  `
}

export const Input = styled.input<SearchProps>`
  ${({ theme, hasHero }) => css`
    width: 100%;
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xsmall} 0 ${theme.spacings.xsmall}
      ${theme.spacings.xlarge};
    border: none;
    background-color: transparent;
    ${!!hasHero && InputModifier.color}
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme.colors.red};
      opacity: 0.5;
      ${!!hasHero && InputModifier.color}
    }
  `}
`
const InputModifier = {
  color: () => css`
    color: #666;
  `
}

export const Icon = styled(Search)<SearchProps>`
  ${({ theme }) => css`
    position: absolute;
    top: 14px;
    left: ${theme.spacings.xsmall};
    color: ${theme.colors.red};
  `}
`

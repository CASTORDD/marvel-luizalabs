import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const PagerWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Controls = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: fit-content;
    padding: ${theme.spacings.xsmall};
    button {
      color: ${theme.colors.darkGray};
      min-width: 32px;
      height: 32px;
      font-size: $small;
      font-weight: bold;
      border-radius: 6px;
      margin: 0 0.3rem;
      padding: 0 0.3rem;
      transition: all ease-in-out 300ms;
      border: none;
      background-color: transparent;

      &.active {
        color: ${theme.colors.white};
        background-color: ${theme.colors.red};
        &:hover {
          background-color: ${theme.colors.red};
        }
      }
      &:hover {
        background-color: ${theme.colors.lightGray};
      }

      svg {
        color: ${theme.colors.gray};
      }
    }

    select {
      border-radius: 6px;
      border: none;
      margin: 0 0.3rem;
      padding: 0.45rem 0;
      border: 1px solid ${theme.colors.darkGray};
      background-color: ${theme.colors.lightGray};
      &:focus {
        outline: ${theme.colors.red};
      }
    }

    span {
      display: block;
      width: 100%;
      font-size: ${theme.spacings.xsmall};
      text-align: center;
      padding: 0 0 0.3rem;
      ${media.greaterThan('medium')`
        display: inline-block;
        /* width: fit-content; */
        font-size: ${theme.spacings.xsmall};
      `}
      @media (min-width: 480px) {
      }
    }
  `}
`

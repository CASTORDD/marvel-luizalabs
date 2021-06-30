import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.div<{ className?: string | null }>`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    position: relative;
    padding: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      svg {
        fill: ${theme.colors.red};

        .heart {
          stroke: ${theme.colors.red};
        }
      }

      .tip {
        bottom: 30px;
        opacity: 1;
      }
    }

    &.active {
      color: ${theme.colors.black};
      svg {
        fill: ${theme.colors.red};
      }
      .heart {
        fill: ${theme.colors.red};
        stroke: ${theme.colors.red};
      }
    }
    &.disabled:not(.active) {
      cursor: not-allowed;
      display: none;
      svg {
        fill: transparent;

        .heart {
          stroke: ${theme.colors.red};
        }
      }
    }
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const Tip = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 15rem;
    position: absolute;
    bottom: 15px;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    text-align: center;
    padding: ${theme.spacings.xxsmall};
    border-radius: 6px;
    background-color: rgba(44, 75, 92, 0.9);
    opacity: 0;
    transition: all 300ms ease-in-out;
  `}
`

export const Icon = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 ${theme.spacings.xxsmall} 0 0;
    svg {
      fill: ${theme.colors.gray};
      width: 100%;

      &.order {
        margin-top: -3px;
      }

      .heart {
        stroke: ${theme.colors.gray};
      }
    }
  `}
`

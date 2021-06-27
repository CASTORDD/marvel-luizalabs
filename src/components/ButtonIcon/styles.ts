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
    }

    &.active {
      color: ${theme.colors.black};
      svg {
        fill: ${theme.colors.red};

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
    width: 15rem;
    position: absolute;
    font-size: ${theme.font.sizes.xsmall};
    opacity: 0;
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

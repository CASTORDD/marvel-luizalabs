import styled, { css } from 'styled-components'

export const SorryWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    padding: 0 0 ${theme.spacings.large};
    display: flex;
    justify-content: center;
    flex-direction: column;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.large} 0;
  `}
`

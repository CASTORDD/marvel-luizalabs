import styled, { css } from 'styled-components'

export const HerosWrapper = styled.ul`
  width: 100%;
  ${({ theme }) => css`
    list-style: none;
  `}
`

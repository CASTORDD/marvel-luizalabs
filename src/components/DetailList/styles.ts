import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    flex: 1;
    padding: ${theme.spacings.xsmall};
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.5);

    h3 {
      margin: 0 0 ${theme.spacings.xxsmall};
    }
  `}
`

export const List = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    border-top: 1px solid ${theme.colors.gray};
    span {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

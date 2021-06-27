import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HerosWrapper = styled.ul`
  width: 100%;
  ${({ theme }) => css`
    list-style: none;
    color: ${theme.colors.gray};
  `}
`

export const HeaderList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  ${({ theme }) => css`
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};

    .count {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      ${media.lessThan('medium')`
        text-align: center;
      `}
    }
  `}
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
`

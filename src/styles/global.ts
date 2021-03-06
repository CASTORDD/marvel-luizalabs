import { createGlobalStyle, css } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/roboto-v27-latin-regular.woff2') format('woff2')
  }
  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/roboto-v27-latin-700.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      color: ${theme.colors.darkGray};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      height: 100%;
    }

    .container {
      width: 100%;
      max-width: 1240px;
      padding: ${theme.spacings.xsmall};
      margin: 0 auto;
      ${media.lessThan('medium')`
        padding: ${theme.spacings.xxsmall};
      `}
    }
  `}

`
export default GlobalStyles

import { Provider } from 'react-redux'
import configureStore from 'store/config'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, Hero } from 'pages'

import { Header } from 'components'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { Footer } from './styles'

export const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <div className="container">
            <Header />
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/hero/:id'} component={Hero} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App

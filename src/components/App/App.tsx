import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, Hero } from 'pages'

import { Header } from 'components'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <div className="container">
          <Header />
          <h1>Marvel Ifood</h1>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/hero/:id'} component={Hero} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

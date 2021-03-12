import { FC } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Location } from 'history'
import Header from './header/Header'
import Background from './Background'
import Home from './home/Home'
import D3ProjectGrid from './projects/D3ProjectGrid'
import OtherProjectGrid from './projects/OtherProjectGrid'
import About from './about/About'

type AppProps = {
  location: Location
}

const App: FC<AppProps> = ({ location }) => {
  type route = {
    path: string
    component: FC
  }

  const routes: route[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/d3', component: D3ProjectGrid },
    { path: '/other', component: OtherProjectGrid },
  ]

  const renderRoutes: JSX.Element[] = routes.map(
    (route: route, i: number): JSX.Element => (
      <Route exact path={route.path} key={i} component={route.component} />
    )
  )

  const transitionDuration: number = 500 // matching value in base.scss

  return (
    <>
      <Background />
      <Header />

      <ReactCSSTransitionReplace
        transitionName="fade-wait"
        transitionEnterTimeout={transitionDuration}
        transitionLeaveTimeout={transitionDuration}
      >
        <div key={location.pathname}>
          <Switch location={location}>
            {renderRoutes}
            <Redirect to="/" />
          </Switch>
        </div>
      </ReactCSSTransitionReplace>
    </>
  )
}

export default withRouter(App)

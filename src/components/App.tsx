import { Route, Routes, useLocation } from 'react-router-dom'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import Header from './header/Header'
import Background from './Background'
import Home from './home/Home'
import D3ProjectGrid from './projects/D3ProjectGrid'
import OtherProjectGrid from './projects/OtherProjectGrid'
import About from './about/About'

type route = {
  path: string
  element: JSX.Element
}

const App = () => {
  const routes: route[] = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/d3', element: <D3ProjectGrid /> },
    { path: '/other', element: <OtherProjectGrid /> },
  ]

  const location = useLocation()
  const transitionDuration: number = 500 // matching value in base.scss

  return (
    <>
      <Background />
      <Header />

      {/* @ts-expect-error async component throws type error */}
      <ReactCSSTransitionReplace
        // @ts-expect-error async component throws type error
        transitionName="fade-wait"
        transitionEnterTimeout={transitionDuration}
        transitionLeaveTimeout={transitionDuration}
      >
        <div key={location.pathname}>
          <Routes location={location}>
            {routes.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </ReactCSSTransitionReplace>
    </>
  )
}

export default App

import Header from './Header'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

const component = (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
)

it('renders without crashing', () => {
  const div = document.createElement('div')
  const root = createRoot(div)
  root.render(component)
  root.unmount()
})

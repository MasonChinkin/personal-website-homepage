import ReactDom from 'react-dom'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

const component = (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(component, div)
  ReactDom.unmountComponentAtNode(div)
})

import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const component = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(component, div)
  ReactDom.unmountComponentAtNode(div)
})

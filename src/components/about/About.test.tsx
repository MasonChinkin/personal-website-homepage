import ReactDom from 'react-dom'
import About from './About'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<About />, div)
  ReactDom.unmountComponentAtNode(div)
})

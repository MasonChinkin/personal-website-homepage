import ReactDom from 'react-dom'
import Root from './Root'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Root />, div)
  ReactDom.unmountComponentAtNode(div)
})

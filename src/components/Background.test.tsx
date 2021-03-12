import ReactDom from 'react-dom'
import Background from './Background'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Background />, div)
  ReactDom.unmountComponentAtNode(div)
})

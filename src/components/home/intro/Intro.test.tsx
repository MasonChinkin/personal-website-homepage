import ReactDom from 'react-dom'
import Intro from './Intro'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Intro />, div)
  ReactDom.unmountComponentAtNode(div)
})

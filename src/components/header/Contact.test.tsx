import ReactDom from 'react-dom'
import DesktopContact from './DesktopContact'
import MobileContact from './MobileContact'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<DesktopContact />, div)
  ReactDom.unmountComponentAtNode(div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<MobileContact />, div)
  ReactDom.unmountComponentAtNode(div)
})

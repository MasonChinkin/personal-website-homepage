import ReactDom from 'react-dom'
import FeaturedProjects from './FeaturedProjects'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<FeaturedProjects />, div)
  ReactDom.unmountComponentAtNode(div)
})

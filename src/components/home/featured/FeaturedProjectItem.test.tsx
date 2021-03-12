import ReactDom from 'react-dom'
import FeaturedProjectItem from './FeaturedProjectItem'
import { d3Projects } from '../../projects/projectList'

const project = d3Projects[0]

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<FeaturedProjectItem project={project} />, div)
  ReactDom.unmountComponentAtNode(div)
})

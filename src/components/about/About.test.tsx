import About from './About'
import { createRoot } from 'react-dom/client'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const root = createRoot(div)
  root.render(<About />)
  root.unmount()
})

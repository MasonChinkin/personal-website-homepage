import Background from './Background'
import { createRoot } from 'react-dom/client'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const root = createRoot(div)
  root.render(<Background />)
  root.unmount()
})

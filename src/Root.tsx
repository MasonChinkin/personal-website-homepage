import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

const Root: FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Root

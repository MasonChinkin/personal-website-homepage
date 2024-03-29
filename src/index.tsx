import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import Root from './Root'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const domNode = document.getElementById('root')!
const root = createRoot(domNode)

root.render(<Root />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

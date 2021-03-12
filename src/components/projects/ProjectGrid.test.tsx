import ReactDom from 'react-dom'
import D3ProjectGrid from './D3ProjectGrid'
import OtherProjectGrid from './OtherProjectGrid'

it('D3ProjectGrid renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<D3ProjectGrid />, div)
  ReactDom.unmountComponentAtNode(div)
})

it('OtherProjectGrid renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<OtherProjectGrid />, div)
  ReactDom.unmountComponentAtNode(div)
})

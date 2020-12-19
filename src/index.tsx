import './app.css'
import ReactDOM from 'react-dom'
// @ts-ignore
import getRoute from '@/router/router'

ReactDOM.render(
  getRoute(),
  document.getElementById('root'),
)

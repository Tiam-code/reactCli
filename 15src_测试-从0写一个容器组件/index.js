import react from 'react'
import reactDom from 'react-dom'
import App from './App'
import store from "./redux/store";
import {Provider} from 'react-redux'

reactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))
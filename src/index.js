import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { initialState } from './context/initialState'
import reducer from './context/reducer'
import { StateProvider } from './context/StateProvider'
// import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StateProvider initialState={initialState} reducer={reducer}>
                <App />

            </StateProvider>
        </BrowserRouter>

    </React.StrictMode>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'
import GlobalStyles from '@/globalStyles'
import MainContext, { defaultValue } from '@/contexts/Main.context'
import MainPage from './pages/Main.page'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Global styles={GlobalStyles} />
        <MainContext.Provider value={defaultValue}>
            <MainPage></MainPage>
        </MainContext.Provider>
    </React.StrictMode>
)

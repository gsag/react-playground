import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'
import GlobalStyles, { CssBaseline } from '@/globalStyles'
import ShortenerPage from '@/containers/shortener'
import MainContext, { defaultValue } from '@/contexts/Main.context'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.Fragment>
        <CssBaseline />
        <Global styles={GlobalStyles} />
        <MainContext.Provider value={defaultValue}>
            <ShortenerPage />
        </MainContext.Provider>
    </React.Fragment>
)

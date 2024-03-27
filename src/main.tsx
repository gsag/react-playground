import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'

import GlobalStyles, { CssBaseline } from '@/globalStyles'
import ShortenerPage from '@/containers/shortener'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssBaseline />
        <Global styles={GlobalStyles} />
        <ShortenerPage />
    </React.StrictMode>
)

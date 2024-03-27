import { css } from '@emotion/react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const GlobalStyles = css`
    * {
        font-family: Roboto, sans-serif;
    }
`
export {default as CssBaseline} from '@mui/material/CssBaseline'
export default GlobalStyles

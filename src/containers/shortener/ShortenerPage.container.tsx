import React, { useContext } from 'react'
import Container from '@/components/material-design/Container.component'
import useFetch from '@/hooks/useFetch'
import MainContext from '@/contexts/Main.context'

const ShortenerPage = (): React.JSX.Element => {
    const context = useContext(MainContext)

    const { data, loading } = useFetch('https://api.rebrandly.com/v1/links', {
        headers: new Headers({
            'Content-Type': 'application/json',
            apikey: context.API_KEY,
        }),
        method: 'POST',
        body: JSON.stringify({
            destination:
                'https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g',
        }),
    })
    console.log(data)
    console.log(loading)
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <span>hello vite!</span>
            </Container>
        </React.Fragment>
    )
}

export default ShortenerPage

import React, { useContext } from 'react'
import MainContext from '@/contexts/Main.context'

const MainPage = (): React.JSX.Element => {
    const context = useContext(MainContext)
    return (
        <React.Fragment>
            <section>
                <h1>{context.Greetings}</h1>
            </section>
        </React.Fragment>
    )
}

export default MainPage

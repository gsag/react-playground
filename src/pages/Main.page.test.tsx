import { render, screen } from '@testing-library/react'
import MainPage from './Main.page'
import MainContext from '@/contexts/Main.context'

describe('Main page', () => {
    it('should render component', async () => {
        render(
            <MainContext.Provider value={{ Greetings: 'vitest' }}>
                <MainPage />
            </MainContext.Provider>
        )
        expect(await screen.findByText('vitest')).toBeInTheDocument()
    })
})

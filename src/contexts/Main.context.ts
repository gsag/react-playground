import Environment from '@/vite-env'
import { createContext } from 'react'

export interface MainContextProps {
    Greetings: string
}

export const defaultValue: MainContextProps = {
    Greetings: Environment.HELLO_WORLD,
} as const

const MainContext = createContext<MainContextProps>(defaultValue)
export default MainContext

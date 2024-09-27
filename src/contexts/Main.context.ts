import Environment from '@/vite-env'
import { createContext } from 'react'

export interface MainContextProps {
    API_KEY: string
}

export const defaultValue: MainContextProps = {
    API_KEY: Environment.API_KEY,
} as const

const MainContext = createContext<MainContextProps>(defaultValue)
export default MainContext

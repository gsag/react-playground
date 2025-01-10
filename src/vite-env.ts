/// Imports all environment configurations from .env here
export default class Environment {
    static HELLO_WORLD: string = import.meta.env.CFG_HELLO_WORLD
}

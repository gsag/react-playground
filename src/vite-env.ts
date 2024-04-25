/// Imports all environment configurations from .env here
export default class Environment
{
    static API_KEY: string | undefined = import.meta.env.CFG_SHORTENER_API_KEY
}
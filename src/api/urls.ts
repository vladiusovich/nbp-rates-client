// export const baseUrl = 'https://pokeapi.co/api/v2'
export const baseUrl = 'https://api.nbp.pl/api'

const url = (relative: string) => (`${baseUrl}/${relative}`);

export const urls = {
    exchangerates: {
        tables: url("exchangerates/tables"),
        rates: url("exchangerates/rates"),
    },
    cenyzlota: url("cenyzlota"),
}
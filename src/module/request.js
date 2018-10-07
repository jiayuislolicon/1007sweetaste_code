import r from 'superagent'

const API = (path) => {
    return 'https://shaggy.froggy.tw/api/' + path
}

export const formRequest = (method, path, data) =>
    r[method]( API(path) )
        .type('form')
        .set('X-API-Key', '84w4ckgcgcw4wkksc4wk44g4440k40o0ocgs0w08')
        .send(data)

export const queryRequest = (method, path, data) =>
    r[method]( API(path) )
        .set('X-API-Key', '84w4ckgcgcw4wkksc4wk44g4440k40o0ocgs0w08')
        .query(data)



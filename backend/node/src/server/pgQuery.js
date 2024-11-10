import pg from 'pg';
pg.defaults.parseInt8 = true;

import pgConn from './pgConn.js';

const { Pool } = pg;

const pool = new Pool( pgConn );

pool.query('SELECT NOW() as now')
    .then(sqlRslt => console.log(`Database connection at ${sqlRslt.rows[0].now}`))
    .catch(err => console.error(err));

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
// https://node-postgres.com/features/pooling
pool.on('error', (err, client) => {
    console.log(`Unexpected error on idle client ${err.toString()}`);
    process.exit(-1);
})

export default {
    query: (text, params) => pool.query(text, params)
}

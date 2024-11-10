import { existsSync, readFileSync } from 'fs';
import * as path from 'path';

const {
        PG_HOST = 'localhost',
        PG_DATABASE = 'postgres',
        PG_USER = 'postgres',
        PG_PASSWORD,
        PG_PORT = 5432,
        PG_SSL = process.env.NODE_ENV === 'production' ? { require: true } : false, 
        DIR_SECRETS = '~/.secrets/'
    } = process.env;

let pgPassword = PG_PASSWORD;

if(!pgPassword) {
    const pgPassWordFile = 'pg_password';

    //Specify a valid Windows directory at the end of the statement below (⬇️) when developing on Windows
    const dir = DIR_SECRETS && existsSync(DIR_SECRETS) ? DIR_SECRETS : 'C:\\Program Files\\nodejs\\secrets';

    pgPassword = readFileSync(path.join(dir, pgPassWordFile), 'utf8').trim();
}

export default {
    host: PG_HOST,
    database: PG_DATABASE,
    user: PG_USER,
    password: pgPassword,
    port: PG_PORT,
    ssl: PG_SSL,
    max: 10, //set pool max size to 10
    idleTimeoutMillis: 1000, //close idle clients after 1 second
    connectionTimeoutMillis: 9999, //return an error after 10 seconds if connection could not be established
    maxUses: 7500, //close (and replace) a connection after it has been used 7500 times
};

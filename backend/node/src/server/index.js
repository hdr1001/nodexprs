// *********************************************************************
//
// Entry point the NodeJS Express server 
// JavaScript code file: index.js
//
// Copyright 2024 Hans de Rooij
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
// either express or implied. See the License for the specific
// language governing permissions and limitations under the
// License.
//
// *********************************************************************

import express from 'express';
import routerAbout from './routes/about.js';

const app = express();

app.use( express.json() );

//Use port 8080 in production, 8081 otherwise
const getServerPort = () => process.env.NODE_ENV === 'production' ? 8080 : 8081;

//Application root
app.get('/', (req, resp) => resp.json({ foo: 'bar' }));

//Implementation of the application routers
app.use('/about', routerAbout);

//An HTTP request catch-all
app.use((req, resp) => {
    const err = { error: 'Not found' };

    resp.status(404).json( err );
});

//Start the Express server
const server = app.listen(getServerPort(), err => {
    if(err) {
        console.log(`Error occurred initializing Express server, ${err.message}`)
    }
    else {
        console.log(`Now listening on port ➡️ ${server.address().port}`)
    }
});

//Graceful shutdown
function gracefulShutdown() {
    console.log('Express server is shutting down');

    server.close(() => {
        console.log('Express server now closed');

        //Close or release, if needed, any connections and/or resources here

        process.exit(0);
    });
}

process.on('SIGTERM', () => { console.log('\nServer received SIGTERM'); gracefulShutdown(); });
process.on('SIGINT',  () => { console.log('\nServer received SIGINT');  gracefulShutdown(); });

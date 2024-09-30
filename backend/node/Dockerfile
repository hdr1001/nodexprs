##
#
#  Copyright Hans de Rooij 2024
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#  http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, 
#  software distributed under the License is distributed on an 
#  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
#  either express or implied. See the License for the specific 
#  language governing permissions and limitations under the 
#  License.
#
##

# Based on blog written by David Abram (https://bit.ly/3XJuEAN)

# https://docs.docker.com/reference/dockerfile/#arg
ARG NODE_VER=18.20
ARG BASE_IMG=alpine3.19

# FROM initializes a new build stage & sets the base image
# https://docs.docker.com/reference/dockerfile/#from
FROM node:${NODE_VER}-${BASE_IMG} AS base

# Use dumb-init as init-like process to handle signals properly
RUN apk update && apk add --no-cache dumb-init

# Set the working directory
# https://docs.docker.com/reference/dockerfile/#workdir
WORKDIR /usr/src/app/

# Install app dependencies
# https://docs.docker.com/reference/dockerfile/#run
COPY package*.json ./

FROM base AS dev

# Use a cache mount to cache dependencies
RUN \
  --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install

# Deliver source code
# https://docs.docker.com/reference/dockerfile/#copy
COPY src/ ./src/

# https://docs.docker.com/reference/dockerfile/#expose
EXPOSE 8081

# Start application
# To do: can not get nodemon to run
# CMD [ "dumb-init", "nodemon", "./src/server/index.js" ]
# Error: [dumb-init] nodemon: No such file or directory 🤷🏻‍♂️
CMD [ "dumb-init", "node", "./src/server/index.js" ]

FROM base AS production

# Use production for environment variable NODE_ENV
# https://docs.docker.com/reference/dockerfile/#env
ENV NODE_ENV=production

# Use a cache mount to cache dependencies
RUN \
  --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm ci --only=production

# Run the Docker containers as (non-root) user node
# https://docs.docker.com/reference/dockerfile/#user
USER node

COPY --chown=node:node src/ ./src/

# https://docs.docker.com/reference/dockerfile/#expose
EXPOSE 8080

# Start application
CMD [ "dumb-init", "node", "./src/server/index.js" ]

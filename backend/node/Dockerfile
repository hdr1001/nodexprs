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

# https://docs.docker.com/reference/dockerfile/#arg
ARG NODE_VER=18.20
ARG BASE_IMG=alpine3.19

# FROM initializes a new build stage & sets the base image
# https://docs.docker.com/reference/dockerfile/#from
FROM node:${NODE_VER}-${BASE_IMG}

# Use production (instead of development) node environment by default
# https://docs.docker.com/reference/dockerfile/#env
ENV NODE_ENV=production

# Set the working directory
# https://docs.docker.com/reference/dockerfile/#workdir
WORKDIR /usr/src/app/

# Install app dependencies
# https://docs.docker.com/reference/dockerfile/#run
COPY package*.json ./
RUN npm install

# Run the Docker containers as (non-root) user node
# https://docs.docker.com/reference/dockerfile/#user
USER node

# Deliver source code
# https://docs.docker.com/reference/dockerfile/#copy
COPY --chown=node:node src/ ./src/

# https://docs.docker.com/reference/dockerfile/#expose
EXPOSE 8080

# Start application
CMD [ "npm", "start" ]

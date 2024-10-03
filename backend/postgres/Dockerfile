## *********************************************************************
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
## *********************************************************************

# https://docs.docker.com/reference/dockerfile/#arg
ARG PG_VER=16.4
ARG BASE_IMG=alpine3.20

# FROM initializes a new build stage & sets the base image
# https://docs.docker.com/reference/dockerfile/#from
FROM postgres:${PG_VER}-${BASE_IMG} AS base

# Initialize the needed database structures
COPY ./SQL/10-init.sql /docker-entrypoint-initdb.d/10-init.sql

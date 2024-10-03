-- *********************************************************************
--
-- SQL DDL statements for persisting data 
-- SQL code file: 10-init.sql
--
-- Copyright 2024 Hans de Rooij
--
-- Licensed under the Apache License, Version 2.0 (the "License");
-- you may not use this file except in compliance with the License.
-- You may obtain a copy of the License at
--
--       http://www.apache.org/licenses/LICENSE-2.0
--
-- Unless required by applicable law or agreed to in writing, 
-- software distributed under the License is distributed on an 
-- "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
-- either express or implied. See the License for the specific 
-- language governing permissions and limitations under the 
-- License.
--
-- *********************************************************************

SET default_tablespace = 'pg_default';
SET default_with_oids = false;

-- Create the sequence for the primary key of table archive gleif
CREATE SEQUENCE public.test_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

-- Create table for archiving a D&B data product
CREATE TABLE public.test (
   id integer NOT NULL DEFAULT nextval('test_id_seq'::regclass),
   item JSONB
);

INSERT INTO test ( id, item ) VALUES
    ( nextval('test_id_seq'), '{"name": "netherlands", "iso": "NL"}' ),
    ( nextval('test_id_seq'), '{"name": "nederland", "iso": "NL"}' );

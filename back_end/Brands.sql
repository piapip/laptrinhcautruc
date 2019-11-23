--
-- PostgreSQL database dump
--

-- Dumped from database version 12.0
-- Dumped by pg_dump version 12.0

-- Started on 2019-11-16 09:17:55

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 204 (class 1259 OID 16401)
-- Name: Brands; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Brands" (
    id integer NOT NULL,
    brand_name text NOT NULL
);


--
-- TOC entry 2822 (class 0 OID 16401)
-- Dependencies: 204
-- Data for Name: Brands; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Brands" (id, brand_name) FROM stdin;
23	Adidas
24	Nike
25	Victorias Secret
\.


--
-- TOC entry 2695 (class 2606 OID 16408)
-- Name: Brands Brands_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Brands"
    ADD CONSTRAINT "Brands_pkey" PRIMARY KEY (id);


-- Completed on 2019-11-16 09:17:55

--
-- PostgreSQL database dump complete
--


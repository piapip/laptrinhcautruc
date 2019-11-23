--
-- PostgreSQL database dump
--

-- Dumped from database version 12.0
-- Dumped by pg_dump version 12.0

-- Started on 2019-11-16 09:47:01

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
-- TOC entry 203 (class 1259 OID 16393)
-- Name: Products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Products" (
    id integer NOT NULL,
    brand integer NOT NULL,
    price integer NOT NULL,
    description text,
    image text,
    sold_out boolean NOT NULL,
    category integer NOT NULL
);


--
-- TOC entry 2824 (class 0 OID 16393)
-- Dependencies: 203
-- Data for Name: Products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Products" (id, brand, price, description, image, sold_out, category) FROM stdin;
13	24	200	Most popular jacket in the world	https://img.jimmyjazz.com/images/f_auto/q_auto/t_1000/product/544119010-black-1/NIKE-NIKE-WINDRUNNER-JACKET	f	35
12	23	250	Best jean	https://i.pinimg.com/originals/15/ed/63/15ed63c08ff0f0e8e189ca732de13370.jpg	t	34
14	25	350	Sexy dress	https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/W/70683_1530887858.jpg	f	36
\.


--
-- TOC entry 2695 (class 2606 OID 16400)
-- Name: Products Products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);


--
-- TOC entry 2696 (class 2606 OID 16409)
-- Name: Products Products_brand_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_brand_fkey" FOREIGN KEY (brand) REFERENCES public."Brands"(id) NOT VALID;


--
-- TOC entry 2697 (class 2606 OID 16422)
-- Name: Products Products_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_category_fkey" FOREIGN KEY (category) REFERENCES public."Categories"(id) NOT VALID;


-- Completed on 2019-11-16 09:47:02

--
-- PostgreSQL database dump complete
--


'use client';

import { motion } from 'framer-motion'

import { useRef, useState } from 'react';

import Link from 'next/link'

import emailjs from "@emailjs/browser";

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion'

const Feedback = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // XLNUR22KNfdMdytYj
    //-GM4ut8w2VXke7ndpn-j9

    // service_ekgfr4y
    //tempalte_cknazmf
    emailjs
      .send(
        'service_ekgfr4y',
        'template_cknazmf',
        {
          from_name: form.name,
          to_name: "Oman Ramalho",
          from_email: form.email,
          to_email: "omanpple42@gmail.com",
          message: form.message,
        },
        'XLNUR22KNfdMdytYj'
      )
      .then(
        () => {
          setLoading(false);
          alert("Obrigado entrarei em contato com você o mais breve possível.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahhh, Aconteceu algo de errado. Por favor tente novamente.");
        }
      );
  };

  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
            <img src='https://github.com/omanramalho42.png' alt='avatar' />
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Oman
            </h4>
            <Link className="cursor-pointer" href="https://my-port-3d.vercel.app/" target="_blank">
              <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white'>
                Meu portifolio
              </p>
            </Link>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Fundador da Space Oman Company
            </p>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            Nós conte o problema que você quer resolver que retornaremos com uma solução viável para seu negócio. 
          </p>
        </motion.div>
          
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          {/* <img
            src="/planet-09.png"
            alt="planet-09"
            className="absolute z-[0] w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          /> */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex w-full flex-col gap-8 '
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Seu nome
              </span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Qual é o seu nome?"
                className='bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Seu email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Qual seu endereço de email?"
                className='bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Sua mensagem</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='O que você quer dizer?'
                className='bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-blue-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[-5%]"
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
};

export default Feedback;

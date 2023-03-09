'use client';

import { motion } from 'framer-motion'
import { TypingText } from '../components'

import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre Oman Company" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">SPACE OMAN COMPANY</span> {' '}
        oferece um serviço de terceirização para outras empresas 
        que desejam criar soluções tecnológicas sem ter que lidar com a complexidade 
        técnica e os custos envolvidos na manutenção de uma equipe de TI própria. 
        
        A empresa terceirizada pode ajudar seus clientes a , {' '}
        <span className="font-extrabold text-white">
          economizar tempo e dinheiro
        </span>{' '}
        garantindo a entrega de soluções de alta qualidade e com prazos adequados.
        {' '}

        Os serviços oferecidos por essa empresa podem incluir o desenvolvimento de aplicativos móveis para iOS e Android, 
        desenvolvimento de websites responsivos e {' '}
        <span className="font-extrabold text-white">
          otimizados para SEO{' '}
        </span>
        desenvolvimento de sistemas personalizados para empresas, {' '}
        além de serviços de consultoria em {' '}
        <span className="font-extrabold text-white">
          tecnologia e estratégia digital.
        </span> 

        {/* Com uma equipe altamente capacitada e sempre atualizada com as tendências de mercado, 
        a empresa busca entender as necessidades de seus clientes e entregar soluções personalizadas 
        que atendam às suas expectativas. Além disso, oferece suporte técnico após a entrega dos projetos, 
        garantindo que as soluções desenvolvidas estejam sempre atualizadas e funcionando adequadamente. */}

        {/* Com uma empresa de tecnologia de desenvolvimento web e mobile com serviços terceirizados, 
        é possível transformar suas ideias em soluções tecnológicas de alta qualidade, 
        sem ter que se preocupar com a complexidade técnica envolvida. Afinal, a inovação e a tecnologia 
        podem estar ao alcance de todos, basta contar com a parceria certa! */}
        
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

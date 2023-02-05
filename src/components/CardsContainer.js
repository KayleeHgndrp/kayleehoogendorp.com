/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components'

/* -------------------------- Internal Dependencies ------------------------- */
import { Skills } from "../data/SkillsData"
import Card from '../components/Card';

const CardsContainer = () => {

  return (
   <>
      {
        Skills.map(data => {
          return (
          <motion.div 
          key={data.id}
          initial={{ opacity: 0, y:200}}
          whileInView={{ opacity: 1, y:0}}
          viewport={{ once: false }}
          transition={{ ease: [0.17, 0.67, 0.83, 0.67] ,  duration: 1, delay: 0.8}}
          >
            <Card data={data}></Card>
          </motion.div>)
        })
      } 
  </>     
  );
}

export default CardsContainer;

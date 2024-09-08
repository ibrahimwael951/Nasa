"use client";

import React, { useState } from 'react';
 import { motion } from 'framer-motion';


 import './bg.css'


 //img
  
 function Bg() {

const [postion,setpostion] = useState(70)
const [scaleplant,setscaleplant] = useState(1)
  const [ contentpostion , setcontentpostion] = useState(1)


  const [ loginpostion , setloginpostion] = useState(0)
 



  const handleClick = () => {
    setcontentpostion(contentpostion === 1 ? 0 : 1);
    setloginpostion(loginpostion === 0 ? 1 : 0);
    setpostion(postion === 70? -570 : 70)
    setscaleplant(scaleplant === 1? 2 : 1)
  };

 
 

 

  

   return (
<>

         {/* content */}
        <motion.div    className='content' whileHover={{ opacity: 1 }}  initial={{ opacity: 0.3 }} style={{ transform : `scale(${contentpostion})`   }}>

      <h1> NASA </h1>


<span className='content-about'>
  we are <span className='namecompany'>NASA</span>,<br/> make some stuff so u want take look?
 </span>  <p className='content-p'>
   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odio quia in deleniti dolores minima sit consequatur praesentium ipsam voluptatum quibusdam tempora minus perferendis consectetur voluptas laboriosam, omnis libero eos. Dicta, sint harum!
  </p>

  <button onClick={handleClick} className='button-login'>login</button> 

 

        </motion.div>

        <motion.div className='login-page'  style={{ transform:`scale(${loginpostion})`  }}>
        <h1>login</h1>
        <form>
          <input type="text" placeholder="username" required />
          <input type="password" placeholder="password" required />
          <button>login</button>
        </form>
        <button onClick={handleClick} >x</button>
        </motion.div>







        
        {/* background */}
          <div  className='bg'   >

      <div>  </div>
      <div className='bg-1' style={{transform: `scale(${scaleplant})` , left: `${postion}px`  }}>
                        <div className='sun'></div>  


                  <div className='marcury-outline'>
                    <div className='marcury'>
                      <div className='marcury-1'></div>
                      
                    </div>
                  </div>




                  <div className='venus-outline-1'>
                    <div className='venus'></div>
                  </div>
                  


                    <div className='earth-outline-1'>
                      <div className='earth'>
                        <div className='earth-cicle'>
                          <div className='earth-inner'></div>
                        </div>
                      </div>
                      </div>



                      <div className='mars-outline-1'>
                    <div className='mars'></div>
                  </div>


                  <div className='jupiter-outline-1'>
                    <div className='jupiter'></div>
                  </div>


                  <div className='saturn-outline-1'>
                    <div className='saturn'></div>
                  </div>


                  <div className='uranus-outline-1'>
                    <div className='uranus'></div>
                  </div>



                  <div className='neptune-outline-1'>
                    <div className='neptune'></div>
                  </div>

      </div>
          </div>
          
</>
   )
 }
 
 export default Bg
 
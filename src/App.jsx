import './App.css';
import {motion} from 'framer-motion'


function App() {
  return (
    <div className="App">
      <div className='section'>
        <div className='nombreInfo'>
          <motion.h1
            initial={{x: -200, opacity:0}}
            animate={{x: 0, opacity:1}}
            transition={{duration:2}}
          >
            Agustin</motion.h1>
          <motion.h1
          initial={{x: -200, opacity:0}}
          animate={{x: 0, opacity:1}}
          transition={{duration:3}}
          >Robledo</motion.h1>
          <motion.p className='parr'
          initial={{opacity:0}}
          animate={{ opacity:1}}
          transition={{duration:2}}
          >Web designer & Developer</motion.p>
        </div>
        <motion.button className='buttonportfolio'
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        >Mi portfolio</motion.button>
        <img src="https://i.postimg.cc/JtVXyXWQ/Whats-App-Image-2023-01-24-at-22-50-05.png" className='imgMe' alt="imgMe" />
      </div>
      <div className='section2'>
        <motion.h1 className='title nombreInfo'
        initial={{x: -200, opacity:0}}
        whileInView={{x: 0, opacity:1}}
        viewport={{once:true,amount:0.5}}
        transition={{duration:2}}
        >Proyectos</motion.h1>
        <motion.div className='proyectsInfo'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true,amount:0.7}}
        transition={{duration:2}}
        >
          <div className='proyecto'>
            <a href="" target='blank'><img src="https://i.postimg.cc/P52MTcn4/Screenshot-2.png" alt="l1" /></a>
            <p>MUD Page & Store</p>
          </div>
          <div className='proyecto'>
            <a href="https://culturejs.netlify.app/index.html" target='blank'><img src="https://i.postimg.cc/8C4cqBhq/Screenshot-1.png" alt="l1" /></a>
            <p>Culture Store</p>
          </div>
        </motion.div>
      </div>
      <div className='section'>
        <motion.h1 className='title nombreInfo'
        initial={{x: -200, opacity:0}}
        whileInView={{x: 0, opacity:1}}
        viewport={{once:true,amount:0.5}}
        transition={{duration:2}}
        >Sobre Mi</motion.h1>
        <motion.p className='textSobremi'
        initial={{opacity:0}}
        whileInView={{ opacity:1}}
        viewport={{once:true,amount:0.5}}
        transition={{duration:2}}
        >Mi nombre es Agustin Robledo. Soy Diseñador y Desarrollador Web . Trabaje en varios desarrollos personales asi como tambien desarrollando paginas con E-Commerce para empresas. Soy una persona que siempre aspira a progresar y a aprender.</motion.p>
      </div>
      <div className='section2'>
        <motion.h1 className='title nombreInfo'
        initial={{x: -200, opacity:0}}
        whileInView={{x: 0, opacity:1}}
        viewport={{once:true,amount:0.5}}
        transition={{duration:2}}
        >Mis Habilidades</motion.h1>
        <div className='imgSkills'>
          <div className='skills'>
            <img src="https://i.postimg.cc/0Nfv4K5H/htmlcss-1.png" alt="img1" />
            <img src="https://i.postimg.cc/65YdBYj9/javascript.png" alt="img2" />
            <img src="https://i.postimg.cc/NjqGKrN5/React-icon-svg.png" alt="img3" />
            <img src="https://i.postimg.cc/FH63L1X8/firebase.png" alt="img4" />
            <img src="https://i.postimg.cc/43J1TP9G/Git-Icon-1788-C.png" alt="img5" />
          </div>
         <div className='skills'>
            <img src="https://i.postimg.cc/6QGRLw93/figma.png" alt="img6" />
            <img src="https://i.postimg.cc/gjGZWZ3X/canva.png" alt="img7" />
            <img src="https://i.postimg.cc/W3LZ5K37/framermotion.png" alt="img8" />
            <img src="https://i.postimg.cc/QNTF4sWG/Adobe-Photoshop-CC-icon-svg.png" alt="img9" />
            <img src="https://i.postimg.cc/5yzjXcCC/VEGAS-Pro-icon.png" alt="img10" />
         </div>
        </div>
      </div>
      <div className='section'>
        <motion.h1 className='title nombreInfo'
        initial={{x: -200, opacity:0}}
        whileInView={{x: 0, opacity:1}}
        viewport={{once:true,amount:0.5}}
        transition={{duration:2}}
        >Contacto</motion.h1>
        <motion.div className='contactoInfo'
        initial={{opacity:0}}
        whileInView={{ opacity:1}}
        viewport={{once:true,amount:0.5}}
        transition={{duration:2}}
        >
          <p>Correo: robledoagustin7@gmail.com</p>
          <p>Celular: 1167891196</p>
          <p className='hyperV'><a href="https://github.com/Ler0v" target='blank'>Github</a></p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='section'>
        <div className='nombreInfo'>
          <h1>Agustin</h1>
          <h1>Robledo</h1>
          <p className='parr'>Web designer & Developer</p>
        </div>
        <button className='buttonportfolio'>Mi portfolio</button>
        <img src="https://i.postimg.cc/JtVXyXWQ/Whats-App-Image-2023-01-24-at-22-50-05.png" className='imgMe' alt="imgMe" />
      </div>
      <div className='section2'>
        <h1 className='title nombreInfo'>Proyectos</h1>
        <div className='proyectsInfo'>
          <div className='proyecto'>
            <a href="https://culturejs.netlify.app/index.html" target='blank'><img src="https://i.postimg.cc/P52MTcn4/Screenshot-2.png" alt="l1" /></a>
            <p>MUD Page & Store</p>
          </div>
          <div className='proyecto'>
            <a href="https://culturejs.netlify.app/index.html" target='blank'><img src="https://i.postimg.cc/8C4cqBhq/Screenshot-1.png" alt="l1" /></a>
            <p>Culture Store</p>
          </div>
          <div className='proyecto'>
            <a href="https://culturejs.netlify.app/index.html" target='blank'><img src="https://i.postimg.cc/8C4cqBhq/Screenshot-1.png" alt="l1" /></a>
            <p>Culture Store</p>
          </div>
        </div>
      </div>
      <div className='section'>
        <h1 className='title nombreInfo'>Sobre Mi</h1>
        <p className='textSobremi'>Mi nombre es Agustin Robledo. Soy Diseñador y Desarrollador Web . Trabaje en varios desarrollos personales asi como tambien desarrollando paginas con E-Commerce para empresas. Soy una persona que siempre aspira a progresar y a aprender.</p>
      </div>
      <div className='section2'>
        <h1 className='title nombreInfo'>Mis Habilidades</h1>
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
        <h1 className='title nombreInfo'>Contacto</h1>
        <div className='contactoInfo'>
          <p>Correo: robledoagustin7@gmail.com</p>
          <p>Celular: 1167891196</p>
          <p className='hyperV'><a href="https://github.com/Ler0v" target='blank'>Github</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;

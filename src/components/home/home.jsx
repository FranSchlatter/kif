import './home.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Home( {homeRef, projectsRef} ) {
  const handleClickProyects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home_app" ref={homeRef}>
      <h1>Hi, i'm <span>Francisco Schlatter</span></h1>
      <h3>FULLSTACK DEVELOPER</h3>
      <button onClick={handleClickProyects}>View my Work <KeyboardDoubleArrowDownIcon/></button>
    </div>
  );
}

export default Home;

// Faltan: 
// - Animacion en navbar cuando se aplica el sticky?
// - Agregar softskills?
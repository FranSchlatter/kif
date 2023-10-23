import './footer.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Footer({ homeRef }) {
  const handleClickHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer_app">
      <h6>Francisco Schlatter <span>#2023</span></h6>
      <button onClick={handleClickHome}><ArrowUpwardIcon/></button>
    </div>
  );
}

export default Footer;


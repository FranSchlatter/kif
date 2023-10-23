import './proyects.css';
import Carousel from 'react-bootstrap/Carousel';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FindInPageIcon from '@mui/icons-material/FindInPage';

function Proyects({ projectsRef }) {
  return (
    <div className='main_pryect_app' ref={projectsRef}>
      <h1 className='proyect_title_h1'>PROYECTS</h1>
      <div className="proyects_app">

        {/* PROYECT - ISABELLACRUZBAGS */}

        <div className='proyects_section_template'>

          <div>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="https://www.todofondos.net/wp-content/uploads/1920x1080-Fondo-de-pantalla-negro.jpg" alt="First slide" />
                <Carousel.Caption>
                  <h3>ISABELLA-CRUZ</h3>
                  <span></span>
                  <p>In-Process</p>
                  <span></span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div> 

          <div className='proyects_section_mid'>
            <span>
              Design and develop an e-commerce App that included: searches, filtering, ordering,
              creation, admin dashboard, google auth, payment gateway, nodemailer,
              cloudinary, etc.
            </span>
            <h3>Technologies</h3>
            <ul className='proyects_section_ul'>
              <li>TypeScript</li>
              <li>Css</li>
              <li>NextJs</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>Nodejs</li>
              <li>Sequelize</li>
              <li>PostgreSQL</li>
              <li>NodeMailer</li>
              <li>Cloudinary</li>
              <li>API MercadoPago</li>
            </ul>
          </div>
          
          <div className='proyects_section_div'>
            {/* <div>
              <a href="https://www.linkedin.com/in/francisco-schlatter/" target={'_blank'}><FindInPageIcon style={{color: "blue"}}/></a>
              <span>Deploy</span>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/francisco-schlatter/" target={'_blank'}><YouTubeIcon style={{color: "blue"}}/></a>
              <span>Demo</span>
            </div> */}
            <div>
              <a href="https://github.com/brunoosuna8/IsabellaCruz" target={'_blank'}><GitHubIcon style={{color: "blue"}}/></a>
              <span>Repository</span>
            </div>
          </div>

        </div>



        {/* PROYECT - TRUKITO */}

        <div className='proyects_section_template'>

          <div>
          <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="https://www.todofondos.net/wp-content/uploads/1920x1080-Fondo-de-pantalla-negro.jpg" alt="First slide" />
                <Carousel.Caption>
                  <h3>TRUKITO</h3>
                  <span></span>
                  <p>In-Process</p>
                  <span></span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div> 

          <div className='proyects_section_mid'>
            <span>
              Design and develop a truco App which includes tournaments, players, matches, statistics, scorer, etc.
            </span>
            <h3>Technologies</h3>
            <ul className='proyects_section_ul'>
              <li>TypeScript</li>
              <li>Css</li>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>NodeJs</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>

          <div className='proyects_section_div'>
            {/* <div>
              <a href="https://www.linkedin.com/in/francisco-schlatter/" target={'_blank'}><FindInPageIcon style={{color: "blue"}}/></a>
              <span>Deploy</span>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/francisco-schlatter/" target={'_blank'}><YouTubeIcon style={{color: "blue"}}/></a>
              <span>Demo</span>
            </div> */}
            <div>
              <a href="https://github.com/FranSchlatter/trukito" target={'_blank'}><GitHubIcon style={{color: "blue"}}/></a>
              <span>Repository</span>
            </div>
          </div>

        </div>



        {/* PROYECT - NON FUNGIBLE TOWN */}

        <div className='proyects_section_template'>

          <div>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/hGT9QrsW/image.png" alt="First slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/hPvT1gs0/image.png" alt="First slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/4yqd5C48/image.png" alt="First slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/bJMpXxXr/image.png" alt="First slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/brtLytJ3/image.png" alt="First slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/Wbx8DhVZ/image.png" alt="First slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/gJRmWwGK/image.png" alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </div> 

          <div className='proyects_section_mid'>
            <span>
              Design and develop an e-commerce App that included: log-in, searches, filtering, ordering,
              creation, identity verification, admin dashboard, google auth, payment gateway, nodemailer,
              cloudinary, etc.
            </span>
            <h3>Technologies</h3>
            <ul className='proyects_section_ul'>
              <li>JavaScript</li>
              <li>Css</li>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>Bootstrap</li>
              <li>MUI</li>
              <li>Nodejs</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>Firebase</li>
              <li>NodeMailer</li>
              <li>Cloudinary</li>
              <li>API Metamask</li>
              <li>API MercadoPago</li>
            </ul>
          </div>

          <div className='proyects_section_div'>
            <div>
              <a href="https://e-commerce-nft.vercel.app/" target={'_blank'}><FindInPageIcon style={{color: "blue"}}/></a>
              <span>Deploy</span>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=PIrstvAw88E&t=901s&ab_channel=FranciscoSchlatter" target={'_blank'}><YouTubeIcon style={{color: "blue"}}/></a>
              <span>Demo</span>
            </div>
            <div>
              <a href="https://github.com/FranSchlatter/Non-Fungible-Town" target={'_blank'}><GitHubIcon style={{color: "blue"}}/></a>
              <span>Repository</span>
            </div>
          </div>

        </div>



        {/* PROYECT - PORTFOLIO */}

        <div className='proyects_section_template'>

          <div>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/m264QpQs/image.png" alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/3NSsFW0B/image.png" alt="First slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/HxTFGbQz/image.png" alt="Second slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/nzdR6gVV/image.png" alt="Second slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className='proyects_section_mid'>
            <span>
            Design and develop a professional portfolio, with personal information, multiple contact options, 
            responsive design for any device and that includes the possibility of sending emails.
            </span>
            <h3>Technologies</h3>
            <ul className='proyects_section_ul'>
              <li>JavaScript</li>
              <li>Css</li>
              <li>React</li>
              <li>Tostify</li>
              <li>Emailjs</li>
              <li>Material UI</li>
              <li>Boostrap</li>
            </ul>
          </div>

          <div className='proyects_section_div'>
            <div>
              <a href="https://portfolio-ten-pi-38.vercel.app/" target={'_blank'}><FindInPageIcon style={{color: "blue"}}/></a>
              <span>Deploy</span>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=EqZ90wAc5xo&ab_channel=FranciscoSchlatter" target={'_blank'}><YouTubeIcon style={{color: "blue"}}/></a>
              <span>Demo</span>
            </div>
            <div>
              <a href="https://github.com/FranSchlatter/Portfolio" target={'_blank'}><GitHubIcon style={{color: "blue"}}/></a>
              <span>Repository</span>
            </div>
          </div>

        </div>



        {/* PROYECT - HEALTHY LIFE */}

        <div className='proyects_section_template'>

          <div>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/8kF0X8ZT/image.png" alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/qvmq7Cyc/image.png" alt="First slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src="https://i.postimg.cc/zXc4Xz3b/image.png" alt="Second slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className='proyects_section_mid'>
            <span>
              Design and develop a recipe App that included: searches, filtering, ordering and creation.
            </span>
            <h3>Technologies</h3>
            <ul className='proyects_section_ul'>
              <li>JavaScript</li>
              <li>Css</li>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>Nodejs</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
            </ul>
          </div>

          <div className='proyects_section_div'>
            <div>
              <a href="https://henry-food-franschlatter.vercel.app/" target={'_blank'}><FindInPageIcon style={{color: "blue"}}/></a>
              <span>Deploy</span>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=KkoGtz8_5BI&t=1s&ab_channel=FranciscoSchlatter" target={'_blank'}><YouTubeIcon style={{color: "blue"}}/></a>
              <span>Demo</span>
            </div>
            <div>
              <a href="https://github.com/FranSchlatter/CP-FOOD-HERNY" target={'_blank'}><GitHubIcon style={{color: "blue"}}/></a>
              <span>Repository</span>
            </div>
          </div>

        </div>
         
        
      </div>
    </div>
  );
}

export default Proyects;






  

  
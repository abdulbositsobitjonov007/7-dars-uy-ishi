import "./app.css"

import Header from "./components/header/Header";
import ServicesCard from "./components/services-cards/ServicesCards";

const servicesCards = [
  {
    image:"https://nft.octagon.mn/assets/new/categories/icons-02.png",
    cardTopic: "Brand Identity Design",
    cardInfo: "Donec vel sapien augue integer urna vel turpis cursus porta aliquam ligula eget ultricies."
  },
  {
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/cd/47/cf/cd47cfd3-4f07-e9b8-e577-0e321bb34435/source/512x512bb.jpg",
    cardTopic: "UI/UX Design",
    cardInfo: "Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum tellus pellentesque eu."
  },
  {
    image: "https://yt3.googleusercontent.com/TaYak6d0h3Pbvlx1zdTWWr8ZOv-wVbg5neiJGMkzmJ7SgLLEgEu1I2IaMkI9B-HHOREGB7sz=s900-c-k-c0x00ffffff-no-rj",
    cardTopic: "Web Development",
    cardInfo: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
  },
  {
    image: "https://files.startupranking.com/startup/thumb/35862_ba789eeeace12dae312d3c2611ea83d3fc02ce24_madebyapp_l.png",
    cardTopic: "Mobile App Design",
    cardInfo: "Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida."
  },
  {
    image: "https://nft.octagon.mn/assets/new/categories/icons-02.png",
    cardTopic: "Digital Marketing",
    cardInfo: "Sed porttitor lectus nibh donec sollicitudin molestie malesuada proin eget tortor risus."
  },
  {
    image: "https://www.tessajowellbraincancermission.org/wp-content/uploads/2022/07/Black-and-White-Vintage-Minimalist-Streetwear-Clothing-Brand-Logo.png",
    cardTopic: "SEO Optimization",
    cardInfo: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem pellentesque habitant morbi."
  }

];

function App() {
  return (
    <>

      <Header />

      <main>
        <section id="hero">
          <div className="container hero">
            <div className="hero-text-part">
              <h1>Transform Your Digital Presence</h1>
              <p>We create innovative digital solutions that drive growth and elevate your brand. From web development to digital marketing, we're your partners in digital transformation.</p>
              <div className="hero-btn">
                <button className="first-btn">Get Started</button>
                <button className="second-btn">Our Work</button>
              </div>

              <div className="hero-all-stats">
                <div className="hero-stats">
                  <h2 className="hero-number">150</h2>
                  <p className="hero-sphere">Projects Completed</p>
                </div>
                <div className="hero-stats">
                  <h2 className="hero-number">95</h2>
                  <p className="hero-sphere">Client Satisfaction</p>
                </div>
                <div className="hero-stats">
                  <h2 className="hero-number">24</h2>
                  <p className="hero-sphere">Team Members</p>
                </div>
              </div>

            </div>
            <div>
              <img className="hero-img" src="/images/misc-16.webp" alt="" />
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container about">
            <div className="about-text">
              <h5>DISCOVER OUR STORY</h5>
              <h2>Innovative Solutions for a Digital-First World</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="about-achived">
                <span className="sub-about-info"><img src="/images/tick.svg" alt="" /><p>Excepteur sint occaecat cupidatat non proident.</p></span>
                <span className="sub-about-info"><img src="/images/tick.svg" alt="" /><p>Nemo enim ipsam voluptatem quia voluptas sit.</p></span>
                <span className="sub-about-info"><img src="/images/tick.svg" alt="" /><p>Duis aute irure dolor in reprehenderit in voluptate velit.</p></span>
              </div>
              <span className="about-more-span">
                <button className="about-more-btn">Discover More</button>
              </span>
            </div>
            <div className="about-img-part">
              <div className="about-stats">
                <span>
                  <h2 className="about-number">20+</h2>
                  <p className="about-sphere">Years of Expertise</p>
                </span>
                <span>
                  <h2 className="about-number">500+</h2>
                  <p className="about-sphere">Happy Clients</p>
                </span>
              </div>
              <img className="about-img" src="/images/about-9.webp" alt="" />
              <div className="about-upper-img">
                <img src="/images/about-square-8.webp" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container services">
            <h1 className="services-intro">Services</h1>
            <p className="services-subinfo">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div className="services-cards">
              {
                servicesCards.map((el) => (
                  <ServicesCard image={el.image} cardTopic={el.cardTopic} cardInfo={el.cardInfo} />
                ))
              }
            </div>
            <div className="get-started-today">
              <h3>Ready to Transform Your Digital Presence?</h3>
              <p>Let's discuss your project and create something amazing together</p>
              <span className="get-started-btn">
                <button className="go-start-btn">Get Started Today</button>
              </span>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container portfolio">
            <h1 className="portfolio-intro">Portfolio</h1>
            <p className="portfolio-subinfo">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            
          </div>
        </section>
      </main>

    </>
  )
}

export default App;
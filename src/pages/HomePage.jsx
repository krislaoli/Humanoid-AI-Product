import { Container, Row, Col } from "react-bootstrap";
// import HeroImage from "../assets/img/flash-sale.png";

import { produkTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

import Lottie from "lottie-react";
import wellcomeRobots from "../assets/lottie/wellcomeRobots.json";
// import animationBg from "../assets/lottie/animationBg.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();
  

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden homepage-header">
        {/* <Lottie
          animationData={animationBg}
          className="lottie-bg-animation "
          loop
          autoplay

        /> */}
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__lightSpeedInLeft animate__delay-1s">
                Semuanya <br /> <span>Tersedia Disini</span> <br /> Untuk AI
              </h1>
              <p className="mb-4 animate__animated animate__lightSpeedInLeft animate__delay-1s">
                Klaim kupon diskon di tempat kami sekarang juga. Promo ini
                terbatas hanya untuk 50 orang pembeli. Siapa cepat, dia yang
                dapat!!
              </p>
              <button
                className="btn  btn-lg rounded-1 me-2 mb-xs-0 mb-2 fw-bold animate__animated animate__zoomIn animate__delay-1s"
                style={{ backgroundColor: "#65B741" }}
                onClick={() => navigate("/produk")}
              >
                Lihat produk
              </button>
              <button
                className="btn btn-lg rounded-1 mb-xs-0 mb-2 fw-bold animate__animated animate__zoomIn animate__delay-1s"
                style={{ backgroundColor: "#FFC436", zIndex: 2 }}
              >
                Lihat Promo
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              {/* <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__lightSpeedInRight"
              /> */}
              <Lottie
                className="animate__animated animate__lightSpeedInRight"
                animationData={wellcomeRobots}
                loop
                autoplay
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="produk w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Produk Terbaru</h1>
              <p className="text-center">
                Dapatkan potongan harga spesial (up to 50 persen) dengan belanja
                minimal Rp200 ribu setiap harinya!
              </p>
            </Col>
          </Row>
          <Row>
            {produkTerbaru.map((produk) => {
              return (
                <Col
                  key={produk.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={produk.delay}
                >
                  <img
                    src={produk.image}
                    alt="unsplash.com"
                    className="w-100 mb-4 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={produk.star1}></i>
                    <i className={produk.star2}></i>
                    <i className={produk.star3}></i>
                    <i className={produk.star4}></i>
                    <i className={produk.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{produk.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-dark fw-bold">{produk.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {produk.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn fw-bold rounded-3 btn-lg"
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ backgroundColor: "#79AC78" }}
                onClick={() => navigate("/produk")}
              >
                Lihat Semua produk
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <h1
              className="text-center fw-bold my-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Testimonial
            </h1>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              data-aos="fade-up"
              date-aos-duration="1000"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      {/* Section Faq Start */}
      <FaqComponent />
      {/* Section Faq End */}
    </div>
  );
};

export default HomePage;

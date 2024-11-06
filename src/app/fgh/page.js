// components/Testimonials.js
'use client';
// pages/index.js

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const testimonials = [
    {
      logo: 'https://user-images.githubusercontent.com/78242022/268242274-808a779e-7026-487b-ae56-d2a0e9b5b192.png',
      text: 'Cannot recommend this plugin highly enough. Get the Pro version. Use the Slider and all your website dreams will come true.',
      image: 'https://user-images.githubusercontent.com/78242022/266013762-54201d6a-0923-4969-948c-790dec804253.png',
      name: 'Bliak Monk',
      role: 'React.JS Developer',
    },
    {
      logo: 'https://user-images.githubusercontent.com/78242022/276232511-ddbe6533-a5b5-4d9d-9e25-b17b352ea942.svg',
      text: "I've been searching for a good free slider plugin for a long time. This is definitely the one! For a free plugin it does a lot of things!",
      image: 'https://user-images.githubusercontent.com/78242022/272654594-c037ce6e-6fdc-42f9-a4f6-07419089b689.png',
      name: 'ZACK SALOMON',
      role: 'Software Engineer',
    },
    {
      logo: 'https://user-images.githubusercontent.com/78242022/276231607-f0cc956d-6206-4ad9-9dec-7d66dd1cffc0.svg',
      text: 'The backend of the plugin is beautifully designed and fairly intuitive - although there are so many options, it\'s almost daunting.',
      image: 'https://user-images.githubusercontent.com/78242022/272654627-1536d3df-c0f2-414c-b631-0bd1159db223.png',
      name: 'DIANA MILLER',
      role: 'Technical Writer',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Continues Testimonial</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="item" key={index}>
            <div className="card">
              <img src={testimonial.logo} alt="" className="card-logo" />
              <div className="card-body">
                <p className="card-text text-center text-secondary">{testimonial.text}</p>
                <div className="card-img-wrapper">
                  <img src={testimonial.image} alt="" />
                </div>
                <h4 className="card-name text-uppercase text-center fs-5">{testimonial.name}</h4>
                <p className="card-role text-center text-secondary">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .card .card-logo {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin-bottom: 10px;
        }

        .card-img-wrapper img {
          display: block;
          width: 50px;
          height: 50px;
          object-fit: contain;
          border-radius: 50%;
          margin: 0 auto;
        }

        .card {
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 600px) {
          .card .card-logo {
            width: 60px;
            height: 60px;
          }
          .card-img-wrapper img {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

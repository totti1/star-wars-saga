import Slider from 'react-slick'
import { Carousel } from 'react-bootstrap';
import Box from '@mui/material/Box';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ImageCarousel(props) {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        lazyLoad: true,
        customPaging: function (i) {
            return (
              <img src={props.data[i].imageSrc} height="100%" width="100%" alt={props.data[i].title} />
            );
          },
    };

    return (
        <Box sx={{height: 120}} >
        <Carousel fade>
            {props.data.map((item, index) => (
            
                <Carousel.Item>
                    
                    <img
                    className="d-block w-100"
                    src={item.imageSrc}
                    alt={item.title}
                    style={{height: '50%', width: '100%'}}
                    />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
            ))}
        </Carousel>
        </Box>
        // <div className='content'>
        //     <Slider {...settings}>
        //         {props.data.map((card, index) => (
        //         <div key={index}>
        //             <h2>{card.title}</h2>
        //             <img alt={card.title} src={card.imageSrc} width="100" height="100" />
        //             <p>{card.description}</p>
        //             <ul>
        //             {card.features.map((feature, index) => (
        //                 <li key={index}>{feature}</li>
        //             ))}
        //             </ul>
        //             <button className='btn'>Buy Now</button>
        //         </div>
        //         ))}
        //     </Slider>
        // </div>
    )
}
import React from "react";
import { Link } from "gatsby";
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    fade:true,
    autoplaySpeed:5000,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };
const SlickSlider = (props) => (
    
    <Slider {...settings}   >
          {  props.data.map((item,index) => {
              if(item.perticulerservise.document[0].data.body!==null)
              return(
                  <div className="slider slide-one" key={index}>
                    <div className="sliderMax">
                        <h1 className="white">{item.perticulerservise.document[0].data.body[0].primary.title1}</h1>
                        <h3 className="mb-4 white">{item.perticulerservise.document[0].data.body[0].primary.tagline1.text}</h3>
                        <p className="white mb-5">{item.perticulerservise.document[0].data.body[0].primary.content.text}
                    </p>
                        <Link to={`/services/${item.perticulerservise.document[0].data.slug}`}> <button className="btn">Read More</button> </Link> 
                    </div>
               </div>
              )
          })
          }
       </Slider>
   
)

export default SlickSlider;

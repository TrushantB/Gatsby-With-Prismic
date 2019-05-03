import React from "react"
import Img from 'gatsby-image';
import Fade from 'react-reveal'
const FeaturedProjects = (props) =>{
    return(
        <div className="FeaturedProjects pt-5" id="FeaturedProjects" >
        <div className="container">
            <h2 className="mb-4">{props.data.title}</h2>
            <div className="row">
                {   props.data.projects.map((item,index) => {
                        return(
                            <Fade key={index}>
                                <div className="col-md-6 col-lg-4 col-sm-6 mb-5">
                                    <div className="FeaturedImg">
                                        <Img fixed={item.image.localFile.childImageSharp.fixed}/>
                                        <div className="overlay">
                                        <div className="content text"><a href={item.link.url} target="_blank"><button className ="FeaturedBtn"> Visit Website</button></a> </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                          )
                   })
                    
                }
                
            </div>
        </div>
    </div>
       
    )
} 

export default FeaturedProjects

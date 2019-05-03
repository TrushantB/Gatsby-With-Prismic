import React from "react"
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide';
import Img from 'gatsby-image';
class WhatWeDo extends React.Component{
    render() {
        return(
            <div className="whatWeSection pt-5">
            <div className="container">
                <h2 className="mb-4">{this.props.data.tagline.text}</h2>
                <div className="row">
                        {
                                this.props.data.services.map((item,index) => {
                                  return(
                                    <Slide bottom key={index}>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                                              <Link to={`/services/${item.perticulerservise.document[0].data.slug}`} > 
                                                    <div className="card border-0 h-100">   
                                                        <div className="card-body">
                                                            <div className="mb-3">
                                                                <Img fixed={item.perticulerservise.document[0].data.icon.localFile.childImageSharp.fixed} title="" alt="Jam Developer" height="50px"/>
                                                            </div>
                                                            <h5 className="card-title">{item.perticulerservise.document[0].data.title.text}</h5>
                                                            <p className="small">{item.perticulerservise.document[0].data.tools.text}</p>
                                                            <p className="card-text">{item.perticulerservise.document[0].data.tagline.text}</p>
                                                            <p className="card-text"><small className="text-muted">
                                                            <Link to={`/services/${item.perticulerservise.document[0].data.slug}`} >Read More...</Link>
                                                            </small></p>
                                                        </div>
                                                    </div>
                                             </Link>
                                        </div>
                                    </Slide>
                                  )
                                })
                        }
                </div>
            </div>
        
           <div className="text-center">
                <Link to='/services/'> <button className="btn mb-5">View all</button> </Link>
           </div> 
        </div>
           
        )
    }
} 

export default WhatWeDo;

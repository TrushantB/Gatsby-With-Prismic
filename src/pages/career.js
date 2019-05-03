import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';

class Career extends React.Component{
render() {
    const carrer=this.props.data.prismicCareer.data;
    return(
        <Layout>
          <SEO title="Career" />
          <Fade>
              <div className="wrapper">
                   <div className="pagebanner">
                      <div className="pagebannerMax">
                          <h1 className="white">{carrer.title.text}</h1>
                          <h3 className="mb-4 white">{carrer.tagline.text}</h3> 
                      </div>
                  </div>
                  <div className="whatWeSection pb-5">
                      <div className="container">
                          <div className="row">
                              <div className="col-12">
                              <div className="bg-white shadow-1 brb4 p-5 ">
                                 <div className="row">
                                  <div className="col-12">
                                    <p
                                        dangerouslySetInnerHTML={{
                                       __html: carrer.content.html,
                                         }}
                                    />
                                  </div>
                              </div>
                                  <div className="row mt-2">
                                      {
                                        carrer.remaining_content.map((item,index) => {
                                            return (
                                              <div className="col-md-6 mb-4" key={index}>
                                                  <div className=" br-4 p-3  job-article h-100" >
                                                      <div>
                                                          <div className="bullet"
                                                              dangerouslySetInnerHTML={{
                                                              __html: item.content1.html,
                                                                }}
                                                          />                          
                                                      </div>
                                                  </div>
                                              </div> 
                                            )
                                        })
                                      }
                                 </div>
                              </div>
                           </div>
                        </div>
                      </div>
                  </div>
              </div>
          </Fade>
        </Layout>
      )
}
} 


export default Career;


export const pageQuery = graphql`
query Carrer {
  prismicCareer{
    data{
      slug
       title{
         text
      }
      tagline{
         text
      }
      content{
        html
      }
      remaining_content{
        content1{
          html
        }
      }
    }
  }
}
`
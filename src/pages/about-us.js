import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';

class About extends React.Component {
    render() {
        const about=this.props.data.prismicAbout.data;
        return (
            <Layout>
              <SEO title="About Us" keywords={[`gatsby`, `application`, `react`]} />
               <Fade >
                  <div className="wrapper">
                       <div className="pagebanner">
                           <div className="pagebannerMax">
                              <h1 className="white">{about.title.text}</h1>
                              <h3 className="mb-4 white">{about.tagline.text}</h3> 
                           </div>
                      </div>
                      <div className="whatWeSection pb-5">
                           <div className="container">
                                <div className="row">
                                   <div className="col-12">
                                     <div className="bg-white shadow-1 brb4 p-5 ">
                                        <p>{about.content.text}</p>
                                        <div className="row mt-4 about-img-list">
                                              <div className="col-md-5 mb-3">
                                              <Img className="img-responsive img-fluid" alt={about.title.text} fluid={about.image.localFile.childImageSharp.fluid} />
                                               </div>
                                              <div className="col-md-7">
                                                    <div
                                                       dangerouslySetInnerHTML={{
                                                       __html: about.remaining_content[0].content1.html,
                                                       }}
                                                     />
                                              </div>
                                          </div> 
                                         <div className="row mt-2">
                                              <div className="col-md-6">
                                                   <div
                                                       dangerouslySetInnerHTML={{
                                                       __html: about.remaining_content[1].content1.html,
                                                       }}
                                                     />
                                              </div>
                                               <div className="col-md-6 bg-whitec py-2">
                                                   <div
                                                       dangerouslySetInnerHTML={{
                                                       __html: about.remaining_content[2].content1.html,
                                                       }}
                                                     />  
                                               </div>
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

export default About;
export const pageQuery = graphql`
query About {
    prismicAbout{
        data{
          title{
            text
          }
          slug
          tagline{
            text
          }
          content{
            text
          }
          image{
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1180, quality: 100) {
                        ...GatsbyImageSharpFluid
                        presentationWidth
                      }
                }
              }
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
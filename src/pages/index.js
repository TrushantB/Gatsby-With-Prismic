import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SlickSlider from '../components/home/slick-slider';
import WhatWeDo from '../components/home/what-we-do';
import FeaturedProjects from '../components/home/featured-projects';
import WhatOurCustomerSay from "../components/home/what-our-customer-say";
import Fade from 'react-reveal/Fade';

class IndexPage extends React.Component {
    render(){
      let data=this.props.data.prismicServices.data;
      console.log(data.services);
      
      return(
        <div>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <Fade>
          <div className="slick-wrapper">
          <SlickSlider data = {data.services}/>
          </div>
          <WhatWeDo data = {data}/>
          <FeaturedProjects data={this.props.data.prismicFeaturedProjects.data}/>
          <WhatOurCustomerSay/>
          </Fade>
        </Layout>
        </div>
      )
    }
}

export default IndexPage


export const pageQuery = graphql`
  query servicesArticle {
    prismicServices{
      data{
        title{
          text
        }
        tagline{
          text
        }
        services{
          perticulerservise{
            document{
              data{
                slug
                title{
                  text
                }
                tagline{
                  text
                }
                tools{
                  text
                }
                body{
                  primary{
                    title1
                    tagline1{
                      text
                    }
                    content{
                      text
                    }
                  }
                }
                icon{
                      localFile {
                        childImageSharp {
                            fixed(width: 50, height: 50) {
                                ...GatsbyImageSharpFixed
                              }
                        }
                      }
                }
              }
            }
          }
        }
      }
    }
    prismicFeaturedProjects{
      data{
        title
        slug
        projects{
          image{
            localFile {
                        childImageSharp {
                            fixed(width: 350, height: 253) {
                                ...GatsbyImageSharpFixed
                              }
                        }
                      }
          }
          link{
            url
          }
        }
      }
    }
  }`

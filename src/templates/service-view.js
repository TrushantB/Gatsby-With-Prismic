import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import Img from "gatsby-image"
import { graphql } from "gatsby"

class WebApp extends React.Component {
    render() {
        const post = this.props.data.prismicServicepost.data;
        return  (
        <Layout>
        <SEO title="Web Application" keywords={[`gatsby`, `application`, `react`]} />
            <Fade>
                <div className="wrapper">
                    <div className="pagebanner pagebannerLess">
                        <div className="pagebannerMax">
                            <h1 className="white">{post.title.text} </h1>
                            <h3 className="white mb-3">{post.tagline.text}</h3> 
                            <div className="banner-icons" >
                                {post.icons.length > 2 &&
                                    post.icons.map((item,index) => {
                                        return(
                                        <Img fixed={item.icon1.localFile.childImageSharp.fixed}  width="40" className="mr-1" key={index}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="whatWeSection pb-5">
                        <div className="container container-less">
                            <div className="row mt-3">
                                <div className="col-12">
                                    <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/services/">Services</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{post.title.text} </li>
                                    </ol>
                                    </nav>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="bg-white shadow-1 brb4 p-5 ">
                                        { post.tools &&
                                            <div className="row mb-3">
                                                <div className="col-12">
                                                    <strong>Tools:- </strong> 
                                                    {post.tools.text}
                                                </div>    
                                            </div>
                                        }
                                        <div className="row">
                                            <div className="col-12 font-large" >
                                                <p>{post.short_bio.text}</p>
                                            </div>    
                                        </div>
                                        { post.slug==="jam-development" && post.paragraphheading1 &&
                                            <div className="mt-4"> 
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h3> {post.paragraphheading1.text} </h3>          
                                                    </div>    
                                                </div>
                                                <div className="row">
                                                    { post.services_article.filter(data => data.article.document[0].data.categories==="what")
                                                    .map((item,index) => {
                                                        return(
                                                        <div className="col-md-4  mt-3" key={index}>
                                                            <div className="h-100   layout-border p-3 br10 ">
                                                                <h5> {item.article.document[0].data.title.text} </h5>          
                                                                <p>{item.article.document[0].data.content.text}</p>
                                                            </div>    
                                                        </div>
                                                        )
                                                    })
                                                    }
                                                </div>
                                            </div>
                                        }
                                        { post.slug==="jam-development" && post.paragraphheading2 &&
                                            <div className="mt-4"> 
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h3> {post.paragraphheading2.text} </h3>          
                                                    </div>    
                                                </div>
                                                <div className="row">
                                                    { post.services_article.filter(data => data.article.document[0].data.categories==="why")
                                                        .map((item,index) => {
                                                            return(
                                                            <div className="col-md-6  mt-3" key={index}>
                                                                <div className="h-100   layout-border p-3 br10 ">
                                                                <h5> {item.article.document[0].data.title.text} </h5>          
                                                                <p>{item.article.document[0].data.content.text}</p>
                                                                </div>    
                                                            </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        }
                                        { post.slug!=="jam-development" &&
                                            <div className="mt-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h3> {post.paragraphheading1.text}</h3>          
                                                    </div>    
                                                </div>
                                                <div className="row">
                                                    { post.paragraphheadin1content && 
                                                        <div className="col-12">
                                                           <p>{post.paragraphheadin1content.text}</p>
                                                        </div>
                                                    }
                                                    {
                                                        post.services_article && 
                                                        post.services_article.map((item,index) => {
                                                            if(post.slug==="website-development") {
                                                                return(
                                                                    <div className="col-md-6 mt-3" key={index}>
                                                                        <div className="h-100 p-3 layout-border br10" >
                                                                            {
                                                                                item.article.document[0].data.icons.map((image,index) => {
                                                                                    return(
                                                                                        <Img fixed={image.icon.localFile.childImageSharp.fixed}   className="mr-1" key={index}/>
                                                                                    )
                                                                                })
                                                                            }
                                                                            <h5> {item.article.document[0].data.title.text} </h5>          
                                                                            <p>{item.article.document[0].data.content.text}</p>
                                                                        </div>    
                                                                    </div>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        }
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
export default WebApp;

export const pageQuery = graphql`
  query ServicesBySlug($uid: String!) {
    prismicServicepost(uid: { eq: $uid }){
        data{
            slug
              title{
                text
              }
              tagline{
                text
              }
              short_bio{
                text
              }
              
              tools{
                text
              }
              paragraphheading1{
                text
              }
              paragraphheadin1content{
                text
              }
              paragraphheading2{
                  text
                }
            icons{
              icon1{
                localFile {
                    childImageSharp {
                        fixed(width: 40, height: 40) {
                            ...GatsbyImageSharpFixed
                          }
                    }
                  }
              }
            }
            services_article{
              article{
                document{
                  data{
                    title{
                      text
                    }
                    categories
                    icons{
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
                    content{
                      text
                    }
                  }
                }
              }
            }
          }
      }
  }
`
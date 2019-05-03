import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "../components/footer";
const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
            prismicCompanyoverview{
              data{
                name
                phone1
                phone2
                mailid1
                address
                facebook
                instagram
                linkedin
                copyright
                logo{
                  localFile{
                    childImageSharp {
                      fixed(width: 200, height: 50) {
                          ...GatsbyImageSharpFixed
                        }
                  }
                  }
                }
                
              }
            }
          }
        `}
          render={data => (
              <>
                  <div className="wrapper">
                    <Header siteTitle={data.site.siteMetadata.title} companyOverview={data.prismicCompanyoverview.data} />
                      <main>{children}</main>
                    <Footer  siteTitle={data.site.siteMetadata.title} companyOverview={data.prismicCompanyoverview.data}/>
                  </div>
              </>
          )}
     />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

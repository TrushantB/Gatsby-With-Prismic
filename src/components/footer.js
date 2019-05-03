import React from "react"
import { Link } from "gatsby"
const Footer = ({companyOverview}) => (
    <div className="footer">
               <div className="d-flex justify-content-center mb-3 footerNav">
                     <p className="ml-3 mr-3 mb-0"><Link to="/" >Home </Link></p>
                     <p className="ml-3 mr-3 mb-0"><Link to="/about-us/">About Us</Link></p>
                     <p className="ml-3 mr-3 mb-0"><Link to="/team/">Team</Link></p>
                     <p className="ml-3 mr-3 mb-0"><Link to="/services/" >Services</Link></p>
                     <p className="ml-3 mr-3 mb-0"><Link to="/career/" >Career</Link></p>
                     <p className="ml-3 mr-3 mb-0"><Link to="/contact/" >Contact</Link></p>
               </div>
               <div className="d-flex justify-content-center mb-3 footerContact">

                   <div className="mainPhone d-flex">
                       <div className="phone1"><i className="fas fa-phone phoneFont mr-1"></i> USA <a href={`tel:+1 ${companyOverview.phone1}`} className="black mr-3"> +1 {companyOverview.phone1}</a></div>
                       <div className="phone2"><i className="fas fa-phone phoneFont mr-1 ml-1"></i>IND <a href={`tel:+91${companyOverview.phone2}`} className="black mr-3">+91 {companyOverview.phone2}</a></div>
                   </div>

                   <div className="mainEmailSocial d-flex">
                       <div className="email"><i className="fas fa-envelope mr-1"></i><a href={`mailto:${companyOverview.mailid1}`} className="black mr-3">{companyOverview.mailid1}</a></div>
                       <div className="social d-flex">
                           <a href={companyOverview.facebook} target="_blank" className="socialIcon mr-2" rel="noopener noreferrer"><i className="fab fa-facebook-f black font-14"></i></a>
                           <a href={companyOverview.instagram} className="socialIcon mr-2" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram black font-14"></i></a>
                           <a href={companyOverview.linkedin} className="socialIcon mr-2" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in black font-14"></i></a>
                       </div>
                   </div>

               </div>

               <hr className="mb-3"/>
               <div className="text-center footerCopy">
                   {companyOverview.copyright} <a href="http://ivisionstudio.in/">{companyOverview.name}</a>
               </div>
           </div>
)

export default Footer

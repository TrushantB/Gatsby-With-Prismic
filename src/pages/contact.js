import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade';
import SEO from "../components/seo"
import { graphql } from 'gatsby'
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

// const count = str => {
//   const length = str.split(",").length;
//   return length;
// };

class Contact extends React.Component {
  state = {
    attend: ""
  };

  handleOptionChange = e => {
    this.setState({
      attend: e.target.value
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    const contact = this.props.data.prismicCompanyoverview.data;
    return(
      <Layout>
        <SEO title="Contact" />
        <Fade>
          <div className="wrapper">
              <div className="pagebanner">
                <div className="pagebannerMax">
                    <h1 className="white">{contact.title}</h1>
                </div>
              </div>
              <div className="whatWeSection pb-5">
                  <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <div className="bg-white shadow-1 brb4 p-5 ">
                                  <div className="row">
                                      <div className="col-md-7 mb-5">
                                          <h3 className="mb-4"> Contact Form </h3>
                                            <form
                                              name="My contact form"
                                              method="post"
                                              action="/success/"
                                              data-netlify="true"
                                              data-netlify-honeypot="bot-field"
                                              onSubmit={this.handleSubmit}
                                            >
                                              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                              <input type="hidden" name="form-name" value="contact" />
                                              <p hidden>
                                                <label>
                                                  Don’t fill this out:{" "}
                                                  <input name="bot-field" onChange={this.handleChange} />
                                                </label>
                                              </p>

                                              <div className="form-row">
                                                <div className="form-group col-lg-6">
                                                  <label htmlFor="firstName">First name </label>
                                                  <input type="text" name="firstName" className="form-control" id="firstName" placeholder="First Name" onChange={this.handleChange} required  />
                                                </div>

                                                <div className="form-group col-lg-6">
                                                  <label  htmlFor="inputLastName">Last name </label>
                                                  <input type="text" name="lastName" className="form-control" id="inputLastName" placeholder="Last Name" onChange={this.handleChange} required  />
                                                </div>
                                              </div>

                                              <div className="form-group">
                                                <label htmlFor="inputEmail">Your email</label>
                                                <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Email" onChange={this.handleChange}  required/>
                                              </div>

                                              <div className="form-group">
                                                <label htmlFor="inputSubject">Subject</label>
                                                <input type="text" name="subject" className="form-control" id="inputSubject" placeholder="Subject" onChange={this.handleChange} required />
                                              </div>
                                                                                              
                                              <div className="form-group">
                                                <label  htmlFor="inputMessage">Message</label>
                                                <textarea name="message"  className="form-control" placeholder="Message" id="inputMessage" rows="3" onChange={this.handleChange} required />
                                              </div>

                                              <div>
                                                <button  className="btn btn-primary" type="submit">Send</button>
                                              </div>
                                          </form>
                                      </div>
                                      <div className="col-md-5">
                                          <div className=" mb-3 bg-white">
                                              <p className="mb-0 font-weight-bold">Phone</p>
                                              <p className="mb-1">USA <a href={`tel:${contact.phone1}`}>+1 {contact.phone1}</a></p>
                                              <p className="mb-4">IND <a href={`tel:${contact.phone2}`}>+91 {contact.phone2}</a></p>
                                              <p className="mb-0 font-weight-bold">Email Address</p>
                                              <p className="mb-4"><a href={`mailto:${contact.mailid1}`}>{contact.mailid1}</a></p>
                                              <p className="mb-0 font-weight-bold">Address</p>
                                              <p className="mb-4">{contact.address}</p>
                                          </div>
                                          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7567.054327732735!2d73.822386!3d18.505065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e13c52b68392e92!2sivision+studio!5e0!3m2!1sen!2sin!4v1553501385197" frameBorder="0" width="100%" height="350" allowFullScreen="allowfullscreen" title ="location"></iframe>        
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
export default Contact;

export const pageQuery = graphql`
query Contact {
  prismicCompanyoverview{
    data{
      title
      name
      phone1
      phone2
      mailid1
      address
    }
  }
}
`
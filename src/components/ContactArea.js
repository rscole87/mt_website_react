import React from "react"

function ContactArea() {
  return (
    <>
      <section id="contact-section">
        <div className="wrapper">
          <div className="heading-div">
            <h3 className="heading-medium">Contact</h3>
          </div>

          <div id="form-div">
            <form id="contact-form" method="post">
              <input type="hidden" name="form-name" value="static-contact-form" />
              <input name="f_name" type="text" placeholder="First Name*" />
              <input name="l_name" type="text" placeholder="Last Name*" />
              <input name="email" type="text" placeholder="Email*" />
              <input name="company" type="text" placeholder="Company Name*" />
              <input name="role" type="text" placeholder="Your role/title" />
              <textarea name="message" cols="75" rows="3" placeholder="Please tell us a little about you business and how we can best assist you."></textarea>
              <div id="submit-bttn-div">
                <input id="submit" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactArea

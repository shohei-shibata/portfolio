const ContactForm = () => (
  <form id="contact-form">
    <input type="hidden" name="contact_number"/>
    <label htmlFor="user_name">Name</label><br/>
    <input className="contact-form-text" type="text" name="user_name" required/><br/>
    <label htmlFor="user_email">Email</label><br/>
    <input className="contact-form-text" type="text" name="user_email" required/><br/>
    <label htmlFor="message">Comments</label><br/>
    <textarea className="contact-form-textarea" name="message" cols="50" rows="8" required></textarea><br/>
    <input type="submit" className="btn btn-primary contact-form-submit" value="Submit"/>
  </form>
);

export default ContactForm;

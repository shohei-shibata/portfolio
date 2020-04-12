emailjs.init('user_pxYFdy40Fn6a2X7MFQ1Ln');

window.onload = function() {
  console.log("window.onload");
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(event) {
    console.log("sending email");
    event.preventDefault();
    // generate the contact number value
    this.contact_number.value = Math.random() * 100000 | 0;
    //emailjs.sendForm('gmail_dev', 'freelance_contact_form', this);

    resetForm(contactForm);
  });

}

const resetForm = function(form) {
  form.reset(); 
}

const setSentState = function() {

}

/* 

To Do: 

* Finish setSentState function (gray out button, change text to "Sent!")
* Async (Wait for success response to reset etc., and handle errors)

*/

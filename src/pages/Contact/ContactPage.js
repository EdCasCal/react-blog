import React from 'react';

function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with any questions or feedback!</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
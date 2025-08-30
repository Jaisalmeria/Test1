
import React from 'react'

export function CustomerForm() {
  return (
    <form action="https://formsubmit.co/yatradesertcamp@gmail.com" method="POST">
      <input type="hidden" name="_next" value="https://jaisalmeria.github.io/Test1/thank-you.html" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="row">
        <div><input name="name" placeholder="Your Name" required /></div>
        <div><input type="email" name="email" placeholder="Email" required /></div>
        <div><input name="phone" placeholder="Phone" required /></div>
        <div><input name="checkin" type="date" placeholder="Check-in" /></div>
        <div><input name="checkout" type="date" placeholder="Check-out" /></div>
        <div><select name="guests" defaultValue=""><option value="" disabled>Guests</option>{[1,2,3,4,5,6,7,8].map(n=> <option key={n} value={n}>{n}</option>)}</select></div>
      </div>
      <div><textarea name="message" placeholder="Tell us what you're looking for"></textarea></div>
      <button type="submit" className="cta">Submit</button>
    </form>
  )
}

export function B2BForm() {
  return (
    <form action="https://formsubmit.co/yatradesertcamp@gmail.com" method="POST">
      <input type="hidden" name="_next" value="https://jaisalmeria.github.io/Test1/thank-you.html" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="row">
        <div><input name="agency_name" placeholder="Agency Name" required /></div>
        <div><input name="contact_person" placeholder="Contact Person" required /></div>
        <div><input type="email" name="email" placeholder="Email" required /></div>
        <div><input name="phone" placeholder="Phone" required /></div>
      </div>
      <div><textarea name="message" placeholder="Share requirements, room count, dates, etc."></textarea></div>
      <button type="submit" className="cta">Send</button>
    </form>
  )
}

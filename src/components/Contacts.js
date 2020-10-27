import React from 'react';
import Telegram from '../img/social__svg/telegram.svg';
import Viber from '../img/social__svg/viber.svg';
import WhatsApp from '../img/social__svg/whats_app.svg';


const Contacts = () => (
  <>
    <div id={"contacts"} className="block__color">
      <div className="container__3">
        <div className="contacts">
          <div className="line__contacts" />
          <div className="contacts__box">
            <div className="contact__title">
              <h2>Contacts</h2>
            </div>
            <div className="number">
              <a href="tel:+380961241153">+38 096 124 11 53</a>
              <a href="mailto:illya.lav@gmail.com">illya.lav@gmail.com</a>
            </div>
            <div className="social">
              <a href="https://t.me/iLavrenyuk" target="_blank" rel="noopener noreferrer">
                <img alt="" src={Telegram} /></a>
              <a href="viber://add?number=380961241153" target="_blank" rel="noopener noreferrer">
                <img alt="" src={Viber} /></a>
              <a href="https://wa.me/380961241153?text=Привет.%20Мне%20нужен%20сайт" target="_blank" rel="noopener noreferrer">
                <img alt="" src={WhatsApp} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Contacts;
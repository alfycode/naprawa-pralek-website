import React from 'react';

const ContactPage = () => {
  return (
    <section>
      <h1>Pozostańmy w kontakcie!</h1>
      <div>
        <div>
          <box-icon name='phone'></box-icon>
          <p>+48 123 456 789</p>
        </div>
        <div>
          <box-icon name='map'></box-icon>
          <p>ul. Harnasie 15/17</p>
        </div>
        <div>
          <box-icon name='time-five'></box-icon>
          <p>8:00 - 21:00</p>
        </div>
      </div>
      <form>
        <input type="text" placeholder="Imie i nazwisko"/>
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Telefon"/>
        <textarea placeholder="Wiadomość"></textarea>
        <button>Wyślij</button>
        <button>Wyczyść formularz</button>
      </form>
    </section>
  );
};
export default ContactPage;

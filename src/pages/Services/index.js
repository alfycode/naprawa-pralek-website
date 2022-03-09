import React from 'react';

const ServicesPage = () => {
  return (
    <section>
      <div>
        <h1>Jakie usługi oferujemy?</h1>
        <p>Szalast Z. Naprawa i serwis pralek automatycznych.</p>
      </div>
      <div>
        <div>
          <box-icon name='phone'></box-icon>
          <p>porady telefoniczne</p>
        </div>
        <div>
          <box-icon name='download'></box-icon>
          <p>instalacja nowo zakupionego sprzętu</p>
        </div>
        <div>
          <box-icon name='book-bookmark'></box-icon>
          <p>doradztwo w zakresie obsługi</p>
        </div>
        <div>
          <box-icon type='solid' name='wrench'></box-icon>
          <p>naprawa pralek wszystkich firm</p>
        </div>
        <div>
          <box-icon name='search-alt-2'></box-icon>
          <p>diagnoza usterek </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

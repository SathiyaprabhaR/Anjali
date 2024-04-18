

import React from 'react';

function HomePage() {
  return (
    <div>
      
      <div id="banner"></div>
      
      <main>
        <section>
          <article>
            <h2>Welcome to my Portfolio!</h2>
            <p>I'm <strong>Anjali Selva</strong>, currently doing my second year of CSE with BioInformatics in VIT, Vellore. </p>
            <p>I love <i>Art, Music and Bharatnatyam</i>. <br/><br/>Some of my favourite genres of music are Pop, K-pop, Country etc. Join me as I share a glimpse of my artistic journey through this portfolio.</p>
          </article>

          <aside>
            <img src="anjali1.jpg" alt="Anjali Selva" style={{ width: '100%', borderRadius: '0px' }} />
          </aside>
        </section>
      </main>

    </div>
  );
}

export default HomePage;

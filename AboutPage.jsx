

import React from 'react';

function AboutPage() {
  return (
    <div>
     
      
      <div id="banner"></div>
      
      <main>
        <section>
          <article style={{ width: '100%' }}>
            <h2>About Me!</h2>
            <p>Hi! My name is Anjali Selva. I'm currently in my second year of college at Vellore Institute of Technology in Vellore. I am pursuing my B.Tech. decree in Computer Science and Engineering with Specialization in Bioinformatics. I have loved Biology since I started learning it in 8<sup>th</sup> grade.</p>

            <p>I absolutely love nature and discovering new things about the world. I love taking walks and hiking. I've grown up travelling and am passionate about travelling and want to travel in the future. I enjoy several hobbies, some of which are dancing, painting, reading, swimming, taking pictures and listening to music.</p>

            <p>I grew up dancing. The dance style I do is called Bharatnatyam. I started dancing when I was seven years old and my passion for the art has only grown since then. In 2019 I performed my Arangetram and passed a very important and special milestone in my dance journey.</p>

            <p>Through this portfolio, I aim to share my artistic journey, showcasing my drawings, dance performances, and travel endeavors. Join me as I share my stories and experiences through pictures and articles.</p>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img id="image-right" src="anjali2.jpg" alt="Right Image" />
              <div>
                <img id="image-right" src="art1.jpeg" alt="Right Image" />
                <img id="image-left" src="art2.jpeg" alt="Left Image" />
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;

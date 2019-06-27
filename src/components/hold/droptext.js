const Anime = ReactAnime.default;

let App =() => (
  <Anime opacity={[0, 1]} translateY={'1em'} delay={(_e, i) => i * 1000}>
  <h1>Blog Post</h1>
  <section>
    <p>Upon this, Daggoo, with either hand upon the gunwale to steady his way, swiftly slid aft, and then erecting himself volunteered his lofty shoulders for a pedestal.</p>
    <p>"Good a mast-head as any, sir. Will you mount?"</p>
    <p>"That I will, and thank ye very much, my fine fellow; only I wish you fifty feet taller."</p>
  </section>
</Anime>
    );

let node = document.getElementById('app');

ReactDOM.render(<App/>, node);


html 
section#app

CSS

footer {
    padding-top: 2em;
  }
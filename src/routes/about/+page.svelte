<main>
  <header class="head">
    <a href="/"><img id="logo" src="/ameko-1000x.png" alt="Ameko Logo" /></a>
  </header>
  <section class="content">
    <h1>About Ameko</h1>
    <p>
      Ameko is a cross-platform editor for Advanced Substation Alpha (ASS) subtitles.
    </p>

    <h2>Roadmap</h2>
    <h3>Milestone 1 - MVP (Complete!)</h3>

    <p>
      The goal for Milestone 1 is to have a Minimal Viable Product, or MVP. For Ameko, the MVP is delivering a feature-rich <i>subtitle editor</i>.
      While Ameko intends to be an editing <i>suite</i> in its final form, the MVP is simply an editor. Thus, the MVP is missing many critical features
      most would consider invaluable to the subtitling workflow, such as video and audio support, graphical tools, or even displaying a preview of
      the subtitles you're writing.
    </p>
    <p>
      However, the intent of Milestone 1 as a MVP is to serve as a proof of concept for the viability of Ameko, Holo, and AssCS, and as such, the ability to
      edit subtitles will serve the role of the "minimum product." Ideally, the MVP should include all major editing features that don't require
      video or audio as part of their workflow.
    </p>

    <h3>Milestone 2 - Video</h3>
    <p>
      Video is clearly the second most important feature for a subtitle editor (behind only subtitle editing features).
      Video loading will be provided via Plugins so Holo/Ameko is not dependent on any one source. The first video provider will be <a href="https://github.com/FFMS/ffms2">FFMS2</a>.
      The full specifics of the video milestone are still in the air; it is currently unclear if features like subtitle rendering will
      be included within or pushed to a different milestone. The current goal and focus of this milestone is to have a working video player.
    </p>
  </section>
  <footer class="foot">
    &copy 2024 9volt and collaborators.
  </footer>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 10vh 1fr auto;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .content {
    grid-row: 2;
    grid-column: 2;
  }

  .content p {
    text-align: justify;
  }

  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-row: 1;
    grid-column: 2;    
  }

  .head a img {
    height: 10vh;
    transition: ease 0.35s;
  }

  .head a img:hover {
    rotate: 180deg;
  }
  
  .foot {
    grid-row: 3;
    font-size: 1rem;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  a {
    color: white;
  }

  a:visited {
    color: white;
  }

  @media screen and (max-width: 1200px) {
    main {
      grid-template-columns: 2rem 1fr 2rem;
    }
  }
</style>
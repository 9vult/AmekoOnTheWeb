<main>
  <header class="head">
    <a href="/"><img id="logo" src="/ameko-1000x.png" alt="Ameko Logo" /></a>
  </header>
  <section class="content">
    <h1>About Ameko</h1>
    <p>
      Ameko is a cross-platform editor for Advanced Substation Alpha (ASS)
      subtitles.
    </p>

    <h2>Roadmap</h2>
    <h3>Milestone 1 - MVP</h3>

    <p>
      The primary goal for Milestone 1 is to deliver a Minimum Viable Product
      (MVP). This includes, but is not limited to:
    </p>

    <ul>
      <li>
        <b>Core Subtitle Editing:</b>
        Creating, manipulating, and styling subtitles
      </li>
      <li>
        <b>Audio and Video Playback:</b>
        Initially, a/v will be provided by
        <a href="https://github.com/FFMS/ffms2">FFMS</a>
        and subtitles by <a href="https://github.com/libass/libass/">libass</a>.
        This content will be rendered to the user using OpenGL and OpenALSoft.
        However, a plugin architecture will be used to allow for these options
        to be extended in the future.
      </li>
      <li>
        <b>Tabs and Projects:</b>
        Ameko features tabs, allowing users to easily switch between multiple open
        subtitle files. Additionally, Ameko is introducing <i>Project Files</i>.
        Projects allow for logical grouping and organization of subtitle files
        independent of the physical filesystem structure, and provide a
        centralized place for common project configuration (like CPS warn
        levels, spellcheck language, etc.), colors, styles, and more.
      </li>
      <li>
        <b>Integrated Git support:</b>
        Basic Git features, like committing, pulling, pushing, and blaming will be
        available out of the box.
      </li>
      <li>
        <b>Scripting:</b>
        Ameko includes robust support for C# scripts and libraries. A scripting playground
        and support for simple JavaScript scriptlets will also be included.
      </li>
    </ul>

    <h3>Future Milestones</h3>

    <p>
      Ameko is envisioned as a comprehensive editing suite, and while the exact
      path is still unclear, future development will focus on significantly
      expanding its capabilities. Potential upcoming milestones include:
    </p>

    <ul>
      <li>
        <b>Audio Integration:</b>
        Implementing audio waveform/spectrum visualizations and related audio tooling.
      </li>
      <li>
        <b>Graphical Tools:</b>
        Tools for visually manipulating subtitles on the video
      </li>
    </ul>
  </section>
  <footer class="foot">&copy 2025 9volt.</footer>
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
    background-color: #00000040;
    padding: 1.5em;
    border-radius: 1em;
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

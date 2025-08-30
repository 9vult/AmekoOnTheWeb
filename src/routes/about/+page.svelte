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
    <h3>Milestone 1 - MVP</h3>

    <p>
      The primary goal for Milestone 1 is to deliver a Minimum Viable
      Product (MVP). For Ameko, this MVP will deliver a feature-rich
      subtitle editor with several key features to provide a robust
      foundation for future extensivility.
    </p>
    <ul>
      <li>
        <b>Core Subtitle Editing:</b>
        This forms the heart of the MVP, providing essential tools for
        creating, manipulating, and styling subtitles.
      </li>
      <li>
        <b>Integrated Video Support:</b>
        I've chosen to include support in the MVP as it's an indespensable
        part of the subtitling workflow. Rendering is handled via a plugin-
        based system, ensuring flexibility and independence from any single
        backend. The initial provider will be
        <a href="https://github.com/FFMS/ffms2">FFMS2</a> and
        <a href="https://github.com/libass/libass/">libass</a> will be the
        first subtitle renderer. Video rendering is handled by OpenGL. The
        first audio renderer is OpenAL Soft.
      </li>
      <li>
        <b>Tabs and Solutions:</b>
        Ameko will feature tabs, allowing users to easily switch between
        multiple open subtitle files. Alongside this, Ameko is introducing
        <i>Solution Files</i>. Solutions allow logical grouping and organizaiton
        of subtitle files independent of the physical filesystem structure.
        Furthermore, Solutions provide a centralized place for common project
        configuration, styles, colors, and more, offering a significant improvement
        for teams using automated build processes and version control-based
        workflows.
      </li>
      <li>
        <b>C# Scripting Support:</b>
       Recognizing that many existing workflows rely heavily on scripting for
       automation and advanced tasks, the MVP will include robust support for C#
       scripts and libraries. While existing Lua/Moonscript scripts are not supported
       by Ameko, the C# scripting platform is highly versitile and supports
       development of both simple and complex tasks.
      </li>
    </ul>

    <h3>Future Milestones</h3>
    <p>
      Ameko is envisioned as a comprehensive editing suite, and while the exact
      path is still unclear, future development will focus on significantly expanding
      its capabilities. Potential upcoming milestones include:
    </p>
    <ul>
      <li>
        <b>Audio Integration</b>:
        Implementing audio waveform and spectrum visualizations, related audio tooling.
      </li>
      <li>
        <b>Graphical Tools</b>:
        Tools for visually manipulating subtitles on the video.
      </li>
    </ul>
    <p>
      These are initial ideas—milestones will be added or removed based on user feedback,
      community contributions, and the natural progression of Ameko's development.
    </p>

    <h3>Translation Contributions</h3>
    <p>
      If you are interested in localizing Ameko into your language (Thank you!),
      please see the <a href="https://crowdin.com/project/ameko">Crowdin project</a>.
      Note: Ameko is localized via the ResX format, which is quite limited,
      such as lacking support for plurals.
    </p>
  </section>
  <footer class="foot">
    &copy 2025 9volt
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
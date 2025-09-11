<main>
  <header class="head">
    <a href="/"><img id="logo" src="/ameko-1000x.png" alt="Ameko Logo" /></a>
  </header>
  <section class="content">
    <h1>Developing Ameko</h1>
    <p>This section will cover developing for the Ameko application itself.</p>

    <h2>Building</h2>

    <p>
      I would strongly recommend using JetBrains Rider or Visual Studio for
      development, especially if you plan on contributing to the GUI.
    </p>

    <h3>C#</h3>

    <ul>
      <li>Make sure you have the .net SDK installed.</li>
      <li>
        Run <code>dotnet restore</code> to collect the required NuGet packages.
      </li>
      <li>
        To build, either click the Build button in your IDE, or run <code
          >dotnet build</code
        >.
      </li>
      <li>
        To test, either click the Run Tests button in your IDE, or run <code
          >dotnet test</code
        >.
      </li>
      <li>To build a release binary, use <code>dotnet publish</code>.</li>
      <li>
        The final output for debugging and running is the <code>Ameko</code> project.
      </li>
    </ul>

    <h3>Zig</h3>

    <ul>
      <li>Make sure you have Zig installed.</li>
      <li>You may need to build FFMS2 and libass yourself.</li>
      <li>
        To build, run <code>zig build</code>. To run the main method, use
        <code>zig build run</code>.
      </li>
      <li>To test, run <code>zig test</code>.</li>
      <li>
        To build a release binary, use <code>zig build --release=safe</code>.
      </li>
    </ul>

    <h2>Project Components</h2>

    <p>
      The Ameko project is currently comprised of four components working in
      tandem:
    </p>

    <ul>
      <li>
        <b>AssCS:</b>
        The backbone of the operation. AssCS is responsible for everything involving
        the subtitle document itself. Managing events and styles, parsing tags, and
        reading/writing files are just part of what AssCS does. Eventually, AssCS
        will likely be split into its own project so anyone can use it for their
        C# projects.
      </li>
      <li>
        <b>Holo:</b>
        The middleware layer, primarily linking the GUI to AssCS and Mizuki. It also
        manages the Package Manager, projects, configuration, and pretty much everything
        that's not immediately GUI-related.
      </li>
      <li>
        <b>Mizuki:</b>
        A high-performance interop library and Holo's first A/V plugin. Mizuki facilitates
        communication between Holo and A/V libraries like FFMS and libass. By doing
        most of the work in a low-level language like Zig, Mizuki is able to reduce
        the amount of calls across the managed-unmanaged border.
      </li>
      <li>
        <b>Ameko:</b>
        Despite being the namesake of the project, effort has been made to make Ameko
        a thin GUI. Theoretically, one should theoretically be able to build their
        own GUI and plug it right into Holo. Ameko's primary purpose is to facilitate
        data transfer between the user and Holo.
      </li>
    </ul>

    <h2>Contributing</h2>

    <p>Thank you for your interest in contributing to Ameko!</p>

    <h3>Code</h3>

    <p>
      Before submitting a pull request, please make sure your code is properly
      formatted:
    </p>

    <ul>
      <li>
        <b>C# code</b>
        is automatically formatted using
        <a href="https://github.com/belav/csharpier">CSharpier</a> as part of the
        build process.
      </li>
      <li>
        <b>Zig code</b>
        should be formatted using <code>zig fmt</code>.
      </li>
    </ul>

    <p>Additionally, there are some testing guidelines:</p>

    <ul>
      <li>
        Unit tests are required for contributions to the Holo and AssCS
        projects.
      </li>
      <li>
        Tests are optional, but highly appreciated, for Ameko's ViewModels and
        for Mizuki.
      </li>
    </ul>

    <h3>Localization</h3>

    <p>
      If you are interested in localizing Ameko into your language (Thank you!),
      please see the <a href="https://crowdin.com/project/ameko"
        >Crowdin project</a
      >. Note: Ameko is localized via the ResX format, which is quite limited,
      such as lacking support for plurals.
    </p>
  </section>
  <footer class="foot">&copy 2024 9volt.</footer>
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

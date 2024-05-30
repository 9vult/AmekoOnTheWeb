<main>
  <header class="head">
    <img id="logo" src="ameko-1000x.png" alt="Ameko Logo" />
    <h1>Ameko</h1>
  </header>

  <section class="links">
    <nav>
      <a href="/docs">Documentation</a>
      <a href="/about">About</a>
      <a href="/dev">Development</a>
    </nav>
  </section>

  <footer class="foot">
    &copy 2024 9volt and collaborators.
  </footer>
</main>

<style>
  main {
    display: grid;
    height: calc(100vh - 1rem);
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr auto;
    padding: 0.5rem;
    font-size: 1.5em;
  }

  a {
    color: white;
    text-decoration: none;
    text-transform: lowercase;
    
    padding: 0.25em 0.5em;
    border: 2pt solid white;
    border-radius: 1em;
    transition: ease 0.35s;
    margin: 0 0.25em;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.2)
  }

  a:visited {
    color: white;
  }

  nav {
    display: flex;
    flex-direction: row;
  }

  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-row: 1;
  }

  .links {
    grid-row: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .foot {
    grid-row: 3;
    font-size: 1rem;
  }

  #logo {
    width: 10em;
    margin-bottom: -3em;
  }

  @media screen and (max-width: 800px) {
    nav {
      flex-direction: column;
    }
    a {
      margin-bottom: 0.5em;
    }
  }
</style>
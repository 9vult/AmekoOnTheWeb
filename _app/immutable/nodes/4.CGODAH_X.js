import{s as a,n as t}from"../chunks/scheduler.CtbWrGNo.js";import{S as n,i as r,e as u,c,g as d,l as h,a as p,d as b}from"../chunks/index.C79Nw7Xh.js";function m(l){let e,o=`<header class="head svelte-piboub"><a href="/" class="svelte-piboub"><img id="logo" src="/ameko-1000x.png" alt="Ameko Logo" class="svelte-piboub"/></a></header> <section class="content svelte-piboub"><h1>Developing Ameko</h1> <p class="svelte-piboub">This section will cover developing for the Ameko application itself.</p> <h2>Building</h2> <p class="svelte-piboub">I would strongly recommend using JetBrains Rider or Visual Studio for
      development, especially if you plan on contributing to the GUI.</p> <h3>C#</h3> <ul><li>Make sure you have the .net SDK installed.</li> <li>Run <code>dotnet restore</code> to collect the required NuGet packages.</li> <li>To build, either click the Build button in your IDE, or run <code>dotnet build</code>.</li> <li>To test, either click the Run Tests button in your IDE, or run <code>dotnet test</code>.</li> <li>To build a release binary, use <code>dotnet publish</code>.</li> <li>The final output for debugging and running is the <code>Ameko</code> project.</li></ul> <h3>Zig</h3> <ul><li>Make sure you have Zig installed.</li> <li>You may need to build FFMS2 and libass yourself.</li> <li>To build, run <code>zig build</code>. To run the main method, use
        <code>zig build run</code>.</li> <li>To test, run <code>zig test</code>.</li> <li>To build a release binary, use <code>zig build --release=safe</code>.</li></ul> <h2>Project Components</h2> <p class="svelte-piboub">The Ameko project is currently comprised of four components working in
      tandem:</p> <ul><li><b>AssCS:</b>
        The backbone of the operation. AssCS is responsible for everything involving
        the subtitle document itself. Managing events and styles, parsing tags, and
        reading/writing files are just part of what AssCS does. Eventually, AssCS
        will likely be split into its own project so anyone can use it for their
        C# projects.</li> <li><b>Holo:</b>
        The middleware layer, primarily linking the GUI to AssCS and Mizuki. It also
        manages the Package Manager, projects, configuration, and pretty much everything
        that&#39;s not immediately GUI-related.</li> <li><b>Mizuki:</b>
        A high-performance interop library and Holo&#39;s first A/V plugin. Mizuki facilitates
        communication between Holo and A/V libraries like FFMS and libass. By doing
        most of the work in a low-level language like Zig, Mizuki is able to reduce
        the amount of calls across the managed-unmanaged border.</li> <li><b>Ameko:</b>
        Despite being the namesake of the project, effort has been made to make Ameko
        a thin GUI. Theoretically, one should theoretically be able to build their
        own GUI and plug it right into Holo. Ameko&#39;s primary purpose is to facilitate
        data transfer between the user and Holo.</li></ul> <h2>Contributing</h2> <p class="svelte-piboub">Thank you for your interest in contributing to Ameko!</p> <h3>Code</h3> <p class="svelte-piboub">Before submitting a pull request, please make sure your code is properly
      formatted:</p> <ul><li><b>C# code</b>
        is automatically formatted using
        <a href="https://github.com/belav/csharpier" class="svelte-piboub">CSharpier</a> as part of the
        build process.</li> <li><b>Zig code</b>
        should be formatted using <code>zig fmt</code>.</li></ul> <p class="svelte-piboub">Additionally, there are some testing guidelines:</p> <ul><li>Unit tests are required for contributions to the Holo and AssCS
        projects.</li> <li>Tests are optional, but highly appreciated, for Ameko&#39;s ViewModels and
        for Mizuki.</li></ul> <h3>Localization</h3> <p class="svelte-piboub">If you are interested in localizing Ameko into your language (Thank you!),
      please see the <a href="https://crowdin.com/project/ameko" class="svelte-piboub">Crowdin project</a>. Note: Ameko is localized via the ResX format, which is quite limited,
      such as lacking support for plurals.</p></section> <footer class="foot svelte-piboub">© 2024 9volt.</footer>`;return{c(){e=u("main"),e.innerHTML=o,this.h()},l(i){e=c(i,"MAIN",{class:!0,"data-svelte-h":!0}),d(e)!=="svelte-uy50bz"&&(e.innerHTML=o),this.h()},h(){h(e,"class","svelte-piboub")},m(i,s){p(i,e,s)},p:t,i:t,o:t,d(i){i&&b(e)}}}class y extends n{constructor(e){super(),r(this,e,null,m,a,{})}}export{y as component};

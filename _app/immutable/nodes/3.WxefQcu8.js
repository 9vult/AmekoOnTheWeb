import{s as l,n as t}from"../chunks/scheduler.CtbWrGNo.js";import{S as n,i as r,e as d,c as u,g as c,l as p,a as h,d as m}from"../chunks/index.C79Nw7Xh.js";function b(o){let e,s=`<header class="head svelte-b86x8o"><a href="/" class="svelte-b86x8o"><img id="logo" src="/ameko-1000x.png" alt="Ameko Logo" class="svelte-b86x8o"/></a></header> <section class="content svelte-b86x8o"><h1>About Ameko</h1> <p class="svelte-b86x8o">Ameko is a cross-platform editor for Advanced Substation Alpha (ASS) subtitles.</p> <h2>Roadmap</h2> <h3>Milestone 1 - MVP</h3> <p class="svelte-b86x8o">The primary goal for Milestone 1 is to deliver a Minimum Viable
      Product (MVP). For Ameko, this MVP will deliver a feature-rich
      subtitle editor with several key features to provide a robust
      foundation for future extensivility.</p> <ul><li><b>Core Subtitle Editing:</b>
        This forms the heart of the MVP, providing essential tools for
        creating, manipulating, and styling subtitles.</li> <li><b>Integrated Video Support:</b>
        I&#39;ve chosen to include support in the MVP as it&#39;s an indespensable
        part of the subtitling workflow. Rendering is handled via a plugin-
        based system, ensuring flexibility and independence from any single
        backend. The initial provider will be
        <a href="https://github.com/FFMS/ffms2" class="svelte-b86x8o">FFMS2</a> and
        <a href="https://github.com/libass/libass/" class="svelte-b86x8o">libass</a> will be the
        first subtitle renderer. Video rendering is handled by OpenGL. The
        first audio renderer is OpenAL Soft.</li> <li><b>Tabs and Solutions:</b>
        Ameko will feature tabs, allowing users to easily switch between
        multiple open subtitle files. Alongside this, Ameko is introducing
        <i>Solution Files</i>. Solutions allow logical grouping and organizaiton
        of subtitle files independent of the physical filesystem structure.
        Furthermore, Solutions provide a centralized place for common project
        configuration, styles, colors, and more, offering a significant improvement
        for teams using automated build processes and version control-based
        workflows.</li> <li><b>C# Scripting Support:</b>
       Recognizing that many existing workflows rely heavily on scripting for
       automation and advanced tasks, the MVP will include robust support for C#
       scripts and libraries. While existing Lua/Moonscript scripts are not supported
       by Ameko, the C# scripting platform is highly versitile and supports
       development of both simple and complex tasks.</li></ul> <h3>Future Milestones</h3> <p class="svelte-b86x8o">Ameko is envisioned as a comprehensive editing suite, and while the exact
      path is still unclear, future development will focus on significantly expanding
      its capabilities. Potential upcoming milestones include:</p> <ul><li><b>Audio Integration</b>:
        Implementing audio waveform and spectrum visualizations, related audio tooling.</li> <li><b>Graphical Tools</b>:
        Tools for visually manipulating subtitles on the video.</li></ul> <p class="svelte-b86x8o">These are initial ideas—milestones will be added or removed based on user feedback,
      community contributions, and the natural progression of Ameko&#39;s development.</p> <h3>Translation Contributions</h3> <p class="svelte-b86x8o">If you are interested in localizing Ameko into your language (Thank you!),
      please see the <a href="https://crowdin.com/project/ameko" class="svelte-b86x8o">Crowdin project</a>.
      Note: Ameko is localized via the ResX format, which is quite limited,
      such as lacking support for plurals.</p></section> <footer class="foot svelte-b86x8o">© 2025 9volt</footer>`;return{c(){e=d("main"),e.innerHTML=s,this.h()},l(i){e=u(i,"MAIN",{class:!0,"data-svelte-h":!0}),c(e)!=="svelte-6y34pa"&&(e.innerHTML=s),this.h()},h(){p(e,"class","svelte-b86x8o")},m(i,a){h(i,e,a)},p:t,i:t,o:t,d(i){i&&m(e)}}}class v extends n{constructor(e){super(),r(this,e,null,b,l,{})}}export{v as component};

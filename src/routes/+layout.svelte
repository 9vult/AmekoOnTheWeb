{#key data.pathname}
  <main>
    <div id="slot-content" in:fly={tranIn} out:fly={transOut}>
      <slot />
    </div>
  </main>
{/key}

<script>
  import './+layout.css'
  import { fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';

  export let data;

  const duration = 300;
  const delay = duration + 100;
  const y = 10;

  const tranIn = {
    easing: cubicOut,
    y,
    delay
  };

  const transOut = {
    easing: cubicIn,
    y: -y,
    duration
  };
</script>

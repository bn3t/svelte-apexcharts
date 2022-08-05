<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  export let route: string;
  export let alt: string;
  $: href = `${base}/${route}`;
</script>

<a {href} {alt} class:current={$page.url.pathname === href}><slot /></a>

<style>
  .current {
    color: var(--accent) !important;
    border-color: var(--accent) !important;
  }
</style>

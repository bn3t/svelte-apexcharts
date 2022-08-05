<script>
  import { plainText as readme } from '@virtual:plain-text/README.md';
  import SvelteMarkdown from 'svelte-markdown';
  import Code from './Code.svelte';

  let source = readme.replace(/# Development.*/gims, '');
  let renderers = {
    code: Code
  };
</script>

<SvelteMarkdown {source} {renderers} />

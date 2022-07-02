<script context="module" lang="ts">
  import type ApexCharts from 'apexcharts';
  import { browser } from '$app/env';
  let apexCharts: typeof ApexCharts | undefined;

  if (browser) {
    import('apexcharts').then((apex) => (apexCharts = apex.default));
  }

  export { apexCharts as ApexCharts };
</script>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  import type { SvelteApexOptions, SvelteApexSeries } from './types';

  export let options: SvelteApexOptions;
  export let series: SvelteApexSeries;
  export let animate = true;

  let prevOptions: SvelteApexOptions;
  let prevSeries: SvelteApexSeries;
  let ref: HTMLDivElement;
  let chart: ApexCharts;

  onMount(async () => {
    const ApexCharts = (await import('apexcharts')).default;
    chart = new ApexCharts(ref, { ...options, series });
    chart.render();
  });

  onDestroy(() => {
    chart?.destroy();
  });

  $: {
    if (chart !== undefined) {
      if (options !== undefined && options !== prevOptions) {
        chart.updateOptions({ ...options, series }, true, animate);
      } else if (series !== undefined && series !== prevSeries) {
        chart.updateSeries(series, animate);
      }
    }
    prevOptions = options;
    prevSeries = series;
  }
</script>

<div class="container" bind:this={ref} />

<style>
  .container {
    width: 100%;
    height: 100%;
  }
</style>

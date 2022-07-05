<script lang="ts">
  import ApexChart from '$lib';
  import type { SvelteApexOptions, SvelteApexSeries } from '$lib';

  let animate = true;

  let series: SvelteApexSeries = [
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ];

  let options: SvelteApexOptions = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };
</script>

<div class="root">
  <ApexChart {options} {series} {animate} />
</div>

<style>
  .root {
    width: 100%;
    height: 400px;
  }
</style>

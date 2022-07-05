<script lang="ts">
  import ApexChart, { ApexCharts } from '$lib/ApexChart.svelte';
  import type { SvelteApexOptions, SvelteApexSeries } from '$lib/types';

  let show = true;
  let animate = true;

  let series1: SvelteApexSeries = [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ];

  let series2: SvelteApexSeries = [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ];

  let options1: SvelteApexOptions = {
    chart: {
      id: 'chart1',
      height: '100%',
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };
  let options2: SvelteApexOptions = {
    chart: {
      id: 'chart1',
      height: '100%',
      type: 'area',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };

  let currentSeries: SvelteApexSeries = series1;
  let currentOptions: SvelteApexOptions = options1;

  const toggleShowChart = () => (show = !show);
  const handleShow = () => (show = true);
  const toggleSeries = () => (currentSeries = currentSeries === series1 ? series2 : series1);
  const toggleOptions = () => (currentOptions = currentOptions === options1 ? options2 : options1);
  const callCustom = () => {
    if (ApexCharts !== undefined) {
      ApexCharts.exec(
        'chart1',
        'updateSeries',
        [
          {
            data: [32, 44, 31, 41, 22]
          }
        ],
        animate
      );
    }
  };
</script>

<div class="root">
  {#if show}
    <ApexChart options={currentOptions} series={currentSeries} {animate} />
  {/if}
</div>
<button on:click={toggleShowChart}>Toggle chart visibility</button>
<button on:click={handleShow}>Show chart</button>
<button on:click={toggleSeries}>Toggle Series</button>
<button on:click={toggleOptions}>Toggle Options</button>
<button on:click={callCustom}>Call custom</button>
<input type="checkbox" id="animate" name="animate" bind:checked={animate} /><label for="animate"
  >Animate</label
>

<style>
  .root {
    width: 100%;
    height: 400px;
  }
</style>

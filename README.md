This project is archived and I will not work on it anymore as I don't continue with Svelte.

<p align="center"><img src="https://apexcharts.com/media/apexcharts-logo.png"></p>

<p align="center">
  <a href="https://github.com/apexcharts/react-apexcharts/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" alt="License"></a>

<p align="center">Svelte wrapper for <a href="https://github.com/apexcharts/apexcharts.js">ApexCharts</a> to build interactive visualizations in svelte.</p>

<p align="center"><a href="https://bn3t.github.io/svelte-apexcharts"><img src="https://apexcharts.com/media/apexcharts-banner.png"></a></p>

## Download and Installation

## Usage

The interface of this component is similar to the interface used in the
[react-apexcharts](https://apexcharts.com/docs/react-charts/) implementation.
More specifically there is an `options` and a `series` properties which can be used separatly.
Also, this library is compatible with SvelteKit.

The global `ApexCharts` object is exposed by this library which allows to call ApexCharts methods directly.

```ts
import ApexChart, { ApexCharts } from '@bn3t/svelte-apexcharts';
import type { SvelteApexOptions, SvelteApexSeries } from '@bn3t/svelte-apexcharts';
```

To create a basic bar chart with minimal configuration, write as follows:

```ts
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
```

# Development

## Development lifecycle

```
$ npm run dev # Run sveltkit application in dev mode
```

## How to publish to npm

```
$ npm run package
$ cd package
$ npm publish
```

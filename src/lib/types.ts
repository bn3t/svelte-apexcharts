import type { ApexOptions } from 'apexcharts';

export type SvelteApexOptions = Omit<ApexOptions, 'series'>;
export type SvelteApexSeries = ApexOptions['series'];

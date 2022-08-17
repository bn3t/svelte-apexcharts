import type { PlaywrightTestConfig } from '@playwright/test';

const localDev = !process.env.DEV;

const baseURL = localDev ? 'http://127.0.0.1:4173/svelte-apexcharts/' : 'http://127.0.0.1:5173';

const config: PlaywrightTestConfig = {
  use: {
    baseURL
  },
  webServer: localDev
    ? {
        command: (process.env.CI ? '' : 'npm run build && ') + 'npm run preview',
        port: 4173,
        timeout: process.env.CI || process.env.DEV ? undefined : 20000
      }
    : undefined,
  reporter: process.env.CI ? 'html' : 'list'
};

export default config;

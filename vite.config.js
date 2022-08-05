import { sveltekit } from '@sveltejs/kit/vite';
import plainText from 'vite-plugin-virtual-plain-text';

console.log(plainText)
/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit(), plainText.default()]
};

export default config;
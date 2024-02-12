import { defineConfig } from "vitepress";
import { nav, sidebar } from "./configs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rebebuca",
  description: "Rebebuca ",
  lastUpdated: false,
  themeConfig: {
    i18nRouting: false,
    logo: '/logo.png',
    nav,
    sidebar,
    socialLinks: [
      {
        link: "https://juejin.cn/user/2101921962531469/posts", icon: {
          svg: `<svg t="1675304957957" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1427" width="280" height="280"><path d="M462.06826667 138.4448c-24.49813333 19.34933333-47.28 37.4496-50.5568 40.25813333l-6.24106667 4.992 11.7024 9.20746667c6.39786667 5.1488 12.64 10.14186667 13.888 11.23413333 1.248 1.09226667 19.19253333 15.29173333 39.63306667 31.67573334l37.2928 29.648 5.61813333-4.21333334c3.12-2.34026667 24.8096-19.6608 48.3712-38.38506666 23.40586667-18.72533333 44.0032-34.95253333 45.56373333-35.88906667 1.71626667-1.09226667 2.96426667-2.34026667 2.96426667-2.96533333 0-0.4672-10.29866667-9.20533333-22.9376-19.03573334-12.79466667-9.9872-24.1856-19.0368-25.43466667-20.12906666-17.008-13.888-53.0528-41.66293333-54.144-41.66293334-0.62506667 0.1568-21.2224 15.9168-45.71946666 35.26506667z m248.88 192.39466667C507.16266667 492.02666667 508.7232 490.77866667 504.97813333 488.4384c-3.2768-2.0288-12.3264-9.05066667-68.34453333-53.36533333-9.67466667-7.64586667-19.81653333-15.76-22.78186667-17.94453334-2.96533333-2.34026667-9.36213333-7.33333333-14.19946666-11.23413333-4.992-3.9008-11.39093333-8.89493333-14.19946667-11.2352-14.04266667-10.92266667-75.83466667-59.76213333-108.91413333-85.8208-6.24213333-4.99306667-12.17066667-9.05066667-12.95146667-9.05066667-0.77973333 0-11.7024 8.27093333-24.1856 18.25706667-12.4832 10.14186667-24.1856 19.50506667-25.90293333 20.75306667-1.872 1.248-5.46133333 4.21333333-7.95733334 6.5536-2.496 2.496-5.14986667 4.36906667-5.77386666 4.36906666-3.2768 0-0.77973333 3.2768 6.86613333 9.36213334 4.36906667 3.43253333 9.36213333 7.33333333 10.76693333 8.5824 1.40373333 1.09226667 10.92266667 8.58133333 21.06453334 16.53973333s24.81066667 19.50506667 32.45653333 25.58933333c20.59733333 16.22933333 34.016 26.9952 136.37653333 107.82293334 51.02506667 40.25813333 94.71573333 74.43093333 96.90026667 75.83466666 3.9008 2.6528 4.21333333 2.6528 7.95733333-0.31146666a1110.848 1110.848 0 0 0 17.1648-13.57546667c7.33333333-5.77386667 15.76-12.4832 18.72426667-14.82346667 32.144-25.27893333 85.35253333-67.25333333 87.2256-68.8128 1.248-1.09226667 13.26293333-10.45546667 26.52586667-20.90986666s40.41386667-31.67573333 60.07466666-47.27893334c19.8176-15.60426667 49.3088-38.85333333 65.84853334-51.8048 16.53973333-12.95146667 29.64693333-24.02986667 29.33546666-24.81066666-0.93653333-1.248-61.47946667-50.24426667-63.97653333-51.49226667-0.77973333-0.46826667-19.81653333 13.57546667-42.13013333 31.20746667z" fill="#515151" p-id="1428"></path><path d="M27.65866667 487.8144c-16.22933333 13.1072-30.4288 24.96533333-31.6768 26.2144-2.496 2.34026667-5.7728-0.46933333 85.35253333 71.3088 35.4208 27.93066667 34.7968 27.46346667 61.47946667 48.528 11.0784 8.73813333 38.6976 30.58346667 61.6352 48.528 40.72533333 32.144 47.904 37.76106667 56.17386666 44.31466667 2.18453333 1.87306667 24.49813333 19.34933333 49.46346667 39.01013333 24.81066667 19.6608 79.11146667 62.41493333 120.46186667 95.0272 41.50613333 32.6112 75.83466667 59.4496 76.6144 59.76213333 0.7808 0.31253333 7.95733333-4.6816 15.91573333-11.0784 23.25013333-18.10133333 96.27626667-75.67893333 108.2912-85.1968 6.08533333-4.83733333 13.7312-10.92266667 17.008-13.41866666 3.2768-2.65386667 6.86506667-5.46133333 7.8016-6.24213334 0.93653333-0.93653333 12.64-10.14293333 25.90186667-20.59733333 22.15786667-17.16373333 63.04-49.30773333 68.65706666-53.98933333 1.248-1.09226667 5.46133333-4.36906667 9.36213334-7.33333334 3.9008-2.96533333 8.42666667-6.70933333 10.14293333-8.11413333 1.71626667-1.4048 15.76-12.4832 31.20746667-24.65386667 31.05066667-24.34133333 45.09546667-35.4208 94.4032-74.27413333 18.4128-14.512 34.64-27.15093333 35.88906666-28.2432 2.65173333-2.18453333 33.54773333-26.52693333 47.59146667-37.60533333 5.1488-3.9008 9.67466667-7.64586667 10.14186667-8.11413334 0.46933333-0.624 6.39786667-5.1488 13.264-10.45333333 6.86506667-5.14986667 14.04266667-10.92266667 16.07146666-12.64l3.58933334-3.12106667-10.6112-8.26986666c-5.7728-4.68053333-10.92266667-8.73813333-11.39093334-9.20533334-1.248-1.4048-23.87306667-19.66186667-32.144-25.90293333-4.21333333-3.2768-7.8016-6.39786667-8.11306666-7.17866667-1.4048-3.27573333-7.17866667 0.1568-31.20853334 19.1936-14.3552 11.23413333-27.4624 21.5328-29.17866666 22.9376-1.71733333 1.56053333-11.2352 8.89386667-21.0656 16.69546667-9.8304 7.64586667-18.256 14.35626667-18.72426667 14.82453333-0.46826667 0.4672-7.02186667 5.7728-14.82346667 11.7024-7.64586667 5.9296-16.22826667 12.4832-18.88 14.66666667-5.3056 4.37013333-5.77386667 4.68266667-21.6896 17.3216-5.93066667 4.68053333-12.01493333 9.36213333-13.264 10.45333333-1.248 1.09333333-21.68853333 17.1648-45.25013333 35.5776-23.56266667 18.56853333-44.31573333 34.95253333-46.032 36.35626667-1.71626667 1.56053333-15.44746667 12.32746667-30.42666667 24.02986667s-43.53493333 34.1728-63.50826666 49.9328c-19.81653333 15.76-45.0944 35.57653333-56.01706667 44.15893333s-24.81066667 19.504-30.896 24.34133333l-11.0784 8.89493334-4.6816-3.2768c-2.496-1.87306667-4.992-3.74506667-5.46133333-4.21333334-0.46826667-0.46826667-5.30453333-4.36906667-10.92266667-8.5824-12.63893333-9.8304-15.44746667-12.01493333-17.78773333-14.04373333-0.93653333-0.93546667-4.52586667-3.744-7.95733334-6.24106667-3.43466667-2.6528-6.55466667-4.99306667-7.02293333-5.46133333-0.46826667-0.46826667-7.33333333-6.08533333-15.44746667-12.4832-8.11413333-6.24106667-15.91573333-12.3264-17.16373333-13.41866667-1.4048-1.248-18.25706667-14.512-37.60533333-29.648-19.19253333-15.136-37.4496-29.4912-40.57066667-31.83146666-6.08533333-4.99306667-35.73226667-28.39893333-133.41226667-105.32586667-36.82453333-29.02293333-77.55093333-61.16693333-90.5024-71.3088-53.0528-42.1312-58.82666667-46.50026667-60.69866666-46.34346667-0.93546667 0-14.9792 10.92266667-31.20746667 24.02986667z" fill="#515151" p-id="1429"></path></svg>`
        }
      },
      { icon: "github", link: "https://github.com/rebebuca/rebebuca" },
    ],
    search: {
      provider: "local",
    },
    footer: {
      copyright: "Copyright © 2020-present Rebebuca",
    },
    editLink: {
      pattern: 'https://github.com/rebebuca/rebebuca-website/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  },
});

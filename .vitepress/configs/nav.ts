import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '指南',
    activeMatch: '/guide/',
    link: '/guide/'
  },
  { text: '不卡矩阵', link: '/nav', activeMatch: '^/nav' },
]

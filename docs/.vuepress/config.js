module.exports = {
  // base: '/pandaUI-web/',
  title: '熊猫 UI',
  description: '一个简单好用的 UI 框架',
  themeConfig: {
    logo: '/img/panda.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' },
      { text: 'Github', link: 'https://github.com/Amber-Tian/pandaUI' },
    ],
    sidebar: [
      {
        title: '首页',
        path: '/',
      },
      {
        title: '开始',
        children: [
          '/install/',
          '/get-started/'
        ],
        collapsable: false
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/button-group',
          '/components/input',
          '/components/layout',
          '/components/grid',
          '/components/tabs',
          '/components/collapse',
          '/components/popover',
          '/components/toast'
        ],
        collapsable: false
      }
    ]
  }
}
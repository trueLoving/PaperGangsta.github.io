module.exports = {
    title: 'Ali-Ming && Master Zhang',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: 'logo.png' }]
    ],
    themeConfig: {
        editLinks: true,
        // docsDir: 'packages/docs/docs',
        locales: {
          '/': {
            sidebar: {
                '/guide/': renderSiderBar()
            }
          }
        }
      },
}

function renderSiderBar() {
    return ([{
        title: '前言',
        collapsable: false,
        children: [
            '',
            'preface'
        ]
    }, 
])
}
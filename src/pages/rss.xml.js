import rss from '@astrojs/rss'

export const get = () => rss({
  title: 'Astro test page',
  description: 'My journey testing Astro',
  site: 'https://antelo-astro.netify.app',
  items: import.meta.glob('./posts/**/*.md'),
  customData: '<language>es</language>'
})

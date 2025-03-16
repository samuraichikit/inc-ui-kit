import type { Preview } from '@storybook/react'

import { themes } from '@storybook/theming'

import '../src/styles/index.scss'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
}

export default preview

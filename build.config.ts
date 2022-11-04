import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    { input: 'src/app' },
  ],
  clean: true,
  alias: {
    '~/': resolve(__dirname, 'src')
  },
  rollup: {
    emitCJS: true,
  },
})

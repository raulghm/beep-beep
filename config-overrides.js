/*
  For more information on how customize-cra works check out its official github repo at:
  https://github.com/arackaf/customize-cra
*/

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, addBabelPlugins } = require('customize-cra')
module.exports = override(
  /*
    For more information on addBabelPlugins check out its official github repo at:
    https://github.com/arackaf/customize-cra#addbabelpluginsplugins
  */

  ...addBabelPlugins([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '@': './src'
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  ])
)

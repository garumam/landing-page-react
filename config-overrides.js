const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@menu-item-active-bg': 'inherit',
      '@menu-item-color': '#212f4a',
      '@input-height-base': '45px',
      '@carousel-dot-width': '24px',
      '@carousel-dot-height': '6px',
      '@carousel-dot-active-width': '32px'
    },
  }),
);
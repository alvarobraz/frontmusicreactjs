// const reactAppRewirePostcss = require('react-app-rewire-postcss');
// const postcssCustomProperties = require('postcss-custom-properties');

// module.exports = config => reactAppRewirePostcss(config, {
//   plugins: () => [
//     postcssCustomProperties(
//         {
//             preserve: false, // completely reduce all css vars
//             importFrom: [
//               './src/styles/fullcalendar-vars.css' // look here for the new values
//             ]
//           }
//     ),
//     require('postcss-calc')
//   ]
// });
const path = require("path");
const fs = require("fs");
const rewireBabelLoader = require("react-app-rewire-babel-loader");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = function override(config, env) {
    config = rewireBabelLoader.include(
        config,
        resolveApp("node_modules/@react-leaflet")
    );
    config = rewireBabelLoader.include(
        config,
        resolveApp("node_modules/react-leaflet")
    );

    return config;  
};

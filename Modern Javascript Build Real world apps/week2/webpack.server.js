// this file will generate a webpack config file
// for the server. look at the docs
// it expects every configuration to function properly

// this is gonna run on node, so we can import other modules
// and use them. __dirname is the current directory we are on


var path=require('path');

function createConfig(isDebug){
    return{
        target:'node', // sets presets in webpack (default: browser)
        devtool:'source-map', // in case of error, maps the code lines
        entry: './src/server/server.js', // path of the file that webpack should
                                        // compile and do all the stuff on
        output:{
            path: path.join(__dirname, 'build'),
            filename: 'server.js'
        },
        resolve:{
            // its the different tasks of stuff that webpack will use
            // in order to map the server and the shared folder
            alias:{
                shared: path.join(__dirname, 'src', 'shared')
            }
        },
        module:{
            loaders:[
                // to add additional logic before webpack does its thing
                // for example, run esLint and babel
                // in this way, webpack grabs everything that ends with
                // .js and applies the webpack loader, but exclude stuff
                // from the node_modules
                {test:/\.js$/, loader:'babel', exclude:/node_modules/},
                {test:/\.js$/, loader:'eslint-loader', exclude:/node_modules/}
            ]
        }
    }
}

module.exports = createConfig(true);
module.exports.create = createConfig;
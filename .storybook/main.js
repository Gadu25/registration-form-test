const path = require("path");
    module.exports = {
        stories: ['../stories/**/*.story.js',],
        addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-postcss',
        ],
        staticDirs: ['../static'],
        webpackFinal: async (config, { configType }) => {
        // config.resolve.alias['ocms-frontend-library'] = path.resolve(**dirname, "../");
        config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js';

            config.module.rules.push({
            test: /\.s(a|c)ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            });

            config.module.rules.push({
            test: /\.pug$/,
            oneOf: [
                {
                resourceQuery: /^\?vue/,
                use: ['pug-plain-loader'],
                },
                {
                use: ['raw-loader', 'pug-plain-loader'],
                },
            ],
            });

            return config;

        }
    };
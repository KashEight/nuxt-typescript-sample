module.exports = function() {
    // Resolve .ts/.tsx files in Nuxt
    this.nuxt.options.extensions.push('ts', 'tsx')
    // Webpack Settings
    this.extendBuild(config => {
        // Add ts-loader for webpack to resolve .ts/.tsx files
        config.module.rules.push({
            test: /\.tsx?$/,
            exclude: /(node_modules)/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        })
        // Add .ts extension for webpack resolve
        if (!config.resolve.extensions.includes('.ts')) {
            config.resolve.extensions.push('.ts')
        }
        // Add .tsx extension for webpack resolve
        if (!config.resolve.extensions.includes('.tsx')) {
            config.resolve.extensions.push('.tsx')
        }
    })
}

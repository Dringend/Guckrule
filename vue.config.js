module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/guckrule/'
        : '/',
    outputDir: 'docs'
}
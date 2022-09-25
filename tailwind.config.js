module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fill: theme => ({
            'selected': theme('colors.red.500'),
            'green': theme('colors.green.500'),
            'blue': theme('colors.blue.500'),
        }),
        extend: {},
    },
    variants: {
       fill: ['hover', 'focus']
    },
    plugins: [],
}
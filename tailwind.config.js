// tailwind.config.js
module.exports = {
    variants: {
        backgroundColor: ['hover', 'group-hover'],
        display: ['responsive', 'group-hover'],
        textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
    plugins: [
        require('@tailwindcss/custom-forms')
    ],
}
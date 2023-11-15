/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'register-background': "url('https://img.freepik.com/vecteurs-libre/illustration-concept-recrutement_23-2148621466.jpg?w=1380&t=st=1700040323~exp=1700040923~hmac=0de158363a26dd5d997acc6eb31a67bb8229ad8195f3bfb20163eeeed9a121f0')"
      },
    },
  },
  plugins: [
    require('tailwind-animatecss')
  ],
}

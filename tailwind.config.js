/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      'dark': {
         'primary' : '#793ef9',
         'primary-focus' : '#570df8',
         'primary-content' : '#ffffff',

         'secondary' : '#f000b8',
         'secondary-focus' : '#bd0091',
         'secondary-content' : '#ffffff',

         'accent' : '#37cdbe',
         'accent-focus' : '#2ba69a',
         'accent-content' : '#ffffff',

         'neutral' : '#2a2e37',
         'neutral-focus' : '#16181d',
         'neutral-content' : '#ffffff',

         'base-100' : '#3b424e',
         'base-200' : '#2a2e37',
         'base-300' : '#16181d',
         'base-content' : '#ebecf0',

         'info' : '#66c7ff',
         'success' : '#87cf3a',
         'warning' : '#e1d460',
         'error' : '#ff6b6b',

        '--rounded-box': '1rem',          
        '--rounded-btn': '0.5rem',        
        '--rounded-badge': '1.9rem',      

        '--animation-btn': '0.25s',       
        '--animation-input': '0.2s',       

        '--btn-text-case': 'uppercase',   
        '--navbar-padding': '0.5rem',      
        '--border-btn': '1px',            
      },
    },
  ],
  plugins: [require("daisyui")],
}


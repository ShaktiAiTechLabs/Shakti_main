/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        substrate: {
          950: '#060B05', // Deep cleanroom substrate with subtle PCB forest undertone
          900: '#0C140A', // Card substrate
          850: '#121D0E', // Elevated panels
          800: '#192614', // Outlines and borders
          750: '#22331C', // Hover borders
          700: '#2E4326', // Active interactive states
          600: '#415B35',
        },
        circuit: {
          gold: '#668F37',      // Authentic FCC Primary Brand Green
          copper: '#79A742',    // Lighter Green Trace
          bronze: '#4B6D24',    // Deep Green Tone
          amber: '#8DBF50',     // Vibrant Accent Green
          glow: 'rgba(102, 143, 55, 0.20)',
          red: '#DC2B1C',       // Authentic FCC Logo Red Accent
        },
        fcc: {
          green: '#668F37',     // Official FCC Green
          light: '#79A742',
          bright: '#8DBF50',
          dark: '#4B6D24',
          deep: '#344E18',
          red: '#DC2B1C',       // FCC Logo Accent Red
          charcoal: '#3E3E3E',
          surface: '#0C140A',
          tint: '#F4F7F1',
        },
        signal: {
          cyan: '#06B6D4',
          emerald: '#668F37',
          rose: '#DC2B1C',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Geist', 'Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(102, 143, 55, 0.12) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};


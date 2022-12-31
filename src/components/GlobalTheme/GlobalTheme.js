import { createGlobalStyle } from 'styled-components/macro';

const GlobalTheme = createGlobalStyle`
  :root {
    --color-white: hsl(0deg 0% 100%);
    
    --fragm-gray-hue: 220deg;
    
    --color-gray-100: hsl(185deg 5% 95%);
    --color-gray-300: hsl(190deg 5% 80%);
    --color-gray-500: hsl(196deg 4% 60%);
    --color-gray-700: hsl(var(--fragm-gray-hue) 5% 40%);
    --color-gray-900: hsl(var(--fragm-gray-hue) 3% 20%);
    --color-gray-transparent: hsl(var(--fragm-gray-hue) 6% 40% / 80%);
    
    --color-primary: hsl(340deg 65% 47%);
    --color-secondary: hsl(240deg 60% 63%);


    --weight-normal: 500;
    --weight-medium: 600;
    --weight-bold: 800;
  }
`;

export default GlobalTheme;

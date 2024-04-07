import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  // You can customize your theme here
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
// pages/_app.js
import '../src/pages/index.css'; // 确保路径正确

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

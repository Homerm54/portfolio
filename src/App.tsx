import GlobalStyle from 'assets/style/global';
import { dark } from 'assets/style/theme';
import { ThemeProvider } from 'assets/style/ThemeProvider';
import { Link } from 'components/ui';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      
      <Link href="portfolio/resume.pdf" target="_blank">
        Resume
      </Link>
    </ThemeProvider>
  );
}

export default App;

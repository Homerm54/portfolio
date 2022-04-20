import GlobalStyle from 'assets/style/global';
import { dark } from 'assets/style/theme';
import { ThemeProvider } from 'assets/style/ThemeProvider';
import { About } from 'components/About';
import { WorkList } from 'components/Work';

import 'assets/icons/faIcons';
import { Container } from 'components/ui';
import { ProjectList } from 'components/Projects';
import { Contact } from 'components/Contact';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      
      <Container maxWidth={1000} style={{ margin: 'auto' }}>
        <About />
        <WorkList />
        <ProjectList />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

export default App;

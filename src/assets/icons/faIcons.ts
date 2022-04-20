import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faCaretRight,
  faFolder,
  faFile,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

// Add the icons used by the whole application to the library, allowing to use globally
library.add(
  faFolder,
  faCaretRight,
  faGithub,
  faLinkedin,
  faFile,
  faEnvelope,
);

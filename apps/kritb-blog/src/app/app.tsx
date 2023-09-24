// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Typography } from '@react-blog-monorepo/ui';
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <Typography />
      <NxWelcome title="kritb-blog" />
    </div>
  );
}

export default App;

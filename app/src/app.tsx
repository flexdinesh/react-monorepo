import * as React from 'react';
import { Button } from '@design-system/button';
import { Layout } from './components/layout';

export function App() {
  React.useEffect(() => {
    const themeAttr = document.body.getAttribute(`data-theme`);
    if (!themeAttr) {
      throw new Error(
        'Theme name should be set as body attribute. Eg. <body data-theme="honey">'
      );
    }
  }, []);

  return (
    <Layout>
      <main className="flex items-center justify-center gap-4 p-4">
        <Button>default</Button>
        <Button appearance="primary">primary</Button>
        <Button appearance="secondary">secondary</Button>
      </main>
    </Layout>
  );
}

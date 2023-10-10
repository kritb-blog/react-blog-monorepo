import { Button, ButtonVariants } from '@react-blog-monorepo/ui';

export function App() {
  return (
    <div className="p-4">
      <Button variant={ButtonVariants.Outlined}>Test Button</Button>
      <Button variant={ButtonVariants.Solid}>Test Button</Button>
    </div>
  );
}

export default App;

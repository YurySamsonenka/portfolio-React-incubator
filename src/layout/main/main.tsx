import { Hero } from './hero/Hero';
import { Plans } from './plans/Plans';
import { Services } from './services/Services';

export const Main = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Plans />
    </main>
  );
};

import { useMemo, useState } from 'react';
import './styles/tokens.css';
import './styles/app.css';

const STEP_COUNT = 31;

export default function App() {
  const [selectedStep, setSelectedStep] = useState<number | null>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [melodySeed, setMelodySeed] = useState('0, 10, 18');

  const steps = useMemo(() => Array.from({ length: STEP_COUNT }, (_, i) => i), []);

  const parsedSeed = melodySeed
    .split(',')
    .map((v) => Number(v.trim()))
    .filter((v) => Number.isFinite(v) && v >= 0 && v < STEP_COUNT);

  return (
    <div className="app-shell">
      <header data-testid="region-header"><h1>Harmonia 31</h1><p>31-EDO / 1/4-comma meantone SATB workbench</p></header>
      <main className="main-grid">
        <section data-testid="region-notation">
          <h2>Notation Workspace</h2>
          <label htmlFor="seed">Melody step seed (0-30)</label>
          <input id="seed" value={melodySeed} onChange={(e) => setMelodySeed(e.target.value)} />
          <p>Parsed steps: {parsedSeed.length ? parsedSeed.join(', ') : 'none'}</p>
        </section>
        <aside data-testid="region-inspector">
          <h2>Inspector</h2>
          <p>Selected step: {selectedStep ?? 'none'}</p>
          <p>Transport: {isPlaying ? 'Playing' : 'Stopped'}</p>
        </aside>
      </main>
      <section data-testid="region-keyboard">
        <h2>31-EDO Keyboard Panel</h2>
        <div className="keyboard-grid">
          {steps.map((step) => (
            <button
              key={step}
              type="button"
              className={selectedStep === step ? 'key active' : 'key'}
              onClick={() => setSelectedStep(step)}
            >
              {step}
            </button>
          ))}
        </div>
      </section>
      <footer data-testid="region-transport">
        <button onClick={() => setIsPlaying(true)} aria-pressed={isPlaying}>Play</button>
        <button onClick={() => setIsPlaying(false)} aria-pressed={!isPlaying}>Stop</button>
      </footer>
    </div>
  );
}

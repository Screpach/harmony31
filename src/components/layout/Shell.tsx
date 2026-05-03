export function Shell() {
  return (
    <div className="app-shell">
      <header data-testid="region-header"><h1>Harmonia 31</h1><p>31-EDO / 1/4-comma meantone SATB workbench</p></header>
      <main className="main-grid">
        <section data-testid="region-notation"><h2>Notation Workspace</h2><p>Score editing and voice entry will be added in Prompt 03+.</p></section>
        <aside data-testid="region-inspector"><h2>Inspector</h2><p>Rule-linked findings and explanations appear here.</p></aside>
      </main>
      <section data-testid="region-keyboard"><h2>31-EDO Keyboard Panel</h2><p>Keyboard map interaction planned from requirements references.</p></section>
      <footer data-testid="region-transport"><button>Play</button><button>Stop</button></footer>
    </div>
  );
}

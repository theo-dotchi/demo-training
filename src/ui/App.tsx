import { useState } from 'react';

function App() {
  const [checklist, setChecklist] = useState([
    { id: 1, label: 'Add test workflow (manual)', done: false },
    { id: 2, label: 'Add Dependency Review workflow (Marketplace)', done: false },
    { id: 3, label: 'Open PR to trigger checks', done: false },
    { id: 4, label: 'Debug + rerun workflow', done: false },
    { id: 5, label: '(Bonus) Add Azure deployment workflow', done: false },
    { id: 6, label: '(Bonus) Push and watch automation', done: false },
  ]);

  const toggleItem = (id: number) => {
    setChecklist(prev => 
      prev.map(item => item.id === id ? { ...item, done: !item.done } : item)
    );
  };

  return (
    <div className="container">
      <header>
        <svg width="28" height="28" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <h1>GitHub Actions Demo</h1>
      </header>

      <section className="celebration">
        <span className="fireworks">✨</span>
        <h2>All checks passed, our app is live on Azure.</h2>
        <span className="fireworks">✨</span>
      </section>

      <ul className="checklist">
        {checklist.map(item => (
          <li key={item.id}>
            <label>
              <input 
                type="checkbox" 
                checked={item.done} 
                onChange={() => toggleItem(item.id)} 
              />
              {item.label}
            </label>
          </li>
        ))}
      </ul>

      <footer>
        Tip: Check each item as you complete it during the demo!
      </footer>
    </div>
  );
}

export default App;

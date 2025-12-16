import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../ui/App';

describe('App', () => {
  it('renders title and checklist', () => {
    render(<App />);
    expect(screen.getByText('GitHub Actions Live Demo')).toBeInTheDocument();
    expect(screen.getByText('Add test workflow (manual)')).toBeInTheDocument();
  });

  it('toggles checklist items', () => {
    render(<App />);
    const firstCheckbox = screen.getByLabelText('Add test workflow (manual)') as HTMLInputElement;
    expect(firstCheckbox.checked).toBe(false);
    fireEvent.click(firstCheckbox);
    expect(firstCheckbox.checked).toBe(true);
  });
});

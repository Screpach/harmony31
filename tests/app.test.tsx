import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { describe, it, expect } from 'vitest';

describe('App shell', () => {
  it('renders Harmonia 31 title', () => {
    render(<App />);
    expect(screen.getByText('Harmonia 31')).toBeInTheDocument();
  });
});

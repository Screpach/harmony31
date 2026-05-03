import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import App from '../src/App';
import { afterEach, describe, it, expect } from 'vitest';

afterEach(() => cleanup());

describe('App shell', () => {
  it('renders Harmonia 31 title', () => {
    render(<App />);
    expect(screen.getByText('Harmonia 31')).toBeInTheDocument();
  });

  it('updates inspector when transport and key are used', () => {
    render(<App />);
    const transport = screen.getByTestId('region-transport');
    fireEvent.click(within(transport).getByRole('button', { name: 'Play' }));
    fireEvent.click(screen.getByRole('button', { name: '7' }));
    expect(screen.getByText('Transport: Playing')).toBeInTheDocument();
    expect(screen.getByText('Selected step: 7')).toBeInTheDocument();
  });
});

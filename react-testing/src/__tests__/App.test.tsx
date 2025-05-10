import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App';

describe('App', () => {
   it('renders the App component', () => {
      render(<App />)
      const text = screen.getByText('vite + react', { exact: false })
      expect(text).toBeTruthy();
   })
})
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Button from '../../components/button';

describe('Button render suits', () => {
   test('render button on DOM', () => {
      render(<Button />);
      const button = screen.getByRole('button');
      expect(button).toBeTruthy();
   })
   test('User event on click fired', () => {
      render(<Button />);

      const button = screen.getByRole('button', { name: 'Click me' });
      button.click();
   })
})
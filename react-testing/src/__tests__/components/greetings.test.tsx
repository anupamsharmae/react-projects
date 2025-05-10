import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import Greeting from '../../components/greetings';

/**
 *
 * Three A's rule
 * - Arrange,
 * - Act,
 * - Assert
*/

describe('Greeting component suite', () => {
   test('render component on DOM', () => {
      // Arrange
      render(<Greeting />);

      // Act
      // nothing..


      const headingElem = screen.getByText('Hello world!');
      expect(headingElem).toBeTruthy();
   })
   test('Change button renders on the DOM', () => {
      // Arrange
      render(<Greeting />);

      // Act
      // nothing..

      // Assert
      const button = screen.getByRole('button');
      expect(button).toBeTruthy();
   })

   test('renders "good to see you" if button was not clicked', () => {
      // Arrange
      render(<Greeting />);

      // Act
      // nothing..

      // Assert
      const outputElem = screen.getByText('good to see you', { exact: false });
      expect(outputElem).toBeTruthy();
   })
   test('renders "Changed!" if button was clicked', async () => {
      // Arrange
      render(<Greeting />);

      // Act
      const button = screen.getByRole('button', { name: 'Change Text!' });
      await userEvent.click(button);


      // Assert
      const outputElem = screen.getByText('Changed!', { exact: false });
      expect(outputElem).toBeInTheDocument();
   })

   test('doesnot render "good to see you" if button was clicked', async () => {
      // Arrange
      render(<Greeting />);

      // Act
      const button = screen.getByRole('button', { name: 'Change Text!' });
      await userEvent.click(button);

      const outputElem = screen.queryByText('good to see you', { exact: false });
      expect(outputElem).toBeNull();
   })
})
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Async from "../../components/Async";

describe('Async Component', () => {
   test('render the component', async () => {
      render(<Async />);
      const listItemElems = await screen.findAllByRole('listitem');
      expect(listItemElems).not.toHaveLength(0);
   })
   test('render the Fetch mock', async () => {
      const mockFetch = vi.spyOn(window, 'fetch');
      mockFetch.mockResolvedValueOnce({
         ok: true,
         status: 200,
         json: async () => [{ id: 'p1', title: 'The first post' }]
      } as Response)

      render(<Async />);

      const listItemElems = await screen.findAllByRole('listitem');
      expect(listItemElems).not.toHaveLength(0);
   })

})
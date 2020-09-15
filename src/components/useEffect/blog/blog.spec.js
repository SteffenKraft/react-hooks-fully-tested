import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';

describe('test useEffect for blog resources with msw setupServer', () => {
  test('post blog resources', async () => {
    render(<Blog />);
    const buttonPosts = screen.getByRole('button', { name: /posts/i });
    const buttonUsers = screen.getByRole('button', { name: /users/i });
    const buttonComments = screen.getByRole('button', { name: /comments/i });
    expect(buttonPosts).toBeInTheDocument();
    expect(buttonUsers).toBeInTheDocument();
    expect(buttonComments).toBeInTheDocument();

    const postsParagraph = await screen.findByText(
      /"userId":1,"id":1,"title":"sunt aut facere repellat/i
    );
    expect(postsParagraph).toBeInTheDocument();

    userEvent.click(buttonUsers);
    const usersParagraph = await screen.findByText(
      /{"id":1,"name":"Leanne Graham","username":"Bret/i
    );
    expect(usersParagraph).toBeInTheDocument();

    userEvent.click(buttonComments);
    const commentsParagraph = await screen.findByText(
      /"postId":1,"id":1,"name":"id labore ex et quam laborum/i
    );
    expect(commentsParagraph).toBeInTheDocument();
  });
});

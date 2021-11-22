import { render, screen } from '@testing-library/react';
import SearchResult from './index';

test('renders search result column', () => {
  const resultData = {
    login: '',
    avatar_url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    starred_url: '',
    repos_url: ''
  };  
  render(<SearchResult resultData={resultData}/>);
  const element = screen.getAllByTestId('result-column')[0];
  expect(element).toBeInTheDocument();
});

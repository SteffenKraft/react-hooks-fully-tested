import { useLocalStorage } from './useLocalStorage';
import { renderHook } from '@testing-library/react-hooks';

test('test custom hook useLocalStorage', () => {
  const { result } = renderHook(() => useLocalStorage('name', 'paul'));
  expect(result.current[0]).toBe('paul');
});

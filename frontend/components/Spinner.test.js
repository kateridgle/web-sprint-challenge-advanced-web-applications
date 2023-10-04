// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import Spinner from './Spinner'
import {render, screen, waitFor} from '@testing-library/react';

test('sanity', () => {
  expect(false).toBe(false)
})

test('test that spinner renders', () => {
  render(<Spinner />);
});
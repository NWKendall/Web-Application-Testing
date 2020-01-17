import React from 'react';
import { render } from '@testing-library/react';
import Display from "./Display";

describe(`Display tests:`, () => {
  test(`renders component`, () => {
    render(<Display />)
  })
})



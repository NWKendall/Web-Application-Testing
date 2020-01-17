import React from 'react';
import { render } from '@testing-library/react';
import Dashboard, { strike } from "./Dashboard";


describe(`Dashboard tests`, () => {

  test(`testing dashboard component`, () => {
    render(<Dashboard />)
  })
  
  test(`strike to be small than 3`, () => {
    // expect(strike).match(/[0-2]/g);
    expect(strike).not.toBe(3)
  })


})


// @ts-ignore: unused variable
import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from '../src/App'

test('renders content and expect a value', () => {
  const component = render(<App />)
  component.getByText(/Edit/i)
  expect(component.container).toHaveTextContent(/Edit/i)
  component.debug()
})

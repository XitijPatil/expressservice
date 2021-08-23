import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login  } from '.';


describe('Login ', ()=>{
    test('renders Customer Login Page which should contain username and password field', () => {
        const component = render(<Login />);
        const username = component.getByText("Username");
        expect(username).toBeInTheDocument();

        const password = component.getByText("Password");
        expect(password).toBeInTheDocument();
    });

    test('username and password field should have label', () => {
        const {getByText} = render(<Login />);
        const username = getByText("Username");
        expect(username).toBeInTheDocument();
        // expect(username.getAttribute('name')).toBe('username');
    });
})

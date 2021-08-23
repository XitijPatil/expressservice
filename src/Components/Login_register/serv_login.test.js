import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Splogin } from '.';

configure({ adapter: new Adapter() });

describe("Service Provider Login page must have following fields",()=>{
    const wrapper = shallow(<Splogin />)
    test("Title of the form",()=>{
        expect(wrapper.find(".header").text()).toBe("Service Provider Login")
    })

    test("Form must contain Username of Service Provider Label",()=>{
        expect(wrapper.find("label[htmlFor='username']").text()).toBe("Username")
    })

    test("Form must contain Password of Service Provider Label",()=>{
        expect(wrapper.find("label[htmlFor='password']").text()).toBe("Password")
    })

    test("Form must contain Login Button",()=>{
        expect(wrapper.find(".btn1").text()).toBe("Login")
    })
})

describe("Input Fields in the Service Provider Login Form ",()=>{
    const wrapper = shallow(<Splogin />)
    test('username input field check',()=>{
        expect(wrapper.find('input[name="username"]').text()).toBe("")
        expect(wrapper.state('fields{username}')).toEqual(undefined);
    })

    test('password input field check',()=>{
        expect(wrapper.find('input[name="password"]').text()).toBe("")
        expect(wrapper.state('fields{password}')).toEqual(undefined);
    })
})

describe("Input Fields Acceptance ",()=>{
    const wrapper = shallow(<Splogin />)
    test('username and password input field acceptance',()=>{
        wrapper.find('input[name="username"]')
        .simulate('change', {target: {value: 'IshwarM'}});
        
        wrapper.find('input[name="password"]')
        .simulate('change', {target: {value: 'Ishwar@123'}});         

        // wrapper.find("form").simulate("submit")
        // expect(submitLoginForm).toHaveBeenCalled();
        
    })

})

describe("Snapshot of the Service Provider Login Component",()=>{
    it('Matches the snapshot',()=>{
        const tree = renderer.create(<Splogin/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})
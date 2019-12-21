import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LogIn from '../../containers/LogIn/LogIn';
import configureStore from "../../store";

const store = configureStore();

describe('Test case for testing login', () => {
    let wrapper;
    test('username check', () => {
        wrapper = shallow(<LogIn store={store} />);
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'reactnewbie' } });
        expect(wrapper.state('username')).toEqual('reactnewbie');
    })
    it('password check', () => {
        wrapper = shallow(<LogIn store={store} />);
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'reactnewbie123' } });
        expect(wrapper.state('password')).toEqual('reactnewbie123');
    })
    // it('login check with right data', () => {
    //     wrapper = shallow(<LogIn />);
    //     wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'minh150555' } });
    //     wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'Minh@123456' } });
    //     wrapper.find('button.btn--login').simulate('click');
    //     expect(wrapper.state('isLogined')).toBe(true);
    // })
    // it('login check with wrong data', () => {
    //     wrapper = shallow(<LogIn />);
    //     wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'krishankantsinghal' } });
    //     wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'krishankant1234' } });
    //     wrapper.find('button.btn--login').simulate('click');
    //     expect(wrapper.state('isLogined')).toBe(false);
    // })
})
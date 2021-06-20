import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';


import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Contact dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});
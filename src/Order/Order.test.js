import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

configure({ adapter: new Adapter() });

describe('Order component', () => {
  it('only date and shop here', () => {
    const order = {
      shop: 'Adidas',
      date: '939686400'
    }
    const wrapper = shallow(<Order order={order}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('only date and shop here', () => {
    let order = {
      shop: 'Adidas',
      date: '939686400',
      items: [{
        snippets: 1,
      }]
    }
    const wrapper = shallow(<Order order={order}/>);
    order.items = [
      {
        snippets: 1
      },
      {
        socks: 2
      },
    ];
    wrapper.setProps({
      order: order 
    })
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

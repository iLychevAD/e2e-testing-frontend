import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

import { UserListComponent } from '../src/components/UsersList';

describe('<UserListComponent/>', () => {
  it('should render nothing if it is not fetched', () => {
    const wrapper = shallow(<UserListComponent users={{ state: 'fetching' }}/>)
    expect(wrapper.text()).to.contain('IdNameCreated')
  })

  it('should render two users', () => {
    const value = [
      { _id: 1, name: 'docker', created_at: '2017-01-01' },
      { _id: 2, name: 'dockerCompose', created_at: '2017-01-02' }
    ]
    const wrapper = shallow(<UserListComponent users={{ state: 'fetched', value }} />)
    expect(wrapper.contains(<td>docker</td>)).to.equal(true)
    expect(wrapper.contains(<td>dockerCompose</td>)).to.equal(true)
  })
})


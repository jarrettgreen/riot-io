import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import DashboardList from '../../pages/Dashboard.list';

const dashboards = [
  { title: 'First Dashbaord', slug: 'first-dashboard', _id: 'f34gb2bh24b24b2' },
  { title: 'Second Dashboard', slug: 'second-dashboard', _id: 'f34gb2bh24b24b3'},
];

test('renders the list', t => {
  const wrapper = shallow(
    <DashboardList dashboards={dashboards} />
  );

  t.is(wrapper.find('DashboardListItem').length, 2);
});

import test from 'ava'
import React from 'react'
import sinon from 'sinon';
import { mount, shallow } from 'enzyme'
import DashboardListItem from '../../components/DashboardListItem'

const dashboard = { title: 'Test Dashboard', dashboardWidgets: [] }
const props = {
  dashboard,
  deleteDashboard: () => {}
}

test('has correct props', t => {
  const wrapper = mount(
    <DashboardListItem {...props} />
  );
  t.deepEqual(wrapper.prop('dashboard'), props.dashboard);
    t.is(wrapper.prop('deleteDashboard'), props.deleteDashboard);
});


test('calls deleteDashboard', t => {
  const deleteDashboard = sinon.spy();
  const wrapper = shallow(
    <DashboardListItem dashboard={dashboard} deleteDashboard={deleteDashboard} />
  );

  wrapper.find('a.delete-dashboard').first().simulate('click');
  t.truthy(deleteDashboard.calledOnce);
});

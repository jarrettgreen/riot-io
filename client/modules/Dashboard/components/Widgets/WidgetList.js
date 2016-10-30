import React, { component } from 'react'
import SwitchWidget from './SwitchWidget'
// import Widget from './Widget'

function WidgetList(props) {
  return (
    <div>
      {
        props.widgets.map(widget => (
          <widget.type
            key={widget._id}
          />
        ))
      }
    </div>
  );
}

export default WidgetList;

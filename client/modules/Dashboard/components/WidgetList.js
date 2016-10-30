import React, { component } from 'react'
import Switch from './Widgets/SwitchWidget'
// import Widget from './Widget'

function WidgetList(props) {
  return (
    <div>
      {
        props.widgets.map(widget => (
          < widget.type
            widget={widget}
            key={widget._id}
          />
        ))
      }
    </div>
  );
}

export default WidgetList;

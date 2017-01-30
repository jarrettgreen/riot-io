import React from 'react'
import SwitchWidget from './components/SwitchWidget'
// import Widget from './Widget'

function WidgetList (props) {
  return (
    <div>
      {
        props.widgets.map(widget => {
          switch (widget.type) {
            case 'SwitchWidget': return <SwitchWidget widget={widget} key={widget._id} />
          }
        })
      }
    </div>
  )
}

export default WidgetList

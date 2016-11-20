import DashboardWidget from '../models/dashboardWidget.model'
import Dashboard from '../models/Dashboard.model'
import sanitizeHtml from 'sanitize-html'
// import slug from 'limax'
// import cuid from 'cuid';

// Index
export function getDashboardWidgets (req, res) {
  DashboardWidget.find().sort({created: 'desc'}).exec((err, dashboards) => {
    if (err) { res.status(500).send(err) }
    res.json(dashboards)
  })
}

// Create
export function addDashboardWidget (req, res) {
  const newDashboardWidget = new DashboardWidget(req.body.dashboardWidget)
  newDashboardWidget.title = sanitizeHtml(newDashboardWidget.title)

  Dashboard.findOne({ _id: req.params.dashboard_id }).exec((err, dashboard) => {
    if (err) {
      res.status(500).send(err)
    } else {
      dashboard.dashboardWidgets.push(newDashboardWidget)
      dashboard.save((err, saved) => {
        if (err) { res.status(500).send(err) }
        res.json({ dashboardWidget: newDashboardWidget })
      })
    }
  })
}

// Delete

export function deleteDashboardWidget (req, res) {
  DashboardWidget.findOne({ _id: req.params.id }).exec((err, dashboard) => {
    if (err) {
      res.status(500).send(err)
    }

    dashboard.remove(() => {
      res.status(200).end()
    })
  })
}

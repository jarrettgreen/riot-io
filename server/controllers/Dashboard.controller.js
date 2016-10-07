import Dashboard from '../models/Dashboard.model';
import sanitizeHtml from 'sanitize-html';
import slug from 'limax';
// import cuid from 'cuid';


// Index
export function getDashboards(req, res) {
  Dashboard.find().sort({ created: 'desc'}).exec((err, dashboards) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(dashboards);
  });
}

// Create
export function addDashboard(req, res) {
  if (!req.body.dashboard.title) {
    res.status(403).end();
  }
  const newDashboard = new Dashboard(req.body.dashboard);
  // Let's sanitize inputs
  newDashboard.title = sanitizeHtml(newDashboard.title);
  newDashboard.slug = slug(newDashboard.title.toLowerCase(), { lowercase: true });
  // newDashboard.cuid = cuid();
  newDashboard.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

// Show

export function getDashboard(req, res) {
  Dashboard.findOne({ _id: req.params.id }).exec((err, dashboard) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ dashboard });
  });
}

// Delete

export function deleteDashboard(req, res) {
  Dashboard.findOne({ _id: req.params.id }).exec((err, dashboard) => {
    if (err) {
      res.status(500).send(err);
    }

    dashboard.remove(() => {
      res.status(200).end();
    });
  });
}

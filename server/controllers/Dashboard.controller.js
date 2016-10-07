import Dashboard from '../models/Dashboard.model';
import sanitizeHtml from 'sanitize-html';
import slug from 'limax';
import cuid from 'cuid';

export function getDashboards(req, res) {
  Dashboard.find().sort({ created: 'desc'}).exec((err, dashboards) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(dashboards);
  });
}


export function addDashboard(req, res) {
  if (!req.body.dashboard.title) {
    res.status(403).end();
  }
  const newDashboard = new Dashboard(req.body.dashboard);
  // Let's sanitize inputs
  newDashboard.title = sanitizeHtml(newDashboard.title);
  newDashboard.slug = slug(newDashboard.title.toLowerCase(), { lowercase: true });
  newDashboard.cuid = cuid();
  newDashboard.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

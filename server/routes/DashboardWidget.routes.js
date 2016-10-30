import { Router } from 'express';
import * as DashboardWidgetController from '../controllers/DashboardWidget.controller';
const router = new Router();

// Get all Dashboards
// router.route('/dashboards').get(DashboardWidgetController.getDashboards);

// Add a new Dashboard
router.route('/dashboards/:dashboard_id/widgets').post(DashboardWidgetController.addDashboardWidget);

// Get One
// router.route('/dashboards/:id').get(DashboardWidgetController.getDashboard);

// Delete
// router.route('/dashboards/:id').delete(DashboardWidgetController.deleteDashboard);


module.exports = router;

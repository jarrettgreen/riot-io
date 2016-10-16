import { Router } from 'express';
import * as DashboardController from '../controllers/Dashboard.controller';
const router = new Router();

// Get all Dashboards
router.route('/dashboards').get(DashboardController.getDashboards);
// Add a new Dashboard
router.route('/dashboards').post(DashboardController.addDashboard);

// Get One
router.route('/dashboards/:id').get(DashboardController.getDashboard);

// Delete

router.route('/dashboards/:id').delete(DashboardController.deleteDashboard);


module.exports = router;

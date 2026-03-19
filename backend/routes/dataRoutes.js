const express = require('express');
const router = express.Router();
const {
  getRecords,
  setRecord,
  updateRecord,
  deleteRecord,
} = require('../controllers/dataController');

const { protect } = require('../middlewares/authMiddleware');

router.route('/').get(protect, getRecords).post(protect, setRecord);
router.route('/:id').put(protect, updateRecord).delete(protect, deleteRecord);

module.exports = router;

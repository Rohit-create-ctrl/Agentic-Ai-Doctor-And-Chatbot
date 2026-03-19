const Record = require('../models/Record');

// @desc    Get records
// @route   GET /api/data
// @access  Private
const getRecords = async (req, res, next) => {
  try {
    const records = await Record.find({ user: req.user.id });
    res.status(200).json(records);
  } catch (error) {
    next(error);
  }
};

// @desc    Create record
// @route   POST /api/data
// @access  Private
const setRecord = async (req, res, next) => {
  try {
    if (!req.body.title || !req.body.description) {
      res.status(400);
      throw new Error('Please add a text field');
    }

    const record = await Record.create({
      title: req.body.title,
      description: req.body.description,
      user: req.user.id,
    });

    res.status(200).json(record);
  } catch (error) {
    next(error);
  }
};

// @desc    Update record
// @route   PUT /api/data/:id
// @access  Private
const updateRecord = async (req, res, next) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record) {
      res.status(400);
      throw new Error('Record not found');
    }

    // Check for user
    if (!req.user) {
      res.status(401);
      throw new Error('User not found');
    }

    // Make sure the logged in user matches the record user
    if (record.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('User not authorized');
    }

    const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedRecord);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete record
// @route   DELETE /api/data/:id
// @access  Private
const deleteRecord = async (req, res, next) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record) {
      res.status(400);
      throw new Error('Record not found');
    }

    // Check for user
    if (!req.user) {
      res.status(401);
      throw new Error('User not found');
    }

    // Make sure the logged in user matches the record user
    if (record.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('User not authorized');
    }

    await record.deleteOne();

    res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRecords,
  setRecord,
  updateRecord,
  deleteRecord,
};

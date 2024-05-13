import asyncHandler from '../../backend/middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    register user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  res.send('registerUser');
});

// @desc    logou user & clear cookie
// @route   POST /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async (req, res) => {
  res.send('logoutUser');
});

// @desc    Get user profile
// @route   get /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send('getUserProfile');
});

// @desc    Update user profile
// @route   get /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('updateUserProfile');
});

// @desc    Get users
// @route   get /api/users
// @access  Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send('getUsers');
});

// @desc    Get user by ID
// @route   get /api/users/:id
// @access  Private/Admin

const getUserById = asyncHandler(async (req, res) => {
  res.send('getUserById');
});

// @desc    update user
// @route   put /api/users/:id
// @access  Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  res.send('updateUser');
});

// @desc    delete user
// @route   delete /api/users/:id
// @access  Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send('deleteUser');
});

export {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
};

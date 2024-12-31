/** @format */
const handleRequest = require("../utils/request");
const User = require("../models/users-model");

// Create a MongoDB user
const postUser = handleRequest(async (body) => {
  const newUser = new User(body);
  return await newUser.save();
});

// Get all MongoDB users
const getUsers = handleRequest(async () => {
  const users = await User.find();
  return users;
});

// Get a MongoDB user by ID
const getUserById = handleRequest(async (body, id) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return user;
});

// Update a MongoDB user by ID
const putUserById = handleRequest(async (body, id) => {
  const user = await User.findByIdAndUpdate(id, body, {
    new: true,
  });
  if (!user) throw new Error("User not found");
  return user;
});

// Delete a MongoDB user by ID
const deleteUserById = handleRequest(async (body, id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error("User not found");
  return user;
});

module.exports = {
  postUser,
  getUsers,
  getUserById,
  putUserById,
  deleteUserById,
};
const User = require("../Model/user");

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const { id: userId, role } = req.user;

    if (role !== "admin" && id !== userId) {
      return res.status(403).json({
        message: "Access denied. You can only update your own profile.",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res
      .status(200)
      .json({ message: "Profile updated successfully.", user: updatedUser });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the profile.",
      error,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId, role } = req.user;

    if (role !== "admin" && id !== userId) {
      return res.status(403).json({
        message: "Access denied. You can only view your own profile.",
      });
    }

    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the profile.",
      error,
    });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId, role } = req.user;

    if (role !== "admin" && id !== userId) {
      return res.status(403).json({
        message: "Access denied. You can only delete your own profile.",
      });
    }

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "Profile deleted successfully." });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the profile.",
      error,
    });
  }
};

const UserController = {
  updateProfile,
  getProfile,
  deleteProfile,
};

module.exports = UserController;

const logout = (req, res) => {
  req.logout();
  res.json([]);
};

module.exports = { logout };

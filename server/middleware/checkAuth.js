const checkAuth = (req, res, next) => {
  const userId = req.session?.user?.id
  if (userId) {
    return next()
  }
  return res.sendStatus(418)
}

module.exports = {
  checkAuth,
}

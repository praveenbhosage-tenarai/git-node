module.exports = {
  getdefault(req, res) {
    res.send('Hello from git-node');
  },
  aboutus(req, res) {
    res.send('About us page');
  },
  addemployee(req, res) {
    // minimal implementation: echo back posted data
    res.json({ added: true, body: req.body });
  }
};

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/Employees,
  { useUnifiedTopology: true },
  { useNewUrlParser: true}
);
const empSchema = new mongoose.Schema({
  empName: String,
  empPass: String,
  created: {type: Date, default: Date.now }
},{
    collection:'FTEmployees'
});
// 
module.exports = mongoose.model('Employees', empSchema);
const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  async home(req, res, next) {
    // res.render("home");
    //youtube
    // try {
    //   const data = await Course.find({});
    //   res.json(data);
    // } catch (err) {
    //   res.status(400).json({ error: err });
    // }
    //promise
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     res.status(400).json({ error: "Error" });
    //   }
    // });
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

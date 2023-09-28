const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  show(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/show", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }
}

module.exports = new CourseController();

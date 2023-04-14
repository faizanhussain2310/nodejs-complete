const fs = require("fs");

const fileDelete = (filepath) => {
  fs.unlink(filepath, (err) => {
    if (err) {
      throw err;
    }
  });
};

exports.fileDelete = fileDelete;

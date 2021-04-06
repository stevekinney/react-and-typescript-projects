const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const walk = function (dir, done) {
  let results = [];

  fs.readdir(dir, function (error, list) {
    if (error) return done(error);

    let pending = list.length;

    if (!pending) return done(null, results);

    list.forEach(function (file) {
      file = path.resolve(dir, file);

      fs.stat(file, function (error, stat) {
        if (file.match('node_modules')) {
          if (!--pending) done(null, results);
        } else if (stat && stat.isDirectory()) {
          walk(file, function (err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);

          if (file.match('package.json')) {
            exec('npm install', (error, stdout) => {
              if (error) return console.error(error);
              console.log('Installed', file);
            });
          }

          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk('./', (err, results) => {
  // console.error(err);
  // console.log(results);
});

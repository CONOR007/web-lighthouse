const express = require('express');
const app = express();
const fs = require('fs');
// TODO 
// const compression = require('compression')
// app.use(compression()) // 开启gzip压缩

app.use(express.static('build'));

const listener = app.listen(process.env.PORT || 1234, function () {
  console.log(`Listening on port ${listener.address().port}`);
});

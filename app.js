const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 将 public 目录下的文件作为静态资源暴露
app.use(express.static(path.join(__dirname, 'public')));

// （可选）如果想给目录添加文件列表浏览功能：
// const serveIndex = require('serve-index');
// app.use('/public', express.static('public'), serveIndex('public', { icons: true }));

app.listen(PORT, () => {
  console.log(`静态资源服务器已启动，访问 → http://localhost:${PORT}/`);
});

/* 
слушать порт
работать с запросами (принимать, обрабатывать)
работать с БД
 */
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`APP is started on ${PORT}`);
});
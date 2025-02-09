import { createServer } from "./server";

const port = process.env.PORT || 3005;
const server = createServer();

server.listen(port, () => {
  console.log('hello from the ', port)
});

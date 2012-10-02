This is my first project with node.js and socket.io. It's a shared web page between multiple users, every user can move his mouse and see other user's mice moving.

Checkout the [demo site](http://mice.js) to see it in action.

### To setup

npm install

### To execute

- Run 'node app.js'
- Connect to 'http://localhost:3000' with two or more browser's tabs or devices

### Stress test

I managed to connect more than 100 concurrent client with my Mac 2.3GHz i5 with a little of 45 MB of memory consumption for the single instance node server.

If you want to stress test open a new terminal and just run:
- node client.js 100

### Stack

- node.js with express
- socke.io

### Node Modules

-  jade
-  express
-  socket.io

### Other Javascript Framework

- jquery

### Features

- Track current number of user connected
- Works with touch screen devices (iPhone, iPad, etc.)

### Contribute! 

Any feedback is most welcome ;)

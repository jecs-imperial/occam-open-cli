'use strict';

var action = require('../action'),
    usernameCallback = require('../callback/username'),
    passwordCallback = require('../callback/password');

function login(username) {
  var password = null,
      context = {
    username: username,
    password: password
  },
      uri = 'login';

  action([usernameCallback, passwordCallback], context, uri);
}

module.exports = login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9hY3Rpb24vbG9naW4uanMiXSwibmFtZXMiOlsiYWN0aW9uIiwicmVxdWlyZSIsInVzZXJuYW1lQ2FsbGJhY2siLCJwYXNzd29yZENhbGxiYWNrIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29udGV4dCIsInVyaSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLHNCQUFSLENBRHpCO0FBQUEsSUFFTUUsbUJBQW1CRixRQUFRLHNCQUFSLENBRnpCOztBQUlBLFNBQVNHLEtBQVQsQ0FBZUMsUUFBZixFQUF5QjtBQUN2QixNQUFNQyxXQUFXLElBQWpCO0FBQUEsTUFDTUMsVUFBVTtBQUNSRixjQUFVQSxRQURGO0FBRVJDLGNBQVVBO0FBRkYsR0FEaEI7QUFBQSxNQUtNRSxNQUFNLE9BTFo7O0FBT0FSLFNBQU8sQ0FDTEUsZ0JBREssRUFFTEMsZ0JBRkssQ0FBUCxFQUdHSSxPQUhILEVBR1lDLEdBSFo7QUFJRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQk4sS0FBakIiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFjdGlvbiA9IHJlcXVpcmUoJy4uL2FjdGlvbicpLFxuICAgICAgdXNlcm5hbWVDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2NhbGxiYWNrL3VzZXJuYW1lJyksXG4gICAgICBwYXNzd29yZENhbGxiYWNrID0gcmVxdWlyZSgnLi4vY2FsbGJhY2svcGFzc3dvcmQnKTtcblxuZnVuY3Rpb24gbG9naW4odXNlcm5hbWUpIHtcbiAgY29uc3QgcGFzc3dvcmQgPSBudWxsLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfSxcbiAgICAgICAgdXJpID0gJ2xvZ2luJztcblxuICBhY3Rpb24oW1xuICAgIHVzZXJuYW1lQ2FsbGJhY2ssXG4gICAgcGFzc3dvcmRDYWxsYmFja1xuICBdLCBjb250ZXh0LCB1cmkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2luO1xuIl19
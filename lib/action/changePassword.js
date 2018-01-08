'use strict';

var action = require('../action'),
    prompt = require('../prompt'),
    validate = require('../validate'),
    messages = require('../messages');

var validateUsername = validate.validateUsername,
    validatePassword = validate.validatePassword,
    invalidUsernameMessage = messages.invalidUsernameMessage,
    invalidPasswordMessage = messages.invalidPasswordMessage;


function changePassword(username) {
  var oldPassword = null,
      newPassword = null,
      context = {
    username: username,
    oldPassword: oldPassword,
    newPassword: newPassword
  },
      uri = 'changePassword';

  action([usernameCallback, passwordCallback], context, uri);
}

module.exports = changePassword;

function usernameCallback(next, done, context) {
  var username = context.username;


  if (username !== null) {
    var valid = validateUsername(username);

    if (valid) {
      next();
    }
  }

  var description = 'Username: ',
      validationFunction = validateUsername,
      errorMessage = invalidUsernameMessage,
      attempts = 3,
      hidden = false,
      options = {
    description: description,
    validationFunction: validationFunction,
    errorMessage: errorMessage,
    attempts: attempts,
    hidden: hidden
  };

  prompt(options, function (username) {
    var valid = username !== null;

    if (valid) {
      Object.assign(context, {
        username: username
      });

      next();
    } else {
      done();
    }
  });
}

function passwordCallback(next, done, context) {
  var description = 'Password: ',
      validationFunction = validatePassword,
      errorMessage = invalidPasswordMessage,
      attempts = 3,
      hidden = true,
      options = {
    description: description,
    validationFunction: validationFunction,
    errorMessage: errorMessage,
    attempts: attempts,
    hidden: hidden
  };

  prompt(options, function (password) {
    var valid = password !== null;

    if (valid) {
      Object.assign(context, {
        password: password
      });

      next();
    } else {
      done();
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9hY3Rpb24vY2hhbmdlUGFzc3dvcmQuanMiXSwibmFtZXMiOlsiYWN0aW9uIiwicmVxdWlyZSIsInByb21wdCIsInZhbGlkYXRlIiwibWVzc2FnZXMiLCJ2YWxpZGF0ZVVzZXJuYW1lIiwidmFsaWRhdGVQYXNzd29yZCIsImludmFsaWRVc2VybmFtZU1lc3NhZ2UiLCJpbnZhbGlkUGFzc3dvcmRNZXNzYWdlIiwiY2hhbmdlUGFzc3dvcmQiLCJ1c2VybmFtZSIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb250ZXh0IiwidXJpIiwidXNlcm5hbWVDYWxsYmFjayIsInBhc3N3b3JkQ2FsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIiwibmV4dCIsImRvbmUiLCJ2YWxpZCIsImRlc2NyaXB0aW9uIiwidmFsaWRhdGlvbkZ1bmN0aW9uIiwiZXJyb3JNZXNzYWdlIiwiYXR0ZW1wdHMiLCJoaWRkZW4iLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxXQUFSLENBRGY7QUFBQSxJQUVNRSxXQUFXRixRQUFRLGFBQVIsQ0FGakI7QUFBQSxJQUdNRyxXQUFXSCxRQUFRLGFBQVIsQ0FIakI7O0lBS1FJLGdCLEdBQXVDRixRLENBQXZDRSxnQjtJQUFrQkMsZ0IsR0FBcUJILFEsQ0FBckJHLGdCO0lBQ2xCQyxzQixHQUFtREgsUSxDQUFuREcsc0I7SUFBd0JDLHNCLEdBQTJCSixRLENBQTNCSSxzQjs7O0FBRWhDLFNBQVNDLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0FBQ2hDLE1BQU1DLGNBQWMsSUFBcEI7QUFBQSxNQUNNQyxjQUFjLElBRHBCO0FBQUEsTUFFTUMsVUFBVTtBQUNSSCxjQUFVQSxRQURGO0FBRVJDLGlCQUFhQSxXQUZMO0FBR1JDLGlCQUFhQTtBQUhMLEdBRmhCO0FBQUEsTUFPTUUsTUFBTSxnQkFQWjs7QUFTQWQsU0FBTyxDQUNMZSxnQkFESyxFQUVMQyxnQkFGSyxDQUFQLEVBR0dILE9BSEgsRUFHWUMsR0FIWjtBQUlEOztBQUVERyxPQUFPQyxPQUFQLEdBQWlCVCxjQUFqQjs7QUFFQSxTQUFTTSxnQkFBVCxDQUEwQkksSUFBMUIsRUFBZ0NDLElBQWhDLEVBQXNDUCxPQUF0QyxFQUErQztBQUFBLE1BQ3JDSCxRQURxQyxHQUN4QkcsT0FEd0IsQ0FDckNILFFBRHFDOzs7QUFHN0MsTUFBSUEsYUFBYSxJQUFqQixFQUF1QjtBQUNyQixRQUFNVyxRQUFRaEIsaUJBQWlCSyxRQUFqQixDQUFkOztBQUVBLFFBQUlXLEtBQUosRUFBVztBQUNURjtBQUNEO0FBQ0Y7O0FBRUQsTUFBTUcsY0FBYyxZQUFwQjtBQUFBLE1BQ01DLHFCQUFxQmxCLGdCQUQzQjtBQUFBLE1BRU1tQixlQUFlakIsc0JBRnJCO0FBQUEsTUFHTWtCLFdBQVcsQ0FIakI7QUFBQSxNQUlNQyxTQUFTLEtBSmY7QUFBQSxNQUtNQyxVQUFVO0FBQ1JMLGlCQUFhQSxXQURMO0FBRVJDLHdCQUFvQkEsa0JBRlo7QUFHUkMsa0JBQWNBLFlBSE47QUFJUkMsY0FBVUEsUUFKRjtBQUtSQyxZQUFRQTtBQUxBLEdBTGhCOztBQWFBeEIsU0FBT3lCLE9BQVAsRUFBZ0IsVUFBU2pCLFFBQVQsRUFBbUI7QUFDakMsUUFBTVcsUUFBU1gsYUFBYSxJQUE1Qjs7QUFFQSxRQUFJVyxLQUFKLEVBQVc7QUFDVE8sYUFBT0MsTUFBUCxDQUFjaEIsT0FBZCxFQUF1QjtBQUNyQkgsa0JBQVVBO0FBRFcsT0FBdkI7O0FBSUFTO0FBQ0QsS0FORCxNQU1PO0FBQ0xDO0FBQ0Q7QUFDRixHQVpEO0FBYUQ7O0FBRUQsU0FBU0osZ0JBQVQsQ0FBMEJHLElBQTFCLEVBQWdDQyxJQUFoQyxFQUFzQ1AsT0FBdEMsRUFBK0M7QUFDN0MsTUFBTVMsY0FBYyxZQUFwQjtBQUFBLE1BQ01DLHFCQUFxQmpCLGdCQUQzQjtBQUFBLE1BRU1rQixlQUFlaEIsc0JBRnJCO0FBQUEsTUFHTWlCLFdBQVcsQ0FIakI7QUFBQSxNQUlNQyxTQUFTLElBSmY7QUFBQSxNQUtNQyxVQUFVO0FBQ1JMLGlCQUFhQSxXQURMO0FBRVJDLHdCQUFvQkEsa0JBRlo7QUFHUkMsa0JBQWNBLFlBSE47QUFJUkMsY0FBVUEsUUFKRjtBQUtSQyxZQUFRQTtBQUxBLEdBTGhCOztBQWFBeEIsU0FBT3lCLE9BQVAsRUFBZ0IsVUFBU0csUUFBVCxFQUFtQjtBQUNqQyxRQUFNVCxRQUFTUyxhQUFhLElBQTVCOztBQUVBLFFBQUlULEtBQUosRUFBVztBQUNUTyxhQUFPQyxNQUFQLENBQWNoQixPQUFkLEVBQXVCO0FBQ3JCaUIsa0JBQVVBO0FBRFcsT0FBdkI7O0FBSUFYO0FBQ0QsS0FORCxNQU1PO0FBQ0xDO0FBQ0Q7QUFDRixHQVpEO0FBYUQiLCJmaWxlIjoiY2hhbmdlUGFzc3dvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFjdGlvbiA9IHJlcXVpcmUoJy4uL2FjdGlvbicpLFxuICAgICAgcHJvbXB0ID0gcmVxdWlyZSgnLi4vcHJvbXB0JyksXG4gICAgICB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRlJyksXG4gICAgICBtZXNzYWdlcyA9IHJlcXVpcmUoJy4uL21lc3NhZ2VzJyk7XG5cbmNvbnN0IHsgdmFsaWRhdGVVc2VybmFtZSwgdmFsaWRhdGVQYXNzd29yZCB9ID0gdmFsaWRhdGUsXG4gICAgICB7IGludmFsaWRVc2VybmFtZU1lc3NhZ2UsIGludmFsaWRQYXNzd29yZE1lc3NhZ2UgfSA9IG1lc3NhZ2VzO1xuXG5mdW5jdGlvbiBjaGFuZ2VQYXNzd29yZCh1c2VybmFtZSkge1xuICBjb25zdCBvbGRQYXNzd29yZCA9IG51bGwsXG4gICAgICAgIG5ld1Bhc3N3b3JkID0gbnVsbCxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgb2xkUGFzc3dvcmQ6IG9sZFBhc3N3b3JkLFxuICAgICAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZFxuICAgICAgICB9LFxuICAgICAgICB1cmkgPSAnY2hhbmdlUGFzc3dvcmQnO1xuXG4gIGFjdGlvbihbXG4gICAgdXNlcm5hbWVDYWxsYmFjayxcbiAgICBwYXNzd29yZENhbGxiYWNrXG4gIF0sIGNvbnRleHQsIHVyaSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhbmdlUGFzc3dvcmQ7XG5cbmZ1bmN0aW9uIHVzZXJuYW1lQ2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCkge1xuICBjb25zdCB7IHVzZXJuYW1lIH0gPSBjb250ZXh0O1xuXG4gIGlmICh1c2VybmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICdVc2VybmFtZTogJyxcbiAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uID0gdmFsaWRhdGVVc2VybmFtZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gaW52YWxpZFVzZXJuYW1lTWVzc2FnZSxcbiAgICAgICAgYXR0ZW1wdHMgPSAzLFxuICAgICAgICBoaWRkZW4gPSBmYWxzZSxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uOiB2YWxpZGF0aW9uRnVuY3Rpb24sXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgYXR0ZW1wdHM6IGF0dGVtcHRzLFxuICAgICAgICAgIGhpZGRlbjogaGlkZGVuXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIGZ1bmN0aW9uKHVzZXJuYW1lKSB7XG4gICAgY29uc3QgdmFsaWQgPSAodXNlcm5hbWUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFzc3dvcmRDYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gJ1Bhc3N3b3JkOiAnLFxuICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gPSB2YWxpZGF0ZVBhc3N3b3JkLCAgICAgICAgXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGludmFsaWRQYXNzd29yZE1lc3NhZ2UsXG4gICAgICAgIGF0dGVtcHRzID0gMyxcbiAgICAgICAgaGlkZGVuID0gdHJ1ZSxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uOiB2YWxpZGF0aW9uRnVuY3Rpb24sXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgYXR0ZW1wdHM6IGF0dGVtcHRzLFxuICAgICAgICAgIGhpZGRlbjogaGlkZGVuXG4gICAgICAgIH07XG5cbiAgcHJvbXB0KG9wdGlvbnMsIGZ1bmN0aW9uKHBhc3N3b3JkKSB7XG4gICAgY29uc3QgdmFsaWQgPSAocGFzc3dvcmQgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
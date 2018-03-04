'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      checkLoggedInCallback = require('../callback/checkLoggedIn'),
      usernamePromptCallback = require('../callback/prompt/username'),
      passwordPromptCallback = require('../callback/prompt/password'),
      newPasswordPromptCallback = require('../callback/prompt/newPassword'),
      confirmNewPasswordPromptCallback = require('../callback/prompt/confirmNewPassword');

const { CHANGE_PASSWORD_URI } = constants,
      { FAILED_CHANGE_PASSWORD_MESSAGE, SUCCESSFUL_CHANGE_PASSWORD_MESSAGE } = messages;

function changePassword(argument) {
  const username = argument,  ///
        oldPassword = null,
        newPassword = null,
        callbacks = [
          checkLoggedInCallback,
          usernamePromptCallback,
          passwordPromptCallback,
          newPasswordPromptCallback,
          confirmNewPasswordPromptCallback
        ],
        context = {
          username: username,
          oldPassword: oldPassword,
          newPassword: newPassword
        },
        uri = CHANGE_PASSWORD_URI;

  action(callbacks, context, uri, function(json) {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CHANGE_PASSWORD_MESSAGE) :
        console.log(FAILED_CHANGE_PASSWORD_MESSAGE);
  });
}

module.exports = changePassword;

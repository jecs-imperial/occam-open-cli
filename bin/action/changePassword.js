"use strict";

const uris = require("../uris"),
      action = require("../action"),
      messages = require("../messages"),
      usernamePromptCallback = require("../callback/prompt/username"),
      passwordPromptCallback = require("../callback/prompt/password"),
      newPasswordPromptCallback = require("../callback/prompt/newPassword"),
      retrieveAccessTokenCallback = require("../callback/retrieveAccessToken"),
      confirmNewPasswordPromptCallback = require("../callback/prompt/confirmNewPassword");

const { exit } = process,
      { CHANGE_PASSWORD_URI } = uris,
      { FAILED_CHANGE_PASSWORD_MESSAGE, SUCCESSFUL_CHANGE_PASSWORD_MESSAGE } = messages;

function changePassword(argument) {
  const username = argument,  ///
        oldPassword = null,
        newPassword = null,
        uri = CHANGE_PASSWORD_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          usernamePromptCallback,
          passwordPromptCallback,
          newPasswordPromptCallback,
          confirmNewPasswordPromptCallback
        ],
        context = {
          username,
          oldPassword,
          newPassword
        };

  action(callbacks, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CHANGE_PASSWORD_MESSAGE) :
        console.log(FAILED_CHANGE_PASSWORD_MESSAGE);

    exit();
  }, context);
}

module.exports = changePassword;

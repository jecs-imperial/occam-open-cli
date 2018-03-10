'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validatePackageName } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_PACKAGE_NAME_MESSAGE } = messages;

function packageNamePromptCallback(proceed, abort, context) {
  const { packageName } = context;

  if (packageName !== null) {
    const valid = validatePackageName(packageName);

    if (valid) {
      proceed();
      
      return;
    }
  }

  const description = 'Package name: ',
        errorMessage = INVALID_PACKAGE_NAME_MESSAGE,
        validationFunction = validatePackageName,
        options = {
          description: description,
          errorMessage: errorMessage,
          validationFunction: validationFunction
        };

  prompt(options, function(packageName) {
    const valid = (packageName !== null);

    if (valid) {
      Object.assign(context, {
        packageName: packageName
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = packageNamePromptCallback;
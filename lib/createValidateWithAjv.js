const ajv = require('ajv');

const Ajv = new ajv();

const createValidateWithAjv = schema => json => {
  const validate = Ajv.compile(schema);
  const valid = validate(json);
  return {
    errors: validate.errors,
    isValid: valid
  };
};

module.exports = {
  createValidateWithAjv
};

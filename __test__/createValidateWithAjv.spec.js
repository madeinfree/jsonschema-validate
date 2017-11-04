const { createValidateWithAjv } = require('../index');

const schema = {
  type: 'object',
  properties: {
    hello: { type: 'string' }
  }
};

describe('createValidateWithAjv', () => {
  it('require createValidateWithAjv module', () => {
    expect(typeof createValidateWithAjv).toBe('function');
  });
  it('return true when json data is valid', () => {
    const mockJSON = { hello: 'world' };
    const validate = createValidateWithAjv(schema);
    const valid = validate(mockJSON);
    expect(valid.isValid).toBeTruthy();
  });
  it('return false and one error message when json data is unvalid', () => {
    const mockJSON = { hello: 123 };
    const validate = createValidateWithAjv(schema);
    const valid = validate(mockJSON);
    expect(valid.isValid).toBeFalsy();
    expect(valid.errors.length).toBe(1);
    expect(valid.errors[0].message).toBe('should be string');
  });
});

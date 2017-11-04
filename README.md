# JSON Schema Validator

Ajv base JSON Schema validator tool

## Installation

```
yarn add jsonschema-validator
```

## Uses

```javascript
const { createValidateWithAjv } = require('jsonschema-validate')
const schema = {
  type: 'object',
  properties: {
    hello: { type: 'string' }
  }
};

// if json data valid
const mockJSON = { hello: 'world' };
const validate = createValidateWithAjv(schema);
const valid = validate(mockJSON);
console.log(valid) //true

// if json data unvalid
const mockJSON = { hello: 123 };
const validate = createValidateWithAjv(schema);
const valid = validate(mockJSON);
console.log(valid) //false
console.log(valid.errors) // should be string <error message from Ajv>
```

## Examples

see all tests sample

## License

MIT
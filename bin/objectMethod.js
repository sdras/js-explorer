import chalk from 'chalk'

export const obj = {
  createObj: [
    {
      name: 'create',
      shortDesc: 'create a new object',
      desc: `Creates a new object with the specified prototype object and properties.
  
  ${chalk.bold(
    'Important note for beginners!'
  )} It's more common to create an object the way that it's shown at the top of the example, like this ${chalk.cyan(
        'let obj = { a: 1 };'
      )}`,
      example: `const obj2 = Object.create(obj);
console.log(obj2);`,
      output: `Object {
  a: 1,
  b: 2,
  c: 3
}`,
    },
    {
      name: 'assign',
      shortDesc: 'make a copy of an object',
      desc: `Copies the values of all enumerable own properties from one or more source objects to a target object. It will return the target object. Though not technically a built in object method, it's more common when using ES6 to make use of the Spread Operator, by using ${chalk.cyan(
        '...'
      )} More info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator"`,
      example: `const copy = Object.assign({}, obj);
console.log(copy);`,
      output: `Object {
  a: 1,
  b: 2,
  c: 3
}`,
    },
  ],
  createProp: [
    {
      name: 'defineProperty',
      shortDesc: 'create a new property or modify an existing one',
      desc: `Adds the named property described by a given descriptor to an object.
  
  ${chalk.bold(
    'Important note for beginners!'
  )} It's more common to use dot or square bracket notation to create a new property or modify an existing one. Like this: ${chalk.cyan(
        'obj.a = 1'
      )} or ${chalk.cyan(
        'obj[a] = 1'
      )}. This isn't technically a built-in method, that's why it's not included.`,
      example: `Object.defineProperty(obj, 'd', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4
});

console.log(obj.d);`,
      output: `4`,
    },
    {
      name: 'defineProperties',
      shortDesc: 'create one or more properties or modify existing properties',
      desc: `Adds one or more properties described by a given descriptor to an object.
  
  ${chalk.bold(
    'Important note for beginners!'
  )} It's more common to use dot or square bracket notation to create a new property or modify an existing one. Like this: ${chalk.cyan(
        'obj.a = 1'
      )} or ${chalk.cyan(
        'obj[a] = 1'
      )}. This isn't technically a built-in method, that's why it's not included.`,
      example: `Object.defineProperties(obj, {
  d: {
    value: 4,
    writable: true
  },
  e: {
    value: 5,
    writable: true
  }
});

console.log(obj);`,
      output: `{a: 1, b: 2, c: 3, d: 4, e: 5}`,
    },
  ],
  infoObj: [
    {
      name: 'isExtensible',
      shortDesc: 'find out if more properties can be added',
      desc: 'Determines if extending of an object is allowed.',
      example: `console.log(Object.isExtensible(obj));
Object.freeze(obj);
console.log(Object.isExtensible(obj));`,
      output: `true
false`,
    },
    {
      name: 'is',
      shortDesc: 'find out if two references point to the same object',
      desc: `Compares if two references point to the same object. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison). This one is a little weird, and the MDN docs are a bit misleading. It's more useful to use triple equals === to check equality. More info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals`,
      example: `let obj2 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.is(obj, obj2));
console.log(Object.is(obj, obj));`,
      output: `false
true`,
    },
    {
      name: 'isFrozen',
      shortDesc: `find out if an object and its properties can't be modified`,
      desc: 'Determines if an object is frozen.',
      example: `console.log(Object.isFrozen(obj));
Object.freeze(obj);
console.log(Object.isFrozen(obj));`,
      output: `false
true`,
    },
    {
      name: 'isSealed',
      shortDesc: `find out if an object can't be modified (its properties can be, though)`,
      desc: `Determines if the descriptor of its properties can't be changed and new properties can't be created.`,
      example: `Object.seal(obj);

console.log(Object.isSealed(obj));`,
      output: `true`,
    },
    {
      name: 'isPrototypeOf',
      shortDesc: `find out if the object is in the prototype chain.`,
      desc: `Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.`,
      example: `function Rect() {}

var rect = new Rect();

console.log(Rect.prototype.isPrototypeOf(rect));`,
      output: `true`,
      useExample: 'newExample',
    },
  ],
  noChange: [
    {
      name: 'seal',
      shortDesc: `make sure properties can't be added or deleted`,
      desc: 'Prevents other code from deleting properties of an object. Existing properties can still be modified.',
      example: `Object.seal(obj);
delete obj.c;

console.log(obj);`,
      output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`,
    },
    {
      name: 'freeze',
      shortDesc: `make sure properties can't be added, deleted, or modified`,
      desc: `Freezes an object: other code can't delete or change any properties.`,
      example: `Object.freeze(obj);
obj.a = 10;

console.log(obj.a);`,
      output: `1 <span class="comment">//the value didn't update to 10</span>`,
    },
    {
      name: 'preventExtensions',
      shortDesc: `make sure properties can't be added.`,
      desc: `Prevents any extensions of an object. I can still delete properties but can't add any new ones.`,
      example: `Object.preventExtensions(obj);
obj.d = 4;

console.log(obj.d);`,
      output: `undefined`,
    },
  ],
  createString: [
    {
      name: 'toString',
      shortDesc: `create a string representation of the object.`,
      desc: `The ${chalk.cyan(
        'toString()'
      )} method returns a string representing the object. Though this is the built-in method available, it's usually more useful to use ${chalk.cyan(
        'JSON.stringify()'
      )}. More info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify`,
      example: `console.log(obj.toString());
console.log(obj.a.toString());`,
      output: `"[object Object]"
"1"`,
    },
    {
      name: 'toLocaleString',
      shortDesc: `create a localized string representation of the object.`,
      desc: `The ${chalk.cyan(
        'toLocaleString()'
      )} method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes. In human terms: this means if you have something that has different data based on location, such as date methods, it will give you a different time format`,
      example: `obj.d = new Date();

console.log(obj.d);
console.log(obj.d.toLocaleString());`,
      output: `Fri Dec 29 2017 20:57:35 GMT-0700 (MST)
12/29/2017, 8:57:35 PM`,
    },
  ],
  infoProp: {
    details: [
      {
        name: 'getOwnPropertyDescriptor',
        shortDesc: `get details about a property`,
        desc: 'Returns a property descriptor for a named property on an object.',
        example: `const o = Object.getOwnPropertyDescriptor(obj, 'a');
  
  console.log(o);`,
        output: `Object {
    configurable: true,
    enumerable: true,
    value: 1,
    writable: true
  }`,
      },
      {
        name: 'getOwnPropertyDescriptors',
        shortDesc: `get details about all the properties on an object`,
        desc: 'Returns an object containing all own property descriptors for an object.',
        example: `console.log(Object.getOwnPropertyDescriptors(obj))`,
        output: `Object {
    a: Object {
      configurable: true,
      enumerable: true,
      value: 1,
      writable: true
    },
    b: Object {
      configurable: true,
      enumerable: true,
      value: 2,
      writable: true
    },
    c: Object {
      configurable: true,
      enumerable: true,
      value: 3,
      writable: true
    },
  }`,
      },
      {
        name: 'propertyIsEnumerable',
        shortDesc: `find out if a property can be traversed with a for...in loop`,
        desc: 'Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set. This can be used to see if something is a built-in or user-defined method because built-in properties tend to not be enumerable',
        example: `console.log(obj.propertyIsEnumerable('a'));
  console.log(Math.propertyIsEnumerable('random'));`,
        output: `true
  false`,
      },
      {
        name: 'hasOwnProperty',
        shortDesc: `find out if a property exists as a direct property of the object`,
        desc: 'Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.',
        example: `console.log(obj.hasOwnProperty('a'));
  delete obj.a;
  console.log(obj.hasOwnProperty('a'));`,
        output: `true
  false`,
      },
    ],
    list: [
      {
        name: 'keys',
        shortDesc: `list keys`,
        desc: `Returns an array containing the names of all of the object's keys that can be looped through, in the order that they would be looped through.`,
        example: `console.log(Object.keys(obj));`,
        output: `["a", "b", "c"]`,
      },
      {
        name: 'values',
        shortDesc: `list values`,
        desc: `Returns an array containing the names of all of the object's values that can be looped through, in the order that they would be looped through.`,
        example: `console.log(Object.values(obj));`,
        output: `[1, 2, 3]`,
      },
      {
        name: 'entries',
        shortDesc: `list keys and values`,
        desc: `Returns a nested array containing the names of all of the object's key/value pairs that can be looped through, in the order that they would be looped through.`,
        example: `console.log(Object.entries(obj));`,
        output: `[["a", 1], ["b", 2], ["c", 3]]`,
      },
      {
        name: 'getOwnPropertyNames',
        shortDesc: `list keys, even if you can't loop through them`,
        desc: `Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties. Does the same thing as ${chalk.cyan(
          'Object.keys()'
        )}, retrieving the keys in the object, but ${chalk.cyan(
          'getOwnPropertyNames()'
        )} will include properties that can't be looped through.`,
        example: `Object.defineProperty(obj, 'a', {
    enumerable: false
  });
  
  console.log(Object.keys(obj));
  console.log(Object.getOwnPropertyNames(obj));`,
        output: `["b", "c"]
  ["a", "b", "c"]`,
      },
    ],
  },
  prototype: [
    {
      name: 'getPrototypeOf',
      shortDesc: `get a prototype of the object.`,
      desc: `Returns the prototype of the specified object. (i.e. the value of the internal [[Prototype]] property) of the specified object).`,
      example: `const proto = Object.create(obj);
console.log(Object.getPrototypeOf(proto) === obj);`,
      output: `true`,
    },
    {
      name: 'setPrototypeOf',
      shortDesc: `set a prototype of the object.`,
      desc: `Warning: this method is really slow. Use with caution, or replace with ${chalk.cyan(
        'Object.create()'
      )}. Sets the prototype (i.e., the internal [[Prototype]] property).`,
      example: `const dict = Object.setPrototypeOf({}, obj);

console.log(dict);`,
      output: `Object {
  a: 1,
  b: 2,
  c: 3
}`,
    },
    {
      name: 'isPrototypeOf',
      shortDesc: `find out if the object is in the prototype chain.`,
      desc: `Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.`,
      example: `function Rect() {}

var rect = new Rect();

console.log(Rect.prototype.isPrototypeOf(rect));`,
      output: `true`,
    },
  ],
}

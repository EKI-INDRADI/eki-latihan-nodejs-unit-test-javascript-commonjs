


const sayHello = name => {
  if (name) {
    return `Hello ${name}`;
  } else {
    throw new Error("Name is required");
  }
};
exports.sayHello = sayHello;
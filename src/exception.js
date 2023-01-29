
class MyException extends Error {}
exports.MyException = MyException;

const callMe = name => {
  if (name === "eki") {
    throw new MyException("Ups my exceptions happens");
  } else {
    return "OK";
  }
};
exports.callMe = callMe;
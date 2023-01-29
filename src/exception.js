


const callMe = name => {
  if (name === "eki") {
    throw new Error("Ups my exceptions happens");
  } else {
    return "OK";
  }
};
exports.callMe = callMe;
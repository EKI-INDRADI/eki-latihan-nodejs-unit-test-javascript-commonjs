"use strict";

var _userRepository = require("../src/user-repository.js");
var _userService = require("../src/user-service.js");
const repository = new _userRepository.UserRepository();
const service = new _userService.UserService(repository);
test("test mock partial class findById", () => {
  const user = {
    id: 1,
    name: "eki"
  };
  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);
  expect(service.findById(1)).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(findByIdMock).toHaveBeenCalledWith(1);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});
test.failing("test mock partial findAll", () => {
  service.findAll();
});
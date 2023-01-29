

var _userRepository = require("../src/user-repository.js");
var _userService = require("../src/user-service.js");
jest.mock("../src/user-repository.js");
const repository = new _userRepository.UserRepository();
const service = new _userService.UserService(repository);
test("test mock user save", () => {
  const user = {
    id: 1,
    name: "eki"
  };
  service.save(user);
  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});
test("test mock class findById", () => {
  const user = {
    id: 1,
    name: "eki"
  };
  repository.findById.mockReturnValueOnce(user);
  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});
test("test mock class findAll", () => {
  const users = [{
    id: 1,
    name: "eki"
  }, {
    id: 2,
    name: "eki"
  }];
  repository.findAll.mockReturnValueOnce(users);
  expect(service.findAll()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
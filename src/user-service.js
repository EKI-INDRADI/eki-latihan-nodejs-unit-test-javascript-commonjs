



var _userRepository = require("./user-repository.js");
class UserService {
  constructor(userRepository) {
    if (userRepository) {
      this.userRepository = userRepository;
    } else {
      this.userRepository = new _userRepository.UserRepository();
    }
  }
  save(user) {
    this.userRepository.save(user);
  }
  findById(id) {
    return this.userRepository.findById(id);
  }
  findAll() {
    return this.userRepository.findAll();
  }
}
exports.UserService = UserService;
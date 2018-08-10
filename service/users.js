module.exports = class CreateUserService {
  initializeUserRepository(userRepository) {
    this.userRepository = userRepository
  }

  getUserByAuthID(authID, nickname) {
    return this.userRepository.getUserByAuthID(authID)
      .then(user => {
        if (!user) {
          return this.userRepository.createUser(authID, nickname)
        } else {
          return user
        }
      })
  }
}
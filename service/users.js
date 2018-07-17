var exports = module.exports
const userRepository = require('../repository/users')

exports.getUserByAuthID = (authID, nickname) => {
    return userRepository.getUserByAuthID(authID)
        .then(user => {
            if(!user) {
                return userRepository.createUser(authID, nickname)
            }else {
                return user
            }
        })
}

import User from "./../models/User"

class UserController {
    async list(req, res) {
        // Get all list from model
        const users = await User.query()

        // send
        res.json(users)
    }
}

export default new UserController()
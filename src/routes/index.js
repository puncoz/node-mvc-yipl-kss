import { Router } from "express"
import UserController from "../controllers/UserController"

const router = new Router()

router.get("/", UserController.list)
// router.get("/{user_id}", UserController.userById)
// router.post("/", UserController.createUser)
// router.put("/{user_id}", UserController.updateUser)
// router.delete("/{user_id}", UserController.deleteUser)

export default router
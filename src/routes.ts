import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { UpdatePasswordController } from "./controllers/UpdatePasswordController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const updatePasswordController = new UpdatePasswordController();

router.post("/user", createUserController.handle);

router.put("/user/:id", updateUserController.handle);
router.put("/password/:id", updatePasswordController.handle);


export { router };
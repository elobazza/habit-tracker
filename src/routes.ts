import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ShowUserController } from "./controllers/ShowUserController";
import { UpdatePasswordController } from "./controllers/UpdatePasswordController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const updatePasswordController = new UpdatePasswordController();
const authenticateUserController = new AuthenticateUserController();
const showUserController = new ShowUserController();

router.post("/user", createUserController.handle);
router.post("/login", authenticateUserController.handle);

router.put("/user/:id", updateUserController.handle);
router.put("/password/:id", updatePasswordController.handle);

router.get("/user/:id", showUserController.handle);

export { router };
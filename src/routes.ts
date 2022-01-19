import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateHabitController } from "./controllers/CreateHabitController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteHabitController } from "./controllers/DeleteHabitController";
import { ShowUserController } from "./controllers/ShowUserController";
import { UpdatePasswordController } from "./controllers/UpdatePasswordController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const updatePasswordController = new UpdatePasswordController();
const authenticateUserController = new AuthenticateUserController();
const showUserController = new ShowUserController();

const createHabitController = new CreateHabitController();
const deleteHabitController = new DeleteHabitController();

router.post("/user", createUserController.handle);
router.post("/login", authenticateUserController.handle);

router.post("/habit", createHabitController.handle);

router.put("/user/:idusuario", updateUserController.handle);
router.put("/password/:idusuario", updatePasswordController.handle);

router.get("/user/:idusuario", showUserController.handle);

router.delete("/habit/:idhabito", deleteHabitController.handle);

export { router };
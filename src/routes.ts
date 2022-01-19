import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateHabitController } from "./controllers/CreateHabitController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteHabitController } from "./controllers/DeleteHabitController";
import { ListHabitController } from "./controllers/ListHabitController";
import { ShowUserController } from "./controllers/ShowUserController";
import { UpdatePasswordController } from "./controllers/UpdatePasswordController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();

//USERS
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const updatePasswordController = new UpdatePasswordController();
const authenticateUserController = new AuthenticateUserController();
const showUserController = new ShowUserController();

//HABITS
const createHabitController = new CreateHabitController();
const deleteHabitController = new DeleteHabitController();
const listHabitController = new ListHabitController();

//POST
router.post("/user", createUserController.handle);
router.post("/login", authenticateUserController.handle);

router.post("/habit", createHabitController.handle);

//PUT
router.put("/user/:idusuario", updateUserController.handle);
router.put("/password/:idusuario", updatePasswordController.handle);


//GET
router.get("/user/:idusuario", showUserController.handle);
router.get("/habit/:idusuario", listHabitController.handle);


//DELETE
router.delete("/habit/:idhabito", deleteHabitController.handle);

export { router };
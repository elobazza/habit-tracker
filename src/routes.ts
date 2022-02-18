import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateHabitController } from "./controllers/CreateHabitController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteHabitController } from "./controllers/DeleteHabitController";
import { ListAllHabitsByUserController } from "./controllers/ListAllHabitsByUserController";
import { ListActiveHabitsByUserController } from "./controllers/ListHabitController";
import { ShowUserController } from "./controllers/ShowUserController";
import { UpdateHabitController } from "./controllers/UpdateHabitController";
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
const updateHabitController = new UpdateHabitController();
const deleteHabitController = new DeleteHabitController();
const listHabitController = new ListActiveHabitsByUserController();
const listAllHabitController = new ListAllHabitsByUserController();

//POST
router.post("/user", createUserController.handle);
router.post("/login", authenticateUserController.handle);

router.post("/habit", createHabitController.handle);


//PUT
router.put("/user/:idusuario", updateUserController.handle);
router.put("/password/:idusuario", updatePasswordController.handle);

router.put("/habit/:idhabito", updateHabitController.handle);


//GET
router.get("/user/:idusuario", showUserController.handle);
router.get("/habit/:idusuario", listHabitController.handle);
router.get("/all-habits/:idusuario", listAllHabitController.handle);

//DELETE
router.delete("/habit/:idhabito", deleteHabitController.handle);

export { router };
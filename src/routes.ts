import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();

router.post("/user", createUserController.handle);

router.put("/user/:id", updateUserController.handle);


export { router };
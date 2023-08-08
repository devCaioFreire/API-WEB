import { Router } from "express";
import { DataSaleController } from "./controllers/salesController/DataSaleController";
// import { CreateTaskController } from "./controllers/tasks/CreateTaskController";
// import { DeleteTaskController } from "./controllers/tasks/DeleteTaskController";
// import { GetTaskController } from "./controllers/tasks/GetTaskController";
// import { PutTaskController } from "./controllers/tasks/PutTaskController";
// import { isAuthenticated } from "./middleware/isAuthenticated";

const router = Router();

// User Routes
// router.post("/register", new CreateUserController().handle);
// router.post("/login", new AuthUserController().handle);
// router.get("/userinfo", isAuthenticated, new DetailUserController().handle);
router.post("/dataSale", new DataSaleController().handle);

// Task Routes
// router.post(
//   "/register/task",
//   isAuthenticated,
//   new CreateTaskController().handle
// );
// router.get("/tasks", isAuthenticated, new GetTaskController().handle);

// router.delete(
//   "/tasks:taskID",
//   isAuthenticated,
//   new DeleteTaskController().handle
// );
// router.put("/tasks/:taskID", isAuthenticated, new PutTaskController().handle);

export { router };


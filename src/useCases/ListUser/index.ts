import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUserRepository";
import ListUserController from "./ListUserController";
import ListUserUseCase from "./ListUserUseCase";

const postgresUsersRepository = new PostgresUsersRepository();

const listUserUseCase = new ListUserUseCase(postgresUsersRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserController };


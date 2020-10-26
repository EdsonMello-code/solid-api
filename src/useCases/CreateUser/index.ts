import { CreateUserController } from './CreateUserController';
import { PostgresUsersRepository } from './../../repositories/implementations/PostgresUserRepository';
import MailtrapMailProvider from "../../providers/implementations/MailtrapMailProvider";
import CreateUserUseCase from './CreateUserUseCase';

const mailtrapProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController }
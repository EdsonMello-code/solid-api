import IUsersRepository from "../../repositories/IUsersRepositoriy";

export default class ListUserUseCase {
  constructor( private userRepository: IUsersRepository) {}

  async execute() {
    return this.userRepository.find();
  }
} 
import { getRepository } from 'typeorm';
import User from '../../entities/User';
import IUsersRepository from '../IUsersRepositoriy';

export class PostgresUsersRepository implements IUsersRepository {

  async findByEmail(email: string): Promise<User> {
    const repository = getRepository(User);
    return await repository.findOne(email);
  }

  async save(user: User): Promise<void> {
    const repository = getRepository(User);
    await repository.save(user);
  }

  find = async (): Promise<User[]> => {
    const repository = getRepository(User);
    return await repository.find();
  }
}
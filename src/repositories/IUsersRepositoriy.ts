import User from '../entities/User';

export default interface IUsersRepository {
  // eslint-disable-next-line no-unused-vars
  findByEmail(email: string): Promise<User>;
  // eslint-disable-next-line no-unused-vars
  save(user: User): Promise<void>;
};

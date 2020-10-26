import User from "../../entities/User";
import IUsersRepository from "../IUsersRepositoriy";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);
    if (user) {
      return user;
    }
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
import { IMailProvider } from './../../providers/IMailProvider';
import User from '../../entities/User';
import IUsersRepository from '../../repositories/IUsersRepositoriy';
import ICreateUserRequestDTO from './CreateUserDTO';

export default class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) { }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(data.email);
    if (userAlreadyExist) {
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },

      from: {
        name: 'Equipe do meu App',
        email: 'equipe@meuapp.com'
      },

      subject: 'Seja bem-vindo à plataforma',
      body: '<p>Você já fazer login em nossa plataforma.</p>'
    });
  }
}

// 33
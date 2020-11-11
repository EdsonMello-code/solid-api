import ListUserUseCase from './ListUserUseCase';
import { Request, Response } from  'express';

export default class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.listUserUseCase.execute();
      console.log(user);
      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}
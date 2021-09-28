import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { UsersTesting } from './entities/users-testing.entity';
import { Users } from './entities/users.entity';

@Injectable()
export class ExperimentService {
  constructor(
    @InjectRepository(UsersTesting)
    private UsersTestingRepository: Repository<UsersTesting>,
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
  ) {}

  async isOldUser(testing_token: string) {
    return await this.UsersRepository.find({
      where: { device_token: testing_token },
    });
  }

  async isExistingTestUser(testing_token: string) {
    return await this.UsersTestingRepository.find({
      where: { device_token: testing_token },
    });
  }

  async getAllRecords() {
    return await this.UsersTestingRepository.find({});
  }

  async getMaxID() {
    return (await this.UsersTestingRepository.find({})).length;
  }

  async getLastBtnColor() {
    return (
      await this.UsersTestingRepository.find({
        where: { id: await this.getMaxID() },
      })
    )[0]?.button_color;
  }

  setBtnColor(last_color?: string) {
    switch (last_color) {
      case '#FF0000':
        return '#00FF00';
      case '#00FF00':
        return '#0000FF';
      case '#0000FF':
        return '#FF0000';
      default:
        return '#FF0000';
    }
  }

  setPrice(id: string) {
    if (+id % 20 == 0) {
      return '50';
    } else {
      if (+id % 4 == 0) {
        if ((+id / 4) % 2 === 0) {
          return '20';
        } else {
          return '5';
        }
      } else {
        return '10';
      }
    }
  }

  async findAll(token: string) {
    if (token) {
      if ((await (await this.isOldUser(token)).length) == 0) {
        if ((await (await this.isExistingTestUser(token)).length) == 0) {
          const lastBtnColor = await this.getLastBtnColor();
          console.log;
          let userTesting = new UsersTesting();
          userTesting.device_token = token;
          userTesting.button_color = this.setBtnColor(lastBtnColor);
          userTesting.price = this.setPrice(
            ((await this.getMaxID()) + 1).toString(),
          );

          await this.UsersTestingRepository.save(userTesting);

          const responseData = (await this.isExistingTestUser(token))[0];

          return {
            button_color: responseData.button_color,
            price: responseData.price,
          };
        } else {
          const responseData = (await this.isExistingTestUser(token))[0];

          return {
            button_color: responseData.button_color,
            price: responseData.price,
          };
        }
      } else {
        return {
          button_color: '#000000',
          price: 100,
        };
      }
    } else {
      return await this.getAllRecords();
    }
  }
}

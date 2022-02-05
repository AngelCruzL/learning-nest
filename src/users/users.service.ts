import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'John' },
    { id: 1, name: 'Mary' },
  ];

  findAll(name?: string): User[] {
    if (name) return this.users.filter((user) => user.name === name);

    return this.users;
  }

  findOne(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUser: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUser };
    this.users.push(newUser);
    return newUser;
  }
}

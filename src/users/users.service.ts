import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  create(createUserDto: CreateUserDto): User {
  const newUser: User = {
    id: this.idCounter++,
    ...createUserDto,
  };
  this.users.push(newUser);
  return newUser;
}


  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined{
    return this.users.find((u) => u.id === id);
  }

  remove(id: number): void {
    this.users = this.users.filter((u) => u.id !== id);
  }
  update(id: number, updateUserDto: UpdateUserDto): User {
      const userIndex = this.users.findIndex((u) => u.id === id);
      
      if (userIndex === -1) {
          throw new NotFoundException(`Usuário com id ${id} não encontrado`);
        }
        
        const updatedUser = { ...this.users[userIndex], ...updateUserDto };
        this.users[userIndex] = updatedUser;
        
        return updatedUser;
    }
}

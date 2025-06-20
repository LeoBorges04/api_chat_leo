import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

 @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }
  
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(":id")
  findOne(@Param("id") id:string){
    return this.usersService.findOne(Number(id));
  }
  @Delete(":id")
  remove(@Param("id") id: string){
    return this.usersService.remove(Number(id));
  }
  
  @Put(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto){
    return this.usersService.update(Number(id), updateUserDto)
  }

}

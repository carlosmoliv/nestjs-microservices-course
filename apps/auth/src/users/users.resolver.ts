import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDocument } from '@app/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver(() => UserDocument)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserDocument)
  createUser(
    @Args('createUserInput') createReservationInput: CreateUserDto,
  ): Promise<UserDocument> {
    return this.usersService.create(createReservationInput);
  }

  @Query(() => [UserDocument], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }
}

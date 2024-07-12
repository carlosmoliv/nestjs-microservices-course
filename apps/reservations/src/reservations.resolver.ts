import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser, UserDto } from '@app/common';
import { ReservationDocument } from './models/reservation.schema';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Resolver(() => ReservationDocument)
export class ReservationsResolver {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Mutation(() => ReservationDocument)
  async createReservation(
    @Args('creatReservationInput')
    createReservationInput: CreateReservationDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.reservationsService.create(createReservationInput, user);
  }

  @Query(() => ReservationDocument, { name: 'reservations' })
  findAll() {
    return this.reservationsService.findAll();
  }

  @Query(() => ReservationDocument, { name: 'reservation' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.reservationsService.findOne(id);
  }

  @Mutation(() => ReservationDocument)
  removeReservation(@Args('id', { type: () => String }) id: string) {
    return this.reservationsService.remove(id);
  }
}

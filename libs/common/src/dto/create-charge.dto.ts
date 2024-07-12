import { IsNumber } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateChargeDto {
  @IsNumber()
  @Field()
  amount: number;
}

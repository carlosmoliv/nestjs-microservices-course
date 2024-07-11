import { IsNumber } from 'class-validator';
import { CreateChargeMessage } from '@app/common/types';

export class CreateChargeDto implements Omit<CreateChargeMessage, 'email'> {
  @IsNumber()
  amount: number;
}

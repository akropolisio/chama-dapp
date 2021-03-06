import { ITransaction, IAnnotatedDescriptionEntity } from '@aragon/types';

export interface IIntent {
  annotatedDescription?: IAnnotatedDescriptionEntity[] | null;
  description: string;
  name: string;
  to: string;
  transaction: ITransaction;
}

import Web3 from 'web3';

export type Provider = typeof Web3.givenProvider;
export type ProviderType =
'metamask' | 'trust' | 'toshi' | 'cipher' | 'mist' | 'parity' | 'infura' | 'localhost' | 'unknown';

export type TimePeriod = 'day' | 'week' | 'month' | 'quarter' | 'year';
export type ID = number;
export type UUID = string;

export type StaticAragonAppType = 'home';

export interface IStaticAragonApp {
  routeKey: string;
  content: React.ComponentType;
  name: string;
  icon: JSX.Element | string;
}

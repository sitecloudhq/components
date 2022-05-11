import { FC, ReactElement } from 'react';

declare type Props = {
  [key: string]: any;
} & {
  type?: never;
};

export type AsyncProps = {
  location?: string;
  devMode?: boolean;
  [key: string]: any;
};

export interface Component<P = {}> extends FC<P> {
  paddable?: boolean;
  canReceive?: Array<string>;
  icon?: ReactElement;
  props?: Props;
  asyncProps?: ({ location, devMode }: AsyncProps) => any;
}

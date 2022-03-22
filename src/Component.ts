import { FC, ReactElement } from 'react';

type AsyncPropsFn = ({
  location,
  devMode
}: {
  location?: string;
  devMode?: boolean;
}) => any;

type Props = { [key: string]: any } & { type?: never };

export interface Component<P = {}> extends FC<P> {
  paddable?: boolean;
  canReceive?: Array<string>;
  icon?: ReactElement;
  props?: Props;
  asyncProps?: AsyncPropsFn;
}

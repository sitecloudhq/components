import { FC, ReactElement } from 'react';

type AsyncPropsFn = ({
  location,
  devMode
}: {
  location?: string;
  devMode?: boolean;
}) => any;

export interface Component<P = {}> extends FC<P> {
  paddable?: boolean;
  canReceive?: Array<string>;
  icon?: ReactElement;
  props?: any;
  asyncProps?: AsyncPropsFn;
}

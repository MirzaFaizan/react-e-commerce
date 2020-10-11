import React, {
  ComponentType,
  LazyExoticComponent,
  memo,
  Suspense,
} from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  Component: LazyExoticComponent<ComponentType<any>>;
  withoutNav?: boolean;
  withoutAuth?: boolean;
}

export const RoutePage = memo<Props>(
  ({ Component, withoutNav, withoutAuth, ...restProps }) => {
    let WrappedComp = Component;

    // TODO
    // if (!withoutNav) {
    //   WrappedComp = withNavHoc(WrappedComp) as any;
    // }
    // if (!withoutAuth) {
    //   WrappedComp = withAuthHoc(WrappedComp) as any;
    // }

    return (
      <Suspense fallback={<div>loading ...</div>}>
        <WrappedComp {...restProps} />
      </Suspense>
    );
  }
);

import React, {
  ComponentType,
  LazyExoticComponent,
  memo,
  Suspense,
} from 'react';
import { RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  Component: LazyExoticComponent<ComponentType<any>>;
  withoutNav?: boolean;
  withoutAuth?: boolean;
}

export const RoutePage = memo<Props>(
  ({ Component, withoutNav, withoutAuth, ...restProps }) => {
    const WrappedComp = Component;

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

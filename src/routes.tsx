import { RouteConfig, RouteConfigComponentProps } from "react-router-config";
import RootComponent from "./pages/RootComponent";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import ExamplePage from "./pages/ExamplePage";

const Home = lazy(() => import("./pages/Home"));

export const routes: RouteConfig[] = [
  {
    component: RootComponent,
    routes: [
      {
        path: "/",
        exact: true,
        component: (props: any) => {
          return (
            <Suspense fallback={<Loading />}>
              <Home {...props} />
            </Suspense>
          );
        },
      },
      {
        path: "/example",
        exact: true,
        component: (props: any) => {
          return (
            <Suspense fallback={<Loading />}>
              <ExamplePage {...props} />
            </Suspense>
          );
        },
      },
    ],
  },
];

import {
  RootRoute,
  Outlet,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router";
import { Game, Start } from "./pages";

const rootRoute = new RootRoute({
  component: Root,
});

function Root() {
  return (
    <main className="w-full min-h-full bg-semi-violet">
      <Outlet />
    </main>
  );
}

const startRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Start,
});

const gameRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/game",
  component: Game,
});

const routeTree = rootRoute.addChildren([startRoute, gameRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

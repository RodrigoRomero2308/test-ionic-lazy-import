import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';

const RootComponent = ({route}: RouteConfigComponentProps) => {
  return (
    <div>
      <div className="">Esto es un layout</div>
      {route && renderRoutes(route.routes)}
    </div>
  )
}

export default RootComponent;
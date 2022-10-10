import nextConnect from 'next-connect';
import useAuthorization from './ncMiddlewares/useAuthorization';
import useCORS from './ncMiddlewares/useCORS';

const useMiddleware = nextConnect();
useMiddleware.use(useAuthorization);
useMiddleware.use(useCORS);

export default useMiddleware;

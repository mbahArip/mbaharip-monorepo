import nextConnect from 'next-connect';
import useAuthorization from './middlewares/useAuthorization';
import useCORS from './middlewares/useCORS';

const useMiddleware = nextConnect();
useMiddleware.use(useCORS);
useMiddleware.use(useAuthorization);

export default useMiddleware;

import nextConnect from 'next-connect';
import useAuthorization from './middlewares/useAuthorization';
import useCORS from './middlewares/useCORS';

const useMiddleware = nextConnect();
useMiddleware.use(useAuthorization);
useMiddleware.use(useCORS);

export default useMiddleware;

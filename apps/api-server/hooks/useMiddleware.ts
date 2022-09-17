import nextConnect from 'next-connect';
import useCORS from './middlewares/useCORS';
import useAuthorization from './middlewares/useAuthorization';
import useRateLimit from './middlewares/useRateLimit';

const useMiddleware = nextConnect();
useMiddleware.use(useCORS);
// useMiddleware.use(useRateLimit);
useMiddleware.use(useAuthorization);

export default useMiddleware;

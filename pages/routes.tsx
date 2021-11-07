import { useRouter } from 'next/router'
import useRoutes from '../lib/api/useRoutes';
import { ISearchRoutes } from '../lib/model/ISearchRoutes';

const Routes: React.FC = () => {
    const router = useRouter()

    const { data } = useRoutes(router.query as ISearchRoutes);

    console.log('Routes', data)

    return (
        <h1>Routes</h1>
    );
}

export default Routes;
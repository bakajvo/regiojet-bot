import {useRouter} from 'next/router'
import useRoutes from '../lib/api/useRoutes';
import React from "react";
import RoutesList from "../components/RoutesList";

const Routes: React.FC = () => {
    const {query} = useRouter();
    const {data} = useRoutes(query as Record<string, string>);

    return (
        <RoutesList routes={data} fromLocationId={query.fromLocationId as string}
                    toLocationId={query.toLocationId as string}
                    departureDate={query.departureDate as string}/>
    );
}

export default Routes;
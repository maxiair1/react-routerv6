import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export function ErrorPage() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>{ error.data.status }</h1>
                <h2>{ error.data.statusText || "Something goes wrong" }</h2>
            </div>
        )
    }

    return <div>Something goes wrong</div>;
    //throw error;
}
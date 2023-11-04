 import { useRouteError, Link } from "react-router-dom"

function ErrorPages() {
    const error = useRouteError()
    if(error.status === 404) {
        return (
            <div className="error-page container">
                <h1>Page Not Found</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
    return (
        <div className="error-page container">
            <h1>Something went wrong:)</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default ErrorPages
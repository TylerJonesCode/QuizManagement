import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  
  return (
    <div>errorPage</div>
  )
}

export default ErrorPage
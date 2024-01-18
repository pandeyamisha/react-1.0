import { useRouteError } from "react-router-dom";

const Error = () =>{
  const err = useRouteError();
  console.log('err',err)
  return (
    <>
    <h1>OOPS!!!!!!</h1>
    <h2>SomeThing Went Wrong</h2>
    <h2>{err.status} : {err.statusText}</h2>
    </>
  )
}
export default Error;
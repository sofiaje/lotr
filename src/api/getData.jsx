import { getCharacter } from "../api/fetchData"
import { useQuery } from "react-query";

const getData = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["book"],
        queryFn: getCharacter,
    });

    // figure out how to fix error handling
    if (isLoading) {
        return <h1>Loading..</h1>
    }
    if (isError) {
        return <pre>{JSON.stringify(error)}</pre>
    }

    const { docs: char } = data

    return { char };
}
 
export default getData;
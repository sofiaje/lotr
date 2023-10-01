import { useQuery } from "react-query";
import Book from "../fetures/book"
import getBook from "../api/getBook"

const characters = () => {

    const bookQuery = useQuery({
        queryKey: ["book"],
        queryFn: getBook,
    });

    if (bookQuery.isError) return <h1>Error</h1>
    if (bookQuery.isLoading){
        return <h1>Loading..</h1>
    }
    
    return (
        <div>
            <h1 className="text-6xl">Books</h1>
            <ul>
                {bookQuery.data.docs.map(book => {
                    return <Book data={book} key={book._id} />
                })}       
            </ul>
        </div>
    )
}

export default characters
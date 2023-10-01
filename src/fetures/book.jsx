const Book = ({ data }) => {
    const { name, _id } = data
    
    return ( 
        <li key={_id}>{name}</li>
    );
}
 
export default Book;
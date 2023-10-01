import ReactPaginate from 'react-paginate';
import { useState } from "react";


const paginate = (array) => {

    const [pageNumber, setPageNumber] = useState(0)
    const characterPerPage = 10
    const pagesVisited = pageNumber * characterPerPage
    const pageCount = Math.ceil(array?.length / characterPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }


    return {pageNumber, setPageNumber, characterPerPage, pagesVisited, pageCount, changePage};
}
 
export default paginate;
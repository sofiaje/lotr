const paginate = (array, pageNumber, setPageNumber) => {

    const characterPerPage = 12
    const pagesVisited = pageNumber * characterPerPage
    const pageCount = Math.ceil(array?.length / characterPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }


    return {characterPerPage, pagesVisited, pageCount, changePage};
}
 
export default paginate;
import styles from "./Pagination.module.scss"

interface props {
    page: number,
    maxPage: number
    setPage: Function
}
export default function Pagination({ page, setPage, maxPage }: props) {
    // let createPages = (maxPage:number)=>{
    //     for (let x = 0; x < maxPage; x++ ){

    //     }
    // }

    const handlePage = (x: number) => {
        if (x != page) {
            setPage(x)
        }
    }
    return (
        <>
            {(() => {
                const arr = [];
                for (let x = 1; x <= maxPage; x++) {
                    arr.push(
                        <div
                            className={`${styles.page} ${x == page && styles.currentPage}`}
                            onClick={
                                () => {
                                    handlePage(x)
                                }
                            }
                        >
                            {x}
                        </div>
                    )
                }
                return arr
            })()}
            <div>Pagination</div>

        </>
    )
}

import styles from "./Pagination.module.scss"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


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
        setPage(x)
    }
    return (
        <div className={`${styles.container}`}>
            {page > 1 && <div className={styles.arrow} onClick={() => {
                handlePage(page - 1)
            }} >
                <MdChevronLeft />
            </div>}

            {(() => {
                const arr = [];
                for (let x = 1; x <= maxPage; x++) {
                    arr.push(
                        <div className={styles.buttonContainer}>
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
                        </div>
                    )
                }
                return arr
            })()}
            {page != maxPage && <div className={styles.arrow} onClick={() => {
                handlePage(page + 1)
            }}>
                <MdChevronRight />
            </div>}


        </div>

    )
}

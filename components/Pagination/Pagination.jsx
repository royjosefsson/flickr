import Link from "../Link/Link"
import { useRouter } from "next/router"

const firstSvg = <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></svg>
const previousSvg = <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path></svg>
const nextSvg = <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
const lastSvg = <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></svg>

const getHref = ({ text, page }) => `/?text=${text}&page=${page}`
const disabledClass = (disabled) => disabled ? "disabled" : ""

const Pagination = ({ page, pages }) => {
    const { query } = useRouter()

    if (!page || !pages) {
        return null
    }

    const previousPage = page <= 1 ? 1 : page - 1
    const nextPage = page <= pages - 1 ? page + 1 : pages

    return (
        <div className="pagination">
            <Link
                href={getHref({ text: query.text, page: 1 })}
                disabled={page <= 1}>
                <div className={`pagination__item ${disabledClass(page <= 1)}`.trim()}>
                    1 {firstSvg}
                </div>
            </Link>
            <Link
                href={getHref({ text: query.text, page: previousPage })}
                disabled={page <= 1}>
                <div className={`pagination__item ${disabledClass(page <= 1)}`.trim()}>
                    {previousPage} {previousSvg}
                </div>
            </Link>
            <div className="pagination__item">{page}</div>
            <Link
                href={getHref({ text: query.text, page: nextPage })}
                disabled={page >= pages}>
                <div className={`pagination__item ${disabledClass(page >= pages - 1)}`.trim()}>
                    {nextSvg} {nextPage}
                </div>
            </Link>
            <Link
                href={getHref({ text: query.text, page: pages })}
                disabled={page >= pages}>
                <div className={`pagination__item ${disabledClass(page >= pages - 1)}`.trim()}>
                    {lastSvg} {pages}
                </div>
            </Link>
        </div>
    )
}

export default Pagination
import { useRef } from "react"
import { useRouter } from 'next/router'

const Search = () => {
    const router = useRouter()
    const inputRef = useRef(null)

    const onKeyUp = (e) => {
        if (e.key !== 'Enter') {
            return
        }

        const value = inputRef.current.value
        if (!value) {
            return
        }

        inputRef.current.blur()
        inputRef.current.value = ""
        router.push(`/?text=${decodeURIComponent(value)}&page=1`)
    }

    return (
        <div className="search">
            <input
                type="text"
                className="search__input"
                placeholder="search"
                ref={inputRef}
                onKeyUp={onKeyUp}
            />
        </div>
    )
}

export default Search
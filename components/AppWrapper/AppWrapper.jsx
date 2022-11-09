import Search from "../Search/Search"
import Head from "next/head"

const AppWrapper = ({ children }) => {
    return (
        <div className="app-wrapper">
            <Head>
                <title>Flickr | Polestar</title>
            </Head>
            <div className="app-wrapper__main-wrapper">
                <main className="app-wrapper__main">
                    <Search />
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AppWrapper
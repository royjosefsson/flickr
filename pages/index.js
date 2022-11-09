import AppWrapper from "../components/AppWrapper/AppWrapper"
import Gallery from "../components/Gallery/Gallery"
import Pagination from "../components/Pagination/Pagination"
import { Flickr } from "../services"

const Home = ({ error, photo, page, pages }) => {
  if (error) {
    return (
      <AppWrapper>
        <div>{error}</div>
      </AppWrapper>
    )
  }
  return (
    <AppWrapper>
      <Gallery photo={photo} />
      <Pagination page={page} pages={pages} />
    </AppWrapper>
  )
}

export const getServerSideProps = async (props) => {
  const apiKeyIsMissing = !process.env.FLICKR_API_KEY
  if (apiKeyIsMissing) {
    return { props: { error: "API key is missing" } }
  }
  const { text = "", page: _page = "1" } = props.query
  let response
  try {
    response = await Flickr.photos.search({ page: _page, text })
  } catch (error) {
    return { props: { error: error.message } }
  }
  const { photo, page, pages } = response

  return { props: { photo, page, pages } }
}

export default Home
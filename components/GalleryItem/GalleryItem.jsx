import Image from "next/image"

const GalleryItem = ({ data }) => {
    if (!data.url_m) {
        return null
    }
    return (
        <li>
            <article className="gallery__item">
                <Image
                    alt={data.description._content}
                    src={data.url_m}
                    width={238}
                    height={238} />
            </article>
        </li>
    )
}

export default GalleryItem
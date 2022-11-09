import GalleryItem from "../GalleryItem/GalleryItem"

const Gallery = ({ photo }) => {
    return (
        <div className="gallery">
            <ul className="gallery__items">
                {photo.map(data => <GalleryItem key={data.id} data={data} />)}
            </ul>
        </div>
    )
}

export default Gallery
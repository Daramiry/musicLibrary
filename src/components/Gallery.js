import { useContext } from 'react'
import { DataContext } from '../contxt/DataContext'
import GalleryItem from './GalleryItem'

const Gallery = () => {
    const data = usecontxt(DataContext)

    const display = data.map((item, index) => {
        return(
            <GalleryItem key={index} item={item}/>
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
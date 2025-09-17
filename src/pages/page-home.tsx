import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome({ }) {
    return (
        <Container>

            <AlbumsFilter albums={[]} className="mb-9"/>

            <PhotosList photos={[
                {
                    id: '123',
                    title: 'image-teste',
                    imageId: 'portrait-tower.png',
                    albums: [
                        { id: '321', title: 'album1' },
                        { id: '213', title: 'album2' },
                        { id: '1234', title: 'album3' }
                    ]
                },
                {
                    id: '123',
                    title: 'image-teste',
                    imageId: 'portrait-tower.png',
                    albums: [
                        { id: '321', title: 'album1' },
                        { id: '213', title: 'album2' },
                        { id: '1234', title: 'album3' }
                    ]
                }
                    
            ]} />
            {/* <PhotosList photos={[]} loading/> */}
        </Container>
    );
}
import Image from 'next/image'

import movieCollage from '../../../public/movie-collage.jpg'

const HomeBgImage = () => (
  <Image
    alt="Movie collage"
    src={movieCollage}
    placeholder="blur"
    width={1920}
    height={1080}
    className="position-absolute h-100 w-100 object-fit-cover overflow-hidden"
  />
)

export default HomeBgImage

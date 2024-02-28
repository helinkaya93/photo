import { accessKey } from "../constant";

export async function fetchimg() {
  const response = await fetch(
    `https://api.unsplash.com/photos/?client_id=${accessKey}`
  );

  const photos = await response.json();
  console.log(photos);

  return photos.map((photo) => {
    return {
      src: photo.urls.full,
      desc: photo.user.name,
      id: photo.id,
    };
  });

  //   GET /photos/list
}

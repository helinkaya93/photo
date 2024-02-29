import { accessKey } from "../constant";

export async function fetchImg() {
  const response = await fetch(
    `https://api.unsplash.com/photos/?client_id=${accessKey}`
  );

  const photos = await response.json();

  return photos.map((photo) => {
    return {
      src: photo.urls.full,
      desc: photo.user.name,
      id: photo.id,
    };
  });

  //   GET /photos/list
}

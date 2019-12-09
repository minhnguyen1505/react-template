export function getThumbnailVideo(video) {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL();
}

export const generateId = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

export const findKeywordInArray = (keyword, arr) => {
  return arr.findIndex(
    item => item.text.toLowerCase() === keyword.toLowerCase()
  );
};

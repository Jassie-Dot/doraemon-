/**
 * Add files to public/assets/images, videos, or audio, then list their names here.
 * Captions are optional. The first photo is also used for the final memory.
 */
export type PhotoMemory = { src: string; caption?: string; alt?: string };
export type VideoMemory = { src: string; caption?: string; poster?: string };

export const birthdayConfig: {
  photos: PhotoMemory[];
  videos: VideoMemory[];
  music: string | null;
} = {
  photos: [
    // { src: "/assets/images/photo1.jpg", caption: "one of my favourite memories ♡" },
    // { src: "/assets/images/photo2.jpg", caption: "look at us 😭" },
  ],
  videos: [
    // { src: "/assets/videos/video1.mp4", caption: "a little piece of us" },
  ],
  // Example: "/assets/audio/song.mp3"
  music: null,
};
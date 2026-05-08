import CloudinaryGalleryClient from "./CloudinaryGalleryClient";

export interface GalleryImage {
  public_id:    string;
  display_name: string | null;
  caption:      string | null;
}

interface Props {
  publicIds:       string[];
  defaultCaption?: string;
}

export default function CloudinaryGallery({ publicIds, defaultCaption }: Props) {
  const images: GalleryImage[] = publicIds.map((id) => ({
    public_id:    id,
    display_name: null,
    caption:      defaultCaption ?? null,
  }));

  return <CloudinaryGalleryClient images={images} caption={defaultCaption} />;
}

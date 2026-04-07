import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  display_name?: string;
}

export async function GET(req: NextRequest) {
  const folder = req.nextUrl.searchParams.get("folder");
  if (!folder) {
    return NextResponse.json({ error: "Paramètre folder manquant" }, { status: 400 });
  }

  try {
    const result = await cloudinary.api.resources_by_asset_folder(folder, {
      max_results: 30,
      resource_type: "image",
    });

    const images: CloudinaryImage[] = (result.resources ?? []).map(
      (r: { public_id: string; secure_url: string; width: number; height: number; display_name?: string }) => ({
        public_id:    r.public_id,
        secure_url:   r.secure_url,
        width:        r.width,
        height:       r.height,
        display_name: r.display_name,
      })
    );

    return NextResponse.json({ images });
  } catch (err) {
    console.error("[cloudinary-gallery]", err);
    return NextResponse.json({ error: "Erreur Cloudinary" }, { status: 500 });
  }
}

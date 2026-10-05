import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";

export const metadata = { title: "Image Gallery" };
export const dynamic = "force-dynamic";

export default async function ImageGallery() {
  const dbItems = await safe(() => prisma.galleryItem.findMany({ where: { type: "IMAGE" }, orderBy: { createdAt: "desc" } }), []);
  
  /*const defaultImages = [
    { id: "img-1", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193653/a8e57699-e68f-4772-8e0a-ea0bcb324213_xt4c0x.jpg", caption: "" },
    { id: "img-2", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193653/bb119f6b-389a-4826-b717-8ce6e2529fa6_yrqx6t.jpg", caption: "" },
    { id: "img-3", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193653/bca46f55-0084-4c6d-a9f0-fa2063ecbf8f_tfvuxs.jpg", caption: "" },
    { id: "img-4", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193653/d9d2fbcb-4966-4a60-97c3-5fde6bd58d11_zghlof.jpg", caption: "" },
    { id: "img-5", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193653/fa9ac784-2118-4995-927e-42624b60755f_cldgrf.jpg", caption: "" },
    { id: "img-6", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193651/39b3f5e8-2f8b-4525-9bc9-5c7f492915d0_m7nhxm.jpg", caption: "" },
    { id: "img-7", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193651/7f79301d-5a32-4784-9862-ebe89ccc3132_ne9atf.jpg", caption: "" },
    { id: "img-8", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193651/2eed840a-e452-44dd-9097-9f8fc247b482_x65nuf.jpg", caption: "" },
    { id: "img-9", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193651/7b7f49da-ec71-4f5f-a4c2-43dd1620d6a2_vqitsv.jpg", caption: "" },
    { id: "img-10", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193652/79b3a059-3fc4-40ca-8943-e27877b49ae1_nacfwq.jpg", caption: "" },
    { id: "img-11", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193652/20181a57-7327-40fb-a08a-397595b7ef55_xhpscj.jpg", caption: "" },
    { id: "img-12", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193652/51629f48-2055-4c24-938e-90e3fc0b7a5b_kiibmd.jpg", caption: "" },
    { id: "img-13", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193652/543ba95a-8e05-4a52-85bb-18a72382f33d_yviouo.jpg", caption: "" },
    { id: "img-14", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193652/16567d17-c657-460d-9dae-98d91660fb1a_pwogx4.jpg", caption: "" },
    { id: "img-15", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193651/8cf74d59-9437-4cb4-8518-10fe14e60eca_tt75yb.jpg", caption: "" },
    { id: "img-16", url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193651/6af6a1d9-299e-42db-a62f-07b087fcaf95_tk0wa9.jpg", caption: "" }
  ];*/

  const items = dbItems || [];

  return (
    <>
      <PageBanner title="Image Gallery" parent="Media" />
      <section className="container-x py-14">
        {items.length === 0 ? (
          <div className="text-center text-slate-500 py-10 text-lg font-medium">
            Images coming soon.
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {items.map((g, idx) => (
              <figure
                key={g.id}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={(idx % 4) * 80}
              >
                <div className="overflow-hidden">
                  <Photo
                    src={g.url}
                    alt={g.caption || "Gallery image"}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {g.caption && (
                  <figcaption className="bg-white px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-700 border-t border-slate-100">
                    {g.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

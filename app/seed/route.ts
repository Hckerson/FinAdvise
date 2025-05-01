import { uploadImage } from "../../lib/cloudinary/connection";
import path from "path";
const seedUrl = [
  {url: "/public/pexels-photo-5648101.jpeg", name:"David Mitchell"},
  {url: "/public/pexels-photo-5717641.jpeg", name:"Jennifer Williams"},
  {url: "/public/pexels-photo-5792627.jpeg", name:"Michael Rodriguez"},
  {url: "/public/pexels-photo-5905921.jpeg", name:"Amanda Chen"},
  {url: "/public/pexels-photo-5952651.jpeg", name:"Robert Johnson"},
  {url: "/public/pexels-photo-6626903.jpeg", name:"Sophia Patel"},
];

const seed = async () => {
  try {
    for (const item of seedUrl) {
      const absolutePath = path.join(process.cwd(), item.url);
      console.log("Absolute Path:", absolutePath); 
      await uploadImage(absolutePath, item.name);
    }
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
};

export async function GET(){
  try {
    await seed();
    return new Response("Seeded successfully", { status: 200 });
  } catch (error) {
    return new Response("Error seeding the database", { status: 500 });
  }
}

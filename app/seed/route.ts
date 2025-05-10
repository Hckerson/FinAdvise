
export async function GET(){
  try {
    return new Response("Seeded successfully", { status: 200 });
  } catch (error) {
    return new Response("Error seeding the database", { status: 500 });
  }
}

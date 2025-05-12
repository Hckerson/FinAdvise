export async function GET(
  request: Request,
  { params }: { params: { [key: string]: string } }
) {
  try {
    // Now you can access params here
    console.log("Route params:", params);
    return new Response("Seeded successfully", { status: 200 });
  } catch (error) {
    return new Response("Error seeding the database", { status: 500 });
  }
}

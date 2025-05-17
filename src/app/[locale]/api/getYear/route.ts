
export async function GET() {
  const date = new Date();
  return Response.json({ status: true, message: "year successfully retrieved", year: date.getFullYear()})
}
export async function onRequest(context) {

  const db = context.env.DB;

  const userId = new URL(
    context.request.url
  ).searchParams.get("userId");

  const result = await db.prepare(
    "SELECT * FROM messages WHERE user_id=? ORDER BY id ASC"
  )
  .bind(userId)
  .all();

  return Response.json(result.results);
}

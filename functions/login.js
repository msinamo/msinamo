export async function onRequestPost(context) {
  const db = context.env.DB;

  const { username, password } =
    await context.request.json();

  const user = await db.prepare(
    "SELECT * FROM users WHERE username=? AND password=?"
  )
  .bind(username, password)
  .first();

  if (!user) {
    return Response.json({
      success: false
    });
  }

  return Response.json({
    success: true,
    user
  });
}

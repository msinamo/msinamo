export async function onRequestPost(context) {
  const db = context.env.DB;

  const { userId, sender, message } =
    await context.request.json();

  await db.prepare(
    "INSERT INTO messages (user_id,sender,message) VALUES (?,?,?)"
  )
  .bind(userId, sender, message)
  .run();

  return Response.json({
    success: true
  });
}

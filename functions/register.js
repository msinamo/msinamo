export async function onRequestPost(context) {
  const db = context.env.DB;
  const { username, password } = await context.request.json();

  try {
    await db.prepare(
      "INSERT INTO users (username, password) VALUES (?, ?)"
    )
    .bind(username, password)
    .run();

    return Response.json({
      success: true
    });

  } catch {
    return Response.json({
      success: false,
      error: "username exists"
    });
  }
}

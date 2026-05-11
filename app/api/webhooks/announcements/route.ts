import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    const secret = req.headers.get("x-ville-secret");

    if (secret !== process.env.GYMDESK_WEBHOOK_SECRET) {
      return Response.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const body = await req.json();

    const {
      title,
      date,
      category,
      text,
      link,
    } = body;

    const { error } = await supabaseAdmin
      .from("announcements")
      .insert({
        title,
        post_date: date,
        category,
        text,
        link,
      });

    if (error) {
      return Response.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Failed to create announcement",
      },
      { status: 500 }
    );
  }
}
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
      time,
      location,
      description,
      sport,
      type,
      tags,
      imageLabel,
      link,
    } = body;

    const { error } = await supabaseAdmin
      .from("events")
      .insert({
        title,
        event_date: date,
        event_time: time || "TBA",
        location: location || "Las Vegas, NV",
        description,
        sport,
        type,
        tags: tags || [],
        image_label: imageLabel || sport,
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
        error: "Failed to create event",
      },
      { status: 500 }
    );
  }
}
// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Assessment from "@/models/Assessment";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     await connectDB();

//     await Assessment.create({
//       name: body.name,
//       email: body.email,
//       whatsapp: body.whatsapp,
//       answers: body.answers,
//     });

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false });
//   }
// }









// // import { connectDB } from "@/lib/mongodb";

// // export async function GET() {
// //   await connectDB();

// //   return Response.json({ success: true, message: "DB Connected ✅" });
// // }












import { connectDB } from "@/lib/mongodb";
import Assessment from "@/models/Assessment";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    // 🔥 ADD THESE HERE
    console.log("🔥 API HIT");
    console.log("DATA:", body);

    const { name, email, whatsapp, answers } = body;

    const newEntry = await Assessment.create({
      name,
      email,
      whatsapp,
      answers,
    });

    return Response.json({
      success: true,
      data: newEntry,
    });
  } catch (error) {
    console.error("❌ ERROR:", error);

    return Response.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
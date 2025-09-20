// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/Router/PublicLayout"); // redirect ke folder PublicLayout
}

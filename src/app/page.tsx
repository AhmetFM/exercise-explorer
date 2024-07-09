import HomeCards from "@/components/HomeCards";
import HomeHeader from "@/components/HomeHeader";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[calc(100vh-96px)]">
      <HomeHeader />
      <HomeCards />
    </main>
  );
}

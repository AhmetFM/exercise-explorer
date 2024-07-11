import HomeAbout from "@/components/HomeAbout";
import HomeCards from "@/components/HomeCards";
import HomeHeader from "@/components/HomeHeader";
import HomeWorkouts from "@/components/HomeWorkouts";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeCards />
      <HomeWorkouts />
      <HomeAbout />
    </main>
  );
}

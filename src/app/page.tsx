import HomeAbout from "@/components/HomeAbout";
import HomeCards from "@/components/HomeCards";
import HomeContact from "@/components/HomeContact";
import HomeHeader from "@/components/HomeHeader";
import HomeWorkouts from "@/components/HomeWorkouts";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeCards />
      <HomeWorkouts />
      <HomeAbout />
      <HomeContact />
    </main>
  );
}

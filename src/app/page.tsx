import HomeAbout from "@/components/home/HomeAbout";
import HomeCards from "@/components/home/HomeCards";
import HomeContact from "@/components/home/HomeContact";
import HomeHeader from "@/components/home/HomeHeader";
import HomeWorkouts from "@/components/home/HomeWorkouts";

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

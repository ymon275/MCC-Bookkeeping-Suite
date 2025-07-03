import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";
import { NavigationBar } from "../components/navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MCC Utility" },
    { name: "description", content: "Welcome to MCC Utility!" },
  ];
}

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Welcome />
    </div>
  );
}

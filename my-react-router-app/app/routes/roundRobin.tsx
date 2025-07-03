import { RoundRobinApp } from "~/components/roundRobinApp";
import type { Route } from "./+types/roundRobin";
import { NavigationBar } from "~/components/navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Round Robin" },
    { name: "description", content: "Welcome to MCC Utility!" },
  ];
}

export default function RoundRobin() {
  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: "5rem" }}>
        <RoundRobinApp />
      </div>
    </div>
  );
}

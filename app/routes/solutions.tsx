import { redirect } from "react-router";

export async function loader() {
  return redirect("/about/our-vision");
}

export default function SolutionsRoute() {
  return null;
}

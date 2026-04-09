import { redirect } from "react-router";

export async function loader() {
  return redirect("/about/refined-grey-mastery");
}

export default function StandardsRoute() {
  return null;
}

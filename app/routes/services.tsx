import { redirect } from "react-router";

export async function loader() {
  return redirect("/contact/strategy-brief");
}

export default function ServicesRoute() {
  return null;
}

import { useMemo } from "react";
import { useLocation } from "react-router";

import { resolveStitchContract } from "@/lib/stitch/contracts";

export function useRouteContract() {
  const location = useLocation();

  return useMemo(() => resolveStitchContract(location.pathname), [location.pathname]);
}

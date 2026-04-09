import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation, useNavigation } from "react-router";

import { pagePresenceVariants } from "@/lib/stitch/motion";

export function RouteOrchestrator() {
  const location = useLocation();
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (navigation.state !== "idle") {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(false), 140);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [navigation.state]);

  return (
    <>
      <AnimatePresence initial={false}>
        {showLoader ? (
          <motion.div
            className="fixed left-0 right-0 top-0 z-[90] h-0.5 bg-outline-variant/35 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-full w-1/3 bg-primary"
              initial={{ x: "-120%" }}
              animate={{ x: ["-120%", "420%"] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.95, ease: "linear" }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pagePresenceVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

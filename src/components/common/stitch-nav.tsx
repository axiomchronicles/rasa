import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router";

import { pullNavSkin } from "@/lib/stitch/classmaps";
import { navSets, stitchContracts, type StitchSignature } from "@/lib/stitch/contracts";
import { cn } from "@/lib/utils";

type StitchNavProps = {
  signature: StitchSignature;
};

const transition = { duration: 0.52, ease: [0.22, 1, 0.36, 1] as const };

export function StitchNav({ signature }: StitchNavProps) {
  const contract = stitchContracts[signature];
  const homeNavbar = stitchContracts["architectural-home"].nav;
  const skin = pullNavSkin(homeNavbar.identity);
  const links = navSets[homeNavbar.identity];
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      className={skin.shell}
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
    >
      <div className={skin.inner}>
        <Link to="/" reloadDocument className="flex items-center" aria-label="RASA home">
          <img
            src="/logo.png"
            alt="RASA"
            className="h-8 md:h-9 w-auto object-contain"
            decoding="async"
          />
        </Link>

        <div className={skin.links}>
          {links.map((link) => {
            const isActive = link.id === contract.nav.active;

            return (
              <Link
                key={link.id}
                className={cn(isActive ? skin.activeLink : skin.idleLink)}
                to={link.to}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link className={cn(skin.cta, "hidden md:inline-flex")} to={homeNavbar.ctaTo}>
            {homeNavbar.ctaLabel}
          </Link>

          <button
            type="button"
            className="inline-flex md:hidden items-center justify-center w-10 h-10 border border-stone-300 text-stone-900 hover:bg-stone-200/60 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen ? (
          <motion.div
            className="md:hidden border-t border-stone-200 bg-stone-100/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => {
                const isActive = link.id === contract.nav.active;

                return (
                  <Link
                    key={`mobile-${link.id}`}
                    className={cn(
                      "font-headline text-sm uppercase tracking-widest font-bold py-2 border-b",
                      isActive
                        ? "text-stone-900 border-stone-900"
                        : "text-stone-500 border-transparent hover:text-stone-900"
                    )}
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link className={cn(skin.cta, "w-full justify-center mt-2")} to={homeNavbar.ctaTo}>
                {homeNavbar.ctaLabel}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}

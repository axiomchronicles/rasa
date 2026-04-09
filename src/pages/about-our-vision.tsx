import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, Network, TrendingUp } from "lucide-react";

import { StitchPageFrame } from "@/components/common/stitch-page-frame";
import { SectionWave } from "@/components/stitch/section-wave";
import { Badge } from "@/components/ui/badge";

const metricLedger = [
  { value: "94%", label: "Waste Reduction" },
  { value: "2.4x", label: "Speed of Service" },
  { value: "310+", label: "Active Systems" },
  { value: "12", label: "Global Offices" },
];

export function AboutOurVisionPage() {
  return (
    <StitchPageFrame signature="about-our-vision" className="bg-background text-on-surface font-body">
      <main>
        <SectionWave profile="hero" className="pt-48 pb-32 px-12 max-w-7xl mx-auto">
          {({ itemVariants }) => (
            <>
              <div className="grid grid-cols-12 gap-8 items-end">
                <motion.div variants={itemVariants} className="col-span-12 md:col-span-8">
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold block mb-6">
                    Our Narrative
                  </span>
                  <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9]">
                    Engineering
                    <br />
                    Operational
                    <br />
                    Mastery.
                  </h1>
                </motion.div>
                <motion.div variants={itemVariants} className="col-span-12 md:col-span-4 pb-4">
                  <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                    RASA began as a response to the fragmentation of the hospitality industry. We
                    don&apos;t just consult; we architect the backbone of successful cafe ecosystems.
                  </p>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mt-20 relative h-[600px] overflow-hidden">
                <img
                  alt="RASA Architectural Vision"
                  className="w-full h-full object-cover grayscale opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlXdb320nlihuz9ZaC4JX3hJhoxNBaBLwIPRlwiFaL2-SbeDGfxNMFg_veqqQnbAfv7xbomqJZW3EFNhtT7yXPnLt59P9h8Q7B8oR1qBSe4jyrfUsw0CJzP45bJCuyer_sfyS_jkXBMsOwBYtuoESVr2-rRyaHtS9wP3_AM9XXgVuPPxWOnvmoEo7bViiogNgGesdfvY6Q9dsNgOkUbPOYpS_zLUIO-Hf9SI_bkesp1tHuAXtpjHGqxhw9lZqQtdkULToW9rUuir8j"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            </>
          )}
        </SectionWave>

        <SectionWave profile="grid" className="py-32 bg-surface-container-low">
          {({ itemVariants }) => (
            <div className="max-w-7xl mx-auto px-12 grid grid-cols-12 gap-16">
              <motion.div variants={itemVariants} className="col-span-12 md:col-span-5 space-y-8">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                  The Vision
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight">
                  Standardizing excellence across global hospitality.
                </h2>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  We envision a world where every cafe operates with the precision of a Swiss
                  timepiece, where chaos is replaced by systems, and growth is a mathematical
                  certainty.
                </p>
              </motion.div>

              <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4">
                <motion.div
                  variants={itemVariants}
                  className="bg-surface-container-lowest p-10 col-span-2 md:col-span-1 flex flex-col justify-between aspect-square border-l-4 border-primary"
                >
                  <Boxes className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-headline font-bold text-xl mb-2">Building Systems</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Implementing rigid SOPs that survive personnel changes and market shifts.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-surface-container-lowest p-10 col-span-2 md:col-span-1 flex flex-col justify-between aspect-square border-l-4 border-tertiary"
                >
                  <Network className="h-10 w-10 text-tertiary" />
                  <div>
                    <h3 className="font-headline font-bold text-xl mb-2">Removing Chaos</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Auditing and refining every operational touchpoint to eliminate inefficiency.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-primary text-on-primary p-10 col-span-2 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-headline font-bold text-2xl mb-1">Scalable Operations</h3>
                    <p className="text-on-primary/80 font-light max-w-md">
                      Creating the blueprint that allows a single location to become a multi-region
                      franchise.
                    </p>
                  </div>
                  <TrendingUp className="h-12 w-12" />
                </motion.div>
              </div>
            </div>
          )}
        </SectionWave>

        <SectionWave profile="editorial" className="py-32 px-12 max-w-7xl mx-auto">
          {({ itemVariants }) => (
            <div className="grid grid-cols-12 gap-16 items-center">
              <motion.div variants={itemVariants} className="col-span-12 md:col-span-5 order-2 md:order-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-surface-container transition-all group-hover:inset-0" />
                  <img
                    alt="Founder Portrait"
                    className="relative grayscale w-full aspect-[4/5] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvOUg5fW1Kh4ORP2-w38bbVHk6J7yVsM6PoMW4npFEJmS4Q-41R7ajvfK_hXHzPJQJzLqEA9oUF3DLz7wbqmN9F8i_6qhA-ufCEYmzC-bUCtrcyWSEArIqERG38IlpMNQmC8om9T92ilnH63hGdtd33SGbMIRmdBn6AJpnKoYJP4Jhem4gDIsgn-JhGHVZR-nxan3__oQL98iuLArsekHWcQG_BV0Cn-fw3mAaNfeNMpbBeKnpF81pDFau9vVLOKl3ES-Hn1Ac15sU"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-8">
                  <p className="font-headline font-bold text-lg">Alexandre Rossi</p>
                  <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Principal Consultant &amp; Founder
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="col-span-12 md:col-span-7 order-1 md:order-2">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold block mb-8">
                  From the Founder
                </span>
                <blockquote className="font-headline text-3xl md:text-4xl font-light italic leading-snug text-on-surface mb-12">
                  &quot;Scale is not an accident. It is the result of a relentless commitment to
                  removing the friction between an idea and its execution. We built RASA to be
                  that bridge.&quot;
                </blockquote>
                <div className="space-y-6 text-on-surface-variant leading-relaxed font-body">
                  <p>
                    After a decade in high-stakes hospitality, I realized that most cafes fail not
                    because of their coffee, but because of their mechanics. They are businesses
                    built on passion but lacking in protocol.
                  </p>
                  <p>
                    RASA was founded to inject institutional-grade consulting into the independent
                    cafe sector. We treat your operational flow as a product, iterating and
                    refining until it is indestructible.
                  </p>
                </div>
                <div className="mt-12">
                  <button className="bg-surface-container-lowest border-b-2 border-primary text-primary px-0 py-2 text-sm font-bold uppercase tracking-widest hover:text-on-surface hover:border-on-surface transition-all duration-300">
                    Download Methodology (.PDF)
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </SectionWave>

        <SectionWave profile="cta" className="py-24 bg-surface-container-highest">
          {({ itemVariants }) => (
            <div className="max-w-7xl mx-auto px-12 text-center">
              <motion.div variants={itemVariants} className="inline-flex mb-8">
                <Badge className="gap-2 px-4 py-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-on-tertiary-fixed" />
                  The RASA Standard Certification
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="font-headline text-3xl font-bold mb-6">
                Our quality is measurable.
              </motion.h2>
              <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-on-surface-variant mb-12">
                Every partner we work with undergoes the RASA audit, a 140-point inspection
                covering procurement, logistics, and personnel management.
              </motion.p>
              <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/20">
                {metricLedger.map((entry) => (
                  <div key={entry.label} className="bg-surface p-8 text-left">
                    <p className="text-4xl font-headline font-extrabold text-primary mb-2">{entry.value}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                      {entry.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </SectionWave>
      </main>
    </StitchPageFrame>
  );
}

import { motion } from "framer-motion";
import { DraftingCompass, LayoutTemplate, Milestone, Verified } from "lucide-react";

import { StitchPageFrame } from "@/components/common/stitch-page-frame";
import { SectionWave } from "@/components/stitch/section-wave";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Building Systems",
    detail:
      "Structural design for complex workflows that ensures every touchpoint is calculated and repeatable.",
    Icon: DraftingCompass,
  },
  {
    title: "Removing Chaos",
    detail:
      "Engineered elimination of operational noise through data-driven refinement and noise-reduction protocols.",
    Icon: LayoutTemplate,
  },
  {
    title: "Scalable Operations",
    detail:
      "Standardized frameworks that allow global expansion without the degradation of quality or performance.",
    Icon: Milestone,
  },
];

const metrics = [
  { value: "94%", label: "Waste Reduction" },
  { value: "2.4x", label: "Speed of Service" },
  { value: "310+", label: "Active Systems" },
  { value: "12", label: "Global Offices" },
];

export function AboutRefinedGreyMasteryPage() {
  return (
    <StitchPageFrame signature="about-refined-grey-mastery" className="bg-surface text-on-surface antialiased">
      <main className="pt-20">
        <SectionWave profile="hero" className="relative h-[870px] flex items-center overflow-hidden">
          {({ itemVariants }) => (
            <>
              <div className="absolute inset-0 z-0 bg-surface-container">
                <img
                  alt="Architectural concrete geometry"
                  className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLhgUzz7mV9Yn9xUGsIem96f2iSHWMa0jryBsT2Wq7ZmeAgwt80dmPfYYIEx3-HMpsdNFybtZCl5MI2b-JsiZkZmn-QaOnh_TXCDGiHIkYQV-KgOyfzt_MaG5nEcT88iaMDgl5F5U3zi13kX_aQIVD4xbNH1NwSo0_ay73YYhKD_SWtNsttpgyFEYTL0YRorKB2Jo21vZNQMVcdtCfUtUcc2w_2n7svESflHzsA-CnukhxjAleMX1fHVmx9gWqzyHwaU8n5uR_JEj1"
                />
              </div>

              <div className="relative z-10 w-full px-6 md:px-20 max-w-[1440px] mx-auto">
                <div className="max-w-4xl">
                  <motion.span
                    variants={itemVariants}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-6 block"
                  >
                    The Standard for Hospitality
                  </motion.span>
                  <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-on-surface leading-[0.95]"
                  >
                    Engineering
                    <br />
                    Operational Mastery
                  </motion.h1>
                </div>
              </div>
            </>
          )}
        </SectionWave>

        <SectionWave profile="editorial" className="bg-surface py-32 px-6 md:px-20">
          {({ itemVariants }) => (
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
              <motion.div variants={itemVariants} className="md:col-span-5">
                <h2 className="text-3xl font-bold tracking-tight text-on-surface leading-tight">
                  The fragmentation problem isn&apos;t just an inefficiency, it&apos;s a structural
                  failure.
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col gap-8">
                <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                  For decades, the hospitality industry has relied on patchwork solutions to address
                  systemic challenges. Disparate software, manual workflows, and tribal knowledge
                  have created a ceiling on scalability. RASA was founded to dismantle this cycle.
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                  We don&apos;t provide consulting; we provide engineering. By applying rigorous
                  architectural principles to the operational backbone of global brands, we convert
                  chaos into a standardized, high-performance engine capable of limitless growth.
                </p>
              </motion.div>
            </div>
          )}
        </SectionWave>

        <SectionWave profile="grid" className="bg-surface-container-low py-32 px-6 md:px-20">
          {({ itemVariants }) => (
            <div className="max-w-[1440px] mx-auto">
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-2xl font-bold tracking-tight text-on-surface">
                  Our Architectural Pillars
                </h2>
                <div className="w-12 h-0.5 bg-primary mt-4" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {pillars.map(({ title, detail, Icon }) => (
                  <motion.div
                    key={title}
                    variants={itemVariants}
                    className="bg-surface-container-lowest p-12 flex flex-col gap-8 border border-outline-variant/10 group hover:bg-surface-container-high transition-colors"
                  >
                    <Icon className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold mb-4">{title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </SectionWave>

        <SectionWave profile="editorial" className="bg-surface py-32 px-6 md:px-20">
          {({ itemVariants }) => (
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-16 md:gap-32">
              <motion.div variants={itemVariants} className="md:col-span-5 aspect-[4/5] bg-surface-container overflow-hidden">
                <img
                  alt="Alexandre Rossi portrait"
                  className="w-full h-full object-cover grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr1wvNjzylLhVag6FUHeJbj-mvEoRdPvghVv0u5vlqp-vnjk_iNysFS2A7Xp7Vsbis21xcxSBXexQ0qqjxGcM48LkzlrSRmuK_ckcAhe6DfSTDu64siCR2uHnOAB_SHYNF1FrGaxZvYlYyXZ2EDz928tiWR0bmJ-40hwIDpBL83XBAJAI9alr98wIaVF0Jjhhq1DipOgdL-FlEJtJefh-ghV0VVi-ymnerO26AmDXVs_RANM2WoBOCYDLtcertxAvlamvRl5RHsd-3"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="md:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-8 block">
                  The Founder
                </span>
                <blockquote className="text-3xl md:text-5xl font-black tracking-tight text-on-surface leading-[1.1] mb-10 italic">
                  &quot;Scale is not an accident of good luck; it is the inevitable result of precise
                  operational architecture.&quot;
                </blockquote>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Alexandre Rossi</span>
                  <span className="text-sm text-on-surface-variant">
                    Chief Systems Architect &amp; Founder
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </SectionWave>

        <SectionWave profile="rail" className="bg-inverse-surface py-24 px-6 md:px-20">
          {({ itemVariants }) => (
            <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
              {metrics.map((entry) => (
                <motion.div
                  key={entry.label}
                  variants={itemVariants}
                  className="flex flex-col border-l border-outline-variant/20 pl-8"
                >
                  <span className="text-3xl md:text-4xl font-black text-surface">{entry.value}</span>
                  <span className="text-xs uppercase tracking-widest text-inverse-on-surface mt-2 font-medium">
                    {entry.label}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </SectionWave>

        <SectionWave
          profile="cta"
          className="bg-surface-container-high py-32 px-6 md:px-20 text-center"
        >
          {({ itemVariants }) => (
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <motion.div variants={itemVariants}>
                <Badge className="mb-8">Proprietary Framework</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-black text-on-surface mb-6 tracking-tight"
                id="certification"
              >
                The RASA Standard Certification
              </motion.h2>
              <motion.p variants={itemVariants} className="text-on-surface-variant mb-12 leading-relaxed">
                Elevate your enterprise to the Architectural Standard. Our certification process
                validates your operational integrity and readiness for infinite scale.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Button variant="inverse" size="lg" className="px-12">
                  Request Audit
                </Button>
                <Button variant="outline" size="lg" className="px-12">
                  View Framework
                </Button>
              </motion.div>
            </div>
          )}
        </SectionWave>
      </main>
    </StitchPageFrame>
  );
}

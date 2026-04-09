import { ArrowRight, Camera, Globe, Mail, Share2 } from "lucide-react";
import { Link } from "react-router";

import { RasaMark } from "@/components/common/rasa-mark";
import { pullFooterSkin } from "@/lib/stitch/classmaps";
import { stitchContracts, type StitchSignature } from "@/lib/stitch/contracts";

type StitchFooterProps = {
  signature: StitchSignature;
};

function DarkGridFooter({ signature }: StitchFooterProps) {
  const contract = stitchContracts[signature];
  const skin = pullFooterSkin(contract.footer.identity);
  const [offices, navigation] = contract.footer.groups;

  return (
    <footer className={skin.shell}>
      <div className={skin.grid}>
        <div className="space-y-6">
          <div className={skin.brand}>{contract.footer.brand}</div>
          <p className={skin.body}>{contract.footer.description}</p>
          <div className="flex gap-4">
            <a className={skin.iconBox} href="#" aria-label="Share">
              <Share2 className="h-4 w-4" />
            </a>
            <a className={skin.iconBox} href="#" aria-label="Gallery">
              <Camera className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className={skin.heading}>{offices.heading}</h5>
          <ul className="space-y-4 font-body text-sm text-stone-500">
            {offices.links.map((entry) => (
              <li key={entry.label} className="hover:text-stone-200 transition-colors">
                {entry.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className={skin.heading}>{navigation.heading}</h5>
          <ul className="space-y-4 font-body text-sm text-stone-500">
            {navigation.links.map((entry) => (
              <li key={entry.label}>
                <Link
                  className="hover:translate-x-1 inline-block transition-transform duration-200 hover:text-stone-200"
                  to={entry.to}
                >
                  {entry.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className={skin.heading}>Insights</h5>
          <p className="font-body text-sm text-stone-500">
            Subscribe to our quarterly journal on spatial psychology.
          </p>
          <div className="flex">
            <input
              className="bg-stone-900 border-none text-white text-sm px-4 py-3 focus:ring-1 focus:ring-stone-500 w-full outline-none placeholder-stone-600"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-stone-800 px-4 py-3 hover:bg-stone-700 transition-colors" type="button">
              <ArrowRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className={skin.divider}>
        <p className={skin.copy}>{contract.footer.copy}</p>
        <div className="flex gap-8">
          <a className="text-xs text-stone-600 hover:text-stone-400" href="#">
            Terms of Service
          </a>
          <a className="text-xs text-stone-600 hover:text-stone-400" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

function LightGridFooter({ signature }: StitchFooterProps) {
  const contract = stitchContracts[signature];
  const skin = pullFooterSkin(contract.footer.identity);

  return (
    <footer className={skin.shell}>
      <div className={skin.grid}>
        <div className="space-y-6">
          <div className={skin.brand}>{contract.footer.brand}</div>
          <p className={skin.body}>{contract.footer.description}</p>
        </div>

        {contract.footer.groups.map((group) => (
          <div key={group.heading} className="space-y-4">
            <h5 className={skin.heading}>{group.heading}</h5>
            <ul className="space-y-3">
              {group.links.map((entry) => (
                <li key={entry.label}>
                  <Link
                    className="font-body text-sm text-stone-500 hover:text-stone-700 transition-colors"
                    to={entry.to}
                  >
                    {entry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={skin.divider}>
        <div className="flex items-center gap-5 text-stone-500">
          <Globe className="h-4 w-4" />
          <Mail className="h-4 w-4" />
          <Share2 className="h-4 w-4" />
        </div>
        <p className={skin.copy}>{contract.footer.copy}</p>
      </div>
    </footer>
  );
}

function MinimalBarFooter({ signature }: StitchFooterProps) {
  const contract = stitchContracts[signature];
  const skin = pullFooterSkin(contract.footer.identity);

  return (
    <footer className={skin.shell}>
      <div className={skin.grid}>
        <div className="flex items-center gap-3 opacity-50">
          <RasaMark className="size-4 text-primary" />
          <span className={skin.brand}>{contract.footer.brand}</span>
        </div>
        <p className={skin.copy}>{contract.footer.copy}</p>
      </div>
    </footer>
  );
}

export function StitchFooter({ signature }: StitchFooterProps) {
  const identity = stitchContracts[signature].footer.identity;

  if (identity === "dark-grid") {
    return <DarkGridFooter signature={signature} />;
  }

  if (identity === "minimal-bar") {
    return <MinimalBarFooter signature={signature} />;
  }

  return <LightGridFooter signature={signature} />;
}

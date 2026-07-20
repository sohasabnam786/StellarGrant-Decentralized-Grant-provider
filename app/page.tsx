import Link from "next/link";
import { Award, Shield, Zap, TrendingUp, Cpu, ArrowRight, Star, Coins } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StellarGrant | Decentralized Grant Platform",
  description: "Milestone-based decentralized grant funding powered by Stellar Soroban smart contracts",
};

const BENEFITS = [
  {
    icon: Shield,
    title: "Milestone Governance",
    description:
      "Funds are disbursed based on verified milestones managed by Soroban smart contracts. Direct on-chain transparency for every XLM.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Zap,
    title: "Instant settlements",
    description:
      "Stellar settlements confirm in seconds. Claim and distribute grant funding dynamically with extremely low gas fees (< 0.001 XLM).",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Coins,
    title: "GRNT Reward Minting",
    description:
      "Every contribution mints GRNT reward tokens at a 1:1 ratio, showing donor reputation and participation on-chain.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    icon: Cpu,
    title: "Fully Decentralized",
    description:
      "No middlemen, no administrative overhead. Direct connection between grant programs, organizations, and developers.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

const STATS = [
  { label: "Active Grants", value: "8", suffix: "" },
  { label: "Total Allocated", value: "75,000", suffix: " XLM" },
  { label: "Network", value: "Testnet", suffix: "" },
  { label: "Reward Token", value: "GRNT", suffix: "" },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* ── Hero section with brand-new indigo-gold palette ──────────────── */}
      <section className="relative flex flex-col items-center text-center pt-12 pb-16 gap-8 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[450px] h-[350px] rounded-full bg-secondary/8 blur-[100px] pointer-events-none" />

        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 text-sm font-semibold text-secondary animate-fade-in backdrop-blur-sm shadow-[0_0_15px_rgba(251,191,36,0.1)]">
          <Star className="w-4 h-4 fill-secondary" />
          Reimagined Stellar Soroban Grant Platform
        </div>

        {/* Headline */}
        <div className="space-y-6 animate-fade-in max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.05] font-sans">
            Empower Innovation <br />
            <span className="gradient-text font-serif italic font-medium">With Trustless Grants</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The next-generation protocol for funding public goods and developer grants on Stellar. 
            Automate milestone disbursements, verify work on-chain, and earn GRNT reward tokens.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in pt-6">
          <Link href="/campaigns" id="explore-campaigns-btn" className="btn-stellar px-8 py-4 text-base font-bold transition-all shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)]">
            <Award className="w-5 h-5 relative z-10" />
            <span>Browse Grant Programs</span>
          </Link>
          <Link href="/dashboard" id="wallet-dashboard-btn" className="btn-ghost px-8 py-4 text-base font-semibold border-white/20 hover:border-secondary/40">
            Access Dashboard
            <ArrowRight className="w-4 h-4 text-secondary" />
          </Link>
        </div>

        {/* Network indicator */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in pt-4">
          <div className="dot-active bg-secondary shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
          Live on Stellar Soroban Testnet
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {STATS.map(({ label, value, suffix }, i) => (
          <div
            key={label}
            className="glass-card p-6 md:p-8 text-center animate-fade-in hover:border-secondary/40 transition-all duration-300"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <p className="text-3xl md:text-4xl font-black gradient-text">
              {value}
              {suffix}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 font-medium tracking-wide uppercase">{label}</p>
          </div>
        ))}
      </section>

      {/* ── Benefits ──────────────────────────────────────────────────────── */}
      <section className="space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Future of Decentralized Funding
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Designed for developer grants, academic research, and public goods. Direct, milestones-driven, and on-chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {BENEFITS.map(({ icon: Icon, title, description, color, bg }, i) => (
            <div
              key={title}
              className="glass-card p-6 md:p-8 flex gap-6 animate-fade-in hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 border ${bg} group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={`w-6 h-6 md:w-7 md:h-7 ${color}`} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How StellarGrant Operates</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A frictionless flow from project creation to milestone distributions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              step: "01",
              title: "Connect Wallet & Register",
              desc: "Link your Freighter or other Stellar-compatible wallets instantly. No tedious registration or credit approvals.",
            },
            {
              step: "02",
              title: "Post or Apply for Grants",
              desc: "Post a grant program with structured XLM funding pools and deadlines, or apply directly to receive milestone allocations.",
            },
            {
              step: "03",
              title: "Claim Milestone Payments",
              desc: "Once milestones are achieved and verified, smart contracts release XLM dynamically while contributors gain GRNT tokens.",
            },
          ].map(({ step, title, desc }, i) => (
            <div key={step} className="glass-card p-6 md:p-8 space-y-4 animate-fade-in hover:border-secondary/40 transition-all duration-300" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-stellar-gradient flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="font-black text-white text-sm md:text-base">{step}</span>
              </div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Rebranded CTA Banner ──────────────────────────────────────────── */}
      <section className="glass-card max-w-5xl mx-auto p-10 md:p-14 lg:p-16 text-center space-y-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-stellar-gradient opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300" />
        <h2 className="text-4xl md:text-5xl font-bold relative tracking-tight">
          Ready to Post Your Grant Program?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto relative text-base md:text-lg">
          Join the decentralized public goods ecosystem on Stellar. Launch transparent developer grant pools and distribute XLM efficiently.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <Link
            href="/campaigns"
            id="cta-launch-campaign-btn"
            className="btn-stellar px-8 py-3.5 text-base font-bold shadow-[0_0_20px_rgba(99,102,241,0.2)]"
          >
            <Award className="w-5 h-5 relative z-10" />
            <span>Launch Grant Program</span>
          </Link>
          <Link
            href="/activity"
            id="cta-activity-feed-btn"
            className="btn-ghost px-8 py-3.5 text-base hover:border-secondary/35"
          >
            Monitor Live Grants
          </Link>
        </div>
      </section>
    </div>
  );
}

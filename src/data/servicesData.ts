export interface ServiceDetail {
  slug: string;
  category: "build" | "paid-media" | "growth-ops" | "markets-industries";
  categoryLabel: string;
  title: string;
  subtitle: string;
  iconName: string;
  heroHeadline: string;
  heroDescription: string;
  metrics: { value: string; label: string }[];
  deliverables: { title: string; desc: string }[];
  whyUs: string[];
  techStack: string[];
  faqs: { q: string; a: string }[];
}

export const allServicesCatalog: Record<string, ServiceDetail> = {
  // BUILD
  "web-development": {
    slug: "web-development",
    category: "build",
    categoryLabel: "BUILD",
    title: "Websites",
    subtitle: "WordPress, React & Next.js that convert",
    iconName: "Monitor",
    heroHeadline: "WordPress, React & Modern Web Platforms Engineered for Revenue",
    heroDescription: "High-performance custom WordPress builds, headless CMS architectures, and ultra-fast web applications designed to transform cold paid traffic into closed deals with sub-second speeds.",
    metrics: [
      { value: "0.6s", label: "Average Global TTFB" },
      { value: "100/100", label: "Lighthouse Performance" },
      { value: "+45%", label: "Average Conversion Rate Lift" },
      { value: "0", label: "Plugin Bloat" },
    ],
    deliverables: [
      { title: "Custom WordPress & Gutenberg Blocks", desc: "Bespoke ACF Pro custom blocks built for marketing autonomy with zero Elementor/Divi lag." },
      { title: "Headless WordPress & React Frontends", desc: "Decoupled WordPress backends with ultra-fast frontend caching for lightning speeds." },
      { title: "Server-Side Tracking Integration", desc: "Pre-configured sGTM and Meta Conversions API (CAPI) from day one." },
      { title: "Mobile-First Direct Response UX", desc: "Zero layout shift (CLS 0.00) and friction-free inquiry forms." },
    ],
    whyUs: [
      "Custom clean-coded WordPress themes without 60+ vulnerable plugins.",
      "Senior full-stack developers who understand ad conversion economics.",
      "Direct integration with your CRM, analytics database, and ad platforms.",
    ],
    techStack: ["WordPress", "ACF Pro", "React", "Next.js", "Tailwind CSS", "PHP 8.3"],
    faqs: [
      { q: "How is DeployMedia WordPress different from typical agencies?", a: "Most agencies install bloated themes with 50+ plugins that slow your site down to 4 seconds. We write clean, custom block themes loading in under 1 second." },
      { q: "Can our marketing team still edit everything easily?", a: "Yes. We create tailored ACF Gutenberg blocks so you can add sections, edit copy, and launch pages without breaking the design." },
    ],
  },
  "wordpress-development": {
    slug: "wordpress-development",
    category: "build",
    categoryLabel: "BUILD",
    title: "WordPress & Elementor Development",
    subtitle: "Elementor Pro, Custom Themes, WooCommerce",
    iconName: "Monitor",
    heroHeadline: "Custom WordPress & Elementor Pro: Fast, Beautiful, and Built to Scale",
    heroDescription: "We engineer lightweight, custom Elementor Pro and bespoke WordPress platforms. Custom beautiful design, 2.0s average load time, WooCommerce tuning, and absolute marketing freedom.",
    metrics: [
      { value: "2.0s", label: "Average Load Time" },
      { value: "Elementor Pro", label: "Custom Beautiful Design" },
      { value: "100%", label: "Visual Drag & Drop Autonomy" },
      { value: "WooCommerce", label: "High-Speed Conversion Tuned" },
    ],
    deliverables: [
      { title: "Elementor Pro Custom Beautiful Design", desc: "Bespoke, visual drag-and-drop page architecture tailored to your brand without breaking mobile responsiveness." },
      { title: "Custom Gutenberg & ACF Pro Blocks", desc: "Modular, clean-coded block themes for marketing teams that prefer lightweight block editing." },
      { title: "WooCommerce High-Conversion Tuning", desc: "Custom checkout funnels, instant search, slide-out cart, and payment gateway optimizations." },
      { title: "Speed Optimization & 2.0s Core Web Vitals", desc: "DOM depth minimization, asset minification, Redis object caching, and Cloudflare CDN integration." },
      { title: "Enterprise Security & Managed Updates", desc: "Zero vulnerability hardening, daily cloud backups, and seamless WordPress core updates." },
    ],
    whyUs: [
      "We build custom, beautiful Elementor Pro websites optimized by senior developers to load in 2.0s.",
      "Complete drag-and-drop autonomy for your marketing team without breaking design consistency.",
      "Direct integration with your CRM, Meta CAPI, Google Ads, and analytics tracking.",
    ],
    techStack: ["WordPress 6+", "Elementor Pro", "ACF Pro", "Gutenberg", "PHP 8.3", "WooCommerce", "Redis", "Cloudflare"],
    faqs: [
      {
        q: "Do you build websites in Elementor?",
        a: "Yes, absolutely! We specialize in custom Elementor Pro website design and development. Every page is custom designed to match your brand identity, with visual drag-and-drop flexibility so your team can easily create and edit pages without touching code."
      },
      {
        q: "Can an Elementor website actually load fast (2.0s)?",
        a: "Yes! While unoptimized Elementor sites can be slow, our senior engineers optimize DOM depth, eliminate unused CSS/JS widgets, compress media, and implement Redis caching and Cloudflare CDN so your Elementor site maintains a fast 2.0s load time."
      },
      {
        q: "Can my marketing team edit copy and add new pages without breaking the design?",
        a: "Yes. We configure Elementor Global Style Kits, typography presets, and reusable section templates. Your team gets complete visual editing freedom while the site layout and branding remain perfectly intact."
      },
      {
        q: "Do you build custom WooCommerce stores with Elementor?",
        a: "Yes. We build high-converting e-commerce stores using Elementor Pro for custom product archive templates, dynamic product pages, checkout funnels, and payment gateway integrations."
      },
      {
        q: "Do you also support custom Gutenberg and ACF Pro if we prefer that?",
        a: "Yes! We support both. If you prefer Elementor Pro for visual drag-and-drop or Gutenberg / ACF Pro for pure code blocks, we build according to your team's exact workflow."
      },
      {
        q: "Can you redesign or speed up our existing slow Elementor website?",
        a: "Yes. We provide comprehensive WordPress audits. We clean up bloated plugins, optimize the Elementor layout hierarchy, and improve page speed and Core Web Vitals down to 2.0s."
      },
      {
        q: "Do you provide training on how to use Elementor after handover?",
        a: "Yes. Once the site is deployed, we provide customized video walkthroughs and documentation showing your marketing team how to edit text, swap images, and publish new blog posts and landing pages."
      },
      {
        q: "How do you ensure security and backups for WordPress?",
        a: "We configure automated daily off-site cloud backups, two-factor authentication, enterprise firewall rules, and proactive plugin updates to keep your site completely secure."
      },
    ],
  },
  "web-apps": {
    slug: "web-apps",
    category: "build",
    categoryLabel: "BUILD",
    title: "Web Apps",
    subtitle: "Portals, dashboards, CRMs",
    iconName: "LayoutGrid",
    heroHeadline: "Full-Stack Custom Web Apps, Client Portals & Dashboards",
    heroDescription: "High-performance software applications, customer onboarding portals, and custom internal tools shipped in weeks, not quarters.",
    metrics: [
      { value: "3 Weeks", label: "Average MVP Delivery" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "SOC2", label: "Compliant Architecture" },
      { value: "10x", label: "Faster Than Traditional Agencies" },
    ],
    deliverables: [
      { title: "Client Portals & SaaS Dashboards", desc: "Secure authentication, role-based access, and real-time data feeds." },
      { title: "Custom Internal Business Tools", desc: "Replace messy spreadsheets with bespoke high-speed software." },
      { title: "API Integrations & Microservices", desc: "Seamless connections to Stripe, HubSpot, Supabase, and Postgres." },
    ],
    whyUs: [
      "Engineered with clean TypeScript, PostgreSQL, and scalable serverless backends.",
      "Eliminates expensive monthly SaaS fees by building tailored internal software.",
    ],
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    faqs: [
      { q: "How long does a custom web app take to ship?", a: "Our average MVP timeline is 3 to 5 weeks from initial architecture spec to live deployment." },
    ],
  },
  "shopify-store-ksa": {
    slug: "shopify-store-ksa",
    category: "build",
    categoryLabel: "BUILD",
    title: "Shopify Store · KSA",
    subtitle: "Mada, VAT, local shipping",
    iconName: "Store",
    heroHeadline: "High-Converting Shopify Stores Built for Saudi Arabia (KSA)",
    heroDescription: "Fully localized Saudi e-commerce stores featuring Mada, Tabby/Tamara buy-now-pay-later, ZATCA tax invoice compliance, and Arabic-first typography.",
    metrics: [
      { value: "Mada", label: "Instant Payment Gateway" },
      { value: "Tabby/Tamara", label: "BNPL Integrated" },
      { value: "ZATCA", label: "100% Tax Compliant" },
      { value: "3.8x", label: "Average Mobile ROAS" },
    ],
    deliverables: [
      { title: "Local Payment Gateways", desc: "Native Mada, Apple Pay, Tabby, Tamara, and STC Pay integrations." },
      { title: "Bilingual Arabic & English UI", desc: "Right-to-Left (RTL) CSS optimization with high-conversion local UX." },
      { title: "GCC Shipping & Courier Sync", desc: "Seamless integration with SMSA, Aramex, and Saudi Post (SPL)." },
    ],
    whyUs: [
      "Deep understanding of how Saudi consumers buy, trust, and pay online.",
      "Custom Shopify Liquid theme engineering without bloated slow apps.",
    ],
    techStack: ["Shopify Plus", "Liquid", "Mada", "Tabby", "Tamara", "ZATCA QR"],
    faqs: [
      { q: "Is Arabic typography fully supported?", a: "Yes, we implement native RTL layouts with premium Arabic typography tailored for Saudi shoppers." },
    ],
  },
  "shopify-store-uae": {
    slug: "shopify-store-uae",
    category: "build",
    categoryLabel: "BUILD",
    title: "Shopify Store · UAE",
    subtitle: "Launch-ready with tracking",
    iconName: "Store",
    heroHeadline: "Ultra-Fast Shopify Storefronts for UAE & Dubai Brands",
    heroDescription: "Engineered for high-disposable-income shoppers across Dubai, Abu Dhabi, and the Emirates. Server-side tracking, multi-currency, and express checkout.",
    metrics: [
      { value: "1.2s", label: "Checkout Initiation" },
      { value: "9.5/10", label: "Meta CAPI Match Quality" },
      { value: "Apple Pay", label: "One-Click Purchase" },
      { value: "4.4x", label: "Blended Return on Spend" },
    ],
    deliverables: [
      { title: "Express UAE Checkout Flow", desc: "Apple Pay, Tamara, Tabby, and local card acquirers." },
      { title: "Server-Side Tracking Stack", desc: "Pre-configured sGTM, Meta Conversions API, and TikTok Events API." },
      { title: "Same-Day Delivery Integration", desc: "Inventory sync with local UAE fulfillment hubs." },
    ],
    whyUs: [
      "Zero app bloat; custom coded themes that load instantly on 5G mobile networks.",
      "Full server-side attribution so Meta and Google scale profitably.",
    ],
    techStack: ["Shopify Plus", "Meta CAPI", "Apple Pay", "Tabby", "Tailwind"],
    faqs: [
      { q: "Can we support multiple currencies across the GCC?", a: "Yes, automatic AED, SAR, QAR, KWD, and USD currency switching with localized pricing." },
    ],
  },
  "marketing-tools": {
    slug: "marketing-tools",
    category: "build",
    categoryLabel: "BUILD",
    title: "Marketing Tools",
    subtitle: "Calculators and microsites",
    iconName: "Code",
    heroHeadline: "Interactive Marketing Tools, ROI Calculators & Quiz Funnels",
    heroDescription: "High-intent lead generation tools and micro-apps that convert cold visitors at 3x to 5x higher rates than static forms.",
    metrics: [
      { value: "4.2x", label: "Higher Lead Conversion" },
      { value: "100%", label: "Enriched Pipeline Signal" },
      { value: "0", label: "Sales Rep Friction" },
      { value: "<50ms", label: "Interactive Compute" },
    ],
    deliverables: [
      { title: "Interactive ROI Calculators", desc: "Show prospects exact financial gains before asking for an email." },
      { title: "Multi-Step Quiz & Assessment Funnels", desc: "Pre-qualify leads based on budget, company size, and urgency." },
      { title: "Automated Lead Scoring", desc: "Direct webhook routing to your CRM and sales war room." },
    ],
    whyUs: [
      "Custom React and Next.js micro-tools that hook into your existing website seamlessly.",
    ],
    techStack: ["React", "TypeScript", "Next.js", "n8n Webhooks", "HubSpot"],
    faqs: [
      { q: "Can these tools be embedded in WordPress or Webflow?", a: "Yes, we can deploy them standalone or embed them via clean iframe or web components." },
    ],
  },

  // PAID MEDIA
  "google-ads": {
    slug: "google-ads",
    category: "paid-media",
    categoryLabel: "PAID MEDIA",
    title: "Google Ads",
    subtitle: "Search, Shopping, PMax",
    iconName: "Search",
    heroHeadline: "Google Ads Management Engineered for CPA, Not Impressions",
    heroDescription: "Search, Shopping, and Performance Max campaigns with strict negative keyword filters and offline conversion feedback to eliminate wasted spend.",
    metrics: [
      { value: "-46%", label: "Average CPA Reduction" },
      { value: "4.8x", label: "Average ROAS Lift" },
      { value: "$40M+", label: "Managed Spend Experience" },
      { value: "100%", label: "Search Term Hygiene" },
    ],
    deliverables: [
      { title: "Exact Match Query Harvesting", desc: "Ruthlessly isolate high-commercial-intent search queries." },
      { title: "Performance Max Segmentation", desc: "Segment asset groups by product margins and audience signals." },
      { title: "Offline Conversion Sync", desc: "Train Google's bidding algorithm on closed deals instead of form fills." },
    ],
    whyUs: [
      "Senior media buyers in the accounts daily — zero junior account managers.",
      "We kill underperforming search terms before they drain budget.",
    ],
    techStack: ["Google Search", "Performance Max", "Google Tag Manager", "BigQuery"],
    faqs: [
      { q: "How quickly do we see results?", a: "Query isolation and negative keyword pruning typically yield a 20-40% drop in CPA within the first 30 days." },
    ],
  },
  "meta-ads": {
    slug: "meta-ads",
    category: "paid-media",
    categoryLabel: "PAID MEDIA",
    title: "Meta Ads",
    subtitle: "Facebook & Instagram",
    iconName: "Compass",
    heroHeadline: "Meta Ads Scaling: Creative-Led Testing & Advantage+ Growth",
    heroDescription: "Consolidated campaign architectures and weekly creative testing sprints that actually exit the learning phase and scale profitably.",
    metrics: [
      { value: "5-10", label: "New Creative Angles / Wk" },
      { value: "9.2/10", label: "Meta CAPI Event Match" },
      { value: "5.2x", label: "Blended Return" },
      { value: "3", label: "Consolidated Campaigns" },
    ],
    deliverables: [
      { title: "Advantage+ Broad Scaling", desc: "Consolidate fragmented ad sets into high-liquidity campaigns." },
      { title: "Weekly Creative Testing Engine", desc: "Iterative testing of hooks, angles, and direct-response formats." },
      { title: "Server-Side Conversions API (CAPI)", desc: "100% signal delivery resilient against iOS tracking limits." },
    ],
    whyUs: [
      "Creative that speaks directly to customer pain points backed by rigorous data.",
    ],
    techStack: ["Advantage+", "Meta CAPI", "Facebook Ads", "Instagram Ads"],
    faqs: [
      { q: "Do you produce the creative?", a: "Yes, our creative team cuts hooks, static frames, and motion assets weekly." },
    ],
  },
  "linkedin-ads": {
    slug: "linkedin-ads",
    category: "paid-media",
    categoryLabel: "PAID MEDIA",
    title: "LinkedIn Ads",
    subtitle: "ABM for B2B pipeline",
    iconName: "Users",
    heroHeadline: "LinkedIn B2B Pipeline: ABM Targeting for High-Ticket Contracts",
    heroDescription: "Stop buying cheap clicks from junior employees. We target verified decision-makers and C-suite buyers with high-intent demo requests.",
    metrics: [
      { value: "$600", label: "Cost Per Qualified Demo" },
      { value: "$2.4M+", label: "Pipeline Value Generated" },
      { value: "88%", label: "Target Account Penetration" },
      { value: "0", label: "Junk Leads" },
    ],
    deliverables: [
      { title: "Account-Based Marketing (ABM)", desc: "Target custom company lists from Apollo, ZoomInfo, and HubSpot." },
      { title: "Document & Carousel Ads", desc: "Deliver high-value industry frameworks that build instant authority." },
      { title: "Demo Request Funnel Alignment", desc: "Optimize for booked calls on calendar rather than native lead forms." },
    ],
    whyUs: [
      "We sync LinkedIn campaign bids directly to closed-won opportunities in your CRM.",
    ],
    techStack: ["LinkedIn Campaign Manager", "HubSpot ABM", "Apollo.io", "n8n"],
    faqs: [
      { q: "Is LinkedIn too expensive for our budget?", a: "LinkedIn is expensive per click, but when targeted to enterprise accounts, its cost-per-closed-deal is often lower than Google Search." },
    ],
  },
  "microsoft-ads": {
    slug: "microsoft-ads",
    category: "paid-media",
    categoryLabel: "PAID MEDIA",
    title: "Microsoft Ads",
    subtitle: "Bing + LinkedIn targeting",
    iconName: "Activity",
    heroHeadline: "Microsoft Advertising: Capture Enterprise Desktop Buyers",
    heroDescription: "Leverage Bing and Microsoft Edge to reach older, higher-income, PC-first decision-makers at 30-50% lower cost-per-click than Google.",
    metrics: [
      { value: "-35%", label: "Lower CPC vs Google" },
      { value: "+60%", label: "Desktop Intent Volume" },
      { value: "3.9x", label: "Average Enterprise ROAS" },
      { value: "100%", label: "LinkedIn Data Overlay" },
    ],
    deliverables: [
      { title: "Bing Search Exact Match", desc: "Mirror top converting Google Search terms into Microsoft Ads." },
      { title: "LinkedIn Demographic Profile Overlay", desc: "Filter search queries by company, industry, and job function." },
      { title: "High-Income Consumer Capture", desc: "Target affluent desktop users on Windows and Office 365 surfaces." },
    ],
    whyUs: [
      "Most agencies ignore Microsoft Ads. We turn it into a high-margin profit center.",
    ],
    techStack: ["Microsoft Ads", "Bing Search", "LinkedIn Profiles", "Edge Network"],
    faqs: [
      { q: "Can we import existing Google Ads campaigns?", a: "Yes, we audit and import top performing clusters and tune them for Microsoft's auction dynamics." },
    ],
  },
  "apple-search-ads": {
    slug: "apple-search-ads",
    category: "paid-media",
    categoryLabel: "PAID MEDIA",
    title: "Apple Search Ads",
    subtitle: "App Store installs",
    iconName: "Smartphone",
    heroHeadline: "Apple Search Ads: High-Intent iOS App Store Customer Acquisition",
    heroDescription: "Capture active iOS app searchers right when they intend to download. Scaled keyword bidding and custom product pages that drive high-LTV subscribers.",
    metrics: [
      { value: "$1.85", label: "Cost Per Exact Install" },
      { value: "64%", label: "Conversion Rate (Tap to DL)" },
      { value: "3.2x", label: "Subscriber LTV" },
      { value: "100%", label: "Attribution Accuracy" },
    ],
    deliverables: [
      { title: "Brand & Competitor Keyword Defense", desc: "Protect your app name and conquer competitor search queries." },
      { title: "Custom Product Pages (CPP)", desc: "Tailor screenshots and copy to match specific search queries." },
      { title: "Subscription Revenue Feedback", desc: "Connect RevenueCat and Adapty to optimize for trial-to-paid conversion." },
    ],
    whyUs: [
      "Direct app acquisition specialists with proven track records across top iOS charts.",
    ],
    techStack: ["Apple Search Ads", "RevenueCat", "Custom Product Pages", "MMP"],
    faqs: [
      { q: "How do custom product pages help?", a: "They align the App Store listing visually with the exact keyword, boosting conversion rates by up to 40%." },
    ],
  },
  "chatgpt-ads": {
    slug: "chatgpt-ads",
    category: "paid-media",
    categoryLabel: "PAID MEDIA",
    title: "ChatGPT Ads",
    subtitle: "Ads inside AI answers",
    iconName: "Sparkles",
    heroHeadline: "ChatGPT & Generative AI Search Advertising",
    heroDescription: "Get your brand positioned inside the AI assistants and LLMs that high-intent buyers now query before they ever visit a traditional search engine.",
    metrics: [
      { value: "First-Mover", label: "Competitive Advantage" },
      { value: "+300%", label: "AI Search Query Growth" },
      { value: "High-Intent", label: "Buyer Mindset" },
      { value: "0", label: "Ad Clutter" },
    ],
    deliverables: [
      { title: "Generative Engine Optimization (GEO)", desc: "Structure entity data and digital PR so AI models cite your brand." },
      { title: "Conversational Intent Placements", desc: "Target high-context solution queries across emerging AI ad surfaces." },
      { title: "Brand Recommendation Authority", desc: "Ensure your software is the default recommended tool in AI prompts." },
    ],
    whyUs: [
      "DeployMedia is at the bleeding edge of AI search and LLM conversational acquisition.",
    ],
    techStack: ["OpenAI APIs", "Perplexity Ads", "GEO Framework", "Entity Graphs"],
    faqs: [
      { q: "How does conversational advertising work?", a: "We optimize your brand presence across conversational search surfaces where users seek recommendations directly." },
    ],
  },
  "performance-max": {
    slug: "performance-max",
    category: "paid-media",
    categoryLabel: "PAID MEDIA",
    title: "Performance Max",
    subtitle: "PMax built for Saudi Arabia & GCC",
    iconName: "Zap",
    heroHeadline: "Performance Max Re-Architected for GCC & Saudi Arabia",
    heroDescription: "Segmented asset groups, strict brand exclusions, and bilingual Arabic/English creative assets engineered for real closed revenue across the Gulf.",
    metrics: [
      { value: "5.4x", label: "ROAS Across GCC" },
      { value: "-44%", label: "Cost Per Valid Booking" },
      { value: "0", label: "Brand Cannibalization" },
      { value: "100%", label: "Localized Assets" },
    ],
    deliverables: [
      { title: "Brand Exclusion Lists", desc: "Prevent PMax from taking credit for people already searching your company name." },
      { title: "High-Margin Asset Group Isolation", desc: "Separate high-value products from low-margin inventory." },
      { title: "Localized Arabic Video & Display", desc: "Gulf-specific creative that builds immediate local trust." },
    ],
    whyUs: [
      "Deep experience managing PMax spend across Riyadh, Jeddah, Dubai, and Abu Dhabi.",
    ],
    techStack: ["Google PMax", "Arabic Creative", "Merchant Center", "Server GTM"],
    faqs: [
      { q: "Does PMax waste money on low quality clicks?", a: "Default PMax does. We apply custom audience signals and negative brand lists to force Google to find incremental new buyers." },
    ],
  },

  // GROWTH & OPS
  "creative-strategy": {
    slug: "creative-strategy",
    category: "growth-ops",
    categoryLabel: "GROWTH & OPS",
    title: "Creative Strategy",
    subtitle: "Weekly ad-testing engine",
    iconName: "Palette",
    heroHeadline: "Direct-Response Creative Strategy & Testing Engine",
    heroDescription: "The algorithm decides the audience; creative decides if you win. We run a weekly creative sprint producing 5-10 fresh hooks, statics, and motion ads.",
    metrics: [
      { value: "10+", label: "New Creative Angles / Wk" },
      { value: "+38%", label: "Average CTR Lift" },
      { value: "-40%", label: "Creative Fatigue Rate" },
      { value: "100%", label: "Direct Response Focus" },
    ],
    deliverables: [
      { title: "Weekly Hook Testing Cadence", desc: "Test pain-point hooks, comparison angles, and social proof variations." },
      { title: "Motion & UGC Video Production", desc: "High-converting video cuts designed specifically for Meta and TikTok feeds." },
      { title: "High-CTR Static Ad Frameworks", desc: "Clean, authoritative visual cards that stop the scroll." },
    ],
    whyUs: [
      "We design ads based on auction data and CTR signals, not subjective agency art.",
    ],
    techStack: ["Figma", "Premiere", "After Effects", "Motion Graphic Engine"],
    faqs: [
      { q: "How often do we receive new ads?", a: "Every week we ship new concepts, iterate on top performers, and prune fatigued creatives." },
    ],
  },
  "landing-pages": {
    slug: "landing-pages",
    category: "growth-ops",
    categoryLabel: "GROWTH & OPS",
    title: "Landing Pages",
    subtitle: "CRO tied to your campaigns",
    iconName: "Layout",
    heroHeadline: "High-Converting Landing Pages Tied Directly to Your Ads",
    heroDescription: "Stop sending paid traffic to a leaky website bucket. We engineer landing pages with sub-second speeds, zero distraction, and high-intent conversion flows.",
    metrics: [
      { value: "0.5s", label: "Load Time on Mobile" },
      { value: "12-25%", label: "Average Opt-in Rate" },
      { value: "+54%", label: "Lead-to-Demo Conversion" },
      { value: "A/B", label: "Continuous Split Testing" },
    ],
    deliverables: [
      { title: "Message-Match Architecture", desc: "Align ad headlines directly with landing page value propositions." },
      { title: "Multi-Step Form Psychology", desc: "Frictionless form progression that doubles completion rates." },
      { title: "Edge-Hosted Next.js Pages", desc: "Sub-second load times that keep mobile bounce rates below 20%." },
    ],
    whyUs: [
      "We are full-stack developers AND media buyers. We build pages where clicks actually turn into pipeline.",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    faqs: [
      { q: "Do you handle copywriting?", a: "Yes, our direct-response copywriters write every headline, bullet, and CTA." },
    ],
  },
  "analytics-attribution": {
    slug: "analytics-attribution",
    category: "growth-ops",
    categoryLabel: "GROWTH & OPS",
    title: "Analytics & Attribution",
    subtitle: "Server-side tracking",
    iconName: "BarChart3",
    heroHeadline: "Server-Side Tracking & Full-Funnel Attribution You Can Defend",
    heroDescription: "Server-Side Google Tag Manager, Meta Conversions API (CAPI), and GA4 BigQuery raw event exports that recover up to 35% of lost conversion data.",
    metrics: [
      { value: "9.5/10", label: "Event Match Quality" },
      { value: "+30%", label: "Recovered Conversion Signal" },
      { value: "2 Years", label: "Cookie Persistence" },
      { value: "100%", label: "Cookieless Resilience" },
    ],
    deliverables: [
      { title: "Server-Side GTM on Cloud Run", desc: "First-party data collection bypassing browser ad blockers." },
      { title: "Meta Conversions API (CAPI)", desc: "Direct server-to-server event sync with 9+ match quality." },
      { title: "GA4 BigQuery Data Pipeline", desc: "Un-sampled raw event streaming for board-ready revenue attribution." },
    ],
    whyUs: [
      "No agency black boxes. Clean, verifiable data you can trust in financial meetings.",
    ],
    techStack: ["Server GTM", "Meta CAPI", "Google Cloud", "BigQuery", "Looker Studio"],
    faqs: [
      { q: "Why is server-side tracking necessary?", a: "Browser updates (iOS Safari, Brave, Chrome privacy sandbox) block 30-40% of standard pixel data. Server-side tracking restores that lost signal." },
    ],
  },
  "ai-automations": {
    slug: "ai-automations",
    category: "growth-ops",
    categoryLabel: "GROWTH & OPS",
    title: "AI Automations",
    subtitle: "Lead routing, reporting, ops",
    iconName: "Bot",
    heroHeadline: "AI Workflow Automations: Zero Manual Grunt Work",
    heroDescription: "AI agents that qualify leads, enrich company records, write CRM notes, and alert sales teams on Slack or WhatsApp in under 60 seconds.",
    metrics: [
      { value: "<60s", label: "Lead Response Time" },
      { value: "25+ hrs", label: "Saved Per Rep / Wk" },
      { value: "100%", label: "CRM Sync Accuracy" },
      { value: "0", label: "Manual Data Entry" },
    ],
    deliverables: [
      { title: "AI Lead Enrichment & Scoring", desc: "Enrich incoming leads with company revenue, employee count, and ICP match." },
      { title: "Instant Notification Triggers", desc: "Send automated WhatsApp and Slack alerts to senior account executives." },
      { title: "Automated Executive Reporting", desc: "Daily pacing and performance summaries compiled by AI directly into Slack." },
    ],
    whyUs: [
      "We build production-grade AI pipelines that work seamlessly with your existing tech stack.",
    ],
    techStack: ["OpenAI", "Claude", "n8n", "HubSpot", "Slack API", "WhatsApp API"],
    faqs: [
      { q: "Will this integrate with our CRM?", a: "Yes, we integrate with HubSpot, Salesforce, GoHighLevel, Pipedrive, and custom databases." },
    ],
  },
  "n8n-automation": {
    slug: "n8n-automation",
    category: "growth-ops",
    categoryLabel: "GROWTH & OPS",
    title: "n8n Automation",
    subtitle: "Self-hosted workflows",
    iconName: "Cpu",
    heroHeadline: "n8n Workflow Automation: Self-Hosted & Enterprise Ready",
    heroDescription: "Replace expensive Zapier/Make subscriptions with self-hosted n8n instances. Unlimited task execution, complete data sovereignty, and AI agent integration.",
    metrics: [
      { value: "$0", label: "Per-Task Execution Fees" },
      { value: "100%", label: "Data Sovereignty (GDPR)" },
      { value: "Unlimited", label: "Scalable Task Workflows" },
      { value: "VPC", label: "Private Cloud Deployment" },
    ],
    deliverables: [
      { title: "Enterprise Self-Hosted n8n Setup", desc: "Deployed on your AWS, DigitalOcean, or Hetzner private servers." },
      { title: "Complex Multi-Step Business Logic", desc: "Branching workflows, webhooks, error handling, and database writebacks." },
      { title: "Offline Revenue Synchronization", desc: "Sync closed-won CRM stage changes back into Google and Meta Ads." },
    ],
    whyUs: [
      "We are certified n8n infrastructure engineers who build robust, fault-tolerant pipelines.",
    ],
    techStack: ["n8n Self-Hosted", "Docker", "PostgreSQL", "Webhooks", "Node.js"],
    faqs: [
      { q: "Why choose n8n over Zapier?", a: "n8n offers self-hosting for complete data privacy, unlimited executions without extra fees, and native AI capabilities." },
    ],
  },
  "resource-augmentation": {
    slug: "resource-augmentation",
    category: "growth-ops",
    categoryLabel: "GROWTH & OPS",
    title: "Resource Augmentation",
    subtitle: "A senior operator in your team",
    iconName: "UserCheck",
    heroHeadline: "Embed a Senior Operator Directly Into Your Team",
    heroDescription: "Skip the 3-month hiring cycle. Embed a senior full-stack developer or media buyer directly into your Slack channels and GitHub repositories this week.",
    metrics: [
      { value: "Day 1", label: "Deployment Speed" },
      { value: "Senior Only", label: "Principal Engineers & Buyers" },
      { value: "Slack / Git", label: "Direct Team Integration" },
      { value: "No Hiring Risk", label: "Month-to-Month Flexibility" },
    ],
    deliverables: [
      { title: "Fractional Senior Full-Stack Engineer", desc: "Next.js, React, and API engineering embedded in your sprints." },
      { title: "Senior Media Buyer & Growth Director", desc: "Hands-on-keyboard execution managing 6-figure ad budgets." },
      { title: "Technical Infrastructure Architect", desc: "Builds your tracking, automations, and landing page engines." },
    ],
    whyUs: [
      "No juniors, no recruitment fees. True senior talent ready to execute immediately.",
    ],
    techStack: ["Slack", "GitHub", "Jira", "Next.js", "Google Ads", "Meta Ads"],
    faqs: [
      { q: "How quickly can someone start?", a: "We can onboard and embed a senior operator into your team in as little as 3 business days." },
    ],
  },

  // MARKETS & INDUSTRIES
  "saudi-arabia": {
    slug: "saudi-arabia",
    category: "markets-industries",
    categoryLabel: "MARKETS & INDUSTRIES",
    title: "Saudi Arabia",
    subtitle: "Riyadh, Jeddah, Dammam",
    iconName: "MapPin",
    heroHeadline: "Performance Marketing & Web Engineering for Saudi Arabia (KSA)",
    heroDescription: "Specialized digital growth for Riyadh, Jeddah, and the Kingdom. Saudi dialect creative, local Mada payments, and bilingual Arabic/English web apps.",
    metrics: [
      { value: "KSA", label: "Market Leadership" },
      { value: "Arabic", label: "Native Saudi Dialect" },
      { value: "Mada", label: "Local Payment Ready" },
      { value: "5.4x", label: "Average KSA ROAS" },
    ],
    deliverables: [
      { title: "Saudi Dialect & Cultural Nuance", desc: "High-converting Arabic copy tailored to how Saudi consumers and B2B buyers think." },
      { title: "Local Payment & Shipping Gateways", desc: "Seamless Mada, Tamara, Tabby, and SMSA integration." },
      { title: "Riyadh & Jeddah Focused Campaigns", desc: "Geotargeted Google and Meta campaigns reaching high-purchasing-power households." },
    ],
    whyUs: [
      "On-the-ground understanding of Vision 2030 market growth and consumer behavior.",
    ],
    techStack: ["Mada", "Tabby", "ZATCA", "Arabic Next.js", "Snapchat Ads"],
    faqs: [
      { q: "Do you run Snapchat ads in Saudi Arabia?", a: "Yes, Snapchat is a major channel in KSA. We run performance Snapchat campaigns with native video creative." },
    ],
  },
  "uae": {
    slug: "uae",
    category: "markets-industries",
    categoryLabel: "MARKETS & INDUSTRIES",
    title: "UAE",
    subtitle: "Dubai, Abu Dhabi, Sharjah",
    iconName: "MapPin",
    heroHeadline: "Performance Marketing & Web Development for UAE & Dubai",
    heroDescription: "High-ticket customer acquisition across Dubai and Abu Dhabi. Built for premium real estate, luxury DTC, professional services, and high-growth tech.",
    metrics: [
      { value: "Dubai & AUH", label: "High-Income Targeting" },
      { value: "-48%", label: "Cost Per Qualified Lead" },
      { value: "Bilingual", label: "English & Arabic" },
      { value: "4.8x", label: "Blended Return" },
    ],
    deliverables: [
      { title: "High-Net-Worth Individual (HNWI) Targeting", desc: "Engineered campaigns reaching decision-makers and luxury buyers." },
      { title: "Ultra-Fast UAE Mobile Websites", desc: "Next.js architecture with sub-second speeds on Du and Etisalat networks." },
      { title: "Meta, Google & LinkedIn Scaling", desc: "Multi-channel funnel capturing corporate and consumer demand." },
    ],
    whyUs: [
      "We know how competitive the Dubai ad auction is and how to win against legacy agencies.",
    ],
    techStack: ["Next.js", "Google Ads", "Meta Ads", "LinkedIn ABM", "WhatsApp"],
    faqs: [
      { q: "How do you handle multi-cultural audiences in Dubai?", a: "We run segmented campaigns with targeted creative for expats, local Emiratis, and international investors." },
    ],
  },
  "gcc": {
    slug: "gcc",
    category: "markets-industries",
    categoryLabel: "MARKETS & INDUSTRIES",
    title: "GCC",
    subtitle: "All six markets",
    iconName: "Globe",
    heroHeadline: "Pan-GCC Performance Marketing & Digital Infrastructure",
    heroDescription: "Unified growth campaigns across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. Multi-currency, bilingual, and cross-border logistics support.",
    metrics: [
      { value: "6", label: "GCC Countries Covered" },
      { value: "Multi-Currency", label: "SAR, AED, QAR, KWD" },
      { value: "+$12M", label: "GCC Pipeline Scaled" },
      { value: "100%", label: "Localized Tracking" },
    ],
    deliverables: [
      { title: "Cross-Border Campaign Architecture", desc: "Tailored bidding strategies accounting for different purchasing powers across the Gulf." },
      { title: "Unified Multi-Currency E-Commerce", desc: "Next.js and Shopify storefronts with dynamic local currency checkouts." },
      { title: "Pan-Gulf Server-Side Tracking", desc: "Unbroken attribution signal across all 6 GCC member states." },
    ],
    whyUs: [
      "Extensive track record scaling regional brands across the entire Arabian Gulf.",
    ],
    techStack: ["GCC Edge CDN", "Multi-Currency APIs", "Google PMax", "Meta CAPI"],
    faqs: [
      { q: "Can we run single campaigns across all 6 countries?", a: "We typically isolate Saudi Arabia and UAE from smaller markets (Qatar, Kuwait) for optimal budget efficiency." },
    ],
  },
  "ecommerce": {
    slug: "ecommerce",
    category: "markets-industries",
    categoryLabel: "MARKETS & INDUSTRIES",
    title: "E-commerce",
    subtitle: "Stores that scale on ads",
    iconName: "ShoppingCart",
    heroHeadline: "E-Commerce Growth: Sub-Second Storefronts & High-ROAS Ads",
    heroDescription: "We engineer lightning-fast Shopify and Next.js headless stores and scale them with aggressive Meta, Google Shopping, and TikTok media buying.",
    metrics: [
      { value: "4.6x", label: "Average Blended ROAS" },
      { value: "+300%", label: "Page Load Speedup" },
      { value: "-35%", label: "Cart Abandonment" },
      { value: "$15M+", label: "E-Com Revenue Generated" },
    ],
    deliverables: [
      { title: "Headless & Speed-Optimized Storefronts", desc: "Remove theme lag to maximize checkout completion rates." },
      { title: "Meta Advantage+ Scaling Engine", desc: "High-volume creative testing for winning product ads." },
      { title: "Google Performance Max & Shopping", desc: "High-intent product search terms that print profit." },
    ],
    whyUs: [
      "We focus on net profit and customer lifetime value, not vanity revenue.",
    ],
    techStack: ["Shopify Plus", "Next.js", "Meta Ads", "Google Shopping", "Klaviyo"],
    faqs: [
      { q: "What monthly spend is needed to scale?", a: "We typically partner with e-commerce brands spending $10k/month or more looking to scale to $100k+/month." },
    ],
  },
  "shopify-marketing": {
    slug: "shopify-marketing",
    category: "markets-industries",
    categoryLabel: "MARKETS & INDUSTRIES",
    title: "Shopify Marketing",
    subtitle: "Growth for Shopify stores",
    iconName: "ShoppingBag",
    heroHeadline: "Shopify Marketing & Growth Architecture",
    heroDescription: "Turn your Shopify store into a scalable revenue machine. Conversion rate optimization, server-side tracking, and multi-channel performance media.",
    metrics: [
      { value: "3.8x - 5.2x", label: "Target ROAS Range" },
      { value: "9.6/10", label: "Shopify CAPI Quality" },
      { value: "+40%", label: "Repeat Purchase Rate" },
      { value: "Weekly", label: "Creative Asset Drops" },
    ],
    deliverables: [
      { title: "Direct-to-Consumer Paid Ads", desc: "Scale Meta and Google Ads with deep Shopify catalog integration." },
      { title: "Shopify Checkout Optimization", desc: "One-click upsells and post-purchase cross-sells." },
      { title: "Klaviyo Email & SMS Lifecycle", desc: "Automated retention flows generating 25%+ of total store revenue." },
    ],
    whyUs: [
      "Certified Shopify Plus partners who understand both code and ad auctions.",
    ],
    techStack: ["Shopify Plus", "Meta Ads", "Google Ads", "Klaviyo", "Gorgias"],
    faqs: [
      { q: "Do you optimize our existing Shopify theme?", a: "Yes, we audit and remove slow apps, compress assets, and tune Core Web Vitals." },
    ],
  },
  "zid-marketing": {
    slug: "zid-marketing",
    category: "markets-industries",
    categoryLabel: "MARKETS & INDUSTRIES",
    title: "Zid Marketing",
    subtitle: "Growth for Zid stores",
    iconName: "Building2",
    heroHeadline: "Zid Store Marketing & Scaling for Saudi Arabia",
    heroDescription: "Specialized performance marketing and tracking architecture for merchants operating on the Zid Saudi e-commerce platform.",
    metrics: [
      { value: "Zid Native", label: "Platform Integration" },
      { value: "Saudi-First", label: "Customer Acquisition" },
      { value: "5.0x+", label: "Target Return on Spend" },
      { value: "100%", label: "Snapchat & Meta Tracking" },
    ],
    deliverables: [
      { title: "Zid Tracking & Pixel Setup", desc: "Accurate tracking for Meta, Snapchat, and TikTok on Zid stores." },
      { title: "Saudi Creative Production", desc: "Short-form video hooks designed for Saudi shoppers." },
      { title: "Zid Conversion Rate Optimization", desc: "Theme tuning for faster loading and fewer abandoned checkouts." },
    ],
    whyUs: [
      "Deep understanding of the Saudi Zid ecosystem and local market dynamics.",
    ],
    techStack: ["Zid Platform", "Snapchat Ads", "Meta Ads", "Mada", "TikTok Ads"],
    faqs: [
      { q: "How do you solve Zid tracking challenges?", a: "We implement custom webhook listeners to ensure purchases are reliably reported back to ad platforms." },
    ],
  },
  "b2b-saas": {
    slug: "b2b-saas",
    category: "markets-industries",
    categoryLabel: "MARKETS & INDUSTRIES",
    title: "B2B SaaS",
    subtitle: "Pipeline, not clicks",
    iconName: "Building",
    heroHeadline: "B2B SaaS Demand Generation & Closed-Won Pipeline",
    heroDescription: "Senior operators generating high-intent demo requests and qualified pipeline for B2B SaaS companies. Zero junior account managers. Pure closed-won focus.",
    metrics: [
      { value: "$2.4M+", label: "Net New Pipeline / Quarter" },
      { value: "-76%", label: "Demo Acquisition Cost" },
      { value: "4.8x", label: "Pipeline Velocity" },
      { value: "100%", label: "CRM Revenue Feedback" },
    ],
    deliverables: [
      { title: "Google Search Exact Intent Clusters", desc: "Capture software buyers actively searching for alternatives and competitors." },
      { title: "LinkedIn ABM Pipeline", desc: "Target decision-makers with high-value product demo offers." },
      { title: "Next.js SaaS Landing Pages", desc: "Sub-second product pages that convert cold traffic into booked calendar demos." },
      { title: "HubSpot & Salesforce Revenue Sync", desc: "Attribute closed revenue directly back to winning campaign keywords." },
    ],
    whyUs: [
      "We speak the language of CAC, LTV, payback period, and Net Revenue Retention.",
    ],
    techStack: ["Next.js", "LinkedIn Ads", "Google Ads", "HubSpot", "n8n", "Clearbit"],
    faqs: [
      { q: "How do you avoid low-quality leads?", a: "We eliminate native lead forms and optimize for calendar-booked demos with enriched company criteria." },
    ],
  },
};

export type Episode = {
  title: string;
  logline: string;
  stat: string;
  statLabel: string;
  tags: string[];
  link?: { label: string; href: string };
  upcoming?: boolean;
};

export type Season = {
  id: string;
  number: number;
  title: string;
  setting: string;
  years: string;
  status?: string;
  synopsis: string;
  color: string;
  episodes: Episode[];
};

export const profile = {
  name: "Abitha Rao",
  showTitle: ["The", "Abitha", "Show"],
  tagline:
    "An engineer who shipped safety-critical software for BMW and Mercedes walks into business school and starts asking, “but who is this for?”",
  linkedin: "https://www.linkedin.com/in/abitha-rao-5293401a7/",
  github: "https://github.com/Abitha-Rao",
};

export const recap = [
  {
    kicker: "Season 0",
    title: "She finishes first, then keeps going",
    body: "In Vizag she stays top of her class at Timpany School for twelve straight years, captains the throwball team, learns Bharatanatyam for ten, and finishes school with offers from every old NIT and BIT.",
  },
  {
    kicker: "Season 1",
    title: "She builds things early",
    body: "At NIT Warangal she graduates in the top 5%, founds a 200-strong women's mentoring network, and finishes national runner-up twice with products she built herself.",
  },
  {
    kicker: "Season 2",
    title: "She ships where failure isn't allowed",
    body: "At Qualcomm she joins the founding team of its first automotive chipset, writes the PRDs, unblocks five carmakers, and gets promoted about 42% faster than average.",
  },
  {
    kicker: "Season 3",
    title: "She switches sides of the table",
    body: "At ISB she moves from building the thing to deciding what gets built: seller interviews, A/B tests, GenAI prototypes, and a Razorpay PM Challenge final.",
  },
];

export const seasons: Season[] = [
  {
    id: "s0",
    number: 0,
    title: "Before the Pilot",
    setting: "Timpany School, Vizag",
    years: "Childhood – 2019",
    synopsis:
      "A schoolgirl in Vizag keeps coming first, captains the throwball team, and has every old NIT and BIT to choose from by the end of it.",
    color: "#2EC4B6",
    episodes: [
      {
        title: "Twelve Years Running",
        logline:
          "Class valedictorian and General Proficiency Rank 1 at Timpany Secondary School, every year for twelve years in a row.",
        stat: "12",
        statLabel: "years at Rank 1",
        tags: ["Academics", "Consistency"],
      },
      {
        title: "Captain on the Court",
        logline:
          "Captain of the school throwball team, on top of the rank-one report cards.",
        stat: "Captain",
        statLabel: "school throwball team",
        tags: ["Sport", "Leadership"],
      },
      {
        title: "Ten Years of Bharatanatyam",
        logline:
          "Alongside school, she learns Bharatanatyam in Vizag for ten years: the classical Indian dance form that rewards hours of unglamorous practice.",
        stat: "10",
        statLabel: "years of Bharatanatyam",
        tags: ["Dance", "Discipline"],
      },
      {
        title: "Finale: Every Door Open",
        logline:
          "99.67 percentile in JEE Main and 342/450 in BITSAT, both in 2019. Every old NIT and BIT offers her a seat, and she picks Warangal.",
        stat: "99.67",
        statLabel: "JEE Main percentile",
        tags: ["JEE Main", "BITSAT"],
      },
    ],
  },
  {
    id: "s1",
    number: 1,
    title: "The Origin Story",
    setting: "NIT Warangal",
    years: "2019 – 2023",
    synopsis:
      "An electronics undergrad keeps getting distracted by a better question than “how does it work?”, namely “who needs it?”",
    color: "#FFD23F",
    episodes: [
      {
        title: "Pilot: Go Corona Go",
        logline:
          "Lockdown, 2020. She builds an interactive game that teaches hand hygiene to students at her old school, Timpany. First product, first users.",
        stat: "300+",
        statLabel: "students played",
        tags: ["Python", "Social impact"],
        link: { label: "See the code", href: "https://github.com/Abitha-Rao/GoCoronaGo" },
      },
      {
        title: "Lean In",
        logline:
          "She founds the Lean In chapter on campus, builds a mentor-mentee network, and runs career workshops and financial literacy sessions for young girls.",
        stat: "200+",
        statLabel: "women in the network",
        tags: ["Founder", "Community"],
      },
      {
        title: "Five Thousand Students",
        logline:
          "As UI/UX designer on the App Team she wireframes and user-tests the campus app so finding an event stops being a treasure hunt.",
        stat: "5K+",
        statLabel: "students served",
        tags: ["UX", "User testing"],
      },
      {
        title: "The Heist",
        logline:
          "Case-O-Heist, BIT Sindri. Her team pitches an ML model that scores credit risk for peer-to-peer lending and walks out with the prize money.",
        stat: "Top 2",
        statLabel: "of 300+ teams",
        tags: ["Fintech", "ML", "Case comp"],
      },
      {
        title: "Ikshana",
        logline:
          "A gamified app that helps visually impaired children aged 3 to 10 build listening and memory skills, shaped by conversations with their parents. It places second at the All-India Open Innovation Challenge and is offered funding and incubation.",
        stat: "Top 2",
        statLabel: "of 1,400+ teams",
        tags: ["0→1", "User interviews", "Incubated"],
      },
      {
        title: "1.3 Seconds",
        logline:
          "Summer internship at Qualcomm. A lag that makes XR users queasy drops from 1.3s to 0.8s, ships to 10+ flagship chipsets, and earns her a full-time offer.",
        stat: "38%",
        statLabel: "less latency",
        tags: ["Qualcomm", "Internship"],
      },
      {
        title: "The Calculator",
        logline:
          "Second internship. She builds a compute-performance calculator that twelve engineers adopt, because nobody enjoys measuring by hand.",
        stat: "96%",
        statLabel: "less measuring time",
        tags: ["Tooling", "Adoption"],
      },
      {
        title: "Finale: The General Secretary",
        logline:
          "Executive in first year, Joint Secretary in third, then elected General Secretary of the ECE Association, the bridge between faculty and 700+ students. She graduates a Merit Scholar with a full tuition waiver.",
        stat: "80+",
        statLabel: "events executed",
        tags: ["Leadership", "Top 5%"],
      },
    ],
  },
  {
    id: "s2",
    number: 2,
    title: "Safety-Critical",
    setting: "Qualcomm, Hyderabad",
    years: "2023 – 2026",
    synopsis:
      "A founding-team engineer on Qualcomm's first automotive chipset learns that the hard part is rarely the code. It's five carmakers, three teams and one deadline.",
    color: "#FF3D81",
    episodes: [
      {
        title: "Zero to One",
        logline:
          "She builds a core subsystem from scratch. The architecture is adopted across the first three flagship product lines.",
        stat: "0→1",
        statLabel: "across 3 product lines",
        tags: ["Platform", "Ownership"],
      },
      {
        title: "ASIL-D",
        logline:
          "Shipping under ISO 26262 ASIL-D, the strictest safety standard in the industry. “It mostly works” is not a release criterion.",
        stat: "99%",
        statLabel: "code coverage",
        tags: ["Compliance", "Quality"],
      },
      {
        title: "The Hotfix",
        logline:
          "A multi-million-dollar milestone is about to slip. She lines up critical hotfixes across teams and the date holds.",
        stat: "2 wks",
        statLabel: "of delay averted",
        tags: ["Risk", "Cross-team"],
      },
      {
        title: "The PRDs",
        logline:
          "Five customer-requested features, each with a PRD and acceptance criteria she wrote, delivered across three teams. Two releases land ahead of plan.",
        stat: "25%",
        statLabel: "faster releases",
        tags: ["Product", "Delivery"],
      },
      {
        title: "41 to 78",
        logline:
          "Release quality is stuck at 41%. Two months and twenty failing checks later, the compliance issues are gone.",
        stat: "41→78%",
        statLabel: "release quality",
        tags: ["Metrics", "Data"],
      },
      {
        title: "Twenty-Four Hours",
        logline:
          "A P0 blocker turns up during Volkswagen's pre-launch validation. She solves it on her own before the next day ends.",
        stat: "24 hrs",
        statLabel: "to clear a P0",
        tags: ["Customer", "Crisis"],
      },
      {
        title: "700 Milliseconds",
        logline:
          "A latency spike is holding up Li Auto's timeline. She finds the root cause and wins QualStar, Qualcomm's company-wide recognition.",
        stat: "QualStar",
        statLabel: "company-wide award",
        tags: ["Debugging", "Award"],
      },
      {
        title: "Finale: Fast Track",
        logline:
          "Validating 15+ modules ahead of each release cuts client escalations by 80%. The promotion arrives in 1.4 years against the usual 2.4.",
        stat: "42%",
        statLabel: "faster promotion",
        tags: ["Stakeholders", "Promotion"],
      },
    ],
  },
  {
    id: "s3",
    number: 3,
    title: "The Pivot",
    setting: "Indian School of Business",
    years: "2026 – 2027",
    status: "Now airing",
    synopsis:
      "New city, new cast, same main character. She trades the debugger for user interviews and finds out she likes the first half of the product lifecycle even more.",
    color: "#7B5CFF",
    episodes: [
      {
        title: "725",
        logline:
          "The GMAT Focus score that opens the season. Top 1%, and a seat in the PGP class at ISB.",
        stat: "725",
        statLabel: "GMAT Focus, top 1%",
        tags: ["ISB", "PGP"],
      },
      {
        title: "Twenty-Two Sellers",
        logline:
          "Razorpay PM Challenge. She interviews 22 Instagram and WhatsApp sellers, then prototypes a GenAI flow that turns a buyer's chat into an order to cut return losses.",
        stat: "Finalist",
        statLabel: "Razorpay PM Challenge",
        tags: ["GenAI", "Fintech", "User research"],
        link: { label: "Try the prototype", href: "https://razorpay-order-link.lovable.app" },
      },
      {
        title: "Written in the Stars",
        logline:
          "Product intern at AstroVibes. She bundles conversational AI with human astrologer chats, then A/B-tests trust signals and a single-CTA funnel.",
        stat: "~15%",
        statLabel: "ARPU lift, 350K+ users",
        tags: ["Monetisation", "A/B testing"],
      },
      {
        title: "The Purview",
        logline:
          "A live project with Microsoft Purview. She maps the EU AI Act and India's DPDP rules to customer needs and wins GM buy-in for five features.",
        stat: "5",
        statLabel: "features approved",
        tags: ["Responsible AI", "Strategy"],
      },
      {
        title: "Pass the Mic",
        logline:
          "For the Women in Business club she starts a weekly series where classmates tell their own stories. Twelve stories in, people are watching.",
        stat: "17K+",
        statLabel: "views",
        tags: ["Content", "Community"],
      },
      {
        title: "Finale: To Be Announced",
        logline:
          "Abitha joins a product team as an APM. The location, the product and the team are still being cast. That could be you.",
        stat: "TBA",
        statLabel: "airing 2027",
        tags: ["Open role"],
        upcoming: true,
      },
    ],
  },
];

export const spinoffs = [
  {
    title: "CompSignal",
    genre: "Sales intelligence · Data",
    blurb:
      "A weekly scanner for a sales-compensation software team. It reads companies' public job postings, flags signs that their commission process is changing, and writes a brief that links every claim to its source. First run: 14 accounts flagged from 250 targets, with 89% of 64 hand-checked flags correct.",
    code: "https://github.com/Abitha-Rao/compsignal",
    from: "#FF7A3D",
    to: "#FF3D81",
    mark: "◎",
  },
  {
    title: "Chat Checkout",
    genre: "Fintech · GenAI",
    blurb:
      "For one-person Instagram and WhatsApp sellers. Paste a buyer's message, AI drafts the order, and a payment link goes out, with simple rules for cash on delivery.",
    live: "https://razorpay-order-link.lovable.app",
    code: "https://github.com/Abitha-Rao/Razorpay-SMB",
    from: "#FF3D81",
    to: "#7B5CFF",
    mark: "₹",
  },
  {
    title: "Girl Math",
    genre: "Personal finance",
    blurb:
      "An expense tracker where logging a coffee takes two taps and feels calm instead of guilty. Dark, minimal, numbers first.",
    live: "https://luxe-cents.lovable.app",
    code: "https://github.com/Abitha-Rao/GirlMath",
    from: "#FFD23F",
    to: "#FF7A3D",
    mark: "∑",
  },
  {
    title: "Photo Declutter",
    genre: "Private AI · Utility",
    blurb:
      "Natural-language search and swipe-to-delete for a huge photo library. Runs entirely on your own Mac, and nothing is deleted until you confirm.",
    code: "https://github.com/Abitha-Rao/gallery-declutter",
    from: "#3DDCFF",
    to: "#7B5CFF",
    mark: "✂",
  },
  {
    title: "Satchel",
    genre: "Productivity",
    blurb:
      "A student planner with tasks by subject, nearest deadline first. It also has a quick-capture inbox for thoughts and voice notes, a weekly timetable and PDF storage, and every user sees only their own data.",
    code: "https://github.com/Abitha-Rao/Satchel-StudyPlanner",
    from: "#8CFF6B",
    to: "#3DDCFF",
    mark: "✓",
  },
];

export const awards = [
  { big: "725", label: "GMAT Focus", note: "Top 1%" },
  { big: "QualStar", label: "Qualcomm", note: "Company-wide recognition" },
  { big: "1.4 yrs", label: "Fast-track promotion", note: "vs 2.4 yr average" },
  { big: "Top 5%", label: "Merit Scholar, NIT Warangal", note: "Full tuition waiver" },
  { big: "2×", label: "National runner-up", note: "1,400+ and 300+ teams" },
  { big: "Finalist", label: "Razorpay PM Challenge", note: "ISB" },
  { big: "99.67", label: "JEE Main percentile", note: "Before the pilot aired" },
  { big: "3x", label: "Merit Scholarship", note: "2020, 2021 and 2022" },
];

export const scrapbook = [
  {
    emoji: "🎤",
    caption: "TEDxNITW",
    note: "Web developer. Ran the official site and the tech on event day.",
    tint: "#FFD6D1",
    tilt: 3,
  },
  {
    emoji: "👑",
    caption: "Fresher year, 2019",
    note: "2nd at TechFresh, 3rd in a CTF, 3rd in the freshers' quiz. Also Miss ECE.",
    tint: "#FBE3FF",
    tilt: -3,
  },
  {
    emoji: "🎙️",
    caption: "Pass the Mic",
    note: "12 classmates, 12 stories, 17K views. I mostly held the mic.",
    tint: "#FFD9E6",
    tilt: -4,
  },
  {
    emoji: "👩‍💻",
    caption: "Women in Tech, Qualcomm",
    note: "300+ people, a ₹3.5L budget and one very long guest list.",
    tint: "#E2DBFF",
    tilt: 3,
  },
  {
    emoji: "🌱",
    caption: "Lean In NITW",
    note: "Started with a handful of us in 2021. Ended at 200+ and 20 workshops.",
    tint: "#DDF5D3",
    tilt: -2,
  },
  {
    emoji: "🏫",
    caption: "AQRITI STEM",
    note: "Teaching AI basics to 700+ govt. school students. They ask better questions than adults.",
    tint: "#FFF0B8",
    tilt: 5,
  },
  {
    emoji: "💡",
    caption: "Innovation Garage",
    note: "20+ brainstorms, 15 prototype ideas, a lot of sticky notes.",
    tint: "#D6F1FF",
    tilt: -5,
  },
];

export const crew = [
  { role: "Product", items: ["PRDs", "User research", "A/B testing", "OKR/KPI frameworks", "Agile/Scrum", "GA4", "Figma"] },
  { role: "Data", items: ["SQL", "Python", "Excel", "Tableau"] },
  { role: "AI & building", items: ["LLM APIs", "RAG", "Claude Code", "Lovable", "Replit", "REST APIs", "Postman"] },
  { role: "Engineering", items: ["C++", "Git", "JIRA"] },
];

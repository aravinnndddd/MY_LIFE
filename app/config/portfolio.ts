// Portfolio Configuration Types
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'website';
  url: string;
  username?: string;
}

export interface HeroConfig {
  tagline: string;
  backgroundImage: string;
  accentColor?: string;
}

export interface IntroConfig {
  greeting: string;
  introduction: string;
  focusAreas: string[];
}

export interface ProjectConfig {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category?: string;
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
  image?: string;
}

export interface TestimonialConfig {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  image?: string;
}

export interface TechStackConfig {
  technologies: TechnologyItem[];
  categories?: string[];
}

export interface TechnologyItem {
  name: string;
  color?: string;
  logo?: string;
  category?: string;
}

export interface ContactConfig {
  email: string;
  phone?: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
}

export interface BrandingConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily?: string;
  logo?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  image?: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  hero: HeroConfig;
  intro: IntroConfig;
  projects: ProjectConfig[];
  timeline: TimelineEntry[];
  testimonials: TestimonialConfig[];
  techStack: TechStackConfig;
  contact: ContactConfig;
  branding: BrandingConfig;
  seo: SEOConfig;
}

// Portfolio Configuration with Neon Green Theme
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Syam Kumar S.S.",
    title: "From Hospital Bed to Terminal Velocity: The Amputee Who Rewrote Gravity's Rules",
    location: "Kulathummal Village, Kerala, India",
    email: "syam@skybeyondlimits.in",
    phone: "+91-XXXXXXXXXX",
    socialLinks: [
      { platform: "instagram", url: "https://instagram.com/skillhac", username: "skillhac" },
      { platform: "linkedin", url: "https://linkedin.com/in/syam-kumar-ss", username: "syam-kumar-ss" },
      { platform: "website", url: "https://syamkumarss.com", username: "syamkumarss.com" }
    ]
  },
  hero: {
    tagline: "They Said He'd Never Walk. He Made The Sky His Proving Ground.",
    backgroundImage: "/hero-image.png",
    accentColor: "#FF6B6B" // Red for urgency and emotion
  },
  intro: {
    greeting: "🏥 Kulathummal, Kerala. 2001. A baby cries normally. Then doctors fall silent.",
    introduction: "The right leg fuses toward his buttocks. A blue spinal mark glows under hospital lights. Survival odds: 20%. This was Syam Kumar S.S.'s launchpad - not into life, but into war. 16 surgeries before age 25. Now he's rewriting gravity's rules at 43,000 feet.",
    focusAreas: ["21 surgeries survived", "101+ solo skydives completed", "43,000ft world records targeted"]
  },
  projects: [
    {
      id: "the-body-that-fought-itself",
      title: "The Body That Fought Itself (Birth - Age 8)",
      description: "Spina bifida. Three kidneys. 16 surgeries before age 25. Catheter every 2 hours to survive. The choice at age 8: keep infected leg and die, or amputate and live without balance.",
      longDescription: "In the humid pre-dawn darkness of rural Kerala, Syam entered the world through normal delivery. For 47 seconds, everything appeared ordinary. Then silence fell. Spina bifida lipomeningocele. Duplex kidney system. Neurogenic bladder. Survival odds: 23%. This wasn't birth - this was biological mutiny. By age 8, chronic osteomyelitis climbed the deformed leg. The ultimatum: amputate above-knee or die by 12. He chose life.",
      technologies: ["21 Surgeries", "Spina Bifida", "Kidney Transplant", "Medical Resilience"],
      images: ["/headshot.jpg", "/uoft.jpg"],
      liveUrl: "https://syamkumarss.com/medical-journey",
      featured: true,
      category: "Medical War"
    },
    {
      id: "earthbound-rebellion",
      title: "Earthbound Rebellion (Age 8-21)",
      description: "250km Save Alappad cycle (12hrs, one leg). 1000+km endurance rides. Kalaripayattu mastery. 3 years dialysis. Mother's kidney gift. Post-transplant scuba diving while immunosuppressed.",
      longDescription: "The first prosthetic weighed 4.2kg. Walking became performance art. But cycling at age 12 meant freedom. 250km Save Alappad campaign in 12 hours. 1000+km endurance rides through Kerala hills. Ancient Kalaripayattu martial art became asymmetric balance training. Then kidney failure - 1,095 dialysis sessions over 3 years. Mother's kidney donation in 2022. Immunosuppressed for life, yet he earned scuba certification. 'Calculated risk,' he says.",
      technologies: ["Cycling", "Kalaripayattu", "Dialysis", "Kidney Transplant", "Scuba Diving"],
      images: ["/camera-operating.jpg", "/competition.jpg"],
      liveUrl: "https://syamkumarss.com/earthbound-feats",
      featured: true,
      category: "Ground Mastery"
    },
    {
      id: "gravity-defied",
      title: "13,000 Feet Solo - Gravity Defied (Age 22-25)",
      description: "World's youngest amputee solo skydive from 13,000ft WITHOUT PROSTHETIC LEG. International Book of Records 2023. 101+ solo jumps. B-Category license. World's youngest amputee paragliding pilot.",
      longDescription: "Post-transplant doctors said 'rest.' Society said 'safe hobbies.' Syam bought a ticket to Vadodara airfield. 4 hours wind tunnel training: belly-to-earth flight with asymmetric drag, back-flying with core-only stability, barrel rolls using single-leg torque. November 2023: 13,000ft solo jump, no prosthetic. International Book of Records certified. Now 101+ solo jumps completed, targeting 150sqft pro-level canopy. P1/P2 paragliding certified with modified harness and asymmetric takeoff mastery.",
      technologies: ["Skydiving", "Paragliding", "Wind Tunnel", "World Records"],
      images: ["/bingeable-main.png", "/bingeable-main-2.png"],
      liveUrl: "https://syamkumarss.com/world-records",
      githubUrl: "https://www.internationalbookofrecords.com/records/youngest-to-do-solo-skydiving-from-highest-altitude-with-prosthetic-leg/",
      featured: true,
      category: "Sky Mastery"
    },
    {
      id: "sky-beyond-limits-mission",
      title: "Sky Beyond Limits Mission: 43,000ft Triple World Records",
      description: "₹3.6 Crore mission. Squirrel Wingsuits (USA) + Gen Robotics (India) partnership. Three world records from 43,000+ feet: Altitude, Distance, Speed in Adaptive Wingsuit Category.",
      longDescription: "Technical innovation with Squirrel Wingsuits for custom adaptive wingsuit with asymmetric drag compensation and extreme altitude optimization. Gen Robotics developing hand-controlled flight prosthetic with real-time balance adjustment. 2026 Wind Tunnel World Championship in France. 350 training jumps, 50 hours advanced wind tunnel, Mission Impossible cliff jump recreation. Training window closes Q2 2026.",
      technologies: ["Wingsuit Technology", "Adaptive Prosthetics", "World Championships", "Mission Funding"],
      images: ["/bingeable-main-3.png", "/bingeable-main-4.png"],
      liveUrl: "https://syamkumarss.com/sky-beyond-limits",
      githubUrl: "https://syamkumarss.com/sponsor-deck",
      featured: true,
      category: "Future Mission"
    }
  ],
  timeline: [
    {
      id: "biological-mutiny",
      year: "2001 (Day 0)",
      title: "Biological Mutiny: The Body That Fought Its Design",
      organization: "Kulathummal Village, Kerala",
      description: "Normal delivery for 47 seconds. Then silence. Right leg twisted, fused toward buttocks. Blue spinal mark. Spina bifida lipomeningocele. Three kidneys. Neurogenic bladder. Survival odds: 23%. This wasn't birth - this was war.",
      type: "achievement",
      image: "/headshot.jpg"
    },
    {
      id: "hospital-years",
      year: "2001-2006",
      title: "The Hospital Years: 1,247 Days by Age Five",
      organization: "Medical Battlefield",
      description: "Five major surgeries before kindergarten. Spinal defect excision. Bladder augmentation. Testicular removal. Structural stabilization (failed twice). Kidney drainage. Catheterization every 2-3 hours to prevent sepsis. Mother became nurse, advocate, warrior.",
      type: "achievement",
      image: "/uoft.jpg"
    },
    {
      id: "the-choice",
      year: "2009 (Age 8)",
      title: "The Choice: Operation Room #7 - Above-Knee Amputation",
      organization: "Life or Death Decision",
      description: "Chronic osteomyelitis climbed the deformed leg. Sepsis loomed. The ultimatum: Keep leg = guaranteed death by 12. Amputate above-knee = live without natural balance. He chose life. Chronic pain vanished instantly. Childhood balance disappeared forever.",
      type: "achievement",
      image: "/competition.jpg"
    },
    {
      id: "earthbound-rebellion",
      year: "2009-2019",
      title: "Earthbound Rebellion: Movement as Medicine",
      organization: "Kerala Roads & Mountains",
      description: "First prosthetic: 4.2kg torture device. Age 12: One-legged cycling breakthrough. 250km Save Alappad (12hrs). 1000+km endurance rides. Kalaripayattu mastery. School isolation. Window-gazing during recess. Each pedal stroke drowned the 'freak' whispers.",
      type: "work",
      image: "/camera-operating.jpg"
    },
    {
      id: "kidney-apocalypse",
      year: "2019-2022",
      title: "Kidney Apocalypse: 1,095 Dialysis Sessions",
      organization: "Medical Hell",
      description: "Duplex kidney failure. End-stage renal disease. 3 years of dialysis machines. Energy vanished. Future shrank to 'next treatment.' 21 documented surgeries by age 21. Mother's kidney donation 2022. Rejection episode at week 6 - survived that too. Immunosuppressed for life.",
      type: "achievement",
      image: "/still-4.jpg"
    },
    {
      id: "gravity-defied",
      year: "2023-2024",
      title: "Gravity Defied: 13,000ft World Record",
      organization: "International Book of Records",
      description: "Post-transplant doctors said 'rest.' Syam bought skydive ticket. 4hrs wind tunnel: asymmetric flight mastery. November 2023: 13,000ft solo, no prosthetic. World record certified. 101+ solo jumps. B-license earned. P1/P2 paragliding certified. World's youngest amputee pilot.",
      type: "achievement",
      image: "/bingeable-logo.png"
    },
    {
      id: "france-invitation",
      year: "2026 (Current)",
      title: "Global Stage: Wind Tunnel World Championship Invitation",
      organization: "Lesquin, France - April 2026",
      description: "Official invitation to represent India. First adaptive athlete at this level. 50hrs advanced wind tunnel prep. 200-300 competitive skydives. France acclimatization. Selection for ongoing World Cup circuit. India para-skydiving pioneer status.",
      type: "work",
      image: "/hero-image.png"
    },
    {
      id: "sky-beyond-limits",
      year: "2025-2029",
      title: "Sky Beyond Limits: 43,000ft Triple World Record Mission",
      organization: "Squirrel Wingsuits + Gen Robotics Partnership",
      description: "₹3.6 Crore mission. Custom adaptive wingsuit with asymmetric drag compensation. Hand-controlled flight prosthetic. Three records: Altitude (43,000ft), Distance (25km), Speed (220kph). Mission Impossible cliff jump recreation. Training window closes Q2 2026.",
      type: "achievement",
      image: "/bingeable-main-4.png"
    }
  ],
  testimonials: [
    {
      id: "testimonial-mother",
      name: "Syam's Mother",
      title: "Kidney Donor & Life Warrior",
      company: "The Woman Who Saved Him Twice",
      content: "I gave him life twice - once at birth, once with my kidney. When doctors said 'impossible,' I said 'watch him.' When he chose the sky over safety, I understood. Some souls are born to rewrite the rules. Syam doesn't just survive - he transforms every limitation into a launchpad.",
      image: "/placeholder-profile-pic.png"
    },
    {
      id: "testimonial-surgeon",
      name: "Dr. Rajesh Kumar",
      title: "Pediatric Orthopedic Surgeon",
      company: "Performed the Age-8 Amputation",
      content: "In 30 years of surgery, I've never seen resilience like Syam's. At age 8, facing amputation, he asked 'Will I be able to run?' Today he flies at 13,000 feet. That boy taught me that healing isn't about fixing bodies - it's about unleashing spirits that refuse to be contained.",
      image: "/placeholder-profile-pic.png"
    },
    {
      id: "testimonial-instructor",
      name: "Captain Arjun Menon",
      title: "Chief Flight Instructor",
      company: "Skydive India - Vadodara",
      content: "Training Syam redefined my understanding of 'impossible.' Watching him master asymmetric flight, land with precision using core strength alone, then ask for more challenging jumps - this isn't just skydiving. This is human evolution in real-time. He doesn't adapt to the sky; the sky adapts to him.",
      image: "/placeholder-profile-pic.png"
    },
    {
      id: "testimonial-engineer",
      name: "Sarah Williams",
      title: "Lead Wingsuit Designer",
      company: "Squirrel Wingsuits, USA",
      content: "Syam's feedback is revolutionizing adaptive wingsuit design. His insights from 43,000ft operations push our engineering beyond conventional limits. We're not just building equipment - we're creating technology that proves human potential has no ceiling. His mission will change how the world sees adaptive sports forever.",
      image: "/placeholder-profile-pic.png"
    },
    {
      id: "testimonial-champion",
      name: "Priya Nair",
      title: "Paralympic Gold Medalist",
      company: "Indian Paralympic Committee",
      content: "Syam represents the future of adaptive sports in India. His achievements transcend records - they shatter perceptions. When he represents India in France 2026, he carries every disabled child's dreams. His story proves that limitations exist only in minds, never in hearts determined to soar.",
      image: "/placeholder-profile-pic.png"
    }
  ],
  techStack: {
    technologies: [
      { name: "21 Surgeries Survived", color: "#FF6B6B", category: "Medical Resilience" },
      { name: "101+ Solo Skydives", color: "#00ff41", category: "Sky Mastery" },
      { name: "Kidney Transplant Survivor", color: "#61DBFB", category: "Medical Resilience" },
      { name: "World Record Holder", color: "#FFD700", category: "Sky Mastery" },
      { name: "Paragliding P1/P2 Certified", color: "#FF9900", category: "Sky Mastery" },
      { name: "Adaptive Wingsuit Technology", color: "#3178C6", category: "Innovation" },
      { name: "Kalaripayattu Martial Artist", color: "#8B4513", category: "Ground Mastery" },
      { name: "1000+km Endurance Cycling", color: "#32CD32", category: "Ground Mastery" },
      { name: "Post-Transplant Scuba Diver", color: "#1E90FF", category: "Risk Management" },
      { name: "Immunosuppressed Athlete", color: "#9370DB", category: "Medical Resilience" },
      { name: "Catheter Every 2 Hours", color: "#DC143C", category: "Daily Reality" },
      { name: "43,000ft Mission Target", color: "#FF1493", category: "Future Goals" }
    ],
    categories: ["Medical Resilience", "Sky Mastery", "Ground Mastery", "Innovation", "Risk Management", "Daily Reality", "Future Goals"]
  },
  contact: {
    email: "syam@skybeyondlimits.in",
    phone: "+91-XXXXXXXXXX",
    resumeUrl: "/custom/documents/sponsor-deck.pdf",
    socialLinks: [
      { platform: "instagram", url: "https://instagram.com/skillhac" },
      { platform: "linkedin", url: "https://linkedin.com/in/syam-kumar-ss" },
      { platform: "website", url: "https://syamkumarss.com" }
    ]
  },
  branding: {
    primaryColor: "#00ff41",      // Neon green
    secondaryColor: "#808080",    // Gray
    accentColor: "#FF6B6B",       // Red accent for urgency
    backgroundColor: "#000000",   // Black
    textColor: "#ffffff",         // White
    fontFamily: "Urbanist",
    logo: "/bingeable-logo.png"
  },
  seo: {
    title: "Syam Kumar S.S. - From Hospital Bed to Terminal Velocity | The Sky Beyond Limits",
    description: "They said he'd never walk. He made the sky his proving ground. 21 surgeries, kidney transplant, 101+ solo skydives, world records at 13,000ft. Now targeting 43,000ft wingsuit records. The most inspiring adaptive athlete story ever told.",
    keywords: ["Syam Kumar", "amputee skydiver", "world record", "adaptive sports", "spina bifida", "kidney transplant", "wingsuit", "paragliding", "Kerala", "India", "Sky Beyond Limits", "terminal velocity", "medical resilience"],
    author: "Syam Kumar S.S.",
    siteUrl: "https://syamkumarss.com",
    image: "/hero-image.png"
  }
};

// Export individual sections for easier access
export const { personal, hero, intro, projects, timeline, testimonials, techStack, contact, branding, seo } = portfolioConfig;
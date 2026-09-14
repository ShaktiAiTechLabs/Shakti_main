import { ClientPartner, JobOpening, BlogPost } from '../types/pcb';

export const clientsData: ClientPartner[] = [
  {
    name: 'Bharat Electronics (BEL)',
    logo: '/assets/clients/bharat-electronics-logo.png',
    sector: 'Defense & Aerospace',
    origin: 'India (Navratna PSU)'
  },
  {
    name: 'Amphenol',
    logo: '/assets/clients/Amphenol-logo.png',
    sector: 'Interconnect & Telecom',
    origin: 'United States'
  },
  {
    name: 'Ametek',
    logo: '/assets/clients/Ametek-logo.png',
    sector: 'Electronic Instruments & Electromechanical',
    origin: 'United States'
  },
  {
    name: 'CommScope',
    logo: '/assets/clients/Commscope-Logo.png',
    sector: 'Network Infrastructure & 5G',
    origin: 'United States'
  },
  {
    name: 'Leviton',
    logo: '/assets/clients/Leviton-logo.png',
    sector: 'Electrical Wiring & Smart Controls',
    origin: 'United States'
  },
  {
    name: 'Everbrite',
    logo: '/assets/clients/Everbrite-logo.png',
    sector: 'Visual Displays & Architectural Lighting',
    origin: 'United States'
  },
  {
    name: 'EOS Power (Bel Group)',
    logo: '/assets/clients/eos-logo-a-bel-group-1.png',
    sector: 'Ultra-Compact Power Solutions',
    origin: 'Germany / Global'
  },
  {
    name: 'Capable Controls',
    logo: '/assets/clients/capablecontrols-logo-1.png',
    sector: 'Industrial & Appliance Ignition Systems',
    origin: 'United States'
  }
];

export const certificationsData = [
  {
    name: 'Underwriters Laboratories (UL)',
    badge: 'UL 94V-0 Certified',
    fileNo: 'File E240897',
    description: 'Recognized for flammability safety and electrical isolation up to high-voltage standards.'
  },
  {
    name: 'TÜV Rheinland ISO 9001:2015',
    badge: 'ISO 9001:2015 Quality System',
    fileNo: 'Cert 01 100 053245',
    description: 'International quality management certification for precision PCB fabrication and assembly readiness.'
  },
  {
    name: 'RoHS / REACH Compliant',
    badge: '100% Lead-Free & Heavy Metal Free',
    fileNo: 'EU Directive 2011/65/EU',
    description: 'Eco-friendly surface finishes with zero hazardous substance contamination.'
  },
  {
    name: 'IPC Member Organization',
    badge: 'IPC-A-600 & IPC-6012 Class 2/3',
    fileNo: 'IPC Standard Compliant',
    description: 'Fabrication and inspection conforming to rigorous aerospace, medical, and industrial standards.'
  }
];

export const jobsData: JobOpening[] = [
  {
    id: 'cam-engineer',
    title: 'Senior CAM / DFM Engineer',
    department: 'Pre-Production Engineering',
    location: 'Manjusar Plant, Vadodara',
    type: 'Full-time',
    experience: '3–6 Years',
    description: 'Responsible for reviewing customer Gerber files, stack-up design, panelization, drill/rout programming, and generating manufacturing tooling data using Genesis 2000 / UcamX.',
    requirements: [
      'In-depth knowledge of Gerber 274X, ODB++, and IPC-2221/6012 standards',
      'Hands-on proficiency with Genesis 2000, InCAM, or CAM350',
      'Experience with controlled impedance modeling (Polar Si8000/Si9000)',
      'Understanding of PCB manufacturing tolerances and chemical compensation factors'
    ]
  },
  {
    id: 'qa-manager',
    title: 'Quality Assurance Manager (PCB)',
    department: 'Quality Control',
    location: 'Manjusar Plant, Vadodara',
    type: 'Full-time',
    experience: '5–10 Years',
    description: 'Lead the QA & Metallurgical Lab team, drive IPC Class 3 quality protocols, oversee micro-section analysis, manage customer audits, and maintain ISO/UL certifications.',
    requirements: [
      'Degree in Chemical Engineering / Metallurgy / Electronics',
      'Expertise in IPC-A-600, IPC-TM-650, and micro-section preparation',
      'Experience hosting international customer audits (US/European buyers)',
      'Root cause analysis (8D, 5-Why) for manufacturing yield optimization'
    ]
  },
  {
    id: 'production-engineer',
    title: 'PCB Wet Process / Plating Engineer',
    department: 'Chemical & Plating Operations',
    location: 'Manjusar Plant, Vadodara',
    type: 'Full-time',
    experience: '2–5 Years',
    description: 'Supervise automated copper electroplating, ENIG line operations, chemical bath titrations, and effluent treatment compliance for continuous high-throughput manufacturing.',
    requirements: [
      'Diploma/Degree in Chemical Engineering or Applied Chemistry',
      'Hands-on experience with copper acid plating, nickel/gold immersion, and etching baths',
      'Understanding of hull cell testing and chemical replenishment automation',
      'Strong focus on safety and environmental compliance'
    ]
  }
];

export const blogsData: BlogPost[] = [
  {
    id: 'outsource-pcb-india',
    slug: 'where-to-outsource-pcb-manufacturing-in-india',
    title: 'Where to Outsource PCB Manufacturing in India: The Strategic Guide for Global OEMs',
    date: 'January 16, 2026',
    readTime: '6 min read',
    category: 'Industry Strategy',
    summary: 'As electronics complexity increases and supply chains diversify from East Asia, India is rapidly emerging as a premier global PCB manufacturing hub through EOU incentives and advanced capabilities.',
    content: [
      'The global electronics manufacturing landscape has shifted dramatically over the past three years. Companies in aerospace, telecommunications, and industrial automation are systematically diversifying their supply chains to eliminate geographic single-point failure risks.',
      'India’s electronics manufacturing ecosystem, propelled by 100% Export Oriented Unit (EOU) frameworks and bonded duty-free import advantages, offers international buyers duty-free import of specialized laminates (such as Rogers, Isola, and Shengyi) alongside highly competitive fabrication economics.',
      'When evaluating a manufacturing partner in India, engineering buyers must prioritize four non-negotiable criteria: (1) direct ownership of high-end equipment like Schmoll CNC and LDI systems, (2) on-site cross-sectioning metallurgical labs, (3) proven export track record into US and European defense markets, and (4) strict IPC-6012 Class 3 capability.'
    ]
  },
  {
    id: 'cost-effective-pcb-dfm',
    slug: 'cost-effective-pcb-manufacturing-india-how-businesses-save-without-compromising-quality',
    title: 'Cost-Effective PCB Manufacturing: How Hardware Teams Cut Costs Without Compromising Quality',
    date: 'January 16, 2026',
    readTime: '5 min read',
    category: 'DFM Engineering',
    summary: 'Discover how smart panelization, standardized layer stackups, and early Design for Manufacturability (DFM) reviews can reduce unit costs by 25% to 40% while improving production yield.',
    content: [
      'Reducing the unit cost of printed circuit boards does not require sacrificing reliability or switching to inferior materials. In fact, over 70% of unnecessary fabrication expenses are locked in during the CAD layout stage.',
      'Key engineering levers include optimizing panel utilization to achieve over 85% usable panel area, avoiding fractional drill sizes that mandate custom tool changes, and balancing copper distribution across internal layers to prevent panel bow and twist during thermal reflow.',
      'Engaging FCC’s CAM engineering team early in the design cycle ensures that layer stackups and impedance requirements are tailored directly to standard prepreg thicknesses, reducing cycle time and avoiding expensive custom press recipes.'
    ]
  },
  {
    id: 'ul-certified-pcb',
    slug: 'ul-certified-pcb-manufacturer-ensuring-safety-quality-and-global-compliance',
    title: 'UL Certified PCB Manufacturing: Ensuring Safety, Quality, and Global Regulatory Compliance',
    date: 'January 16, 2026',
    readTime: '7 min read',
    category: 'Quality & Safety',
    summary: 'Understanding Underwriters Laboratories (UL 94V-0) certification, flammability safety, dielectric breakdown ratings, and why international certification is essential for global market access.',
    content: [
      'For medical equipment, avionics, and high-voltage power supplies, UL certification is not optional; it is a mandatory legal requirement for selling in the North American and global marketplace.',
      'FCC’s UL recognition under File E240897 certifies that all single, double, and multilayer boards meet strict UL 94V-0 flammability standards, ensuring that boards self-extinguish within 10 seconds of flame exposure without dripping burning plastic.',
      'In addition, continuous quarterly audits by UL field inspectors ensure that all raw laminates, soldermasks, and chemical processes maintain unbroken traceability back to certified chemical suppliers.'
    ]
  },
  {
    id: 'hdi-pcb-manufacturer',
    slug: 'hdi-pcb-manufacturer-india-powering-high-density-high-performance-electronics',
    title: 'High Density Interconnect (HDI) PCBs: Powering Next-Generation Compact Electronics',
    date: 'January 16, 2026',
    readTime: '6 min read',
    category: 'Advanced Technology',
    summary: 'A deep technical exploration into laser microvias, via-in-pad plated over (VIPPO), and fine-line 3 mil routing that enable ultra-compact electronics packaging.',
    content: [
      'Modern microprocessors and FPGA chips are packaged in ball grid arrays (BGAs) with pin pitches tightening to 0.5 mm and 0.4 mm. Traditional mechanically drilled through-hole technology cannot escape these dense pin fields without consuming valuable routing real estate on every internal layer.',
      'FCC’s HDI manufacturing line utilizes Laser Direct Imaging (LDI) and automated vacuum epoxy via plugging to fabricate Via-in-Pad Plated Over (VIPPO) structures. This allows component pads to sit directly on top of plugged microvias, shortening signal paths, minimizing parasitic inductance, and enabling 40% smaller PCB footprints.'
    ]
  }
];

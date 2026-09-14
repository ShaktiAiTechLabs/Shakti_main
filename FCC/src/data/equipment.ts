import { EquipmentItem } from '../types/pcb';

export const equipmentData: EquipmentItem[] = [
  {
    id: 'schmoll-drilling',
    name: 'Schmoll High-Speed CNC Drilling System',
    category: 'machine',
    tag: 'Mechanical Drilling',
    description: 'German precision multi-spindle drilling machines equipped with air-bearing spindles rotating up to 300,000 RPM. Capable of drilling micro-holes down to 0.15 mm with laser tool check and depth-controlled routing.',
    image: '/assets/equipment/SCHMOLL-DRILLING-MACHINE-HIGHER-CAPABILITY-MACHINES.webp',
    manufacturer: 'Schmoll Maschinen GmbH (Germany)',
    capabilityMetric: '300k RPM Spindle / 0.15mm Micro-Drill',
    specifications: [
      'Drilling Accuracy: ± 0.015 mm (15 microns)',
      'Minimum Mechanical Drill Diameter: 0.15 mm (0.006")',
      'Depth Controlled Drilling (Blind Vias): ± 10 microns tolerance',
      'Optical inner-layer registration with auto-scaling compensator',
      'Laser tool-break and diameter verification sensor system'
    ]
  },
  {
    id: 'ldi-imaging',
    name: 'Laser Direct Imaging (LDI) System',
    category: 'machine',
    tag: 'Photo Exposure',
    description: 'Next-generation maskless lithography system using solid-state high-precision lasers to project circuit patterns directly onto photoresist film. Eliminates physical artwork expansion and guarantees 3 mil fine line resolution.',
    image: '/assets/equipment/LDI-HIGHER-CAPABILITY-MACHINES.webp',
    manufacturer: 'Orbotech / Altix',
    capabilityMetric: '3 mil (75 µm) Track & Gap Resolution',
    specifications: [
      'Minimum Line Width / Spacing: 75 µm / 75 µm (3 mil / 3 mil)',
      'Real-time dynamic panel distortion compensation (local scaling)',
      'Sub-micron positioning repeatability via optical fiducial recognition',
      'Dual-wavelength UV laser for outer-layer and soldermask exposure',
      'Zero film-scratch or dust pinhole defects'
    ]
  },
  {
    id: 'epoxy-via-filling',
    name: 'Automated Epoxy Via Filling & Planarization',
    category: 'machine',
    tag: 'Via Technology',
    description: 'High-pressure vacuum via-hole plugging machine for IPC-4761 Type VII via-in-pad structures. Injects conductive or non-conductive epoxy resins into microvias, followed by precision ceramic grinding for 100% flat planar surface.',
    image: '/assets/equipment/EPOXY-VIA-FILLING-MACHINE-HIGHER-CAPABILITY-MACHINES.webp',
    manufacturer: 'Mass / San-Ei Tech',
    capabilityMetric: 'IPC-4761 Type VII Planarization',
    specifications: [
      'Vacuum chamber level: < 1 mbar for bubble-free via filling',
      'Suitable for aspect ratios up to 12:1',
      'Micro-polishing ceramic buffing for completely flush copper pad tops',
      'Enables high-density BGA mounting directly over via holes (VIPPO)',
      'Zero solder voiding during reflow assembly'
    ]
  },
  {
    id: 'inkjet-legend-printer',
    name: 'High-Definition Inkjet Legend Printer',
    category: 'machine',
    tag: 'Silkscreen & ID',
    description: 'Industrial piezo drop-on-demand digital inkjet printer for PCB component legends, serialization, 2D matrix barcodes, and QR codes directly onto solder mask without film or stencil tooling.',
    image: '/assets/equipment/INKJET-LEGEND-PRINTER-HIGHER-CAPABILITY-MACHINES.webp',
    manufacturer: 'MicroCraft / Taiyo Ink',
    capabilityMetric: '1440 DPI Micro-Text / 2D Barcodes',
    specifications: [
      'Print Resolution: Up to 1440 × 1440 DPI',
      'Minimum text height: 0.5 mm with crystal-clear readability',
      'Instant UV-LED pinning to prevent ink spreading',
      'Dynamic variable data printing (unique serial number per PCB)',
      'White and yellow aerospace-grade high-adhesion inks'
    ]
  },
  {
    id: 'cleanroom-10000',
    name: 'Class 10,000 Photo Imaging Cleanroom',
    category: 'cleanroom',
    tag: 'Environment Control',
    description: 'Positive-pressure cleanroom operating under strict Class 10,000 (ISO 7) airborne particulate standards. Temperature and relative humidity are controlled 24/7 to prevent photoresist degradation and micro-contaminations.',
    image: '/assets/equipment/CLASS-10000-IMAGE-ROOM-In-Process-Quality-Assurance-Instruments.webp',
    capabilityMetric: 'ISO 7 / Class 10k Certified Cleanroom',
    specifications: [
      'HEPA filtration with 99.97% efficiency at 0.3 microns',
      'Temperature strictly regulated at 21°C ± 1°C',
      'Relative humidity locked at 50% ± 3% to eliminate static discharge',
      'Sticky mat airlocks and anti-static ESD flooring throughout',
      'Houses dry film lamination, LDI lasers, and exposure units'
    ]
  },
  {
    id: 'quality-lab',
    name: 'Metallurgical & Micro-Section Quality Lab',
    category: 'qa',
    tag: 'Quality Assurance',
    description: 'Full-spectrum metallurgical laboratory equipped for destructive and non-destructive quality audits. Features precision diamond cutting saws, resin potting mounts, micro-polishing stations, and high-magnification metallurgical microscopes.',
    image: '/assets/equipment/QUALITY-LAB-In-Process-Quality-Assurance-Instruments.webp',
    capabilityMetric: 'Micro-Section Cross-Sectioning & Thermal Stress',
    specifications: [
      'IPC-TM-650 compliant cross-sectional hole wall plating measurement',
      'Thermal stress test: Solder float at 288°C for 10 seconds × 3 cycles',
      'Copper elongation and tensile strength verification',
      'Dielectric breakdown and solderability testing',
      'Full First Article Inspection (FAI) report with every batch'
    ]
  },
  {
    id: 'oxford-x-strata-920',
    name: 'Oxford X-Strata 920 XRF Coating Analyzer',
    category: 'process_control',
    tag: 'Surface Finish Audit',
    description: 'Benchtop X-ray fluorescence (XRF) spectrometer providing non-destructive, sub-nanometer accurate thickness measurement of metallic surface coatings including ENIG gold/nickel, immersion silver, and tin.',
    image: '/assets/equipment/Oxford-X-Stratra-920-Process-Control-Instruments.webp',
    manufacturer: 'Oxford Instruments (UK / Hitachi High-Tech)',
    capabilityMetric: 'Sub-Microinch XRF Coating Precision',
    specifications: [
      'Gold (Au) thickness measurement range: 0.5 to 10 micro-inches (µin)',
      'Nickel (Ni) thickness measurement range: 50 to 300 micro-inches (µin)',
      'Collimator spot size down to 0.1 mm for testing fine-pitch BGA pads',
      'Ensures zero nickel corrosion (black pad prevention) under ENIG',
      'Automated sample stage with high-resolution video optics'
    ]
  }
];

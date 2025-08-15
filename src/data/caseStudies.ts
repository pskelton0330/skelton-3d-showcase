export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  impact: string;
  datePublished: string;
  content: string;
  imageUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Beyond Plastic: Durable Hybrid Couplers for Critical Machinery",
    slug: "beyond-plastic-hybrid-coupler",
    summary: "Engineered hybrid solution using 3D-printed housing with brass threads for critical machinery",
    tags: ["Hybrid Design", "Critical Systems", "Innovation"],
    impact: "Eliminated failures and delivered superior performance",
    datePublished: "2025-07-09",
    content: `### The Challenge
A customer approached with an urgent issue affecting a critical piece of machinery: a small threaded coupler responsible for traveling up and down a proprietary lead screw was frequently failing. The original injection-molded plastic couplers had a high failure rate under regular operational conditions, and the original manufacturer was no longer in business. Although the equipment supplier had a limited inventory of the original part, widespread failures worldwide quickly depleted this supply, creating a serious crisis. The lead screw assembly was completely proprietary and unusually small in size, making off-the-shelf replacements unavailable. Retrofitting the machinery with standard market alternatives was not viable due to the specific design and compact dimensions of the existing equipment. Without a suitable replacement, the machinery supplier faced the risk of being unable to support their global customer base, jeopardizing continued equipment operation.

- Original threaded couplers were injection-molded plastic prone to wear and tear.
- No replacement parts were commercially available due to the manufacturer's closure.
- The ongoing failures significantly disrupted global customer operations.

### My Solution
Recognizing immediately that a typical 3D-printed plastic threaded coupler would not withstand the required operational stresses, I engineered an innovative hybrid solution:

**Hybrid Design Approach:**
- 3D-printed housing and structure using durable engineering plastics
- Precision brass threaded inserts for all critical threaded connections
- Strategic material placement to maximize strength while maintaining cost-effectiveness

**Implementation:**
1. **Reverse Engineering:** Carefully measured and documented the original part specifications
2. **Design Optimization:** Redesigned the component with improved stress distribution and reinforced mounting points
3. **Material Selection:** Selected appropriate engineering-grade plastics for the body and sourced precision brass threaded inserts
4. **Prototyping & Testing:** Developed and tested prototypes to ensure proper fit, function, and durability
5. **Production:** Delivered initial parts with detailed assembly instructions

### Impact
- **Zero Failures:** The hybrid solution completely eliminated the recurring failure issues
- **Enhanced Performance:** The brass threaded elements provided superior durability compared to the original plastic threads
- **Global Support:** Enabled the equipment supplier to resume supporting their worldwide customer base
- **Future-Proof Solution:** Provided a sustainable replacement part solution with improved reliability`,
    imageUrl: "/assets/hybrid-coupler.jpg"
  },
  {
    id: "2", 
    title: "Tailored Retrofit: How 3D Printing Prevented a $400K Expense",
    slug: "light-pole-caps",
    summary: "Custom UV-resistant caps for 264 vintage light poles, saving $400K in replacement costs",
    tags: ["Cost Savings", "Retrofit", "Historical Preservation"],
    impact: "$400,000 in cost savings",
    datePublished: "2025-07-08",
    content: `### The Challenge
A customer was exploring the replacement of 264 vintage 1960s-era light poles at an estimated cost of $400,000 to accommodate an LED lighting upgrade. These poles had long been discontinued, and no accessories or compatible components remained in production. Consequently, no off-the-shelf solutions were available to effectively waterproof the pole tops after the retrofit, leaving them exposed and vulnerable.

### My Solution
* Conducted detailed on-site measurements and developed precise digital models of the pole head profile.
* Fabricated **264** custom, UV-resistant **ASA** caps utilizing advanced FDM 3D printing technology.
* Delivered a watertight, custom-fit solution, enabling the installation crew to successfully complete the retrofit on schedule.

### Impact
* **$400,000 in cost savings**
* **Preservation of the facility's original historical aesthetic**`,
    imageUrl: "/assets/light-pole-caps.jpg"
  },
  {
    id: "3",
    title: "Smart Adaptation: 3D Printing Solutions for Facility Maintenance Savings", 
    slug: "rfid-bypass-adapter",
    summary: "RFID bypass adapter reducing soap costs from $0.56 to $0.04 per ounce",
    tags: ["RFID Bypass", "Cost Optimization", "Facility Management"],
    impact: "~$500,000 annual savings",
    datePublished: "2025-07-07",
    content: `### The Challenge
A customer renovated multiple bathrooms in their large facility without realizing the new built-in sinks featured soap dispensers designed exclusively for proprietary refill cartridges. Each cartridge included an RFID tag that rejected any non-authorized soap, locking the customer into costly consumables at **$0.56 per ounce** (previously **$0.04 per ounce**). The projected annual overspending amounted to approximately **$500,000**.

### My Solution
I developed a custom soap bottle adapter allowing the RFID-tagged nozzle from the proprietary cartridges to screw securely onto the original, cost-effective **$0.04 per ounce** bulk soap refills.

Prototypes were 3D printed using chemical-resistant **ASA** plastic for durability.

Delivered comprehensive CAD and STL files, along with optimized printing profiles, enabling the customer to independently produce adapters using low-cost FDM 3D printers.

### Impact
* Annual savings on consumables: approximately **$500,000**.
* No modifications required to existing bathroom facilities.
* Significant reduction in plastic waste by utilizing reusable bulk jugs instead of disposable cartridges.`,
    imageUrl: "/assets/rfid-adapter.jpg"
  },
  {
    id: "4",
    title: "Legacy Equipment, Modern Solution: 3D-Printed Couplers Restore Critical Systems",
    slug: "obsolete-hvac-linkage", 
    summary: "Carbon-fiber nylon replacement couplers for 20-year-old HVAC compressors",
    tags: ["Legacy Systems", "HVAC", "Carbon Fiber"],
    impact: "98% cost reduction from OEM assembly price",
    datePublished: "2025-07-06",
    content: `### The Challenge
A facilities-maintenance customer managed several **20-year-old chilled-water compressors**. Over a short period, **two compressors** failed when small **plastic motor-shaft couplers** sheared.

- Original equipment manufacturer (OEM) had discontinued the couplers.
- Replacement required purchasing an entire motor-coupler assembly (~$300 each, with extensive lead times).
- Each broken coupler rendered a compressor inoperable, risking significant downtime, especially during peak demand periods.

### My Solution
1. **On-site Measurement:** Accurately captured critical dimensions using digital calipers.
2. **Design for Additive Manufacturing (DfAM):** Engineered a redesigned coupler optimized specifically for additive manufacturing, incorporating enhanced structural features such as reinforced fillets and a widened hub to improve durability and performance.
3. **Rapid Prototyping:** Created an initial prototype using robust, engineering-grade materials suitable for additive manufacturing.
4. **Fit and Installation Verification:** Successfully installed prototype, with HVAC technicians confirming precise fit, alignment, and torque transfer.
5. **Final Production:** Delivered replacement parts and additional spares printed in carbon-fiber nylon, providing high strength and excellent temperature resistance.

### Impact
- **Cost Efficiency:** Achieved approximately 98% cost reduction from original OEM assembly price.
- **Future-Proof Maintenance:** Facility now possesses immediate access to durable spares, ensuring operational continuity.`,
    imageUrl: "/assets/hvac-coupler.jpg"
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};
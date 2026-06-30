document.getElementById("year").textContent = new Date().getFullYear();

const timelineItems = {
  genesis: {
    date: "Jan 2019 - Present",
    title: "Corporate Accountant - Corporate Finance / Treasury",
    place: "Genesis Healthcare LLC | Kennett Square, PA",
    points: [
      "Owns end-to-end cash accounting for 53 bank accounts across 5 legal entities.",
      "Reconciles 75+ balance sheet accounts monthly in PeopleSoft with audit-ready support.",
      "Partners with treasury, tax, AP, payroll, and operations to keep close activity aligned."
    ]
  },
  rentokil: {
    date: "Aug 2024 - Nov 2025",
    title: "Operations Accountant (Contract)",
    place: "Rentokil North America - Terminix | Remote",
    points: [
      "Led revenue accounting and reporting for three acquired branches exceeding $5M in monthly revenue.",
      "Standardized revenue recognition, account reconciliation, and reporting during integration.",
      "Reduced unreconciled revenue variances by 35% and accelerated close by two days."
    ]
  },
  farmers: {
    date: "Jun 2023 - Jan 2024",
    title: "Corporate Accountant (Contract)",
    place: "Farmers Insurance Group | Remote",
    points: [
      "Managed corporate cash reconciliation and out-of-period research across high-volume accounts.",
      "Resolved cumulative cash variances totaling $191K through transaction tracing and corrective entries.",
      "Supported SOX compliance and timely close in partnership with treasury and accounting teams."
    ]
  },
  delaware: {
    date: "Aug 2017 - Jan 2019",
    title: "Accounting Specialist | Accounting Technician",
    place: "State of Delaware | Wilmington, DE",
    points: [
      "Reconciled and analyzed 1,000+ personal income tax transactions monthly.",
      "Resolved 200+ taxpayer account discrepancies per quarter through detailed account analysis.",
      "Reconciled 300+ benefit overpayment accounts monthly for the Department of Labor."
    ]
  },
  education: {
    date: "2018 - 2023",
    title: "Accounting and Taxation Education",
    place: "Neumann University, Goldey-Beacom College, Wilmington University",
    points: [
      "Master of Science in Accounting, Neumann University, Dec 2023.",
      "MBA with concentration in Taxation, Goldey-Beacom College, Aug 2019.",
      "Bachelor of Science in Accounting and Finance, Wilmington University, May 2018."
    ]
  }
};

const timelineButtons = document.querySelectorAll(".timeline-button");
const timelinePanel = document.getElementById("timeline-panel");

function renderTimelineItem(key) {
  const item = timelineItems[key];
  if (!item || !timelinePanel) return;

  timelinePanel.innerHTML = `
    <p class="timeline-date">${item.date}</p>
    <h3>${item.title}</h3>
    <p class="timeline-place">${item.place}</p>
    <ul>
      ${item.points.map((point) => `<li>${point}</li>`).join("")}
    </ul>
  `;
}

timelineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    timelineButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    renderTimelineItem(button.dataset.timeline);
  });
});

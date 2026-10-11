/**
 * We've Got Rhythm - Centralized Campaign & Donation Configuration
 *
 * Single source of truth for:
 * 1. PayPal Donation URL across all pages and buttons.
 * 2. 2026 #RhythmSupport Carnegie Hall Campaign metadata.
 * 3. Campaign lifecycle states ('active', 'event-week', 'post-event').
 */

window.WGR_CAMPAIGN = {
  // Centralized PayPal Donation URL (Default across all donate buttons)
  paypalUrl: "https://www.paypal.com/donate?campaign_id=EJ9RZR8CBF69A",
  campaignId: "EJ9RZR8CBF69A",

  // 2026 #RhythmSupport Campaign Parameters
  campaign: {
    id: "rhythmsupport-2026",
    title: "#RhythmSupport2026 Carnegie Hall Campaign",
    goalAmount: 7500,
    raisedAmount: null, // Set to numeric value (e.g., 2500) when verified; null hides progress bar
    lastUpdated: null,
    targetStudents: 75,
    eventDate: "Sunday, December 27, 2026, 2:00 PM",
    venue: "Stern Auditorium / Perelman Stage, Carnegie Hall",
    location: "881 Seventh Avenue, New York, NY 10019",

    // Campaign lifecycle state: 'active' | 'event-week' | 'post-event'
    state: "active"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sync all centralized donation links site-wide (with dynamic amount pre-population)
  const donateLinks = document.querySelectorAll("[data-wgr-donate-link]");
  donateLinks.forEach((link) => {
    const amount = link.getAttribute("data-wgr-donate-amount");
    if (amount) {
      link.href = `https://www.paypal.com/donate?campaign_id=${window.WGR_CAMPAIGN.campaignId}&amount=${encodeURIComponent(amount)}`;
    } else {
      link.href = window.WGR_CAMPAIGN.paypalUrl;
    }
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  // 2. Initialize optional campaign progress bar if element and data exist
  initCampaignProgress();

  // 3. Apply state-based classes if relevant
  applyCampaignState();
});

function initCampaignProgress() {
  const progressContainer = document.getElementById("campaign-progress-container");
  const config = window.WGR_CAMPAIGN.campaign;

  if (!progressContainer || config.raisedAmount === null || typeof config.raisedAmount !== "number") {
    return;
  }

  const percent = Math.min(Math.round((config.raisedAmount / config.goalAmount) * 100), 100);
  const progressBar = document.getElementById("campaign-progress-bar");
  const raisedText = document.getElementById("campaign-raised-amount");
  const goalText = document.getElementById("campaign-goal-amount");

  if (progressBar) progressBar.style.width = `${percent}%`;
  if (raisedText) raisedText.textContent = `$${config.raisedAmount.toLocaleString()}`;
  if (goalText) goalText.textContent = `$${config.goalAmount.toLocaleString()}`;

  progressContainer.classList.remove("hidden");
}

function applyCampaignState() {
  const currentState = window.WGR_CAMPAIGN.campaign.state;
  document.body.classList.add(`wgr-campaign-${currentState}`);
}

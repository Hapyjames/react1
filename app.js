// Device check and show/hide containers
function isMobile() {
  return /Mobi|Android|iPhone|iPod|iPad/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function () {
  const mobileApp = document.getElementById("mobileApp");
  const syncPage = document.getElementById("syncPage");
  const notMobile = document.getElementById("notMobile");
  const syncNowBtn = document.getElementById("syncNowBtn");
  const backBtn = document.getElementById("backBtn");

  if (!isMobile()) {
    mobileApp.style.display = "none";
    syncPage.style.display = "none";
    notMobile.style.display = "flex";
  } else {
    mobileApp.style.display = "flex";
    syncPage.style.display = "none";
    notMobile.style.display = "none";
  }

  // Sync Now Button
  if (syncNowBtn) {
    syncNowBtn.addEventListener("click", function () {
      mobileApp.style.display = "none";
      syncPage.style.display = "flex";
    });
  }

  // Back Button
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      syncPage.style.display = "none";
      mobileApp.style.display = "flex";
    });
  }
});
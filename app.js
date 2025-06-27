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

  const successPage = document.getElementById("successPage");
  const exploreBtn = document.getElementById("exploreBtn");
  const dashboardPage = document.getElementById("dashboardPage");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!isMobile()) {
    mobileApp.style.display = "none";
    syncPage.style.display = "none";
    if(successPage) successPage.style.display = "none";
    if(dashboardPage) dashboardPage.style.display = "none";
    notMobile.style.display = "flex";
  } else {
    mobileApp.style.display = "flex";
    syncPage.style.display = "none";
    if(successPage) successPage.style.display = "none";
    if(dashboardPage) dashboardPage.style.display = "none";
    notMobile.style.display = "none";
  }

  // Sync Now Button
  if (syncNowBtn) {
    syncNowBtn.addEventListener("click", function () {
      mobileApp.style.display = "none";
      syncPage.style.display = "flex";
      if(successPage) successPage.style.display = "none";
      if(dashboardPage) dashboardPage.style.display = "none";
      // After 2 seconds, show success
      setTimeout(function () {
        syncPage.style.display = "none";
        if(successPage) successPage.style.display = "flex";
      }, 2000);
    });
  }

  // Back Button on sync page
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      syncPage.style.display = "none";
      mobileApp.style.display = "flex";
      if(successPage) successPage.style.display = "none";
      if(dashboardPage) dashboardPage.style.display = "none";
    });
  }

  // Explore Dashboard Button on success page
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      if(successPage) successPage.style.display = "none";
      if(dashboardPage) dashboardPage.style.display = "flex";
      mobileApp.style.display = "none";
      syncPage.style.display = "none";
    });
  }

  // Logout Button on dashboard page
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      if(dashboardPage) dashboardPage.style.display = "none";
      if(successPage) successPage.style.display = "none";
      syncPage.style.display = "none";
      mobileApp.style.display = "flex";
    });
  }
});

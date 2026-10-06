/* ===== APP VERSION CONTROL ===== */
var dvAppVersion = "1.2"; 
function dvCheckForUpdates() {
  var savedVersion = localStorage.getItem('dv-app-version');
  if (savedVersion && savedVersion !== dvAppVersion) {
    document.getElementById('dvUpdateModal').style.display = 'flex';
  } else if (!savedVersion) {
    localStorage.setItem('dv-app-version', dvAppVersion); // First time install, set silently
  }
}

document.getElementById('dvUpdateOkayBtn').addEventListener('click', function() {
  localStorage.setItem('dv-app-version', dvAppVersion);
  document.getElementById('dvUpdateModal').style.display = 'none';
});

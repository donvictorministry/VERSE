
/* ===== SEARCH ===== */
document.getElementById('dvSearchInput').addEventListener('input', function() {
  var q = this.value.trim().toLowerCase();
  var results = document.getElementById('dvSearchResults');
  if (!q) { results.innerHTML = ''; return; }
  var matches = [];
  var keys = Object.keys(dvVerseDB);
  for (var i = 0; i < keys.length; i++) {
    var verses = dvVerseDB[keys[i]];
    for (var j = 0; j < verses.length; j++) {
      var v = verses[j];
      if (v.text.toLowerCase().indexOf(q) !== -1 || v.ref.toLowerCase().indexOf(q) !== -1 || keys[i].toLowerCase().indexOf(q) !== -1) {
        matches.push({ verse: v, situation: keys[i] });
      }
    }
  }
  if (!matches.length) {
    results.innerHTML = '<div class="dv-empty"><div class="dv-empty-text">No verses found for "' + q + '"</div></div>';
    return;
  }
  var html = '';
  for (var k = 0; k < Math.min(matches.length, 20); k++) {
    var m = matches[k];
    html += '<div class="dv-fav-item">' +
      '<div style="font-size:0.78rem;color:var(--dv-primary);font-weight:700;margin-bottom:4px;">' + m.situation.toUpperCase() + ' &middot; ' + m.verse.translation + '</div>' +
      '<div class="dv-fav-text">\u201C' + m.verse.text + '\u201D</div>' +
      '<div class="dv-fav-ref">' + m.verse.ref + '</div>' +
      '</div>';
  }
  results.innerHTML = html;
});

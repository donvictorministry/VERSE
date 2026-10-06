
/* ===== USER DB & LOGIC ===== */
var dvDB;
function dvProcessUser() {
  var store = dvDB.transaction('user', 'readwrite').objectStore('user');
  store.get('profile').onsuccess = function(e) {
    var p = e.target.result || { id: 'DV' + Math.floor(Math.random()*90000+10000), name: '', streak: 0, lastDate: '' };
    var today = new Date().toDateString();
    
    if (p.lastDate !== today) {
      var yesterday = new Date(Date.now() - 86400000).toDateString();
      p.streak = (p.lastDate === yesterday) ? p.streak + 1 : 1;
      p.lastDate = today;
      store.put(p, 'profile');
    }
    
    document.getElementById('dvUserIdDisplay').textContent = 'ID: ' + p.id;
    var nameInp = document.getElementById('dvUserNameInput');
    nameInp.value = p.name;
    nameInp.addEventListener('input', function() { 
      p.name = this.value; 
      dvDB.transaction('user','readwrite').objectStore('user').put(p, 'profile'); 
    });
    
    var avDiv = document.getElementById('dvUserAvatar');
    var avTxt = document.getElementById('dvUserAvatarText');
    var avInp = document.getElementById('dvAvatarInput');
    if (p.avatar) { avDiv.style.backgroundImage = 'url(' + p.avatar + ')'; avDiv.style.border = 'none'; avTxt.style.display = 'none'; }
    avDiv.onclick = function() { avInp.click(); };
    avInp.onchange = function(e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(evt) {
        var b64 = evt.target.result;
        p.avatar = b64;
        dvDB.transaction('user','readwrite').objectStore('user').put(p, 'profile');
        avDiv.style.backgroundImage = 'url(' + b64 + ')';
        avDiv.style.border = 'none';
        avTxt.style.display = 'none';
      };
      reader.readAsDataURL(file);
    };
    
  var ruleText = "Your streak increments upon daily login, but resets to 1 if a day is missed.";
    document.getElementById('dvUserStreakZone').innerHTML = '🔥 ' + p.streak + ' Day Streak<br><span style="font-size:1.2rem; font-weight:400; color:var(--dv-text-sub); display:block; margin-top:8px;">' + ruleText + '</span>';
  };
  dvRenderActivity();
}

var dvActivityLimit = 5;
function dvRenderActivity() {
  if (!dvDB) return;
  var store = dvDB.transaction('activity').objectStore('activity');
  var req = store.getAll();
  req.onsuccess = function(e) {
    var acts = e.target.result.reverse();
    var feed = document.getElementById('dvUserActivityFeed');
    var btn = document.getElementById('dvUserShowMoreBtn');
    feed.innerHTML = '';
    
    var showing = acts.slice(0, dvActivityLimit);
    showing.forEach(function(a, idx) {
      var tStr = new Date(a.time).toLocaleString('en-US', {month:'short', day:'numeric', hour:'numeric', minute:'2-digit'});
      var vTxt = (a.payload && a.payload.text) ? '<div style="font-size:1.2rem; font-style:italic; color:var(--dv-text-sub); margin-top:8px;">\u201C' + a.payload.text + '\u201D</div>' : '';
      
      // The dynamically injected Journal Note Box
      var nTxt = a.note ? '<div style="margin-top:12px; padding:12px; background:var(--dv-surface); border-left:4px solid var(--dv-primary); border-radius:6px; font-size:1.15rem; color:var(--dv-text); font-weight:500;">' + a.note + '</div>' : '';
      
      var cur = (a.title === 'Puzzle Played' || a.payload) ? 'cursor:pointer;' : '';
      
      var menuBtn = '<div class="dv-feed-dots" style="padding:4px; margin:-4px; cursor:pointer; color:var(--dv-text-sub);"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="19" r="2.5"/></svg></div>';
      var dropMenu = '<div class="dv-feed-drop" style="display:none; position:absolute; right:12px; top:46px; background:var(--dv-surface); border:1px solid var(--dv-border); border-radius:12px; box-shadow:var(--dv-shadow-lg); z-index:100; overflow:hidden; min-width:210px;">' +
        '<div class="dv-fd-note" style="padding:16px 18px; font-size:1.2rem; font-weight:700; color:var(--dv-primary); border-bottom:1px solid var(--dv-border); cursor:pointer;">' + (a.note ? 'Edit Note' : 'Add Note') + '</div>' +
        '<div class="dv-fd-del" style="padding:16px 18px; font-size:1.2rem; font-weight:700; color:#DC2626; border-bottom:1px solid var(--dv-border); cursor:pointer;">Delete</div>' +
        '<div class="dv-fd-wa" style="padding:16px 18px; font-size:1.2rem; font-weight:700; color:#25D366; border-bottom:1px solid var(--dv-border); cursor:pointer;">Share to WhatsApp</div>' +
        '<div class="dv-fd-exit" style="padding:16px 18px; font-size:1.2rem; font-weight:700; color:var(--dv-text-sub); cursor:pointer;">Exit</div>' +
      '</div>';

      feed.innerHTML += '<div class="dv-feed-item" data-dvi="' + idx + '" style="position:relative; background:var(--dv-bg); border:1px solid var(--dv-border); border-radius:8px; padding:12px; ' + cur + '">' +
        '<div style="display:flex; justify-content:space-between; align-items:flex-start;">' +
          '<div>' +
            '<div style="font-size:1.2rem; font-weight:700; color:var(--dv-primary);">' + a.title + '</div>' +
            '<div style="font-size:1rem; color:var(--dv-text-sub); font-weight:600; margin-top:2px;">' + tStr + '</div>' +
          '</div>' +
          menuBtn + 
        '</div>' +
        '<div style="font-size:1.2rem; color:var(--dv-text); margin-top:8px;">' + a.detail + '</div>' + vTxt + nTxt +
        dropMenu +
      '</div>';
    });
    
    feed.querySelectorAll('.dv-feed-item').forEach(function(item) {
      var act = showing[parseInt(item.getAttribute('data-dvi'))];
      var dots = item.querySelector('.dv-feed-dots');
      var drop = item.querySelector('.dv-feed-drop');
      
      dots.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelectorAll('.dv-feed-drop').forEach(function(d) { if (d !== drop) d.style.display = 'none'; });
        drop.style.display = (drop.style.display === 'none') ? 'block' : 'none';
      });
      
      // The Native App Journal Input Logic
      item.querySelector('.dv-fd-note').addEventListener('click', function(e) {
        e.stopPropagation();
        drop.style.display = 'none';
        
        // Open custom modal instead of browser alert
        var noteInput = document.getElementById('dvNoteInput');
        noteInput.value = act.note || "";
        document.getElementById('dvNoteModal').classList.add('dv-active');
        
        // Define what happens when Save is clicked for this specific item
        document.getElementById('dvSaveNoteBtn').onclick = function() {
          var userNote = noteInput.value;
          document.getElementById('dvNoteModal').classList.remove('dv-active');
          
          var store = dvDB.transaction('activity', 'readwrite').objectStore('activity');
          store.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
              if (cursor.value.time === act.time) {
                var data = cursor.value;
                data.note = userNote.trim();
                if (!data.note) delete data.note; // clear note if empty
                cursor.update(data);
                dvRenderActivity();
                return;
              }
              cursor.continue();
            }
          };
        };
      });
      
      item.querySelector('.dv-fd-del').addEventListener('click', function(e) {
        e.stopPropagation();
        var store = dvDB.transaction('activity', 'readwrite').objectStore('activity');
        store.openCursor().onsuccess = function(e) {
          var cursor = e.target.result;
          if (cursor) {
            if (cursor.value.time === act.time) { cursor.delete(); dvRenderActivity(); return; }
            cursor.continue();
          }
        };
      });
      
      item.querySelector('.dv-fd-wa').addEventListener('click', function(e) {
        e.stopPropagation();
        drop.style.display = 'none';
        var text = (act.payload && act.payload.text) ? '\u201C' + act.payload.text + '\u201D - ' + act.payload.ref + ' (' + act.payload.translation + ')' : act.title + ': ' + act.detail;
        if (act.note) text += '\n\nMy Note: ' + act.note; // Automatically appends the testimony to WhatsApp!
        window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
      });
      
      item.querySelector('.dv-fd-exit').addEventListener('click', function(e) {
        e.stopPropagation();
        drop.style.display = 'none';
      });
      
      item.addEventListener('click', function() {
        if (act.title === 'Puzzle Played') {
          var t = document.getElementById('dv-bible-game-widget-trigger'); if(t) t.click();
        } else if (act.payload && act.payload.text) {
          dvState.currentSituation = act.payload.situation || dvSituations[0];
          dvState.currentTranslation = act.payload.translation || 'KJV';
          var pool = dvVerseDB[dvState.currentSituation] || [];
          var filtered = pool.filter(function(v) { return v.translation === dvState.currentTranslation; });
          if (!filtered.length) filtered = pool;
          var vIdx = 0;
          for (var i=0; i<filtered.length; i++) { if (filtered[i].ref === act.payload.ref && filtered[i].text === act.payload.text) { vIdx = i; break; } }
          dvState.currentVerseIndex = vIdx;
          dvShowVerse();
          window.location.hash = '#home';
        }
      });
    });
    
    btn.style.display = (acts.length > dvActivityLimit) ? 'block' : 'none';
    btn.onclick = function() { dvActivityLimit += 5; dvRenderActivity(); };
  };
}

function dvLogActivity(title, detail, payload) {
  if (!dvDB) return;
  var store = dvDB.transaction('activity', 'readwrite').objectStore('activity');
  store.add({ title: title, detail: detail, payload: payload, time: Date.now() });
  if (window.location.hash === '#user') dvRenderActivity();
}

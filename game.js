
(function(){
  'use strict';

  /* ══ CFG ══ */
  var CFG = {
    LS_KEY:       'dvBibleGame_v3',
    CERT_WINS:    7,
    MAX_LEVEL:    5,
    BASE_SWAPS:   100,
    SWAPS_STEP:   60,
    APP_URL:      window.location.href,
    MINISTRY:     'YOUR_MINISTRY_NAME',
    ISSUER:       'YOUR_NAME',
    WHATSAPP:     'YOUR_WHATSAPP_NUMBER',
    EMAIL:        'YOUR_EMAIL',
    ORG_SHORT:    'YOUR_ORGANIZATION_SHORT'
  };

  var BADGES = [
    { wins:1,  label:'Seeker'   },
    { wins:5,  label:'Believer' },
    { wins:10, label:'Disciple' },
    { wins:20, label:'Apostle'  },
    { wins:50, label:'Saint'    }
  ];

  var VERSES = [
    { text:'I can do all things through Christ who strengthens me.',           ref:'Philippians 4:13' },
    { text:'For God so loved the world that He gave His only Son.',            ref:'John 3:16'        },
    { text:'Jesus said: I am the way, the truth, and the life.',               ref:'John 14:6'        },
    { text:'The name of Jesus is above every name.',                           ref:'Philippians 2:9'  },
    { text:'With God all things are possible.',                                ref:'Matthew 19:26'    },
    { text:'The Lord is my shepherd; I shall not want.',                       ref:'Psalm 23:1'       },
    { text:'Be strong and courageous. Do not be afraid.',                      ref:'Joshua 1:9'       },
    { text:'Trust in the Lord with all your heart.',                           ref:'Proverbs 3:5'     }
  ];

  var SOLVED = ['J','E','S','U','S','CROSS','CROSS','CROSS',null];

  /* ══ STATE ══ */
  var S = {
    soundOn:true, darkOn:false,
    tiles:null, paused:false,
    moves:0, seconds:0, timerTick:null,
    level:1, wins:0, streak:0,
    bestMoves:null, bestSec:null,
    lastVerse:null, playerName:'',
    swipeX:0, swipeY:0
  };

  /* ══ HELPERS ══ */
  function G(id){ return document.getElementById(id); }
  function fmt(s){ var m=Math.floor(s/60),r=s%60; return m+':'+(r<10?'0':'')+r; }
  function idxRC(i){ return [Math.floor(i/3), i%3]; }
  function isAdj(a,b){ var ra=idxRC(a),rb=idxRC(b); return Math.abs(ra[0]-rb[0])+Math.abs(ra[1]-rb[1])===1; }
  function rndVerse(){ return VERSES[Math.floor(Math.random()*VERSES.length)]; }
  function badgeFor(w){
    var b=null;
    for(var i=0;i<BADGES.length;i++){ if(w>=BADGES[i].wins) b=BADGES[i].label; }
    return b;
  }
  function hideAll(){
    ['dv-pause-screen','dv-win-screen','dv-name-screen',
     'dv-cert-screen','dv-stats-screen','dv-verse-screen'].forEach(function(id){
      G(id).classList.remove('on');
    });
  }
  function showScreen(id){ hideAll(); G(id).classList.add('on'); }

  /* ══ PERSIST ══ */
  function save(){
    try {
      localStorage.setItem(CFG.LS_KEY, JSON.stringify({
        wins:S.wins, streak:S.streak,
        bestMoves:S.bestMoves, bestSec:S.bestSec,
        level:S.level, darkOn:S.darkOn, soundOn:S.soundOn,
        playerName:S.playerName
      }));
    } catch(e){}
  }
  function load(){
    try {
      var d=JSON.parse(localStorage.getItem(CFG.LS_KEY)||'{}');
      S.wins       = d.wins       || 0;
      S.streak     = d.streak     || 0;
      S.bestMoves  = d.bestMoves  || null;
      S.bestSec    = d.bestSec    || null;
      S.level      = d.level      || 1;
      S.darkOn     = d.darkOn     || false;
      S.soundOn    = d.soundOn !== undefined ? d.soundOn : true;
      S.playerName = d.playerName || '';
    } catch(e){}
  }

  /* ══ AUDIO ══ */
  var actx=null;
  function getCtx(){
    if(!actx) actx=new(window.AudioContext||window.webkitAudioContext)();
    if(actx.state==='suspended') actx.resume();
    return actx;
  }
  function playFlip(){
    if(!S.soundOn) return;
    var ctx=getCtx(), b=ctx.createBuffer(1,ctx.sampleRate*0.06,ctx.sampleRate), d=b.getChannelData(0);
    for(var i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*Math.pow(1-i/d.length,2.2);
    var s=ctx.createBufferSource(), g=ctx.createGain();
    s.buffer=b; s.connect(g); g.connect(ctx.destination); g.gain.value=0.5; s.start();
  }
  function playInvalid(){
    if(!S.soundOn) return;
    var ctx=getCtx(), o=ctx.createOscillator(), g=ctx.createGain();
    o.connect(g); g.connect(ctx.destination); o.type='sine'; o.frequency.value=130;
    var t=ctx.currentTime;
    g.gain.setValueAtTime(0.3,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.18);
    o.start(t); o.stop(t+0.18);
  }
  function playChime(freqs, wave, vol){
    if(!S.soundOn) return;
    var ctx=getCtx();
    freqs.forEach(function(f,i){
      var o=ctx.createOscillator(), g=ctx.createGain();
      o.connect(g); g.connect(ctx.destination); o.type=wave||'sine'; o.frequency.value=f;
      var t=ctx.currentTime+i*0.14;
      g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol||0.35,t+0.02);
      g.gain.exponentialRampToValueAtTime(0.001,t+0.32);
      o.start(t); o.stop(t+0.32);
    });
  }
  function playVictory(){ playChime([523,659,784,1047,1319,1047,1319,1568],'sine',0.38); }
  function playBadge(){   playChime([784,988,1175],'triangle',0.4); }

  /* ══ CONFETTI ══ */
  function confetti(){
    var cols=['#ffd700','#c0c0c0','#4a0e4e','#1877F2','#ff6b6b','#51cf66','#ff922b'];
    for(var i=0;i<90;i++){
      var p=document.createElement('div');
      p.className='dvg-confetti';
      var dur=1.6+Math.random()*1.6, sz=8+Math.random()*10;
      p.style.cssText='left:'+(Math.random()*100)+'dvw;top:-30px;background:'+cols[i%cols.length]+';width:'+sz+'px;height:'+(sz*(0.6+Math.random()*0.8))+'px;border-radius:'+(Math.random()>0.4?'50%':'3px')+';animation-duration:'+dur+'s;animation-delay:'+(Math.random()*0.8)+'s;';
      document.body.appendChild(p);
      setTimeout(function(){ p.remove(); },(dur+0.9)*1000);
    }
  }

  /* ══ CROSS SVG ══ */
  function crossSVG(){
    return '<div class="dvg-cross"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="3" x2="12" y2="21"/><line x1="5" y1="8" x2="19" y2="8"/></svg></div>';
  }

  /* ══ TIMER ══ */
  function startTimer(){
    stopTimer();
    S.timerTick=setInterval(function(){
      if(!S.paused){ S.seconds++; G('dvg-timer').textContent=fmt(S.seconds); }
    },1000);
  }
  function stopTimer(){ if(S.timerTick){ clearInterval(S.timerTick); S.timerTick=null; } }

  /* ══ DOTS ══ */
  function renderDots(){
    var el=G('dvg-dots'); el.innerHTML='';
    for(var i=1;i<=CFG.MAX_LEVEL;i++){
      var d=document.createElement('div');
      d.className='dvg-dot'+(i<=S.level?' on':'');
      el.appendChild(d);
    }
  }

  /* ══ STREAK ══ */
  function renderStreak(){
    var b=badgeFor(S.wins);
    var el=G('dvg-streak');
    if(S.wins>0){
      el.textContent=(b?b+' · ':'')+S.wins+' win'+(S.wins!==1?'s':'')+' · Streak '+S.streak;
    } else {
      el.textContent='\u00a0';
    }
  }

  /* ══ DARK / SOUND UI ══ */
  function applyDark(){
    var c=G('dv-bg-w');
    c.classList.toggle('dv-dark',S.darkOn);
    G('dvg-dark-btn').classList.toggle('on',S.darkOn);
  }
  function applySound(){
    G('dvg-snd').classList.toggle('on',S.soundOn);
  }

  /* ══ PUZZLE ══ */
  function newRound(){
    S.moves=0; S.seconds=0; S.paused=false;
    G('dvg-moves').textContent='0';
    G('dvg-timer').textContent='0:00';
    hideAll();

    var arr=SOLVED.slice(), blank=arr.indexOf(null);
    var swaps=CFG.BASE_SWAPS+(S.level-1)*CFG.SWAPS_STEP;
    for(var m=0;m<swaps;m++){
      var nb=[];
      for(var i=0;i<9;i++){ if(isAdj(i,blank)) nb.push(i); }
      var pick=nb[Math.floor(Math.random()*nb.length)];
      arr[blank]=arr[pick]; arr[pick]=null; blank=pick;
    }
    if(arr.join('')===SOLVED.join('')){
      var nb2=[];
      for(var j=0;j<9;j++){ if(isAdj(j,blank)) nb2.push(j); }
      var pp=nb2[0]; arr[blank]=arr[pp]; arr[pp]=null;
    }
    S.tiles=arr;
    renderGrid(); renderDots(); renderStreak(); startTimer();
  }

  function renderGrid(glow){
    var grid=G('dvg-grid'); grid.innerHTML='';
    S.tiles.forEach(function(val,i){
      var el=document.createElement('div');
      el.className='dvg-tile'+(val===null?' blank':'')+(glow?' glow':'');
      if(val==='CROSS') el.innerHTML=crossSVG();
      else el.textContent=val||'';
      el.addEventListener('click',function(){ tapTile(i); });
      grid.appendChild(el);
    });
    attachSwipe(grid);
  }

  function tapTile(i){
    if(S.paused||G('dv-pause-screen').classList.contains('on')) return;
    var blank=S.tiles.indexOf(null);
    if(!isAdj(i,blank)||S.tiles[i]===null){ playInvalid(); return; }
    playFlip();
    S.tiles[blank]=S.tiles[i]; S.tiles[i]=null;
    S.moves++; G('dvg-moves').textContent=S.moves;
    renderGrid(); checkWin();
  }

  function checkWin(){
    if(S.tiles.join('')!==SOLVED.join('')) return;
    stopTimer(); renderGrid(true); confetti();
    S.wins++; S.streak++;
    if(S.bestMoves===null||S.moves<S.bestMoves) S.bestMoves=S.moves;
    if(S.bestSec===null||S.seconds<S.bestSec)   S.bestSec=S.seconds;
    S.level=Math.min(CFG.MAX_LEVEL,1+Math.floor(S.wins/3));
    var badge=badgeFor(S.wins), verse=rndVerse();
    S.lastVerse=verse;
    playVictory();
    if(badge) setTimeout(playBadge,1200);
    save(); renderStreak();

    var title=S.streak>=3?'Hallelujah! '+S.streak+' in a row!':'Praise God!';
    G('dvg-win-title').textContent=title;
    G('dvg-win-verse').textContent=verse.text;
    G('dvg-win-ref').textContent='— '+verse.ref;
    G('dvg-win-badge').textContent=badge
      ?'Badge Unlocked: '+badge+' · '+S.wins+' wins'
      :S.wins+' win'+(S.wins!==1?'s':'')+' · Streak '+S.streak;

    // cert button only at 7+ wins
    G('dvg-cert-btn').style.display=S.wins>=CFG.CERT_WINS?'':'none';
    showScreen('dv-win-screen');
  }

  /* ══ SWIPE ══ */
  function attachSwipe(grid){
    grid.addEventListener('touchstart',function(e){
      S.swipeX=e.changedTouches[0].clientX;
      S.swipeY=e.changedTouches[0].clientY;
    },{passive:true});
    grid.addEventListener('touchend',function(e){
      var dx=e.changedTouches[0].clientX-S.swipeX;
      var dy=e.changedTouches[0].clientY-S.swipeY;
      if(Math.abs(dx)<12&&Math.abs(dy)<12) return;
      var blank=S.tiles.indexOf(null);
      var br=Math.floor(blank/3), bc=blank%3, target=-1;
      if(Math.abs(dx)>Math.abs(dy)){
        if(dx>0&&bc>0) target=blank-1;
        if(dx<0&&bc<2) target=blank+1;
      } else {
        if(dy>0&&br>0) target=blank-3;
        if(dy<0&&br<2) target=blank+3;
      }
      if(target>=0&&S.tiles[target]!==null){
        playFlip();
        S.tiles[blank]=S.tiles[target]; S.tiles[target]=null;
        S.moves++; G('dvg-moves').textContent=S.moves;
        renderGrid(); checkWin();
      }
    },{passive:true});
  }

  /* ══ CERTIFICATE ══ */
  function openCert(){
    if(S.playerName){
      buildCert(); showScreen('dv-cert-screen');
    } else {
      showScreen('dv-name-screen');
      G('dvg-name-input').value='';
      setTimeout(function(){ G('dvg-name-input').focus(); },200);
    }
  }

  function buildCert(){
    var badge=badgeFor(S.wins)||'Faithful Player';
    var verse=S.lastVerse||VERSES[0];
    var name=S.playerName||'Faithful Player';

    G('dvg-cert-ministry').textContent  = CFG.MINISTRY;
    G('dvg-cert-player').textContent    = name;
    G('dvg-cert-badge').textContent     = badge;
    G('dvg-cert-wins').textContent      = S.wins;
    G('dvg-cert-moves').textContent     = S.bestMoves!==null?S.bestMoves:'--';
    G('dvg-cert-time').textContent      = S.bestSec!==null?fmt(S.bestSec):'--';
    G('dvg-cert-verse').textContent     = '"'+verse.text+'" — '+verse.ref;
    G('dvg-cert-issuer').textContent    = 'Issued by: '+CFG.ISSUER;
    G('dvg-cert-contact').innerHTML     = CFG.MINISTRY+'<br>WhatsApp: '+CFG.WHATSAPP+'<br>Email: '+CFG.EMAIL;
    G('dvg-cert-date').textContent      = new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
  }

  function shareMsg(){
    var badge=badgeFor(S.wins)||'Faithful Player';
    var name=S.playerName||'A Faithful Player';
    return name+' just earned the "'+badge+'" badge on the JESUS Slide Puzzle!\n'
      +'Can you beat my score? '+S.wins+' wins · Best time: '+(S.bestSec!==null?fmt(S.bestSec):'--')+'.\n'
      +'Play free: '+CFG.APP_URL+'\n'
      +'— '+CFG.MINISTRY+' by '+CFG.ISSUER;
  }

  /* ══ BINDINGS ══ */
  G('dvg-snd').addEventListener('click',function(){
    S.soundOn=!S.soundOn; applySound(); save();
  });
  G('dvg-dark-btn').addEventListener('click',function(){
    S.darkOn=!S.darkOn; applyDark(); save();
  });
  G('dvg-new-btn').addEventListener('click',function(){
    stopTimer(); newRound();
  });
  G('dvg-pause-btn').addEventListener('click',function(){
    S.paused=true; showScreen('dv-pause-screen');
  });
  G('dvg-resume-btn').addEventListener('click',function(){
    S.paused=false; hideAll();
  });
  
  G('dvg-exit-btn').addEventListener('click',function(){
    stopTimer();
    if(S.moves>0&&S.tiles.join('')!==SOLVED.join('')) {
      // incomplete round — streak persists, just paused session
    }
    save();
    if(S.moves > 0) {
      dvLogActivity('Puzzle Played', 'Score: ' + S.moves + ' moves');
    }
    G('dv-bg-w').classList.remove('dv-on');
    hideAll();
    window.location.hash = '#home';
  });

  G('dvg-bottom-close-btn').addEventListener('click', function() {
    G('dvg-exit-btn').click();
  });
    
  G('dvg-stats-btn').addEventListener('click',function(){
    G('dvg-st-wins').textContent   = S.wins;
    G('dvg-st-streak').textContent = S.streak;
    G('dvg-st-bmoves').textContent = S.bestMoves!==null?S.bestMoves:'--';
    G('dvg-st-btime').textContent  = S.bestSec!==null?fmt(S.bestSec):'--';
    G('dvg-st-level').textContent  = S.level;
    G('dvg-st-badge').textContent  = badgeFor(S.wins)||'--';
    S.paused=true; showScreen('dv-stats-screen');
  });
  G('dvg-stats-close-btn').addEventListener('click',function(){
    S.paused=false; hideAll();
  });
  G('dvg-verse-btn').addEventListener('click',function(){
    var v=rndVerse();
    G('dvg-verse-txt').textContent=v.text;
    G('dvg-verse-ref').textContent='— '+v.ref;
    S.paused=true; showScreen('dv-verse-screen');
  });
  G('dvg-verse-close-btn').addEventListener('click',function(){
    S.paused=false; hideAll();
  });
  G('dvg-next-btn').addEventListener('click',function(){ newRound(); });
  G('dvg-cert-btn').addEventListener('click',function(){ openCert(); });

  G('dvg-name-confirm-btn').addEventListener('click',function(){
    var n=(G('dvg-name-input').value||'').trim();
    if(!n){ G('dvg-name-input').focus(); return; }
    S.playerName=n; save(); buildCert(); showScreen('dv-cert-screen');
  });
  G('dvg-name-skip-btn').addEventListener('click',function(){
    S.playerName='Faithful Player'; buildCert(); showScreen('dv-cert-screen');
  });

  G('dvg-cert-close-btn').addEventListener('click',function(){ hideAll(); });

  G('dvg-share-wa').addEventListener('click',function(){
    var url='https://wa.me/?text='+encodeURIComponent(shareMsg());
    window.open(url,'_blank');
  });
  G('dvg-share-fb').addEventListener('click',function(){
    var url='https://www.facebook.com/sharer/sharer.php?quote='+encodeURIComponent(shareMsg())+'&u='+encodeURIComponent(CFG.APP_URL);
    window.open(url,'_blank');
  });

  /* ══ TRIGGER ══ */
  var trig=G('dv-bible-game-widget-trigger');
  if(trig){
    trig.addEventListener('click',function(){
      load(); applyDark(); applySound();
      G('dv-bg-w').classList.add('dv-on');
      newRound();
    });
  }

})();

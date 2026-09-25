const greetings=[
  "Darling, where have you been?","Oh good, it’s you, my love.","Angel, can you scratch my back for me?","Come here and squeeze me, sweet thing.","Oh helLO!","Hey sweet cheeks.","Kiss kiss, darling, hurry up now.","I’ve been waiting so long for you, my love.","Come here… closer… closer! Oh, that’s nice.","Dance with me?","Would you like to dance?","Oh there you are, my human glitterball.","Oh. Oh my goodness. At last, it’s you.","Hey bestie.","DARling, let me look at you.","Twirl for me. Oh. Oh, you look GOOD.","There’s my favourite human.","Sweetheart! I was starting to think you’d forgotten me.","My love, come and stand where I can admire you.","Baby! You made it. I can stop haunting the hallway now.","Darling, give us a little spin.","There you are, gorgeous creature.","Come here, you fabulous thing.","My angel! Honestly, the relief.","Sweet cheeks! I knew I felt a disturbance in the glamour.","Darling, I’ve missed your face.","Hello, lover. Behave yourself. Or don’t.","Look at you! Come closer immediately.","Bestie! I have been DYING to see you. Again.","Oh, sweetheart, you’ve absolutely made my afterlife.","My darling human! Where have you been hiding?","Come here, petal. Let me fuss over you.","There’s my little disco peach.","Hello, gorgeous. I was just thinking about you.","Darling! Arms out. I’m imagining a hug.","Angel face! Have you come to dance with me?","Oh sweetheart, there you are. I was getting dramatic.","My love! Quick, before I start composing poetry about your absence.","Darling, darling, darling. Look who finally appeared.","Come in, gorgeous. I saved you a little bit of sparkle.","Sweet thing! I nearly floated off looking for you.","Oh, my favourite person-shaped party has arrived.","Hello, precious. Come and entertain me.","Darling, I need attention and you have excellent timing.","Sweetheart, come here. I have been starved of glamour.","My love, you’re here! Do something fabulous immediately.","Hello, angel. I knew you couldn’t stay away.","There you are, sugarplum. I was beginning to sulk.","Darling! Give me one good twirl and we’ll say no more about it.","Oh lovely, it’s YOU. Come and choose our song."
];
let deck=[];
function nextGreeting(){
  if(!deck.length){
    deck=Array.from({length:greetings.length},(_,i)=>i);
    for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}
  }
  return greetings[deck.pop()];
}

const door=document.getElementById('door');
const entry=document.getElementById('entry');
const greeting=document.getElementById('greeting');
const request=document.getElementById('request');
const response=document.getElementById('response');
const catalog=document.getElementById('catalog');

function showEntry(){
  greeting.textContent=nextGreeting();
  response.textContent='Choose a song, or let me choose for you, darling.';
  request.value='';
  hideConfirm();
  door.classList.remove('active');
  entry.classList.add('active');
  document.documentElement.style.setProperty('--ghost-hue',Math.floor(255+Math.random()*90));
}
function showDoor(){entry.classList.remove('active');door.classList.add('active');hideConfirm();}
document.getElementById('summon').addEventListener('click',showEntry);
document.getElementById('back').addEventListener('click',showDoor);

const vetoTerms=['fleetwood mac','simply red','miley cyrus','michael bolton','the birdie song','birdie song','agadoo','power ballad','total eclipse of the heart','i don\'t want to miss a thing','every rose has its thorn','nothing\'s gonna stop us now','open arms','faithfully','against all odds','keep on loving you','when i see you smile','more than words','to be with you','home sweet home'];
const favourites=[
  {label:'Monster Mash — Bobby Pickett',search:'Monster Mash Bobby Pickett',match:['monster mash','bobby pickett']},
  {label:'Time Warp — The Rocky Horror Picture Show',search:'Time Warp Rocky Horror Picture Show',match:['time warp','timewarp','rocky horror','rocky horror picture show']},
  {label:'Sweet Transvestite — The Rocky Horror Picture Show',search:'Sweet Transvestite Rocky Horror Picture Show',match:['sweet transvestite']},
  {label:'Science Fiction / Double Feature — The Rocky Horror Picture Show',search:'Science Fiction Double Feature Rocky Horror',match:['science fiction double feature','science fiction/double feature']},
  {label:'Dammit Janet — The Rocky Horror Picture Show',search:'Dammit Janet Rocky Horror',match:['dammit janet']},
  {label:'Over at the Frankenstein Place — The Rocky Horror Picture Show',search:'Over at the Frankenstein Place Rocky Horror',match:['over at the frankenstein place']},
  {label:'Hot Patootie — The Rocky Horror Picture Show',search:'Hot Patootie Rocky Horror',match:['hot patootie','bless my soul']},
  {label:'Touch-a, Touch-a, Touch Me — The Rocky Horror Picture Show',search:'Touch a Touch a Touch Me Rocky Horror',match:['touch a touch a touch me','touch-a touch-a touch me']},
  {label:'I Wanna Be a Cowboy, Baby! — CMAT',search:'I Wanna Be a Cowboy Baby CMAT',match:['cmat','i wanna be a cowboy baby']},
  {label:'Rock Lobster — The B-52’s',search:'Rock Lobster B-52s',match:['rock lobster','b-52','b52']},
  {label:'Spirit in the Sky — Norman Greenbaum',search:'Spirit in the Sky Norman Greenbaum',match:['spirit in the sky','norman greenbaum']},
  {label:'I Put a Spell on You — Hocus Pocus',search:'I Put a Spell on You Hocus Pocus',match:['i put a spell on you','hocus pocus','andrea mazzarino']},
  {label:'(Don’t Fear) The Reaper — Blue Öyster Cult',search:'Dont Fear The Reaper Blue Oyster Cult',match:['don’t fear the reaper','dont fear the reaper','blue oyster cult','blue öyster cult']},
  {label:'Werewolves of London — Warren Zevon',search:'Werewolves of London Warren Zevon',match:['werewolves of london','warren zevon']},
  {label:'Ghostbusters — Ray Parker Jr.',search:'Ghostbusters Ray Parker Jr',match:['ghostbusters','ray parker']},
  {label:'Thriller — Michael Jackson',search:'Thriller Michael Jackson',match:['thriller','michael jackson']},
  {label:'Murder on the Dancefloor — Sophie Ellis-Bextor',search:'Murder on the Dancefloor Sophie Ellis-Bextor',match:['murder on the dancefloor','sophie ellis-bextor','sophie ellis bextor']},
  {label:'Carry On Screaming',search:'Carry On Screaming song',match:['carry on screaming']},
  {label:'Psycho Killer — Talking Heads',search:'Psycho Killer Talking Heads',match:['psycho killer','talking heads']},
  {label:'Love Potion No. 9',search:'Love Potion No 9',match:['love potion number 9','love potion no 9','love potion no. 9']}
];
const vetoReplies=['No, darling. Absolutely not. Try again.','Denied. I have standards and an afterlife to protect.','Sweetheart, I adore you. I refuse this request.','No. The jukebox has boundaries.','Darling, I would rather haunt the fuse box.'];
function normalise(text){return text.toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9' ]+/g,' ').replace(/\s+/g,' ').trim();}
function findFavourite(q){const n=normalise(q);return favourites.find(f=>f.match.some(m=>n.includes(normalise(m))));}
function isVeto(q){const n=normalise(q);return vetoTerms.some(term=>n.includes(normalise(term)));}
function escapeHtml(s=''){return s.replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));}
function hideConfirm(){catalog.hidden=true;catalog.innerHTML='';}

function runShortcut(text){
  const url='shortcuts://run-shortcut?name='+encodeURIComponent('Haunted Jukebox Play')+'&input=text&text='+encodeURIComponent(text);
  window.location.href=url;
}

function showConfirm(displayText,payload,isFavourite=false){
  catalog.hidden=false;
  catalog.innerHTML=`<div class="track-card" style="grid-template-columns:1fr;text-align:center">
    <div><div class="track-title">${escapeHtml(displayText)}</div><div class="track-artist">Send this request to Apple Music?</div></div>
    <div class="track-actions"><button class="yes-track" id="yesTrack" type="button">✓ THAT’S IT</button><button class="no-track" id="noTrack" type="button">✕ CHANGE IT</button></div>
  </div>`;
  document.getElementById('yesTrack').addEventListener('click',()=>{
    if(isFavourite) greeting.textContent='MY FAVOURITE SONG! Marry me?';
    else greeting.textContent='Fine. I’ll allow it.';
    response.textContent=`Sending “${displayText}” to Apple Music…`;
    setTimeout(()=>runShortcut(payload),180);
  });
  document.getElementById('noTrack').addEventListener('click',()=>{
    hideConfirm();
    greeting.textContent='Very well. Try again, darling.';
    response.textContent='Type the song title and artist if there’s any ambiguity.';
    request.focus();
  });
}

function judgeRequest(q){
  hideConfirm();
  if(isVeto(q)){
    greeting.textContent=vetoReplies[Math.floor(Math.random()*vetoReplies.length)];
    response.textContent=`“${q}” will not be entering this jukebox.`;
    document.documentElement.style.setProperty('--ghost-hue','350');
    return;
  }
  const favourite=findFavourite(q);
  if(favourite){
    greeting.textContent='MY FAVOURITE SONG! Marry me?';
    response.textContent='Please say yes. To the song, obviously. Unless…';
    document.documentElement.style.setProperty('--ghost-hue',String(Math.floor(285+Math.random()*65)));
    showConfirm(favourite.label,favourite.search,true);
    return;
  }
  greeting.textContent='This one, darling?';
  response.textContent='I’ll hand your exact request to Apple Music.';
  showConfirm(q,q,false);
}

document.getElementById('requestForm').addEventListener('submit',e=>{
  e.preventDefault();
  const q=request.value.trim();
  if(!q){response.textContent='You do actually have to ask for a song, darling.';return;}
  judgeRequest(q);
  request.blur();
});

document.getElementById('youChoose').addEventListener('click',()=>{
  const f=favourites[Math.floor(Math.random()*favourites.length)];
  request.value='';
  hideConfirm();
  greeting.textContent='Leave it to me, darling.';
  response.textContent=`I choose ${f.label}. Naturally.`;
  document.documentElement.style.setProperty('--ghost-hue',String(Math.floor(285+Math.random()*65)));
  setTimeout(()=>runShortcut(f.search),650);
});

request.addEventListener('input',()=>{if(request.value.trim()){response.textContent='Go on…';hideConfirm();}});
let hue=282,beat=false;
setInterval(()=>{beat=!beat;document.documentElement.style.setProperty('--beat',beat?'1.35':'.75');},460);
setInterval(()=>{hue=(hue+9)%360;if(door.classList.contains('active')) document.documentElement.style.setProperty('--ghost-hue',hue);},820);
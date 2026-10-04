const greetings=[
  "Coat, darling. Drink?",
  "Good evening. Your coat, please. And what are we drinking?",
  "Come in. I have taken the liberty of pouring something.",
  "There you are. I was beginning to suspect you had gone somewhere with a playlist.",
  "Coat on the left. Glass on the right. Musical decisions in the middle.",
  "Do come in. The candles are lit and somebody has already asked for Ed Sheeran.",
  "Your glass is over there. I have labelled nothing. This is a dinner party.",
  "Welcome. I shall take your coat and reserve judgement until you choose a song.",
  "Reg Dyer. Eighty-five. Sixty years in service. Your coat, please.",
  "Retire? I did try it once. Dreadful business. Nobody knew where anything was.",
  "Eighty-five, sixty years in service, and apparently still the only person who knows where the corkscrew lives."
];

const pre79=[
  {label:"Let's Stay Together — Al Green",search:"Let's Stay Together Al Green"},
  {label:"Superstition — Stevie Wonder",search:"Superstition Stevie Wonder"},
  {label:"Young Hearts Run Free — Candi Staton",search:"Young Hearts Run Free Candi Staton"},
  {label:"September — Earth, Wind & Fire",search:"September Earth Wind & Fire"},
  {label:"Le Freak — Chic",search:"Le Freak Chic"},
  {label:"Heroes — David Bowie",search:"Heroes David Bowie"},
  {label:"Lovely Day — Bill Withers",search:"Lovely Day Bill Withers"},
  {label:"You Make Me Feel (Mighty Real) — Sylvester",search:"You Make Me Feel Mighty Real Sylvester"},
  {label:"Dancing Queen — ABBA",search:"Dancing Queen ABBA"},
  {label:"Signed, Sealed, Delivered — Stevie Wonder",search:"Signed Sealed Delivered Stevie Wonder"},
  {label:"Respect — Aretha Franklin",search:"Respect Aretha Franklin"},
  {label:"Mr. Blue Sky — Electric Light Orchestra",search:"Mr Blue Sky Electric Light Orchestra"},
  {label:"For Your Love — The Yardbirds",search:"For Your Love The Yardbirds"},
  {label:"Heart Full of Soul — The Yardbirds",search:"Heart Full of Soul The Yardbirds"}
];

const oldSchoolTerms=[
  "al green","stevie wonder","aretha franklin","david bowie","chic","earth wind",
  "candi staton","bill withers","abba","elo","electric light orchestra","marvin gaye",
  "diana ross","supremes","temptations","bee gees","elton john","queen","blondie",
  "sylvester","rolling stones","beatles","kinks","dusty springfield","nina simone",
  "frank sinatra","ella fitzgerald","gladys knight","four tops","t rex","t. rex"
];

const yardbirds=["yardbirds","the yardbirds","for your love","heart full of soul","shapes of things","over under sideways down"];
const yardbirdsJoy=[
  "The Yardbirds? Oh, you beauty. Hammersmith Odeon, 1965. I could kiss you.",
  "For Your Love? Good Lord. Give me that tray. No, actually, take the tray. I need a minute.",
  "The Yardbirds. Now you're talking. Hammersmith, 1965... best night of my life. Nearly.",
  "Heart Full of Soul? Oh, mate. Sorry. Forgive me. That one's got me.",
  "The Yardbirds! Someone pour me one. The decent stuff. I am overcome.",
  "One for me? Don't mind if I do, Guv. ...Ahem. Thank you. Most kind.",
  "Blimey. The Yardbirds. Ahem. My apologies. You have made an old man very happy.",
  "The Yardbirds? Move that chair. I haven't done this since Hammersmith.",
  "For Your Love? Right. Somebody mind the tray.",
  "Heart Full of Soul? Oh, behave. I'm eighty-five, not dead.",
  "Get that glitter ball on, Guv. Proper job. ...Ahem. Most atmospheric.",
  "The glitter ball? Leave it running. I find it improves the room.",
  "Somebody put the glitter ball on. If we're doing this, we're doing it properly."
];

const paulaModern=["harry styles","lizzo"];
const fleetwood=[
  "fleetwood mac","stevie nicks","lindsey buckingham","rumours",
  "go your own way","dreams fleetwood","the chain","rhiannon"
];

const fleetwoodReplies=[
  "The Mistress of the house has given orders. Absolutely not.",
  "I value my position. That would be gross misconduct.",
  "Mrs Brown has been painfully clear on this point. I am not losing my employment over Fleetwood Mac.",
  "Good heavens. No. Paula would drop dead and I would be left explaining Rumours to the paramedics.",
  "I have sixty years in service behind me. I shall not throw it all away for The Chain.",
  "The Mistress has spoken. Fleetwood Mac is forbidden within these walls.",
  "More than my job's worth, mate.",
  "Do me a favour. I mean... forgive me. The Mistress has issued instructions.",
  "You're having a laugh. Ahem. My apologies. The answer remains no.",
  "Nah. Absolutely... forgive me. One became emotional. Mrs Brown has forbidden it.",
  "I am afraid Paula has issued standing orders. My hands are tied and, frankly, I am relieved.",
  "Certainly not. The last time their name was mentioned, the Mistress looked at me in a manner I shall never forget."
];

const modernTeasing=[
  "Very good. Paula has got to you, I see.",
  "I shall add it. I will also top up everyone else's glass.",
  "Of course. Paula will be delighted. The rest of us shall conduct ourselves professionally.",
  "Into the queue it goes. I blame Paula.",
  "Yes, yes. I know. Paula likes this one. I have made my peace with it.",
  "Someone fetch the ice. Paula has chosen again."
];

const oldSchoolApprovals=[
  "Excellent. Someone at this table has standards.",
  "Very civilised. I may bring out the good glasses.",
  "At last. Music with proper tailoring.",
  "Splendid choice. I knew there was hope for this evening.",
  "That will do very nicely with dinner.",
  "Now we're talking. Forgive me. That slipped out."
];

const neutralReplies=[
  "An interesting choice. I shall refrain from making a face.",
  "Very well. I have heard worse at otherwise respectable tables.",
  "I'll allow it. Your glass is getting low, by the way.",
  "Certainly. I shall add it and pretend I understand the attraction.",
  "Into the queue. I make no promises about my expression."
];

const delayWarnings=[
  "Oh for goodness sake, choose something quickly or Paula will put Harry Styles on again.",
  "Someone choose a song immediately. Paula is looking at Lizzo. We have seconds.",
  "Please decide. Paula has opened Apple Music and I do not like the look of this.",
  "Do hurry. The Mistress is hovering over Harry Styles again."
];

let greetingDeck=[];
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function nextGreeting(){
  if(!greetingDeck.length) greetingDeck=shuffle([...greetings]);
  return greetingDeck.pop();
}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function norm(s){return s.toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim();}
function hasAny(q,terms){const n=norm(q);return terms.some(t=>n.includes(norm(t)));}

const door=document.getElementById("door");
const entry=document.getElementById("entry");
const greeting=document.getElementById("greeting");
const request=document.getElementById("request");
const response=document.getElementById("response");
const catalog=document.getElementById("catalog");

function hideConfirm(){catalog.hidden=true;catalog.innerHTML="";}
function showDoor(){entry.classList.remove("active");door.classList.add("active");hideConfirm();}
function showEntry(){
  door.classList.remove("active");entry.classList.add("active");hideConfirm();
  greeting.textContent=nextGreeting();
  response.textContent=pick(delayWarnings);
  request.value="";
}
document.getElementById("summon").addEventListener("click",showEntry);
document.getElementById("back").addEventListener("click",showDoor);

function runShortcut(text,verdict,displayText){
  hideConfirm();
  greeting.textContent="Very good. I'll see to it.";
  response.textContent=`Sending “${displayText}” to Dinner party queue…`;
  const callback=window.location.origin+window.location.pathname+"?ready=1&verdict="+encodeURIComponent(verdict)+"&song="+encodeURIComponent(displayText);
  const url="shortcuts://x-callback-url/run-shortcut?name="+encodeURIComponent("Dinner Party Jukebox Play")+
    "&input=text&text="+encodeURIComponent(text)+"&x-success="+encodeURIComponent(callback);
  setTimeout(()=>{window.location.href=url;},120);
}

function showConfirm(displayText,payload,verdict){
  catalog.hidden=false;
  catalog.innerHTML=`<div class="card">
    <div class="track">${escapeHtml(displayText)}</div>
    <div class="actions">
      <button class="yes" id="yesTrack" type="button">✓ ADD IT</button>
      <button class="no" id="noTrack" type="button">✕ CHANGE IT</button>
    </div>
  </div>`;
  document.getElementById("yesTrack").addEventListener("click",()=>runShortcut(payload,verdict,displayText));
  document.getElementById("noTrack").addEventListener("click",()=>{
    hideConfirm();greeting.textContent="Very well. Another selection, please.";response.textContent=pick(delayWarnings);request.focus();
  });
}
function escapeHtml(s=""){return s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}

function judge(q){
  hideConfirm();

  if(hasAny(q,fleetwood)){
    const line=pick(fleetwoodReplies);
    greeting.textContent=line;
    response.textContent="Request refused on direct instructions from Paula.";
    document.body.classList.remove("scandal");void document.body.offsetWidth;document.body.classList.add("scandal");
    return;
  }

  let verdict;
  if(hasAny(q,yardbirds)){
    verdict=pick(yardbirdsJoy);
    greeting.textContent=verdict;
    response.textContent="The butler has briefly forgotten the silver service and is emotionally back at Hammersmith Odeon in 1965.";
  } else if(hasAny(q,paulaModern)){
    verdict=pick(modernTeasing);
    greeting.textContent=verdict;
    response.textContent="Playable. The butler is merely making a point.";
  } else if(hasAny(q,oldSchoolTerms)){
    verdict=pick(oldSchoolApprovals);
    greeting.textContent=verdict;
    response.textContent="The butler's faith in the evening has been restored.";
  } else {
    verdict=pick(neutralReplies);
    greeting.textContent=verdict;
    response.textContent="He is judging you, but professionally.";
  }
  showConfirm(q,q,verdict);
}

document.getElementById("requestForm").addEventListener("submit",e=>{
  e.preventDefault();
  const q=request.value.trim();
  if(!q){greeting.textContent="A song, please. I cannot queue an atmosphere.";response.textContent=pick(delayWarnings);return;}
  judge(q);request.blur();
});

document.getElementById("youChoose").addEventListener("click",()=>{
  const f=pick(pre79);
  const verdict=hasAny(f.search,yardbirds) ? pick(yardbirdsJoy) : pick([
    "Leave it with me. I remember when records had standards.",
    "Allow me. Something from before 1979, naturally.",
    "Very good. I shall rescue the evening.",
    "My choice? At last. Stand back."
  ]);
  greeting.textContent=verdict;
  response.textContent=hasAny(f.search,yardbirds)
    ? "He's chosen The Yardbirds and is now emotionally unavailable for normal duties."
    : `I choose ${f.label}.`;
  runShortcut(f.search,verdict,f.label);
});

function showReturnJudgement(){
  const params=new URLSearchParams(window.location.search);
  if(params.get("ready")!=="1") return;
  const verdict=params.get("verdict")||"Very good.";
  const song=params.get("song")||"Your selection";
  door.classList.remove("active");entry.classList.add("active");hideConfirm();
  greeting.textContent=verdict;
  response.textContent=`“${song}” has joined Dinner party queue.`;
  history.replaceState({},"",window.location.pathname);
}
showReturnJudgement();

request.addEventListener("input",()=>{if(request.value.trim()){response.textContent="Go on. I'm listening.";hideConfirm();}});
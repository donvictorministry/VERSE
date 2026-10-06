
/* =====================================================================
   VERSE FOR MY SITUATION — DV Biblefirm
   Rev. Dr. Chris Johnson, PhD
   (c) DV Biblefirm. All rights reserved. Proprietary Software.
   ===================================================================== */

/* ===== TRANSLATIONS ===== */
var dvTranslations = ['KJV','MSG','TLB','RSV','ESV','ASV'];
var dvTransLabels = { KJV:'KJV', MSG:'MSG', TLB:'TLB', RSV:'RSV', ESV:'ESV', ASV:'ASV' };

/* ===== SITUATIONS ===== */
var dvSituations = [
  'Anxiety','Fear','Hope','Wisdom','Forgiveness','Gratitude',
  'Depression','Loneliness','Strength','Peace','Healing',
  'Guidance','Faith','Grief','Joy','Prayer','Love','Protection'
];

/* ===== 100+ VERSE DATABASE =====
   Format: { text, ref, translation, note }
   ============================= */
var dvVerseDB = {

  Anxiety: [
    { text:"Cast all your anxiety on him because he cares for you.", ref:"1 Peter 5:7", translation:"KJV", note:"God personally invites you to give Him every worry." },
    { text:"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.", ref:"Philippians 4:6-7", translation:"KJV", note:"Thanksgiving transforms anxiety into peace." },
    { text:"Don't fret or worry. Instead of worrying, pray. Let petitions and praises shape your worries into prayers, letting God know your concerns.", ref:"Philippians 4:6", translation:"MSG", note:"Worry surrendered to God becomes worship." },
    { text:"Don't worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done.", ref:"Philippians 4:6", translation:"TLB", note:"Action over anxiety: pray immediately." },
    { text:"Have no anxiety about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", ref:"Philippians 4:6", translation:"RSV", note:"Anxiety yields to prayer and gratitude." },
    { text:"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", ref:"Philippians 4:6", translation:"ESV", note:"God's peace guards both heart and mind." },
    { text:"I sought the LORD, and he heard me, and delivered me from all my fears.", ref:"Psalm 34:4", translation:"KJV", note:"Seeking God is the first step out of fear and anxiety." },
    { text:"When anxiety was great within me, your consolation brought me joy.", ref:"Psalm 94:19", translation:"ESV", note:"God's comfort is greater than our deepest anxiety." }
  ],

  Fear: [
    { text:"Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.", ref:"Isaiah 41:10", translation:"KJV", note:"Five divine promises for the fearful heart." },
    { text:"The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?", ref:"Psalm 27:1", translation:"KJV", note:"When God is your light, there is no darkness to fear." },
    { text:"Don't panic. I'm with you. There's no need to fear for I'm your God. I'll give you strength. I'll help you. I'll hold you steady, keep a firm grip on you.", ref:"Isaiah 41:10", translation:"MSG", note:"God holds you firmly — there is nothing to fear." },
    { text:"Don't be afraid, for I am with you. Don't be dismayed, for I am your God. I will strengthen you. I will help you. I will uphold you with my victorious right hand.", ref:"Isaiah 41:10", translation:"TLB", note:"God's right hand is your steady foundation." },
    { text:"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", ref:"2 Timothy 1:7", translation:"KJV", note:"Fear is not from God — power, love, and clarity are." },
    { text:"There is no fear in love; but perfect love casteth out fear.", ref:"1 John 4:18", translation:"KJV", note:"Growing in God's love dissolves fear completely." },
    { text:"Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.", ref:"Psalm 23:4", translation:"ESV", note:"God's presence makes every valley safe." },
    { text:"What time I am afraid, I will trust in thee.", ref:"Psalm 56:3", translation:"KJV", note:"The moment fear arrives, trust is the response." }
  ],

  Hope: [
    { text:"For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.", ref:"Jeremiah 29:11", translation:"ESV", note:"God's plans are always better than our fears." },
    { text:"May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.", ref:"Romans 15:13", translation:"KJV", note:"Hope is not wishful thinking — it is Holy Spirit power." },
    { text:"I know what I'm doing. I have it all planned out — plans to take care of you, not abandon you, plans to give you the future you hope for.", ref:"Jeremiah 29:11", translation:"MSG", note:"God's plan for you has never been abandoned." },
    { text:"For in this hope we were saved. Now hope that is seen is not hope. For who hopes for what he sees? But if we hope for what we do not see, we wait for it with patience.", ref:"Romans 8:24-25", translation:"ESV", note:"Hope grows strongest in the waiting." },
    { text:"Be strong, and let your heart take courage, all you who wait for the LORD!", ref:"Psalm 31:24", translation:"ESV", note:"Waiting on God is an act of courageous hope." },
    { text:"This I recall to my mind, therefore have I hope. It is of the LORD's mercies that we are not consumed, because his compassions fail not.", ref:"Lamentations 3:21-22", translation:"KJV", note:"Every morning, God's mercies are renewed for you." },
    { text:"But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles.", ref:"Isaiah 40:31", translation:"KJV", note:"Waiting on God produces supernatural strength." }
  ],

  Wisdom: [
    { text:"If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.", ref:"James 1:5", translation:"KJV", note:"God gives wisdom generously and without scolding." },
    { text:"Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", ref:"Proverbs 3:5-6", translation:"KJV", note:"Total trust in God produces clear direction." },
    { text:"If you need wisdom — if you want to know what God wants you to do — ask him, and he will gladly tell you. He will not resent your asking.", ref:"James 1:5", translation:"TLB", note:"God is never annoyed when you ask for wisdom." },
    { text:"The fear of the LORD is the beginning of wisdom: and knowledge of the holy is understanding.", ref:"Proverbs 9:10", translation:"KJV", note:"Reverence for God is the foundation of all true wisdom." },
    { text:"For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding.", ref:"Proverbs 2:6", translation:"KJV", note:"Divine wisdom comes directly from God's Word." },
    { text:"The wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits.", ref:"James 3:17", translation:"ESV", note:"Godly wisdom is recognized by its fruit of peace." },
    { text:"Your word is a lamp to my feet and a light to my path.", ref:"Psalm 119:105", translation:"ESV", note:"God's Word illuminates the next step forward." }
  ],

  Forgiveness: [
    { text:"And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.", ref:"Ephesians 4:32", translation:"KJV", note:"Our forgiveness of others flows from God's forgiveness of us." },
    { text:"If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.", ref:"1 John 1:9", translation:"KJV", note:"Confession unlocks total cleansing from God." },
    { text:"Make a clean break with all cutting, backbiting, profane talk. Be gentle with one another, sensitive. Forgive one another as quickly and thoroughly as God in Christ forgave you.", ref:"Ephesians 4:31-32", translation:"MSG", note:"Quick, thorough forgiveness mirrors God's grace." },
    { text:"He that covereth a transgression seeketh love; but he that repeateth a matter separateth very friends.", ref:"Proverbs 17:9", translation:"KJV", note:"Love covers offenses — it does not broadcast them." },
    { text:"Come now, and let us reason together, saith the LORD: though your sins be as scarlet, they shall be as white as snow.", ref:"Isaiah 1:18", translation:"KJV", note:"No sin is beyond the reach of God's forgiveness." },
    { text:"For thou, Lord, art good, and ready to forgive; and plenteous in mercy unto all them that call upon thee.", ref:"Psalm 86:5", translation:"KJV", note:"God's readiness to forgive exceeds our readiness to ask." },
    { text:"Bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.", ref:"Colossians 3:13", translation:"ESV", note:"Community life requires ongoing mutual forgiveness." }
  ],

  Gratitude: [
    { text:"In every thing give thanks: for this is the will of God in Christ Jesus concerning you.", ref:"1 Thessalonians 5:18", translation:"KJV", note:"Thankfulness in all things is God's direct will for you." },
    { text:"Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.", ref:"Psalm 100:4", translation:"KJV", note:"Gratitude is the gateway into God's presence." },
    { text:"Thank God no matter what happens. This is the way God wants you who belong to Christ Jesus to live.", ref:"1 Thessalonians 5:18", translation:"MSG", note:"Gratitude is not about circumstances — it is a way of life." },
    { text:"It is good to give thanks to the LORD, to sing praises to your name, O Most High; to declare your steadfast love in the morning, and your faithfulness by night.", ref:"Psalm 92:1-2", translation:"ESV", note:"Morning gratitude and evening thanksgiving anchor the day." },
    { text:"Bless the LORD, O my soul, and forget not all his benefits.", ref:"Psalm 103:2", translation:"KJV", note:"Remembering God's benefits fuels gratitude." },
    { text:"Oh give thanks to the LORD, for he is good, for his steadfast love endures forever!", ref:"Psalm 107:1", translation:"ESV", note:"God's enduring love is always a reason to give thanks." }
  ],

  Depression: [
    { text:"Why art thou cast down, O my soul? and why art thou disquieted within me? hope thou in God: for I shall yet praise him, who is the health of my countenance, and my God.", ref:"Psalm 42:11", translation:"KJV", note:"Speak to your own soul — choose hope over despair." },
    { text:"The LORD is close to the brokenhearted and saves those who are crushed in spirit.", ref:"Psalm 34:18", translation:"ESV", note:"God draws nearest precisely when you feel lowest." },
    { text:"Are you tired? Worn out? Burned out on religion? Come to me. Get away with me and you'll recover your life.", ref:"Matthew 11:28", translation:"MSG", note:"Jesus personally invites the exhausted to come to Him." },
    { text:"He healeth the broken in heart, and bindeth up their wounds.", ref:"Psalm 147:3", translation:"KJV", note:"God is a skilled healer of emotional wounds." },
    { text:"Come unto me, all ye that labour and are heavy laden, and I will give you rest.", ref:"Matthew 11:28", translation:"KJV", note:"Burdens were never meant to be carried alone." },
    { text:"I waited patiently for the LORD; and he inclined unto me, and heard my cry. He brought me up also out of an horrible pit, out of the miry clay, and set my feet upon a rock.", ref:"Psalm 40:1-2", translation:"KJV", note:"God reaches into the deepest pit to rescue you." },
    { text:"Weeping may endure for a night, but joy cometh in the morning.", ref:"Psalm 30:5", translation:"KJV", note:"Grief is temporary — God's joy comes with the dawn." }
  ],

  Loneliness: [
    { text:"Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you.", ref:"Deuteronomy 31:6", translation:"ESV", note:"God's permanent presence is the antidote to loneliness." },
    { text:"Lo, I am with you always, even unto the end of the world.", ref:"Matthew 28:20", translation:"KJV", note:"Jesus promised His unending companionship." },
    { text:"God has said, Never will I leave you; never will I forsake you.", ref:"Hebrews 13:5", translation:"ESV", note:"A double promise — God will never leave, never forsake." },
    { text:"A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families.", ref:"Psalm 68:5-6", translation:"ESV", note:"God actively provides family for the lonely." },
    { text:"Though my father and mother forsake me, the LORD will receive me.", ref:"Psalm 27:10", translation:"ESV", note:"Even when family fails, God's arms are open." },
    { text:"I will not leave you as orphans; I will come to you.", ref:"John 14:18", translation:"ESV", note:"Jesus promised He would come — the Holy Spirit is that presence." }
  ],

  Strength: [
    { text:"I can do all things through Christ which strengtheneth me.", ref:"Philippians 4:13", translation:"KJV", note:"Christ's strength flows into every situation you face." },
    { text:"The LORD is my strength and my shield; my heart trusted in him, and I am helped.", ref:"Psalm 28:7", translation:"KJV", note:"Trusting God activates divine strength and protection." },
    { text:"Whatever I have, wherever I am, I can make it through anything in the One who makes me who I am.", ref:"Philippians 4:13", translation:"MSG", note:"Your identity in Christ is the source of all strength." },
    { text:"He gives power to the faint, and to him who has no might he increases strength.", ref:"Isaiah 40:29", translation:"ESV", note:"God gives strength precisely to those who have none." },
    { text:"My flesh and my heart faileth: but God is the strength of my heart, and my portion for ever.", ref:"Psalm 73:26", translation:"KJV", note:"When you are empty, God is fully sufficient." },
    { text:"Be strong in the Lord, and in the power of his might.", ref:"Ephesians 6:10", translation:"KJV", note:"Strength comes from abiding in the Lord, not ourselves." },
    { text:"The joy of the LORD is your strength.", ref:"Nehemiah 8:10", translation:"KJV", note:"Joy in God generates supernatural endurance." }
  ],

  Peace: [
    { text:"Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.", ref:"John 14:27", translation:"KJV", note:"Jesus gives a quality of peace the world cannot match." },
    { text:"Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.", ref:"Isaiah 26:3", translation:"KJV", note:"Fixed attention on God produces perfect, complete peace." },
    { text:"I'm leaving you well and whole. That's my parting gift to you. Peace. I don't leave you the way you're used to being left — feeling abandoned, bereft.", ref:"John 14:27", translation:"MSG", note:"Jesus' peace is not absence of trouble, but wholeness within it." },
    { text:"And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.", ref:"Philippians 4:7", translation:"ESV", note:"God's peace stands guard over every anxious thought." },
    { text:"Great peace have those who love your law; nothing can make them stumble.", ref:"Psalm 119:165", translation:"ESV", note:"Loving God's Word produces unshakable peace." },
    { text:"For he himself is our peace.", ref:"Ephesians 2:14", translation:"ESV", note:"Jesus is not just the giver of peace — He IS peace." }
  ],

  Healing: [
    { text:"He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.", ref:"Isaiah 53:5", translation:"KJV", note:"Healing was purchased at Calvary — it belongs to you." },
    { text:"Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord: And the prayer of faith shall save the sick.", ref:"James 5:14-15", translation:"KJV", note:"Community prayer and faith activate God's healing power." },
    { text:"He personally took our infirmities and carried our diseases.", ref:"Matthew 8:17", translation:"ESV", note:"Jesus physically bore sickness so you could be free." },
    { text:"But I will restore you to health and heal your wounds, declares the LORD.", ref:"Jeremiah 30:17", translation:"ESV", note:"God directly declares His intention to heal." },
    { text:"Bless the LORD, O my soul, and forget not all his benefits: Who forgiveth all thine iniquities; who healeth all thy diseases.", ref:"Psalm 103:2-3", translation:"KJV", note:"Healing is listed among God's covenant benefits." },
    { text:"For I will give you back your health and heal your wounds, says the LORD.", ref:"Jeremiah 30:17", translation:"TLB", note:"God's healing word is spoken directly to you today." }
  ],

  Guidance: [
    { text:"Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", ref:"Proverbs 3:5-6", translation:"KJV", note:"Acknowledging God in every decision opens divine direction." },
    { text:"The steps of a good man are ordered by the LORD: and he delighteth in his way.", ref:"Psalm 37:23", translation:"KJV", note:"God orders the steps of those who delight in Him." },
    { text:"Trust God from the bottom of your heart; don't try to figure out everything on your own. Listen for God's voice in everything you do, everywhere you go; he's the one who will keep you on track.", ref:"Proverbs 3:5-6", translation:"MSG", note:"Listening for God's voice brings course correction." },
    { text:"I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye.", ref:"Psalm 32:8", translation:"KJV", note:"God personally promises to instruct and guide you." },
    { text:"And thine ears shall hear a word behind thee, saying, This is the way, walk ye in it.", ref:"Isaiah 30:21", translation:"KJV", note:"God speaks clearly when we are attentive to His voice." },
    { text:"For this God is our God for ever and ever: he will be our guide even unto death.", ref:"Psalm 48:14", translation:"KJV", note:"God's guidance is lifelong — from now until eternity." }
  ],

  Faith: [
    { text:"Now faith is the substance of things hoped for, the evidence of things not seen.", ref:"Hebrews 11:1", translation:"KJV", note:"Faith makes the invisible tangible and the hoped-for real." },
    { text:"So then faith cometh by hearing, and hearing by the word of God.", ref:"Romans 10:17", translation:"KJV", note:"Consistent hearing of God's Word grows strong faith." },
    { text:"The fundamental fact of existence is that this trust in God, this faith, is the firm foundation under everything that makes life worth living.", ref:"Hebrews 11:1", translation:"MSG", note:"Faith is the bedrock of every worthwhile pursuit." },
    { text:"Jesus said unto him, If thou canst believe, all things are possible to him that believeth.", ref:"Mark 9:23", translation:"KJV", note:"Possibility expands to the size of your believing." },
    { text:"Without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.", ref:"Hebrews 11:6", translation:"KJV", note:"Seeking God with faith always results in reward." },
    { text:"For we walk by faith, not by sight.", ref:"2 Corinthians 5:7", translation:"KJV", note:"Faith operates in the unseen realm where God works." }
  ],

  Grief: [
    { text:"Blessed are they that mourn: for they shall be comforted.", ref:"Matthew 5:4", translation:"KJV", note:"God's comfort is guaranteed for every grieving heart." },
    { text:"The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.", ref:"Psalm 34:18", translation:"KJV", note:"Brokenness draws God's nearness, not His distance." },
    { text:"You're blessed when you feel you've lost what is most dear to you. Only then can you be embraced by the One most dear to you.", ref:"Matthew 5:4", translation:"MSG", note:"Loss creates an opening for God's closest embrace." },
    { text:"He will swallow up death in victory; and the Lord GOD will wipe away tears from off all faces.", ref:"Isaiah 25:8", translation:"KJV", note:"God will personally wipe every tear from your face." },
    { text:"And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.", ref:"Revelation 21:4", translation:"KJV", note:"The final chapter holds no grief — only God's glory." },
    { text:"For his anger endureth but a moment; in his favour is life: weeping may endure for a night, but joy cometh in the morning.", ref:"Psalm 30:5", translation:"KJV", note:"Grief is real but not permanent — morning joy is coming." }
  ],

  Joy: [
    { text:"The joy of the LORD is your strength.", ref:"Nehemiah 8:10", translation:"KJV", note:"Joy is not an emotion — it is spiritual energy and power." },
    { text:"Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.", ref:"Psalm 16:11", translation:"KJV", note:"Full joy is found in God's presence, not in circumstances." },
    { text:"These things have I spoken unto you, that my joy might remain in you, and that your joy might be full.", ref:"John 15:11", translation:"KJV", note:"Jesus desires your joy to be absolutely full and complete." },
    { text:"Rejoice in the Lord always: and again I say, Rejoice.", ref:"Philippians 4:4", translation:"KJV", note:"The command to rejoice comes with its own enabling grace." },
    { text:"This is the day which the LORD hath made; we will rejoice and be glad in it.", ref:"Psalm 118:24", translation:"KJV", note:"Every day is a gift designed by God for joy." },
    { text:"A merry heart doeth good like a medicine: but a broken spirit drieth the bones.", ref:"Proverbs 17:22", translation:"KJV", note:"Joy has literal health benefits — it is God's medicine." }
  ],

  Prayer: [
    { text:"And whatsoever ye shall ask in my name, that will I do, that the Father may be glorified in the Son.", ref:"John 14:13", translation:"KJV", note:"Praying in Jesus' name carries His full authority." },
    { text:"Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.", ref:"Matthew 7:7", translation:"KJV", note:"Persistence in prayer guarantees response from God." },
    { text:"Are any of you in trouble? You should pray. Are any of you happy? You should sing praises.", ref:"James 5:13", translation:"TLB", note:"Prayer is the response to every situation — good or hard." },
    { text:"Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.", ref:"Jeremiah 33:3", translation:"KJV", note:"Calling on God unlocks revelation beyond imagination." },
    { text:"The effective, fervent prayer of a righteous man avails much.", ref:"James 5:16", translation:"KJV", note:"Passionate, faith-filled prayer produces powerful results." },
    { text:"Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak.", ref:"Matthew 26:41", translation:"KJV", note:"Prayer is the spiritual defense system against temptation." },
    { text:"Praying always with all prayer and supplication in the Spirit, and watching thereunto with all perseverance.", ref:"Ephesians 6:18", translation:"KJV", note:"Persevering in Spirit-led prayer is a lifestyle, not an event." }
  ],

  Love: [
    { text:"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", ref:"John 3:16", translation:"KJV", note:"God's love is proven by the greatest gift ever given." },
    { text:"Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God.", ref:"1 John 4:7", translation:"KJV", note:"Love between believers reveals the character of God." },
    { text:"This is how much God loved the world: He gave his Son, his one and only Son. And this is why: so that no one need be destroyed.", ref:"John 3:16", translation:"MSG", note:"God's love is not theoretical — it cost Him everything." },
    { text:"Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up.", ref:"1 Corinthians 13:4", translation:"KJV", note:"True love is patient, kind, and completely selfless." },
    { text:"Greater love hath no man than this, that a man lay down his life for his friends.", ref:"John 15:13", translation:"KJV", note:"Jesus demonstrated the highest form of love at Calvary." },
    { text:"We love him, because he first loved us.", ref:"1 John 4:19", translation:"KJV", note:"Our love for God is always a response to His love for us." }
  ],

  Protection: [
    { text:"He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.", ref:"Psalm 91:1", translation:"KJV", note:"Abiding in God's presence is the safest place on earth." },
    { text:"The LORD shall preserve thy going out and thy coming in from this time forth, and even for evermore.", ref:"Psalm 121:8", translation:"KJV", note:"God watches over your departures and your arrivals." },
    { text:"God's your Guardian, right at your side to protect you — Shielding you from sunstroke, sheltering you from moonstroke.", ref:"Psalm 121:5-6", translation:"MSG", note:"God protects from every kind of harm, day and night." },
    { text:"No weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment thou shalt condemn.", ref:"Isaiah 54:17", translation:"KJV", note:"Divine protection extends to both physical and verbal attacks." },
    { text:"The LORD is faithful, and he will strengthen you and protect you from the evil one.", ref:"2 Thessalonians 3:3", translation:"ESV", note:"God's faithfulness is the foundation of your protection." },
    { text:"But the Lord is faithful. He will establish you and guard you against the evil one.", ref:"2 Thessalonians 3:3", translation:"RSV", note:"God actively stands guard over His children." },
    { text:"Because you have made the LORD your dwelling place — the Most High, who is my refuge — no evil shall be allowed to befall you.", ref:"Psalm 91:9-10", translation:"ESV", note:"Choosing God as your dwelling ensures divine coverage." }
  ]

};

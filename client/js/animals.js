const HORSES = [
	{
		name: "Àsia",
		id: "asia",
		sponsored: false,
		snippet: "L’Àsia, filla de la Ushuaia, va néixer un matí de març del 2015, que el Pla de l’Orri era tot emblanquinat. Quan va néixer tenia el mateix color que un esquirol i ara és blanca com la neu, guapa i molt salvatge!",
		description: [
			"L’Àsia, filla de la Ushuaia, va néixer un matí de març del 2015, que el Pla de l’Orri era tot emblanquinat.",
			"Aquí la teniu el seu primer dia de vida fent amics...",
			"L’Àsia no s’acosta gaire a les persones, podriem dir que és esquerpa, que té por.. o simplement que no ha tingut aquesta necessitat i que ja en té prou amb viure en plenitut amb la seva familia equina.",
			"Quan va néixer tenia el mateix color que un esquirol i ara és blanca com la neu, guapa i molt salvatge!",
			"La vols apadrinar?"
		],
		totalImages: 3
	},
	{
		name: "Torp",
		id: "torp",
		sponsored: false,
		snippet: "El Torp, és el primer fill de l’Estrella. Una euga que vam rescatar ja fa molts anys, perquè s’havia trencat la cadera i l’anaven a sacrificar… L’Estrella es va recuperar i tot i que els veterinaris ens deien que no podria tenir fills amb la seva cadera torta, va poder ser mare d’aquest poltre negre preciós i ple de vida que va néixer lliure i fort el mes de juny del 2015.",
		description: [
			"El Torp, és el primer fill de l’Estrella. Una euga que vam rescatar ja fa molts anys, perquè s’havia trencat la cadera i l’anaven a sacrificar… L’Estrella es va recuperar i tot i que els veterinaris ens deien que no podria tenir fills amb la seva cadera torta, va poder ser mare d’aquest poltre negre preciós i ple de vida que va néixer lliure i fort el mes de juny del 2015.",
			"El Torp és un poltre molt tranquil, que un cop superada la petita por que li feien els humans, ara es deixa acariciar i es mostra molt receptiu.",
			"Vam operar el Torp fa uns mesos per tal que no hi hagi desequilibris entre els ramats. Veurem si s’acaba emancipant i integrant-se al ramat dels mascles solters o segueix visquent amb se mare i vinculat al seu gran ramat.",
			"Vols apadrinar el Torp? La seva energia t’alegrarà la vida!"
		],
		totalImages: 3
	},
	{
		name: "Múa",
		id: "mua",
		sponsored: false,
		snippet: "La Múa va néixer la primavera del 2016 a la muntanya d’Alinyà, concretament al Coll d’Ares, unes setmanes abans d’iniciar la transhumància de tornada cap al Pla de l’Orri.",
		description: [
			"La Múa va néixer la primavera del 2016 a la muntanya d’Alinyà, concretament al Coll d’Ares, unes setmanes abans d’iniciar la transhumància de tornada cap al Pla de l’Orri.",
			"La Múa és una poltra molt sociable i carinyosa. Igual que la seva cosina Pluja, ha tingut molta més curiositat que por cap a les persones, gossos, bicicletes... Filla de la Hatha, una euga que tot hi haver viscut lliure a les muntanyes de la Cerdanya Francesa força anys, té un caràcter ben diferent...",
			"La Múa te un germà que es diu Gàrrick i que ja té 4 anys. Tot i tenir un caràcter molt diferent a la Múa, la cuida i la protegeix des del primer dia de vida. Ara ja tenen un súper vincle familiar! (el vincle és el més important pels cavalls)",
			"La Múa serà segur una gran euga: forta, decidida, llesta, sensible i gran guia del seu futur ramat/família.",
			"Apadrína-la i posaràs força, alegria i puresa a la teva vida!"
		],
		totalImages: 4
	},
	{
		name: "Mandala",
		id: "mandala",
		sponsored: false,
		snippet: "La Mandala, una preciosa euga de 19 anys, va ser dels primers cavalls a arribar a la fundació ara ja fa 10 anys. El seu és el típic cas de cavall que malviu tancat en un box petit i sense quasi llum ni aire pur tot l’any i que només surt per fer classe. Fer classe vol dir que algú et puja a sobre, et posa un ferro a la boca i vulguis o no, hagis d’anar, passar i saltar per tots els llocs que aquest algú vol. I si aquest algú (com passa la majoria de les vegades) no sap muntar correctament, a cada pas et va donant cops a l’esquena i cada vegada que es desequilibra veus les estrelles per l’estrebada i el mal que et fa el filet que portes dins la boca. I els anomenen cavalls d’esport…",
		description: [
			"La Mandala, una preciosa euga de 19 any, va ser dels primers cavalls a arribar a la fundació ara ja fa 10 anys. El seu és el típic cas de cavall que malviu tancat en un box petit i sense quasi llum ni aire pur tot l’any i que només surt per fer classe. Fer classe vol dir que algú et puja a sobre, et posa un ferro a la boca i vulguis o no, hagis d’anar, passar i saltar per tots els llocs que aquest algú vol. I si aquest algú (com passa la majoria de les vegades) no sap muntar correctament, a cada pas et va donant cops a l’esquena i cada vegada que es desequilibra veus les estrelles per l’estrebada i el mal que et fa el filet que portes dins la boca. I els anomenen cavalls d’esport...",
			"Aquestes activitats tan estressants i poc respectuoses pel cavall, la manca de grup/família, la manca d’espai, l’alimentació totalment allunyada de la d’un herbívor, la competició i com no, les ferradures, van fer que la Mandala es lesionés molt jove. Als 8 anys de vida ja va petar i per sort, vam poder portar-la al seu paradís del Pla de l’Orri.",
			"La Mandala es va recuperar i curar físicament molt ràpidament. Pasturar tot el dia descalça i els massatges dels altres cavalls van ser com sempre el millor remei. Mentalment li va costar una mica més, ja que estava molt enfadada i amb moltes males experiències per netejar… però el vincle amb els altres cavalls i la llibertat van ser suficients. Ara mateix i després de fer la seva primera transhumància, està pasturant lliurement i amb el seu ramat, a les pastures d’hivern de La Vall de la Vansa (Alt Urgell)."
		],
		totalImages: 3
	},
	{
		name: "Pluja",
		id: "pluja",
		sponsored: false,
		snippet: "La Pluja va néixer al Pla de l’Orri i és la filla de la Llívia, una de les primeres eugues que va entrar a la fundació. La Pluja ens va sorprendre a tots quan només tenia dos o tres dies de vida. S’acostava a les persones com si les conegués. Sense por, sense nervis, sense prendre gaires precaucions. Com si ens conegués d’alguna altra vida…",
		description: [
			"La Pluja va néixer al Pla de l’Orri i és la filla de la Llívia, una de les primeres eugues que va entrar a la fundació. La Pluja ens va sorprendre a tots quan només tenia dos o tres dies de vida. S’acostava a les persones com si les conegués. Sense por, sense nervis, sense prendre gaires precaucions. Com si ens conegués d’alguna altra vida…",
			"El seu nom li vam posar perquè el dia que va néixer va ploure i feia moooolts dies que no ho feia!",
			"La veritat és que aporta molta alegria i força al grup! la seva empenta, el seu marcat caràcter decidit i fresc! Cavalls així ajuden als que tenen més pors, o passats amb males experiències amb humans, a tornar a confiar. També ajuden molt a les persones que ens visiten a les nostres trobades solidàries. Gran tasca social!",
			"Mireu-la descobrint la neu a la seva primera transhumància! No s’ho va pensar dues vegades, tal com la va veure si va rebolcar!",
			"Estem segurs que si l’apadrines creareu un fort vincle molt aviat i et donarà bona energia i moltes alegries."
		],
		totalImages: 3
	},
	{
		name: "Verema",
		id: "verema",
		sponsored: false,
		snippet: "La Verema va néixer el mes de setembre de 2015. S’assembla molt a la seva mare Picancel i amb tan sols tres mesets de vida ja va fer la seva primera transhumància. Gran aprenentatge per tots!",
		description: [
			"La Verema va néixer el mes de setembre de 2015. S’assembla molt a la seva mare Picancel i amb tan sols tres mesets de vida ja va fer la seva primera transhumància. Gran aprenentatge per tots!",			
			"Una poltra que ha tingut la sort de néixer en ramat, espai i harmonia i aporta la seva energia pura i tranquila al grup i a les persones que ens visiten.",
			"Amb la teva ajuda, la verema podrà viure feliç en un paradís i podreu fer-vos molt amics/es. Ja es veu que és un ésser especial i tot i les seves pors i les seves precaucions… és molt sociable!"
		],
		totalImages: 3
	},
	{
		name: "Anaiet",
		id: "anaiet",
		sponsored: false,
		snippet: "L’Anaiet és una euga de set anys que va arribar a la fundació fa pocs mesos. Estava a punt de ser tornada a la protectora ADE però finalment la vam poder acceptar junt amb la seva mare Ena i el seu gran amic Rapún.",
		description: [
			"L’Anaiet és una euga de set anys que va arribar a la fundació fa pocs mesos. Estava a punt de ser tornada a la protectora ADE però finalment la vam poder acceptar junt amb la seva mare Ena i el seu gran amic Rapún.",		
			"Van venir tots tres de Vilafranca del Penedès fins a dalt de tot del Pla de l’Orri caminant. Una mini transhumància que ja va ser un tastet de les dos llargues transhumàncies que ara poden fer cada any amb tots els altres cavalls de la fundació.",
			"A la foto la veureu inflada. Va arribar així per culpa de la seva antiga mala alimentació a base de pinsos (el midó dels pinsos infla molt) i palla. Els cavalls no són ocells…no mengen gra ni pinso… són herbívors i mengen herba, gran quantitat de plantes i classes d’herba diferents.",
			"Aquí teniu a l’Anaiet just acabada d’arribar al Pla de l’Orri. Mirant a la seva mare Ena (a l’esquerra) com coneixia i es feia amiga/novia del Camut.",
			"Si la vols apadrinar et passarem videos i fotos! La veuràs fibrada i visquent en plenitud. Ah…. ja és tota una marassa!! Busqueu al seu fill Siux!"

		],
		totalImages: 2
	},
	{
		name: "Ushuaia",
		id: "ushuaia",
		sponsored: false,
		snippet: "L’Ushuaia és una euga de 5 anys, mare de l’Àfrica. La Ushuaia va néixer als Pirineus i per sort no ha anat a parar a cap centre hípic convencional ni a cap protectora. La Ushuaia té encara, i per molts anys, l’essència d’una cavall lliure.",
		description: [
			"L’Ushuaia és una euga de 5 anys, mare de l’Àfrica. La Ushuaia va néixer als Pirineus i per sort no ha anat a parar a cap centre hípic convencional ni a cap protectora. La Ushuaia té encara, i per molts anys, l’essència d’una cavall lliure.",
			"Aquí la teniu rascant-se el cul mentre teniem visita guiada i revolcant-se sobre la neu!"
		],
		totalImages: 3
	},
	{
		name: "Catar",
		id: "catar",
		sponsored: false,
		snippet: "El Catar és un cavall de príncep o princesa. Després de viure molts anys en espais petits i estressants per un cavall, de fer un munt de competicions absolutament injustes i desgastadores per un cavall, va arribar lesionat a la fundació. Tenir el seu grup de cavalls,  treure-li les ferradures i deixar-lo pasturant nit i dia, ha estat suficient perquè el Catar s’hagi recuperat del tot. Ara és un cavall esplèndit! Segur que qui l’apadrini n’estarà orgullós!",
		description: [
			"El Catar és un cavall de príncep o princesa. Després de viure molts anys en espais petits i estressants per un cavall, de fer un munt de competicions absolutament injustes i desgastadores per un cavall, va arribar lesionat a la fundació. Tenir el seu grup de cavalls,  treure-li les ferradures i deixar-lo pasturant nit i dia, ha estat suficient perquè el Catar s’hagi recuperat del tot. Ara és un cavall esplèndit! Segur que qui l’apadrini n’estarà orgullós!"
		],
		totalImages: 3
	},
	{
		name: "Gaia",
		id: "gaia",
		sponsored: false,
		snippet: "Una marassa entre les marasses! la Gaia va ser mare de cria molts anys, o sigui que cada cop que paria un preciós polli o pollina li prenien als 6 mesos. Us podem assegurar que amb 6 mesos els pollins se separen de les mares! Per sort, aquí a la Fundació, la Gaia ha tingut dos fills preciosos que tot i que ja estan emancipats, de tant en tant torna a veure.",
		description: [
			"Una marassa entre les marasses! la Gaia va ser mare de cria molts anys, o sigui que cada cop que paria un preciós polli o pollina li prenien als 6 mesos. Us podem assegurar que amb 6 mesos els pollins se separen de les mares! Per sort, aquí a la Fundació, la Gaia ha tingut dos fills preciosos que tot i que ja estan emancipats, de tant en tant torna a veure.",
			"La Gaia ja té 20 anys; posar-se al seu costat i tan sols acariciar-la suaument és tota una experiència. Vols apadrinar-la?"
		],
		totalImages: 2
	},
	{
		name: "Picancel",
		id: "picancel",
		sponsored: false,
		snippet: "La mare del Moreu, la Picancel té 4 anyets i és tot una marassa! Va passar de pollina a mare adulta de la nit al dia. El dia que ens vam despertar i vam veure com la vida porta més vida! Una excel·lent euga. La vols apadrinar?",
		description: [
			"La mare del Moreu, la Picancel té 4 anyets i és tot una marassa! Va passar de pollina a mare adulta de la nit al dia. El dia que ens vam despertar i vam veure com la vida porta més vida! Una excel·lent euga. La vols apadrinar?",
			"Aqui teniu a la Picancel amb el seu grup de cavalls, sempre cuidant al seu fill Moreu."
		],
		totalImages: 3
	},
	{
		name: "Kashmir",
		id: "kashmir",
		sponsored: false,
		snippet: "La Kashmir és una tantes eugues que ha sofert maltractament. Un maltractament potser per incosciència però un maltractament…  La van muntar massa jove i malament… i va arribar a la fundació coixa. Quan es va recuperar de la coixera vam observar que no podia ni galopar, estava rígida i bloquejda i tenia molta por.",
		description: [
			"La Kashmir és una tantes eugues que ha sofert maltractament. Un maltractament potser per incosciència però un maltractament…  La van muntar massa jove i malament… i va arribar a la fundació coixa. Quan es va recuperar de la coixera vam observar que no podia ni galopar, estava rígida i bloquejda i tenia molta por.",
			"No cal dir que vivint a la muntanya i amb una familia equina, s’ha recuperat totalment. Ara té 10 anys i galopa quan vol i ja no s’espanta d’una branca, ni d’una bicicleta!",
			"Fa mol poc que la Kashmir ha sigut mare i per sort ja no recorda el seu passat… tan sol gaudeix del seu fill Arp en plenitud i del seu present amb el seu ramat de cavalls.",
			"Els membres del ramat tenen forts vincles familiars i d’amistat entre ells. En aquesta foto de l’esquerra la veieu fent de tieta del Moreu.",
			"Vols apadrinar a aquesta euga i contagiar-te de la seva força i bona energia?"
		],
		totalImages: 3
	},
	{
		name: "Bhangra",
		id: "bhangra",
		sponsored: false,
		snippet: "Una euga amb molt de ritme, hipersensible i una gran mare (el seu fill és el Yembé) Mireu quina mirada….no calen paraules. Apadrinar un ésser així….és posar un àngel a la vostra vida. La Bhangra anava per bistec….i per sort el destí la va portar, ja fa molts anys al projecte Miranda.",
		description: [
			"Una euga amb molt de ritme, hipersensible i una gran mare (el seu fill és el Yembé) Mireu quina mirada….no calen paraules. Apadrinar un ésser així….és posar un àngel a la vostra vida. La Bhangra anava per bistec….i per sort el destí la va portar, ja fa molts anys al projecte Miranda.",
			"Aquí la teniu rascant-se amb la seva gran amiga i guia del ramat, la Bhangra."
		],
		totalImages: 3
	},

	{
		name: "Tuarèg",
		id: "tuareg",
		sponsored: true,
		sponsor: "Amparo",
		snippet: "El Tuarèg va néixer just el dia abans de començar la Transhumància de Primavera del 2016. Ens va ajudar a comprendre a tots els que la feiem, que els cavalls són animals nòmades, forts i que quasi caminen amb la mateixa facilitat que respiren. Va poder fer tota la transhumància sense cap problema.",
		description: [
			"El Tuarèg va néixer just el dia abans de començar la Transhumància de Primavera del 2016. Ens va ajudar a comprendre a tots els que la feiem, que els cavalls són animals nòmades, forts i que quasi caminen amb la mateixa facilitat que respiren. Va poder fer tota la transhumància sense cap problema. Paravem uns minuts, cada dues hores perquè pogués mamar i alimentar-se.",
			"És fill de l’Estrella, una preciosa euga Cartujana, que vam salvar de la mort ara ja fa uns quants anys.",
			"El Tuarèg té la sort de viure lliure en ramat, amb la seva mare i el seu germà Torp.",
			"Gràcies Amparo per apadrinar al Turarèg! gràcies per ajudar a que aquest cavall pugui seguir visquent en plenitud, que pugui seguir aportant la seva energia sana i equilibrada al seu ramat i a les persones que ens visiten i sobretot, per estar ajudant a que la Fundació pugui seguir realitzant la seva tasca social.",
		],
		totalImages: 4
	},
	{
		name: "Sioux",
		id: "sioux",
		sponsored: true,
		sponsor: "Laura",
		snippet: "El Siux, un poltre preciós i fort que ha nascut lliure, aprenent del grup, acompanyat, cuidat i estimat, pasturant sempre descalç, mamant encara, sense ferros als peus ni a la boca, sense boxes, ni paddocks… sense maltractes, sense patiment ni estrès, sense conflictes amb els homes que no entenen encara que els cavalls són cavalls, no volen amos ni imposicions, ni cops, ni tac tac! ni insults, ni ràbia, ni nervis, ni presses, ni competicions, ni medalles, ni copes… ni frustracions ni cap paranoia.",
		description: [
			"El Siux, un poltre preciós i fort que ha nascut lliure, aprenent del grup, acompanyat, cuidat i estimat, pasturant sempre descalç, mamant encara, sense ferros als peus ni a la boca, sense boxes, ni paddocks… sense maltractes, sense patiment ni estrès, sense conflictes amb els homes que no entenen encara que els cavalls són cavalls, no volen amos ni imposicions, ni cops, ni tac tac! ni insults, ni ràbia, ni nervis, ni presses, ni competicions, ni medalles, ni copes… ni frustracions ni cap paranoia.",
			"Gràcies Laura per ajudar a que el Sioux sigui pugui viure en plenitut!"
		],
		totalImages: 2
	},
	{
		name: "Lance",
		id: "lance",
		sponsored: true,
		sponsor: "Vanesa",
		snippet: "El Lance (Lancelot!) va arribar fa poquet a al fundació i ha tingut la sort d’arribar apadrinat per la Vanessa. Gràcies Vanesa per fer possible aquest canvi de vida del Lance.",
		description: [
			"El Lance (Lancelot!) va arribar fa poquet a al fundació i ha tingut la sort d’arribar apadrinat per la Vanessa. Gràcies Vanesa per fer possible aquest canvi de vida del Lance.",
			"Provinent del món de la hípica convencional, el Lance ha sofert les conseqüències de les males pràctiques d’aquest món tancat i amb poca consciència: mala alimentació (basada en pinso i palla), ferradures que poc a poc lesionen i desgasten l’aparell locomotor i la resta del cos del cavall, confinament i isolament en boxes i paddocks, filets a la boca quan els munten, muntures rígides i poc respectuoses, etc.",
			"Per sort, ara el Lance viu en plenitud al Pla de l’Orri i li volem agrair molt que s’hagi agermanat de seguida amb la Josa. Una euga que ha estat molts anys maltractada i lligada a un arbre…. Gràcies Lance! ets un príncep!"
		],
		totalImages: 2
	},
	{
		name: "Cadí",
		id: "cadi",
		sponsored: true,
		sponsor: "Dues famílies",
		snippet: "El Cadí no ha patit mai cap maltractament. No ha estat tancat mai dins d’un box ni cap paddock ridícul. Ha nasctu el 4 de febrer d’aquest any 2016 en llibertat i acompanyat de la seva família i la seva super mami Sherpa. (La Sherpa està apadrinada!) És el 1r cavall que neix a les pastures d’hivern de la Vall de la Vansa. Serà molt emocionant veure com descobreix el paradís del Pla de l’Orri i viu la seva primera transhumància aquesta propera primavera!",
		description: [
			"El Cadí no ha patit mai cap maltractament. No ha estat tancat mai dins d’un box ni cap paddock ridícul. Ha nasctu el 4 de febrer d’aquest any 2016 en llibertat i acompanyat de la seva família i la seva super mami Sherpa. (La Sherpa està apadrinada!) És el 1r cavall que neix a les pastures d’hivern de la Vall de la Vansa. Serà molt emocionant veure com descobreix el paradís del Pla de l’Orri i viu la seva primera transhumància aquesta propera primavera!",
			"No ens dediquem a criar cavalls, però a vegades per accident… arriba un angelet com aquest. Els pollins ajuden al grup a cohesionar-se, donen força al grup, alegria i sentit a les mares. No ens podem imaginar un lloc millor per néixer!",
			"Molt contents de que dues families que es van fer amigues en una visita solidària a la Fundació, l’hagin apadrinat!! llarga vida al Cadí!"
		],
		totalImages: 3
	},
	{
		name: "Nanàk",
		id: "nanak",
		sponsored: true,
		sponsor: "Maia",
		snippet: "El Nanàk fa molts anys que és a la fundació.  Estava sol, mal ferrat i mal alimentat, ple de picades….en un camp ple de deixalles. Va arribar molt enfonsat i deprimit. És el cavall que ha tardat més temps a integrar-se al ramat i fer vincles amb altres cavalls. Ara, està totalment integrat i podriem dir que el Nanàk és amic de tots els cavalls del ramat. Es fa amb tothom! És un cavall molt tranquil, (a vegades sembla que sigui de cartró!) ideal perquè els nens petits i les persones a qui els cavalls els fa respecte, s’acostin i entenguin que els cavalls son animals inofensius. És super sociable i molt carinyós. Quina alegria que la Maia l’hagi apadrinat!",
		description: [
			"El Nanàk fa molts anys que és a la fundació.  Estava sol, mal ferrat i mal alimentat, ple de picades….en un camp ple de deixalles. Va arribar molt enfonsat i deprimit. És el cavall que ha tardat més temps a integrar-se al ramat i fer vincles amb altres cavalls. Ara, està totalment integrat i podriem dir que el Nanàk és amic de tots els cavalls del ramat. Es fa amb tothom! És un cavall molt tranquil, (a vegades sembla que sigui de cartró!) ideal perquè els nens petits i les persones a qui els cavalls els fa respecte, s’acostin i entenguin que els cavalls son animals inofensius. És super sociable i molt carinyós. Quina alegria que la Maia l’hagi apadrinat!",
			"Aquí el teniu (el de la dreta) amb el seu amic Spirit. Sempre el veureu pasturant prop de la casa. amb el grup dels mascles castrats. Amb el Catar, l’Spirit i el Bonjour."
		],
		totalImages: 4
	},
	{
		name: "Moreu",
		id: "moreu",
		sponsored: true,
		sponsor: "Jan",
		snippet: "El Moreu és un pollí molt especial. Fill de la Picancel i del Yembé i net de la Bhangra. Ja veieu quina gran familia i quants vincles familiars té!  El Moreu ha tingu sort de néixer en un paradís de cavalls i de que el Jan l’hagi apadrinat tant aviat! Moltes gràcies Jan. Segur que amb aquest cavall aprens un munt de coses que et serviràn per a tota la vida.",
		description: [
			"El Moreu és un pollí molt especial. Fill de la Picancel i del Yembé i net de la Bhangra. Ja veieu quina gran familia i quants vincles familiars té!  El Moreu ha tingu sort de néixer en un paradís de cavalls i de que el Jan l’hagi apadrinat tant aviat! Moltes gràcies Jan. Segur que amb aquest cavall aprens un munt de coses que et serviràn per a tota la vida."
		],
		totalImages: 3
	},
	{
		name: "Gataca",
		id: "gataca",
		sponsored: true,
		sponsor: "Esther Prades",
		snippet: "La Gataca va arribar a la fundació ara fa tres anys, de la protectora ADE.  Va venir amb la seva amiga inseparable Dila.  La Gataca també te un passat dur i dolorós però millor parlem del seu present i futur de cavall en plenitud aquí dalt d’aquesta muntanya.  Ja fa tres anys que s’ha integrat perfectament al ramat de la fundació. Una euga centrada, tranquila, intel·ligent i cada dia més social. Una euga que poc a poc, ens ha anat robant a tots el cor. Moltes gràcies Esther Prades per apadrinar-la! segur que també t’ha robat el cor a tu!",
		description: [
			"La Gataca va arribar a la fundació ara fa tres anys, de la protectora ADE.  Va venir amb la seva amiga inseparable Dila.  La Gataca també te un passat dur i dolorós però millor parlem del seu present i futur de cavall en plenitud aquí dalt d’aquesta muntanya.  Ja fa tres anys que s’ha integrat perfectament al ramat de la fundació. Una euga centrada, tranquila, intel·ligent i cada dia més social. Una euga que poc a poc, ens ha anat robant a tots el cor. Moltes gràcies Esther Prades per apadrinar-la! segur que també t’ha robat el cor a tu!"
		],
		totalImages: 2
	},
	{
		name: "Àfrica",
		id: "africa",
		sponsored: true,
		sponsor: "Sus",
		snippet: "L’Àfrica va néixer a la fundació. Filla de la Ushuaia. És dels pocs cavalls que han tingut la sort de viure sempre com a cavalls. Esperem que en un futur no molt llunyà, tots els cavalls d’aquest planeta puguin fer-ho. Moltes gràcies Susana per apadrinar a aquesta euga tan llesta, tan salvatge i tan divertida!",
		description: [
			"L’Àfrica va néixer a la fundació. Filla de la Ushuaia. És dels pocs cavalls que han tingut la sort de viure sempre com a cavalls. Esperem que en un futur no molt llunyà, tots els cavalls d’aquest planeta puguin fer-ho. Moltes gràcies Susana per apadrinar a aquesta euga tan llesta, tan salvatge i tan divertida!"
		],
		totalImages: 2
	},
	{
		name: "Dila",
		id: "dila",
		sponsored: true,
		sponsor: "Ester A.",
		snippet: "La Dila, una euga amb un passat molt accidentat. Si us hi fixeu veureu que li falta un tros d’orella. Quan la vam veure a la protectora (ADE), feia cara d’enfadada i  la ens van dir que cada dos per tres trencava els tancats i la liava… Per sort, des del prime minut d’estar en aquest paradís per cavalls, es va convertir en una de les eugues més dolces i tranquiles del ramat. Moltes gràcies Ester per apadrinar-la!!!",
		description: [
			"La Dila, una euga amb un passat molt accidentat. Si us hi fixeu veureu que li falta un tros d’orella. Quan la vam veure a la protectora (ADE), feia cara d’enfadada i  la ens van dir que cada dos per tres trencava els tancats i la liava… Per sort, des del prime minut d’estar en aquest paradís per cavalls, es va convertir en una de les eugues més dolces i tranquiles del ramat. Moltes gràcies Ester per apadrinar-la!!!"
		],
		totalImages: 3
	},
	{
		name: "Llívia",
		id: "llivia",
		sponsored: true,
		sponsor: "Xavi",
		snippet: "La Llívia, una euga impresionant. La Llívia fa coses que descolocarien als “etòlegs equins”. Va arribar a la fundació amb 7 mesets amb el seu pare el gran Saüc. No he vist euga més valenta i decidida. I carinyosa.",
		description: [
			"La BONA NOTICIA DEL DIA, és que el Xavi ha apadrina a la LLIVIA!",
			"El Xavi que fins ara era soci, fa un gran esforç! i a canvi de poder apadrinar a la Llívia , es queda sense regal de Reis, Sant i aniversari per part de la seva mare. Coneixem i apreciem molt al Xavi (ha fet varis Campaments d’estiu a la Fundació i ha participat a moLtes activitats, trobades de socis…) i ens emociona i anima moltissim el seu gest! MOLTES, MOLTÍSSIMES GRÀCIES XAVI i MÒNICA!",
			"El Xavi s’estima als cavalls d’una manera molt profunda. Li encanta observar-los, em pregunta sempre quines novetats hi ha a cada subgrup de cavalls….quan vam perdre al Gandi, al Saüc, la Lutha.. vam plorar plegats.. no sap el que significa per mi i per la Rosa aquest gest. M’agrada poder-ho compartir amb tots vosaltres.",
			"Ah! i molt contents per la Llívia! una euga impresionant. La Llívia fa coses que descolocarien als “etòlegs equins”. Va arribar a la fundació amb 7 mesets amb el seu pare el gran Saüc. No he vist euga més valenta i decidida. I carinyosa."
		],
		totalImages: 2
	},
	{
		name: "Sherpa",
		id: "sherpa",
		sponsored: true,
		sponsor: "Júlia",
		snippet: "La Sherpa és un SOL! tot i que és molt jove, 3 anys, ja té un caràcter molt tranquil i centrat.",
		description: [
			"La Sherpa és un SOL! tot i que és molt jove, 3 anys, ja té un caràcter molt tranquil i centrat.",
			"MOLTES GRÀCIES JÚLIA PER SER LA SEVA PADRINA!"
		],
		totalImages: 3
	},
	{
		name: "Nigún",
		id: "nigun",
		sponsored: true,
		sponsor: "Albert",
		snippet: "La nigún et mira dient: que vols que faci? on hem d’anar? és una euga de 9 anys magnífica! centrada inteligent i bona!",
		description: [
			"La nigún et mira dient: que vols que faci? on hem d’anar? és una euga de 9 anys magnífica! centrada inteligent i bona!",
			"MOLTES GRÀCIES ALBERT PER SER EL SEU PADRÍ!"
		],
		totalImages: 3
	},
	{
		name: "Hatha",
		id: "hatha",
		sponsored: true,
		sponsor: "Neus",
		snippet: "Una marassa més bona que el pa! Va arribar de la Cerdanya francesa i té 11 anys. Gràcies Neus per apadrinar-la!! segur que amb el teu centre i la teva calma i amor ens ajudes a  socialitzar-la i fer que la Hatha torni a confiar amb els humans. Que n’hi ha de molt bons!",
		description: [
			"Una marassa més bona que el pa! Va arribar de la Cerdanya francesa i té 11 anys. Gràcies Neus per apadrinar-la!! segur que amb el teu centre i la teva calma i amor ens ajudes a  socialitzar-la i fer que la Hatha torni a confiar amb els humans. Que n’hi ha de molt bons!",
			"Aquí a la foto amb al seu fill Gàrrick que tot i que ja té 4 anys segueix enganxat a la mare."
		],
		totalImages: 2
	},
	{
		name: "Calaf",
		id: "calaf",
		sponsored: true,
		sponsor: "Clàudia",
		snippet: "El Calaf és un poni Welch d’uns 17 anys provinent d’una protectora (no la posem per raons de seguretat) ara ja fa uns 8 anys. Va arribar amb molt mal estat i amb molta por a les persones. Ara és un poni molt sociable i carinyós.  Només baixar del remolc es va enamora dela Fada (una poni Shetland de la mateixa edat). És entendridor veure’ls sempre junts i el gran vincle que han creat durant tots aquests anys.",
		description: [
			"El Calaf és un poni Welch d’uns 17 anys provinent d’una protectora (no la posem per raons de seguretat) ara ja fa uns 8 anys. Va arribar amb molt mal estat i amb molta por a les persones. Ara és un poni molt sociable i carinyós.  Només baixar del remolc es va enamora dela Fada (una poni Shetland de la mateixa edat). És entendridor veure’ls sempre junts i el gran vincle que han creat durant tots aquests anys.",
			"Quan feia només tres setmanes que era aquí, i a causa del seu mal estat, es va trencar el cubit, (os articular) de la ma esquerra, i el vam dur a l’hospital per operar-lo. Tot i que no ens van assegurar que es pogués curar, l’operació va ser un èxit. I és que el Calaf és tot un supevivent!!  Des de llavors que no ha parat de pasturar i de viure en plenitud en aquest paradis de la fundació!",
			"La seva padrina, la Claudia, fa molts anys que coneix al Calaf. Va ser una de les primeres “usuaries” que va venir a la fundació a fer “comunicació amb cavalls” i amb el temps es van fer molt amics. Per això estem tant contents de que l’hagi apadrinat!",
			"Gràcies Claudia!"
		],
		totalImages: 1
	},
	{
		name: "Estrella",
		id: "estrella",
		sponsored: true,
		sponsor: "Ester",
		snippet: "Es va trencar la cadera quan tenia 7 mesos i per aquest motiu, els seus propietaris l’anaven a sacrificar. La fundació la va rescatar i ara viu en plenitud (cadera torta però soldada):la monta el seu mascle, galopa, es revolca, te una gran familia…. ÉS UN MODEL DE RESILIÈNCIA I EL SEU RAMAT UN MODEL D’INCLUSIÓ. MOLTES GRÀCIES ESTER PER APADRINAR-LA!",
		description: [
			"Es va trencar la cadera quan tenia 7 mesos i per aquest motiu, els seus propietaris l’anaven a sacrificar. La fundació la va rescatar i ara viu en plenitud (cadera torta però soldada):la monta el seu mascle, galopa, es revolca, te una gran familia…. ÉS UN MODEL DE RESILIÈNCIA I EL SEU RAMAT UN MODEL D’INCLUSIÓ. MOLTES GRÀCIES ESTER PER APADRINAR-LA!",
			"  ",
			"Tremolo. No sé si és de fred o d’emoció. Observo embadalida aquest paratge de conte que m’envolta. I aleshores ella se m’acosta. A poc a poc. I amb els llavis em toca el braç. Poso les mans fredes al seu coll; tan ferm i calent i suau… Amb la seva amable serenor aquesta euga negra i lluent acaba d’aconseguir que deixi de tremolar…",
			"Més tard sabré que es diu Estrella (el mateix significat del meu propi nom) i que té el maluc tort (com jo mateixa). Massa casualitats per passar-les per alt. Era, per tant, inevitable, que acabés apadrinant-la.",
			"Des d’aleshores, el sol fet d’abraçar i olorar l’Estrella em transporta a un estat de pau indescriptible… on el fred no em fa tremolar…",
			"Ester"
		],
		totalImages: 7
	},
	{
		name: "Kippur",
		id: "kippur",
		sponsored: true,
		sponsor: "Cristina",
		snippet: "A aquest àngel de 4 anys el vam salvar d’anar al “matadero” amb només 4 mesos de vida… tot perquè tenia una fisura a la cresta ilíaca. Ara el Kippur galopa, monta (el vam vasectomitzar) i te el seu propi grup d’eugues. Mireu quina mirada!",
		description: [
			"A aquest àngel de 4 anys el vam salvar d’anar al “matadero” amb només 4 mesos de vida… tot perquè tenia una fisura a la cresta ilíaca. Ara el Kippur galopa, monta (el vam vasectomitzar) i te el seu propi grup d’eugues. Mireu quina mirada!",
			"MOLTES GRÀCIES CRISTINA PER APADRINAR-LO!!"
		],
		totalImages: 2
	},
	{
		name: "Spirit",
		id: "spirit",
		sponsored: true,
		sponsor: "Sílva, Ilana i Txell",
		snippet: "Després de massa anys malvivint en un centre hípic convencional, obligat a fer horseball (esport que nosaltres creiem que hauria d’estar prohibit…) l’Spirit va arribar a la Fundació molt enfadat amb les persones. Amb ell vam fer una mica de “feina” per donar-li l’oportunitat de reconcilia-se amb les persones i de seguida ho va fer. Un cavall esplèndit que la Silvia, la ilana i la Txell han apadrinat i ens han fet molt contents a tots!",
		description: [
			"Després de massa anys malvivint en un centre hípic convencional, obligat a fer horseball (esport que nosaltres creiem que hauria d’estar prohibit…) l’Spirit va arribar a la Fundació molt enfadat amb les persones. Amb ell vam fer una mica de “feina” per donar-li l’oportunitat de reconcilia-se amb les persones i de seguida ho va fer. Un cavall esplèndit que la Silvia, la ilana i la Txell han apadrinat i ens han fet molt contents a tots!"
		],
		totalImages: 2
	}
];

const DOGS = [
	{
		name: "Broc",
		id: "broc",
		sponsored: false,
		snippet: "El Broc va arribar a la Fundació el dia de Reis de 2015 amb un any d’edat aprox. El vam trobar perdut pel poble de Vilada i com que estavem a tope d’animals… vam decidir un mica a contracor, portar-lo a la protectora de Berga. Com que al cap d’uns mesos no l’havia adoptat ningú, vam acabar decidint “apretar-nos” i fer-li un lloc al nostre equip.",
		description: [
			"El Broc va arribar a la Fundació el dia de Reis de 2015 amb un any d’edat aprox. El vam trobar perdut pel poble de Vilada i com que estavem a tope d’animals… vam decidir un mica a contracor, portar-lo a la protectora de Berga. Com que al cap d’uns mesos no l’havia adoptat ningú, vam acabar decidint “apretar-nos” i fer-li un lloc al nostre equip.",
			"Al ser un cadell, és un gos que necessita jugar moltes hores al dia i sortir a córrer pels camps. Aixó és el que ara per fi pot fer! Està sent un gos molt valent que supera les pors i les novetats molt ràpidament i alhora un gos molt fàcil que s’ha calmat força ràpid. És lògic que estigués activat perquè a la Protectora fan molt bona fèina però el Broc ha estat massa hores dins d’una gàbia o sigui que no és extrany que necessiti joc i moviment.",
			"De seguida ha fet vincle amb els altres gossos i des de l’inici s’ha mostrat molt atent a les dinàmiques de la manada i amb nosaltres."
		],
		totalImages: 2
	},
	{
		name: "Reiki",
		id: "reiki",
		sponsored: false,
		snippet: "El Reiki va arribar amb 7 mesos d’edat i amb molt d’estress, el juny del 2015, 15 dies abans que arribés el seu germà Thai. Rescatat per les nostres companyes d’Andalusia, va ser molt mal tractat de ben petit i el van abandonar llençant-lo dins d’un pati per sobre d’un mur…",
		description: [
			"El Reiki va arribar amb 7 mesos d’edat i amb molt d’estress, el juny del 2015, 15 dies abans que arribés el seu germà Thai. Rescatat per les nostres companyes d’Andalusia, va ser molt mal tractat de ben petit i el van abandonar llençant-lo dins d’un pati per sobre d’un mur…",
			"Va aconseguir un adoptant a Barcelona però després de viatjar durant 24h, l’adoptant no es va presentar. El tranposrtista se’l va endur a casa seva a Cartagena i al cap d’uns dies la Fundació el va adoptar.",
			"Durant els primers mesos, va ser un gos que pel seu alt nivell d’estress i el seu instint caçador, ens va donar molta feina. Tenia molt mala relació amb els gats. Ara és un gos que mira als ulls i que comença a fer vincle amb els gats! Quan el treiem del tancat, ja no marxa… ha entès que aquesta és la seva casa i el “dogteam” la seva familia.",
			"El Reiki és un gos atleta que serà el teu company incondicional. Apadrina’l i connecta amb l’alegría del moviment i la llibertat."
		],
		totalImages: 3
	},
	{
		name: "Jazz",
		id: "jazz",
		sponsored: true,
		sponsor: "Marina i Júla",
		snippet: "El Jazz va arribar el 2012 amb 6 mesos d’edat! Creuat de Pastor Belga i Labrador. El seu “propietari” l’estava a punt de portar a una protectora de Saragossa, però la seva veïna va contactar amb nosaltres, ens va enviar una foto… i no vam poder dir que no.",
		description: [
			"El Jazz va arribar el 2012 amb 6 mesos d’edat! Creuat de Pastor Belga i Labrador. El seu “propietari” l’estava a punt de portar a una protectora de Saragossa, però la seva veïna va contactar amb nosaltres, ens va enviar una foto… i no vam poder dir que no.",
			"Els primers mesos, amb l’estress acumulat, no parava de saltar com un cangur… però poc a poc es va anar calmant i ara és un gos 10! Amb una forma física de pastor maratonià… molt sociable, alegre, carinyós i molt pacient amb tots els nens que visiten la Fundació i no poden parar d’acariciar-lo i jugar amb ell…",
			"Moltes gràcies Marina i Júlia per apadrinar-lo! sou unes padrines fantàstiques!!!"
		],
		totalImages: 2
	},
	{
		name: "Kèfir",
		id: "kefir",
		sponsored: true,
		sponsor: "Mardesomnis",
		snippet: "El Kèfir va arribar a la Fundació el mes de febrer de 2016. Amb dos anys d’edat procedent de l Associació Amics dela Animals de La Noguera. Els seus primers adoptants el van tornar a la protectora per que va tenir un atac epilèptic.",
		description: [
			"El Kèfir va arribar a la Fundació el mes de febrer de 2016. Amb dos anys d’edat procedent de l Associació Amics dela Animals de La Noguera. Els seus primers adoptants el van tornar a la protectora per que va tenir un atac epilèptic.",
			"La seva arribada  ala Fundació, l’entrada a l’espai dels gossos i el primer contacte amb ells va ser preciós. Calmat i tranquil, no va generar cap estrés a ningú. En aquest moment delicat i decisiu, va ser absolutament respectuós, un rei dels senyals de calma. A tots ens va semblar que feia anys que el Kèfir vivia entre nosaltres. Alhora… vam descobrir aviat que aquest estat tranquil era també causat per la seva medicació, al nostre entendre massa agresiva i poc efectiva. Així doncs el vam deixar de medicar, per ajudar-lo a estar més present i també la seva intoxicació a mitjà plaç.  Ara, tot i que cada dos mesos pot patir algun atac epilèptic, viu en plenitud. Alohra, és un gos que necessita molta atenció ja que després dels atacs, no recorda quasi res… i necessita tornar a situar-se.",
			"Estem molt contents que l’associació Mardesomnis (dedicada a la organització d’activitats de lleure per a nens, nenes i joves amb epilèpsia i altres malalties neurològiques.) l’hagi apadrinat!!"
		],
		totalImages: 2
	},
	{
		name: "Lluna",
		id: "lluna",
		sponsored: true,
		sponsor: "Maia",
		snippet: "La Lluna, rescatada per ADE va arribar a la Fundació el dia de Reis del 2015 amb dos anys d’edat després de passar tota la seva vida lligada en un hort.",
		description: [
			"La Lluna, rescatada per ADE va arribar a la Fundació el dia de Reis del 2015 amb dos anys d’edat després de passar tota la seva vida lligada en un hort.",
			"Des de l’inici va ser com un àngel amb les persones, els altres gossos i els gats. Va costar una mica que entengués que els cavalls i els xais eren de casa i no suposaven cap amenaça. Amb les porquetes té un fort instint depredador i no hem aconseguit encara que hi pugui conviure. És en canvi una gran pastora que ens acompanya a revisar i moure cavalls a les pastures d’hivern de la muntanya d’Alinyà. També és un valor afegit a les visites on la seva preciosa presència i abnegació amb nens i adults són extraordinaries.",
			"Molt contents que la Maia l’hagi apadrinat!"
		],
		totalImages: 2
	},
	{
		name: "Thai",
		id: "thai",
		sponsored: true,
		sponsor: "Timur",
		snippet: "Heu vist la película de dibuixos animats Bold? Igual que el seu protagonista, el Thai és valent, eixerit i així ha superat totes les dificultats que ha viscut.",
		description: [
			"Heu vist la película de dibuixos animats Bold? Igual que el seu protagonista, el Thai és valent, eixerit i així ha superat totes les dificultats que ha viscut.",
			"El Thai va arribar el juliol de 2015, una setmana abans de començar els campaments, procedent d’un rescat que van fer unes companyes d’Andalusia. Sembla que es va poder escapar i el van trobar deambulant sol i perdut per la ciutat.",
			"El Thai d’uns set mesos havia passat tota la seva etapa infantil tancat en una gàbia, sembla que en mans d’uns mals caçadors. Quan va arribar no responia a cap nom ni tracte afectuós. De mica en mica va anar reconnectant amb el gos dolç com de vellut, que és en la seva essència. Ell encara necessita sortir pel seu compte a fer la ronda de vigilància per la finca i tot sol torna a la porta de casa al cap d’una estona. Juga amb tothom i ara ja sap que es diu Thai i ve alegrament quan el crides. És un gos molt jove que encara dóna feina perquè s’estressa una mica amb els gats però a poc a poc, aquest estrès va disminuint. També mostrava por amb els altres gossos i li costava sostenir el seu espai propi. A través del joc, cada dia va guanyant confiança.",
			"Boníssim amb la gent i amb els altres gossos. Sorprenentment xerraire i suau com el cotó.",
			"Molt contens de que el Timur, un noi que el Thai va conèixer pels Campaments del 2015, l’hagi apadrinat! Són dos grans amics!"
		],
		totalImages: 2
	}
]

class Horses {
	constructor() {}

	static getSponsoredHorses() {
		var h = [];
		for (var i = 0; i < HORSES.length; i++) {
			if (HORSES[i].sponsored) {
				h.push(HORSES[i]);
			}
		}

		return h;
	}

	static getNonSponsoredHorses() {
		var h = [];
		for (var i = 0; i < HORSES.length; i++) {
			if (!HORSES[i].sponsored) {
				h.push(HORSES[i]);
			}
		}

		return h;
	}
}

class Dogs {
	constructor() {}

	getSponsoredDogs() {
		var h = [];
		for (var i = 0; i < DOGS.length; i++) {
			if (DOGS[i].sponsored) {
				h.push(DOGS[i]);
			}
		}

		return h;
	}

	getNonSponsoredDogs() {
		var h = [];
		for (var i = 0; i < DOGS.length; i++) {
			if (!DOGS[i].sponsored) {
				h.push(DOGS[i]);
			}
		}

		return h;
	}
}

class Animal {
	constructor() {}

	static getAnimalById(id) {
		for (var i = 0; i < HORSES.length; i++) {
			if (HORSES[i].id == id){
				return HORSES[i];
			}
		}

		for (var i = 0; i < DOGS.length; i++) {
			if (DOGS[i].id == id){
				return DOGS[i];
			}
		}

		return null;
	}
}
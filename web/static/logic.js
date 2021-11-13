// keep track of Leaflet map for use between functions
var globalMapObject;

// keep track of which map tiles have been selected
var globalCurrentTilesSelection;
var globalCurrentTiles;

// keep track of items added
var globalFeatureIDTracker = {};

// list of items to add
var itemsToAdd = [
	// , "suburbs/Darlinghurst.geojson"
	// , "suburbs/Camberdown.geojson"
	// , "suburbs/SurryHills.geojson"
	// // , "suburbs/SurryHillsTrainStation.geojson"
];

function bodyDidLoad() {
	ShowtimeHelper.setDarkModeAccordingToBrowser();
	ShowtimeHelper.initialiseSelect2();
	

	// OK - Ready to Initialise the map! :)

	globalMapObject = L.map('mapid').setView([-33.90, 151.20], 13);
	globalCurrentTiles.addTo(globalMapObject);

	itemsToAdd.forEach(function(item) {
		$.get(item, function(incomingGeoJSONString) {
			var incomingGeoJSON = JSON.parse(incomingGeoJSONString);
			MapHelper.processAddedUNSWFeature(incomingGeoJSON);
		});
	});


	

	var greenIcon = new L.Icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
		shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41]
	  });
	

		//Put the states on Map
		var states = [{
			"type":"Feature",
			"properties":{"Postal_code":"2015","Suburb":"Alexandria","Criteria proportion":"1.095861683"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.1806297302246,-33.9195031719758],[151.19633674621582,-33.92142620438901],[151.19925498962402,-33.918434801880196],[151.20277404785156,-33.90903256742058],[151.20277404785156,-33.90539960811868],[151.1989974975586,-33.89613842330355],[151.1996841430664,-33.894499801261816],[151.19839668273926,-33.89421482030143],[151.1977958679199,-33.89407232946414],[151.1984825134277,-33.89229117391084],[151.19951248168945,-33.89257616129907],[151.19976997375485,-33.89164994880563],[151.19831085205078,-33.8914362060326],[151.19650840759275,-33.89221992691498],[151.19625091552734,-33.891151214835354],[151.1891269683838,-33.893288625603496],[151.18921279907227,-33.89421482030143],[151.18474960327148,-33.895283493992615],[151.1850070953369,-33.89656588474496],[151.1857795715332,-33.89656588474496],[151.18586540222168,-33.897919498506766],[151.1850929260254,-33.89784825621287],[151.18466377258298,-33.899771777255694],[151.1890411376953,-33.89827570908335],[151.19024276733398,-33.90048418144512],[151.19195938110352,-33.90169525490657],[151.18715286254883,-33.907465427495765],[151.18165969848633,-33.90732295880117],[151.18131637573242,-33.91344889764405],[151.1857795715332,-33.91644047519313],[151.19110107421875,-33.91002982328022],[151.1917018890381,-33.91045721507677],[151.18680953979492,-33.917010287580986],[151.1806297302246,-33.9195031719758]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2038","Suburb":"Annandale","Criteria proportion":"0.963606286"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.1765956878662,-33.886626852033075],[151.17543697357175,-33.88349171973968],[151.1762523651123,-33.8823160154271],[151.17616653442383,-33.87868191785262],[151.17672443389893,-33.87825436678605],[151.1770248413086,-33.877684295365064],[151.17672443389893,-33.87472698875154],[151.17723941802979,-33.87298106083651],[151.17638111114502,-33.87237532239864],[151.17578029632568,-33.87230405877039],[151.17517948150635,-33.87233969059195],[151.1741495132446,-33.87166268343865],[151.172776222229,-33.87141325839699],[151.16951465606687,-33.87383621366559],[151.1672830581665,-33.88010707260322],[151.16676807403564,-33.882529781052604],[151.1643648147583,-33.88694748406899],[151.16453647613525,-33.88826562533324],[151.1765956878662,-33.886626852033075]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2050","Suburb":"Camberdown","Criteria proportion": "1.112245038"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.19477033615112,-33.8846139678338],[151.19356870651245,-33.884489274330114],[151.1901569366455,-33.88479210109436],[151.187903881073,-33.88479210109436],[151.18685245513916,-33.88477428778504],[151.18457794189453,-33.88513055326473],[151.18213176727295,-33.88570057493771],[151.1818528175354,-33.88514836649966],[151.18103742599484,-33.88470303451058],[151.18114471435547,-33.8845961544873],[151.1807370185852,-33.884382394039044],[151.1806297302246,-33.88440020743019],[151.17979288101196,-33.88374110948077],[151.18011474609375,-33.883438278986034],[151.17981433868408,-33.88308200643963],[151.17876291275024,-33.883562974025814],[151.17822647094727,-33.88347390615886],[151.17811918258667,-33.883420465394046],[151.1780333518982,-33.88327795652426],[151.17796897888184,-33.88322451563672],[151.17786169052124,-33.88318888835976],[151.1776900291443,-33.88322451563672],[151.17745399475098,-33.88336702459578],[151.17610216140747,-33.88254759483056],[151.17618799209595,-33.88276135987587],[151.17599487304688,-33.883010751751826],[151.17584466934204,-33.883153261067925],[151.17565155029297,-33.88331358376402],[151.17550134658813,-33.883456092574306],[151.1764669418335,-33.886822793975995],[151.17440700531006,-33.8872681148998],[151.17269039154053,-33.88748186811748],[151.17200374603271,-33.88757093180011],[151.17202520370483,-33.887731246194505],[151.17217540740964,-33.88828343791356],[151.17303371429443,-33.888372500759274],[151.17258310317993,-33.891044342890886],[151.1718106269836,-33.890973094853514],[151.17168188095093,-33.89141839411067],[151.17200374603271,-33.89141839411067],[151.17157459259033,-33.89432168827317],[151.17361307144165,-33.89466010263355],[151.17408514022827,-33.893466740749645],[151.17438554763794,-33.893502363734235],[151.174213886261,-33.89414357491254],[151.17696046829224,-33.89335987170659],[151.17717504501343,-33.89391202698761],[151.17998600006104,-33.893110510085364],[151.17919206619263,-33.89099090686843],[151.1794924736023,-33.89100871887965],[151.18165969848633,-33.89154307748606],[151.18277549743652,-33.891471829865296],[151.1834192276001,-33.89140058218502],[151.18856906890866,-33.891258086645905],[151.19067192077637,-33.88910281258673],[151.19348287582397,-33.887357178805594],[151.19477033615112,-33.8846139678338]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2018","Suburb":"Eastlakes","Criteria proportion": "0.834479875"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.21273040771484,-33.91223799116043],[151.20891094207764,-33.91156130063171],[151.2071943283081,-33.91074214175051],[151.20251655578613,-33.91024351944639],[151.19976997375485,-33.91768693484256],[151.19633674621582,-33.921390593072104],[151.1955213546753,-33.92548579694123],[151.2061643600464,-33.927016996516194],[151.20496273040771,-33.93289227431305],[151.20041370391843,-33.933782432561316],[151.20041370391843,-33.934423340738476],[151.20582103729248,-33.935455904877735],[151.20586395263672,-33.93588316913495],[151.2097692489624,-33.936452851476254],[151.21140003204346,-33.93559832653502],[151.21221542358398,-33.935171060848546],[151.21273040771484,-33.93581195857429],[151.21238708496094,-33.93634603632758],[151.2120008468628,-33.93659527146604],[151.21243000030518,-33.93695132039833],[151.2126874923706,-33.93705813478769],[151.21298789978027,-33.936524061500926],[151.21320247650146,-33.93698692520967],[151.21285915374756,-33.93730736784176],[151.21114253997803,-33.93748539100517],[151.21406078338623,-33.93915879054708],[151.2190818786621,-33.93445894660688],[151.21989727020264,-33.92918911613529],[151.2216567993164,-33.925521406546274],[151.21440410614014,-33.92427506151231],[151.21131420135498,-33.921675483190526],[151.21273040771484,-33.91223799116043]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2043","Suburb":"Erskineville","Criteria proportion": "1.085051185"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.1817455291748,-33.906966786022906],[151.18698120117188,-33.90760789595225],[151.19234561920166,-33.90198021086809],[151.18964195251465,-33.90046637141293],[151.18944883346558,-33.899753967074695],[151.19019985198975,-33.89954024461252],[151.18996381759644,-33.89870315981108],[151.18938446044922,-33.8988100221582],[151.18927717208862,-33.8985784869035],[151.18910551071167,-33.898222277591735],[151.18895530700684,-33.89831133005917],[151.18618726730347,-33.89927309078149],[151.1857795715332,-33.899985499137514],[151.18550062179565,-33.89994987886107],[151.18575811386108,-33.89918403931848],[151.1856508255005,-33.89850724516019],[151.1861228942871,-33.89840038243362],[151.18592977523804,-33.897296126417146],[151.18535041809082,-33.89736736917232],[151.18515729904175,-33.89731393711153],[151.18545770645142,-33.897207072889486],[151.18528604507446,-33.89677961466215],[151.18127346038818,-33.89770577144654],[151.18256092071533,-33.898934694727245],[151.1809515953064,-33.903814592070454],[151.18020057678223,-33.9040817316715],[151.1817455291748,-33.906966786022906]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2037","Suburb":"Glebe","Criteria proportion": "0.985762261"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.17762565612793,-33.872589112926406],[151.17693901062012,-33.8759027976293],[151.17706775665283,-33.87811184928783],[151.1759090423584,-33.88028521527345],[151.17629528045654,-33.882173504712554],[151.17685317993164,-33.88295731069691],[151.17895603179932,-33.88359860114656],[151.1799430847168,-33.88309982010228],[151.1802864074707,-33.883456092574306],[151.1799430847168,-33.88381236355861],[151.18097305297852,-33.88584307976084],[151.18783950805664,-33.8845961544873],[151.19500637054443,-33.8844536475813],[151.19444847106934,-33.8794301270645],[151.195650100708,-33.87900257974675],[151.19277477264404,-33.8740856316268],[151.192045211792,-33.8740856316268],[151.18916988372803,-33.87576027620387],[151.18831157684326,-33.873943107166795],[151.18809700012207,-33.87355116367456],[151.18616580963135,-33.872909797713994],[151.18483543395996,-33.87109256798675],[151.18311882019043,-33.871947739736626],[151.18256092071533,-33.87223279508263],[151.18187427520752,-33.87176957966195],[151.18020057678223,-33.87130636172745],[151.17762565612793,-33.872589112926406]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2000","Suburb":"Haymarket","Criteria proportion": "0.94968477"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.20689392089844,-33.885664948694725],[151.20912551879883,-33.87982204355726],[151.21204376220703,-33.87711422013583],[151.21238708496094,-33.873764951257094],[151.21410369873047,-33.87412126270461],[151.21976852416992,-33.86849136791795],[151.22011184692383,-33.865996992037736],[151.22303009033203,-33.86193456675535],[151.22285842895508,-33.85936872488411],[151.22182846069336,-33.858869802233855],[151.21994018554688,-33.86264728692581],[151.2180519104004,-33.86328872999274],[151.2169361114502,-33.86207711126538],[151.21710777282715,-33.85993891862939],[151.21590614318848,-33.8584421519279],[151.21590614318848,-33.85623259123138],[151.21461868286133,-33.856161314128094],[151.21298789978027,-33.85851342712761],[151.21230125427243,-33.86029528778681],[151.21238708496094,-33.86107929469808],[151.20964050292966,-33.860936748522356],[151.21041297912598,-33.85701663544139],[151.20946884155273,-33.856945358992455],[151.20929718017578,-33.85601875974309],[151.21058464050293,-33.85551981752175],[151.20938301086426,-33.8536665780379],[151.2080955505371,-33.85359529879318],[151.2074089050293,-33.855020872385644],[151.20672225952148,-33.8536665780379],[151.2062931060791,-33.85402297336925],[151.20680809020996,-33.855377262066],[151.20637893676755,-33.85559109516039],[151.20534896850586,-33.85430808856361],[151.20586395263672,-33.85587620512014],[151.20534896850586,-33.85630386827518],[151.20466232299805,-33.85473575957064],[151.20423316955566,-33.854878316097114],[151.20474815368652,-33.85651769904964],[151.2041473388672,-33.85630386827518],[151.2033748626709,-33.85530598424889],[151.20328903198242,-33.85630386827518],[151.20277404785156,-33.85544853982361],[151.20208740234375,-33.85551981752175],[151.2011432647705,-33.85530598424889],[151.20037078857422,-33.85566237273955],[151.2001132965088,-33.8571591881608],[151.20071411132812,-33.85851342712761],[151.20174407958982,-33.85936872488411],[151.20019912719727,-33.86008146647081],[151.20122909545898,-33.869631629760406],[151.20174407958982,-33.87127072947452],[151.20045661926267,-33.87326611273154],[151.19882583618164,-33.868705168173584],[151.1982250213623,-33.8739074760146],[151.19985580444336,-33.87754177691478],[151.20328903198242,-33.884311140437276],[151.20311737060547,-33.88559369616413],[151.20620727539062,-33.885094926783715],[151.20689392089844,-33.885664948694725]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2042","Suburb":"NewTown","Criteria proportion": "1.04870364362806"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.18157386779785,-33.9071092553128],[151.18080139160156,-33.90522151789743],[151.18359088897705,-33.899522434383165],[151.1820030212402,-33.89848943471507],[151.18148803710938,-33.89781263504361],[151.18517875671387,-33.89695772251728],[151.18505001068115,-33.89638777607143],[151.18492126464844,-33.89539036062519],[151.18625164031982,-33.895105382640736],[151.18805408477783,-33.89439293351327],[151.18706703186035,-33.892504914541284],[151.18788242340088,-33.89122246272393],[151.1825180053711,-33.89154307748606],[151.17925643920898,-33.890973094853514],[151.1799430847168,-33.893110510085364],[151.17723941802979,-33.893965461179924],[151.17689609527588,-33.89339549473582],[151.1742353439331,-33.89417919761443],[151.1728191375732,-33.89417919761443],[151.17196083068848,-33.89414357491254],[151.1711883544922,-33.89414357491254],[151.170973777771,-33.89482040370396],[151.17170333862305,-33.894856026123136],[151.16960048675537,-33.89866753899894],[151.16668224334717,-33.89806198291596],[151.1654806137085,-33.90034170108342],[151.16942882537842,-33.90205144970966],[151.17028713226318,-33.90098286083611],[151.1711025238037,-33.902621358299314],[151.17183208465576,-33.90237202376009],[151.17337703704834,-33.90504342730414],[151.17432117462158,-33.9079640660517],[151.17487907409668,-33.90842708495607],[151.18157386779785,-33.9071092553128]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2021","Suburb":"Paddington","Criteria proportion": "0.970932515"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.21818065643308,-33.88545119092442],[151.21431827545166,-33.90358307040577],[151.22406005859375,-33.90515028170476],[151.22272968292236,-33.90173087445385],[151.2231159210205,-33.901517156947],[151.23109817504883,-33.906503759186286],[151.23234272003174,-33.90504342730414],[151.235990524292,-33.904758481581034],[151.23950958251953,-33.902870692109346],[151.24174118041992,-33.902621358299314],[151.24251365661618,-33.897598907715555],[151.2410545349121,-33.896743993046485],[151.2409257888794,-33.89467791387847],[151.24199867248535,-33.89026061120647],[151.23684883117676,-33.890652477948834],[151.2319564819336,-33.88858625120964],[151.23538970947266,-33.888016248818424],[151.2384796142578,-33.882529781052604],[151.23350143432617,-33.87953701355922],[151.2311840057373,-33.87910946677702],[151.23169898986816,-33.87775555450095],[151.22963905334473,-33.877042960464415],[151.22938156127927,-33.881959738194425],[151.22406005859375,-33.88210224926602],[151.21818065643308,-33.88545119092442]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2009","Suburb":"Pyrmont","Criteria proportion": "1.081228178"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.19251728057858,-33.8740856316268],[151.19414806365967,-33.87615220955111],[151.19693756103516,-33.87511892684406],[151.19796752929688,-33.8747982503568],[151.1971092224121,-33.87294542928269],[151.19783878326413,-33.86884770137987],[151.1989974975586,-33.86567628127984],[151.19792461395264,-33.86531993458033],[151.1971092224121,-33.86770742906609],[151.1964654922485,-33.86809939939188],[151.19612216949463,-33.867279823021704],[151.19740962982178,-33.864037074147035],[151.19672298431396,-33.863466907767254],[151.1944055557251,-33.8653555693172],[151.19410514831543,-33.865177395484075],[151.1960792541504,-33.86257601517647],[151.19522094726562,-33.86243347149933],[151.1936330795288,-33.864322155909115],[151.19346141815186,-33.863894532909036],[151.19431972503662,-33.86246910744092],[151.19178771972656,-33.863502543277534],[151.19062900543213,-33.86393016824085],[151.19131565093994,-33.864927951493],[151.1918306350708,-33.86507049100571],[151.19097232818604,-33.86560501205893],[151.1899423599243,-33.865498108116],[151.18878364562988,-33.866353335911285],[151.18874073028564,-33.866745312454306],[151.18715286254883,-33.8683132006292],[151.18629455566406,-33.86827756712684],[151.18607997894287,-33.86845573448995],[151.1868953704834,-33.868705168173584],[151.18736743927002,-33.86916840022387],[151.18878364562988,-33.87062934637822],[151.19075775146484,-33.87166268343865],[151.19251728057858,-33.8740856316268]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2011","Suburb":"Rushcutters Bay","Criteria proportion": "1.11395712718151"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.21423244476316,-33.8739787383041],[151.22092723846436,-33.87511892684406],[151.22251510620117,-33.8756890154019],[151.22942447662354,-33.87636599061821],[151.2304973602295,-33.87419252481561],[151.22989654541016,-33.87298106083651],[151.23126983642578,-33.87233969059195],[151.23169898986816,-33.87130636172745],[151.23157024383545,-33.87084314127913],[151.2311840057373,-33.87062934637822],[151.23019695281982,-33.87002359125102],[151.22933864593506,-33.870130489527],[151.2275791168213,-33.8689546011284],[151.22775077819824,-33.86760052775578],[151.2288236618042,-33.8666027757378],[151.22843742370605,-33.864072709419354],[151.2289524078369,-33.861008021639954],[151.2308406829834,-33.85933308764861],[151.22998237609863,-33.85826396366837],[151.228609085083,-33.858014499480404],[151.22762203216553,-33.85901235185994],[151.22689247131348,-33.86157820443923],[151.2275791168213,-33.863146187505414],[151.2270212173462,-33.86328872999274],[151.227707862854,-33.86628206725556],[151.22719287872314,-33.866353335911285],[151.22637748718262,-33.863431272242096],[151.22551918029785,-33.86197020290518],[151.22169971466064,-33.86891896789376],[151.2210988998413,-33.86916840022387],[151.22058391571045,-33.8690971339182],[151.22234344482422,-33.865996992037736],[151.22191429138184,-33.865640646676816],[151.22002601623535,-33.868633901481196],[151.21989727020264,-33.86642460450752],[151.21899604797363,-33.86713728719762],[151.2189531326294,-33.868135032968624],[151.21551990509033,-33.87205463560294],[151.21423244476316,-33.8739787383041]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2010","Suburb":"Surry Hills","Criteria proportion": "1.113748975"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[
					151.20176553726196,
					-33.88906718776461
				  ],
				  [
					151.20614290237427,
					-33.88974405684085
				  ],
				  [
					151.20846033096313,
					-33.890100301565695
				  ],
				  [
					151.21161460876462,
					-33.89136495832256
				  ],
				  [
					151.21687173843384,
					-33.89209524452904
				  ],
				  [
					151.21818065643308,
					-33.885237432618524
				  ],
				  [
					151.21803045272827,
					-33.88493460743501
				  ],
				  [
					151.21742963790894,
					-33.883652041799785
				  ],
				  [
					151.21691465377808,
					-33.881193737106514
				  ],
				  [
					151.2166142463684,
					-33.88122936521658
				  ],
				  [
					151.2148118019104,
					-33.88078401277152
				  ],
				  [
					151.21498346328735,
					-33.880035815430986
				  ],
				  [
					151.21386766433716,
					-33.87967952867726
				  ],
				  [
					151.21421098709106,
					-33.87855721567949
				  ],
				  [
					151.213481426239,
					-33.87789807259421
				  ],
				  [
					151.21290206909177,
					-33.87732799879307
				  ],
				  [
					151.21264457702637,
					-33.87707859030756
				  ],
				  [
					151.21236562728882,
					-33.876936070845716
				  ],
				  [
					151.21206521987915,
					-33.876936070845716
				  ],
				  [
					151.21172189712524,
					-33.87754177691478
				  ],
				  [
					151.2109279632568,
					-33.87841469868706
				  ],
				  [
					151.20979070663452,
					-33.8793410548833
				  ],
				  [
					151.20925426483154,
					-33.87964389992006
				  ],
				  [
					151.2091040611267,
					-33.87982204355726
				  ],
				  [
					151.2088680267334,
					-33.88030302952002
				  ],
				  [
					151.2081813812256,
					-33.88372329595202
				  ],
				  [
					151.207172870636,
					-33.88479210109436
				  ],
				  [
					151.20687246322632,
					-33.88587870592943
				  ],
				  [
					151.2065291404724,
					-33.88582526667097
				  ],
				  [
					151.20331048965454,
					-33.88792718560073
				  ],
				  [
					151.203031539917,
					-33.888034061450796
				  ],
				  [
					151.20245218276978,
					-33.888319063063
				  ],
				  [
					151.20176553726196,
					-33.88906718776461
				  ]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2007","Suburb":"Ultimo","Criteria proportion": "0.931983005680908"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.1950707435608,-33.88443583420131],[151.20298862457275,-33.88370548241953],[151.20161533355713,-33.881193737106514],[151.2019157409668,-33.8810512245175],[151.20142221450803,-33.880498985986804],[151.19983434677124,-33.877506147265024],[151.1980104446411,-33.87469135792661],[151.19708776474,-33.87501203481551],[151.19399785995483,-33.87615220955111],[151.19573593139648,-33.87902039426109],[151.19453430175778,-33.879447941489595],[151.1950707435608,-33.88443583420131]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2017","Suburb":"Waterloo DC","Criteria proportion": "1.075410236"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.21573448181152,-33.8976345289741],[151.19951248168945,-33.89499851565104],[151.2026882171631,-33.9055420800278],[151.20251655578613,-33.909673661812654],[151.2125587463379,-33.912166760831475],[151.21573448181152,-33.8976345289741]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2016","Suburb":"Redfern","Criteria proportion": "1.062504929"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.21577739715576,-33.8976345289741],[151.21689319610593,-33.89221992691498],[151.21204376220703,-33.891471829865296],[151.20792388916016,-33.88990436715115],[151.20195865631104,-33.88912062499221],[151.19904041290283,-33.88865750124074],[151.19736671447754,-33.89022498686789],[151.19633674621582,-33.89111559086874],[151.1969804763794,-33.892362420847164],[151.19805335998535,-33.892362420847164],[151.19852542877197,-33.891614325047314],[151.19964122772217,-33.891792443690065],[151.19912624359128,-33.89300364059593],[151.19792461395264,-33.89282552448261],[151.19740962982178,-33.89499851565104],[151.19916915893555,-33.89514100494087],[151.21577739715576,-33.8976345289741]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2008","Suburb":"Chippendale","Criteria proportion": "1.002027717"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[151.19477033615112,-33.88457834113706],[151.19326829910278,-33.887624369965046],[151.18726015090942,-33.892308985650494],[151.1886978149414,-33.89207743274474],[151.18929862976074,-33.89357360965879],[151.18964195251465,-33.89414357491254],[151.19547843933105,-33.892433667723985],[151.1964225769043,-33.89100871887965],[151.19874000549316,-33.88858625120964],[151.20122909545898,-33.8889959380757],[151.20161533355713,-33.88926312410219],[151.20646476745605,-33.885308685446674],[151.2080955505371,-33.883456092574306],[151.20800971984863,-33.88274354614254],[151.20592832565308,-33.88176378508233],[151.19477033615112,-33.88457834113706]
				]]
			}
		}
		, {
			"type":"Feature",
			"properties":{"Postal_code":"2010","Suburb":"Darlinghurst"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[
					151.21258020400998,
					-33.873764951257094
				  ],
				  [
					151.2121081352234,
					-33.87691825589625
				  ],
				  [
					151.2124729156494,
					-33.87700733060639
				  ],
				  [
					151.21423244476316,
					-33.8784681425871
				  ],
				  [
					151.21391057968137,
					-33.87964389992006
				  ],
				  [
					151.2150478363037,
					-33.88008925831574
				  ],
				  [
					151.21483325958252,
					-33.88085526931894
				  ],
				  [
					151.21665716171265,
					-33.88122936521658
				  ],
				  [
					151.21697902679443,
					-33.88117592304591
				  ],
				  [
					151.21747255325317,
					-33.883652041799785
				  ],
				  [
					151.2180519104004,
					-33.885005860516074
				  ],
				  [
					151.2186098098755,
					-33.88309982010228
				  ],
				  [
					151.21910333633423,
					-33.88169252929363
				  ],
				  [
					151.22000455856323,
					-33.88124717926603
				  ],
				  [
					151.2205410003662,
					-33.88140750554375
				  ],
				  [
					151.22081995010376,
					-33.881425319556016
				  ],
				  [
					151.22129201889038,
					-33.881425319556016
				  ],
				  [
					151.22146368026733,
					-33.88131843542665
				  ],
				  [
					151.22290134429932,
					-33.880445543358675
				  ],
				  [
					151.2234377861023,
					-33.87950138474253
				  ],
				  [
					151.22360944747925,
					-33.879572642361055
				  ],
				  [
					151.22378110885617,
					-33.87953701355922
				  ],
				  [
					151.22476816177368,
					-33.87903820877171
				  ],
				  [
					151.22562646865845,
					-33.87889569258259
				  ],
				  [
					151.2264847755432,
					-33.8788422489503
				  ],
				  [
					151.22684955596924,
					-33.8788422489503
				  ],
				  [
					151.22745037078857,
					-33.87902039426109
				  ],
				  [
					151.22766494750977,
					-33.87907383778181
				  ],
				  [
					151.22822284698486,
					-33.87866410326762
				  ],
				  [
					151.22946739196777,
					-33.87688262598616
				  ],
				  [
					151.22745037078857,
					-33.87672229120667
				  ],
				  [
					151.22766494750977,
					-33.876223469966305
				  ],
				  [
					151.22442483901975,
					-33.87593842794847
				  ],
				  [
					151.2220001220703,
					-33.875368341056685
				  ],
				  [
					151.2207555770874,
					-33.874958588751035
				  ],
				  [
					151.2196183204651,
					-33.8748338811371
				  ],
				  [
					151.21258020400998,
					-33.873764951257094
				  ]
				]]
			}
		}, {
			"type":"Feature",
			"properties":{"Postal_code":"2661","Suburb":"Kapooka"},
			"geometry":{
				"type":"Polygon",
				"coordinates":[[[
              147.30957984924314,
              -35.14714363412631
            ],
            [
              147.26417541503903,
              -35.133106079436836
            ],
            [
              147.256965637207,
              -35.133106079436836
            ],
            [
              147.2549057006836,
              -35.137317600016935
            ],
            [
              147.24838256835938,
              -35.13844063537837
            ],
            [
              147.24769592285156,
              -35.14489778805203
            ],
            [
              147.25164413452148,
              -35.14489778805203
            ],
            [
              147.25464820861816,
              -35.14756472336561
            ],
            [
              147.25576400756836,
              -35.15212638379705
            ],
            [
              147.2574806213379,
              -35.15282815501222
            ],
            [
              147.25653648376465,
              -35.15444220583675
            ],
            [
              147.25954055786133,
              -35.158722794250934
            ],
            [
              147.25799560546875,
              -35.16321366127768
            ],
            [
              147.26786613464355,
              -35.1670728020265
            ],
            [
              147.26460456848145,
              -35.17310672778533
            ],
            [
              147.2764492034912,
              -35.17079143712329
            ],
            [
              147.27730751037598,
              -35.171422886569665
            ],
            [
              147.27636337280273,
              -35.172545451254834
            ],
            [
              147.28357315063477,
              -35.17359784157101
            ],
            [
              147.2815990447998,
              -35.18033281701137
            ],
            [
              147.30202674865723,
              -35.182577684823734
            ],
            [
              147.30374336242676,
              -35.17612352275059
            ],
            [
              147.30477333068848,
              -35.17633399264036
            ],
            [
              147.3068332672119,
              -35.167002637465586
            ],
            [
              147.31206893920898,
              -35.16805509952282
            ],
            [
              147.3149013519287,
              -35.16103842852471
            ],
            [
              147.31653213500977,
              -35.16174012286568
            ],
            [
              147.31807708740234,
              -35.15661761498085
            ],
            [
              147.31438636779785,
              -35.15612639864573
            ],
            [
              147.3149871826172,
              -35.15430185486225
            ],
            [
              147.30631828308103,
              -35.15282815501222
            ],
            [
              147.30957984924314,
              -35.14714363412631
            ]
				]]
			}
		}
	];
		//Fill in states different color
		L.geoJSON(states, {
			style: function(feature) {
				switch (feature.properties.Postal_code) {
					case '2011': return {color: "#006600"};
					case '2010':   return {color: "#006600"};
					case '2050':   return {color: "#006600"};
					case '2015':   return {color: "#009933"};
					case '2043':   return {color: "#009900"};
					case '2009':   return {color: "#669900"};
					case '2017':   return {color: "#669900"};
					case '2016':   return {color: "#77b300"};
					case '2042':   return {color: "#aaff00"};
					case '2008':   return {color: "#ccff66"};
					case '2037':   return {color: "#ffffb3"};
					case '2021':   return {color: "#ffff80"};
					case '2038':   return {color: "#ffff66"};
					case '2000':   return {color: "#ffcc66"};
					case '2007':   return {color: "#ffaa00"};
					case '2018':   return {color: "#cc3300"};
					case '2661':   return {color: "#cc3300"};
				}
			}
		}).addTo(globalMapObject);
		
	// Done!
}
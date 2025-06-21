const lighthouses = [
  {
    name: 'Split Rock Lighthouse',
    coords: [47.2015, -91.3672],
    range_nm: 22,
    light_color: 'white'
  },
  {
    name: 'Big Sable Point Lighthouse',
    coords: [44.0777, -86.5156],
    range_nm: 19,
    light_color: 'white'
  },
  {
    name: 'Wind Point Lighthouse',
    coords: [42.7833, -87.7583],
    range_nm: 20,
    light_color: 'red'
  },
  {
    name: 'Marblehead Lighthouse',
    coords: [41.5394, -82.7067],
    range_nm: 11,
    light_color: 'green'
  },
  {
    name: 'Chicago Harbor Lighthouse',
    coords: [41.8894, -87.5950],
    range_nm: 24,
    light_color: 'white'
  },
  {
	name: 'Duluth Harbor North Breakwater',
    coords: [46.7810799988328, -92.08789053897824],
    range_nm: 14,
    light_color: 'red'
  },
  {
    name: 'Duluth Harbor South Breakwater Outer Light',
    coords: [46.780219660296424, -92.08761651747865],
    range_nm: 15,
    light_color: 'green'
  },
  {
    name: 'Duluth Harbor South Breakwater Inner Light',
    coords: [46.77883311090885, -92.0920660096754],
    range_nm: 9,
    light_color: 'red'
  },
  {
    name: 'Minnesota Point Light',
    coords: [46.71019323798887, -92.02455021936727],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Wisconsin Point Light (Superior Entry Breakwater)',
    coords: [46.710881662327864, -92.00368443478183],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Grand Marais Lighthouse',
    coords: [47.74578402541411, -90.33631556196586],
    range_nm: 8,
    light_color: 'white'
  },
  {
    name: 'Thunder Bay Main',
    coords: [48.39433365599368, -89.235420216086],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Welcome Island',
    coords: [48.372900305307226, -89.08916472223818],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Pie Island Lighthouse',
    coords: [48.22823328160077, -89.17366372117324],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Angus Island Lighthouse',
    coords: [48.23551945608161, -89.00733661744853],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Trowbridge Island',
    coords: [48.29243063557046, -88.87409456213065],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Porphyry Point',
    coords: [48.34002361820982, -88.64819074627671],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Shaganash (Island No. 10)',
    coords: [48.43603596989319, -88.47893130866105],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Passage Island',
    coords: [48.22367542335707, -88.36572194072036],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Rock Harbor',
    coords: [48.0899493007693, -88.57853891239881],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Isle Royale (Menagerie Island)',
    coords: [47.95419337322538, -88.70062442310939],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Rock of Ages',
    coords: [47.86681630918651, -89.31514956167774],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Lamb Island',
    coords: [48.612443884294834, -88.1142091514317],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'Battle Island',
    coords: [48.751911246395885, -87.55707775416893],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Slate Islands',
    coords: [48.62242288126436, -86.99263017222394],
    range_nm: 17,
    light_color: 'white'
  },
  {
    name: 'Otter Island',
    coords: [48.11180647640437, -86.0667129039677],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Michipicoten Island East End',
    coords: [47.75394587428984, -85.59582149336916],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Davieaux Island',
    coords: [47.694720313277735, -85.81070897566849],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Caribou Island',
    coords: [47.340316828914624, -85.82588200931674],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Coppermine Point',
    coords: [46.98480780075668, -84.78582242597612],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Corbeil Point',
    coords: [47.04292, -85.02536],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Île Parisienne',
    coords: [46.64535595337023, -84.72474086496132],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Gros Cap Reef',
    coords: [46.51471167937074, -84.62689160811927],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Point Iroquois',
    coords: [46.48440096902568, -84.63225071573025],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Whitefish Point',
    coords: [46.77120795773967, -84.95712115061444],
    range_nm: 26,
    light_color: 'white'
  },
  {
    name: 'Crisp Point',
    coords: [46.75306308728574, -85.25671787388673],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Grand Marias Outer Range',
    coords: [46.68456018163208, -85.97070650417416],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Harbor of Refuge Inner',
    coords: [46.67718781365977, -85.9695802963428],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Au Sable Point',
    coords: [46.67287353211767, -86.13898263796348],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Grand Island North',
    coords: [46.57272775012718, -86.66054247675352],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Grand Island Harbor --East Channel',
    coords: [46.45747746507522, -86.62039536290769],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Munising Front Range',
    coords: [46.4152458412913, -86.66010678304453],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Munising Rear Range',
    coords: [46.41276947364123, -86.66336161787254],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Grand Island Harbor Rear Range',
    coords: [46.436950809183095, -86.69045711069643],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Marquette Breakwater',
    coords: [46.53389472042098, -87.37148161159494],
    range_nm: 12,
    light_color: 'green'
  },
  {
    name: 'Marquette Harbor',
    coords: [46.547545644717665, -87.3739092701587],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Presque Isle Harbor Breakwater',
    coords: [46.5741534534978, -87.37457319261095],
    range_nm: 9,
    light_color: 'green'
  },
  {
    name: 'Granite Island',
    coords: [46.721, -87.411],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Stannard Rock',
    coords: [47.16847757327435, -87.20965275118385],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Big Bay Point',
    coords: [46.84144505852277, -87.67969361620692],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Huron Island',
    coords: [46.982597046527594, -87.94313278404955],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Sand Point',
    coords: [46.78352337116137, -88.46668793834745],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Keweenaw Waterway Lower Entrance',
    coords: [46.971885223361326, -88.42511415193519],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Portage River',
    coords: [46.978446444018815, -88.41414582189876],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Mendota',
    coords: [47.382858185605066, -87.92304568396455],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Gull Rock',
    coords: [47.41869109494894, -87.65867249074981],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Manitou Island',
    coords: [47.41934814709309, -87.59616028323444],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Copper Harbor',
    coords: [47.4793191321251, -87.83871972629804],
    range_nm: 8,
    light_color: 'white'
  },
  {
    name: 'Copper Harbor Front Range',
    coords: [47.46890386772454, -87.86611396597395],
    range_nm: 6,
    light_color: 'white'
  },
  {
    name: 'Copper Harbor Rear Range',
    coords: [47.46774126805264, -87.86626111986851],
    range_nm: 6,
    light_color: 'white'
  },
  {
    name: 'Eagle Harbor',
    coords: [47.459735117491086, -88.15869001986916],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Eagle Harbor Rear Range',
    coords: [47.455823804910175, -88.15206557768747],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Eagle River',
    coords: [47.41362233810945, -88.29849568611104],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Keweenaw Waterway Upper Entrance',
    coords: [47.235310832411436, -88.62399460172894],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Fourteen Mile Point',
    coords: [46.99355210348182, -89.10724756453072],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Ontonagon West Pierhead',
    coords: [46.8795404537846, -89.32839577700683],
    range_nm: 12,
    light_color: 'green'
  },
  {
    name: 'Ontonagon Lighthouse',
    coords: [46.87361463512751, -89.32388966569563],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Ashland Breakwater',
    coords: [46.63198578387532, -90.83980290535985],
    range_nm: 7,
    light_color: 'green'
  },
  {
    name: 'LaPointe',
    coords: [46.72890638408251, -90.78345321778824],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Chequamegon Point',
    coords: [46.72880238144854, -90.8072746169135],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'Michigan Island',
    coords: [46.871586551540084, -90.49610641840945],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Outer Island',
    coords: [47.07691033156628, -90.41595468894617],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Devils Island',
    coords: [47.0796973061818, -90.72884604772665],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Raspberry Island',
    coords: [46.970612824074905, -90.80465175616452],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Sand Island',
    coords: [47.008250519741416, -90.91888061736789],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Pointe aux Pins Front Range',
    coords: [46.47312793618719, -84.45639864891291],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Shoal Island',
    coords: [46.314316355674364, -84.07152865863672],
    range_nm: 8,
    light_color: 'white'
  },
  {
    name: 'Wilson Channel Rear Range',
    coords: [46.32386054694853, -83.98020766668273],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Wilson Channel Range Front',
    coords: [46.32274153928571, -83.98129216541783],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'West Sister Rock',
    coords: [46.30403983653192, -83.91355433420641],
    range_nm: 8,
    light_color: 'white'
  },
  {
    name: 'McKay Island',
    coords: [46.28251033453766, -83.77886643873408],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Round Island (St. Marys River)',
    coords: [46.109054952867496, -84.01963879670289],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Pipe Island',
    coords: [46.01686126929415, -83.89706129800075],
    range_nm: 8,
    light_color: 'white'
  },
  {
    name: 'Six Mile Point Front Range',
    coords: [45.99301193223512, -83.89829754725044],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'DeTour Reef',
    coords: [45.94985044378836, -83.90474447167244],
    range_nm: 17,
    light_color: 'white'
  },
  {
    name: 'Martin Reef',
    coords: [45.93360227564945, -84.08815003943546],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Spectacle Reef',
    coords: [45.78919278935745, -84.04420472561868],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Bois Blanc Island',
    coords: [45.81103012722402, -84.4197389751689],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Poe Reef',
    coords: [45.6950206544144, -84.36135422793042],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Fourteen Foot Shoal',
    coords: [45.680034676081796, -84.43384872000654],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Cheboygan Crib Rear',
    coords: [45.65678028792511, -84.46325794220434],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Cheboygan Pier Front',
    coords: [45.6584600326721, -84.4621850585588],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'Round Island',
    coords: [45.83746046418229, -84.61688347530793],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Round Island Passage',
    coords: [45.843625847337684, -84.61384464088941],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Wawatam Light',
    coords: [45.86950686802136, -84.6988988467345],
    range_nm: 13,
    light_color: 'green'
  },
  {
    name: 'Old Mackinac Point',
    coords: [45.78769958080726, -84.7293873460112],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'McGulpin Point',
    coords: [45.787172904547226, -84.77260668138163],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'St. Helena Island',
    coords: [45.855137229045816, -84.86334000835775],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'White Shoal',
    coords: [45.84510769746667, -85.0840343842094],
    range_nm: 28,
    light_color: 'white'
  },
  {
    name: 'Grays Reef',
    coords: [45.76601832661776, -85.14369911561512],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Skillagalee Island (Ile Aux Galets)',
    coords: [45.67663943091582, -85.17259630659761],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Beaver Island Harbor (St. James)',
    coords: [45.74276319579742, -85.50843080836627],
    range_nm: 10,
    light_color: 'green'
  },
  {
    name: 'Squaw Island',
    coords: [45.854827221295565, -85.53371473338501],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Beaver Island',
    coords: [45.586561577543016, -85.52983050665144],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Seul Choix Point',
    coords: [45.92224309856013, -85.91289220042754],
    range_nm: 17,
    light_color: 'white'
  },
  {
    name: 'Manistique East Breakwater',
    coords: [45.94496085639474, -86.24671043954686],
    range_nm: 6,
    light_color: 'red'
  },
  {
    name: 'Gladstone',
    coords: [45.837805989289244, -87.01743905304566],
    range_nm: 10,
    light_color: 'green'
  },
  {
    name: 'Escanaba Harbor Crib',
    coords: [45.746716718277234, -87.03653621629111],
    range_nm: 10,
    light_color: 'red'
  },
  {
    name: 'Sand Point',
    coords: [45.744829982586054, -87.04408931702976],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Point Peninsula',
    coords: [45.678008850658195, -86.92805446663421],
    range_nm: 6,
    light_color: 'red'
  },
  {
    name: 'Minneapolis Shoal',
    coords: [45.58122823913551, -86.99650697362922],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Poverty Island',
    coords: [45.52296389623518, -86.66422283215884],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Pottawatomie (Rock Island)',
    coords: [45.427645963233324, -86.82814303115678],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Plum Island Rear Range Lighthouse',
    coords: [45.307755254406395, -86.95794618758602],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Plum Island Front Range',
    coords: [45.30451272966226, -86.95343864241664],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Pilot Island',
    coords: [45.28574901522549, -86.91897296957293],
    range_nm: 18,
    light_color: 'white'
  },
  {
    name: 'Chambers Island',
    coords: [45.20275624193855, -87.36357974872918],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Eagle Bluff',
    coords: [45.16875656793845, -87.23618553539106],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Cana Island',
    coords: [45.088283967951284, -87.04709212612123],
    range_nm: 17,
    light_color: 'white'
  },
  {
    name: 'Baileys Harbor Upper Range',
    coords: [45.07404339602606, -87.1121056336807],
    range_nm: 13,
    light_color: 'red'
  },
  {
    name: 'Baileys Harbor Lower Rangelight',
    coords: [45.07210374780231, -87.10712745356545],
    range_nm: 13,
    light_color: 'red'
  },
  {
    name: 'Old Baileys Harbor Bird Cage',
    coords: [45.05852436696475, -87.0918495904532],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Menominee North Pier',
    coords: [45.09763274295828, -87.5844700573831],
    range_nm: 11,
    light_color: 'red'
  },
  {
    name: 'Green Island',
    coords: [45.05836166798939, -87.49570924395827],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Peshtigo Reef',
    coords: [44.96238603090428, -87.5440735483288],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Green Bay Harbor Entrance',
    coords: [44.65313669333082, -87.90080131215883],
    range_nm: 17,
    light_color: 'white'
  },
  {
    name: 'Tail Point',
    coords: [44.598514757618716, -87.96557970512444],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Grassy Island Rear Range',
    coords: [44.53657138014575, -88.00253273867649],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Sherwood Point',
    coords: [44.922751126119415, -87.3899674480036],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Dunlap Reef Rear Range',
    coords: [44.83128490950541, -87.38151425653558],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Sturgeon Bay Canal Rear',
    coords: [44.79535492581238, -87.31132999737784],
    range_nm: 18,
    light_color: 'white'
  },
  {
    name: 'Sturgeon Bay Ship Canal Pierhead Front',
    coords: [44.79240264410321, -87.30813554452791],
    range_nm: 9,
    light_color: 'red'
  },
  {
    name: 'Algoma Pierhead',
    coords: [44.60699163709867, -87.42914755077899],
    range_nm: 11,
    light_color: 'red'
  },
  {
    name: 'Kewaunee Pierhead',
    coords: [44.457422714032965, -87.49283774100986],
    range_nm: 12,
    light_color: 'red'
  },
  {
    name: 'Rawley Point (Twin River Point)',
    coords: [44.30845464509049, -87.26357032800055],
    range_nm: 19,
    light_color: 'white'
  },
  {
    name: 'Two Rivers Lighthouse',
    coords: [44.153642910936, -87.56194174221335],
    range_nm: 19,
    light_color: 'white'
  },
  {
    name: 'Two Rivers North Pierhead',
    coords: [44.143573505474855, -87.56031095917659],
    range_nm: 9,
    light_color: 'red'
  },
  {
    name: 'Manitowoc Breakwater',
    coords: [44.093313470819524, -87.64182026479747],
    range_nm: 13,
    light_color: 'red'
  },
  {
    name: 'Sheboygan Breakwater',
    coords: [43.74969390694688, -87.69217126203822],
    range_nm: 11,
    light_color: 'red'
  },
  {
    name: 'Port Washington Main',
    coords: [43.3913487887278, -87.86652937493963],
    range_nm: 12,
    light_color: 'red'
  },
  {
    name: 'Port Washington Breakwater Light',
    coords: [43.38567273393782, -87.85876169763881],
    range_nm: 14,
    light_color: 'red'
  },
  {
    name: 'North Point',
    coords: [43.06636259082318, -87.86862120846749],
    range_nm: 25,
    light_color: 'white'
  },
  {
    name: 'Milwaukee Breakwater',
    coords: [43.02746400176487, -87.88182361728613],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Milwaukee Pierhead',
    coords: [43.02671106285154, -87.89285286116213],
    range_nm: 8,
    light_color: 'red'
  },
  {
    name: 'Wind Point',
    coords: [42.784878646903515, -87.73308859363308],
    range_nm: 21,
    light_color: 'white'
  },
  {
    name: 'Racine Breakwater Lighthouse',
    coords: [42.73494807339706, -87.77168467721125],
    range_nm: 9,
    light_color: 'red'
  },
  {
    name: 'Kenosha North Pierhead',
    coords: [42.58934054620392, -87.8055552520782],
    range_nm: 8,
    light_color: 'red'
  },
  {
    name: 'Waukegan Harbor',
    coords: [42.360760276161216, -87.81309389512558],
    range_nm: 9,
    light_color: 'green'
  },
  {
    name: 'Grosse Point',
    coords: [42.09921959670777, -87.59629609276223],
    range_nm: 21,
    light_color: 'white'
  },
  {
    name: 'Wilson Avenue Crib',
    coords: [41.96600527669609, -87.59041488587776],
    range_nm: 6,
    light_color: 'red'
  },
  {
    name: 'Chicago Harbor',
    coords: [41.88951290492055, -87.5903411555425],
    range_nm: 15,
    light_color: 'red'
  },
  {
    name: 'Chicago Harbor Southeast Guidewall',
    coords: [41.88879847198225, -87.60268509673278],
    range_nm: 8,
    light_color: 'green'
  },
  {
    name: 'Indiana Harbor East Breakwater Lighthouse',
    coords: [41.68304063261025, -87.43611742635477],
    range_nm: 9,
    light_color: 'red'
  },
  {
    name: 'Buffington Harbor Breakwater',
    coords: [41.646708932869814, -87.40749182006934],
    range_nm: 6,
    light_color: 'green'
  },
  {
    name: 'Michigan City East Pierhead',
    coords: [41.729358594276576, -86.9103178483774],
    range_nm: 9,
    light_color: 'red'
  },
  {
    name: 'St. Joseph North Pierhead Outer',
    coords: [42.116720519336674, -86.49377346002576],
    range_nm: 13,
    light_color: 'red'
  },
  {
    name: 'St Joseph North Pier Inner',
    coords: [42.11528626643912, -86.48395742576626],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'South Haven South Pier',
    coords: [42.401539822823146, -86.2873185011925],
    range_nm: 11,
    light_color: 'red'
  },
  {
    name: 'Holland Harbor',
    coords: [42.78343465317286, -86.16766471809674],
    range_nm: 10,
    light_color: 'red'
  },
  {
    name: 'Grand Haven outer',
    coords: [43.05713163540342, -86.25547293554723],
    range_nm: 14,
    light_color: 'red'
  },
  {
    name: 'Muskegon South Breakwater',
    coords: [43.224462474798, -86.34406029444946],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'Muskegon South Pierhead',
    coords: [43.22705794528065, -86.33976876041815],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'White River',
    coords: [43.374880944844946, -86.42437764851044],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Little Sable Point',
    coords: [43.65232515424178, -86.5396568350862],
    range_nm: 17,
    light_color: 'white'
  },
  {
    name: 'Pentwater North Pierhead Light',
    coords: [43.78258403387613, -86.44292110524609],
    range_nm: 8,
    light_color: 'red'
  },
  {
    name: 'Ludington North Pierhead',
    coords: [43.95380701610493, -86.470125134473],
    range_nm: 5,
    light_color: 'red'
  },
  {
    name: 'Big Sable Point',
    coords: [44.057767652401544, -86.51405974103952],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Manistee North Pierhead',
    coords: [44.25216296426924, -86.34587437579937],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Frankfort North Breakwater',
    coords: [44.65708018454652, -86.11013150467481],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Point Betsie Lighthouse',
    coords: [44.691421933287735, -86.25574353070785],
    range_nm: 11,
    light_color: 'red'
  },
  {
    name: 'Robert H. Manning Memorial',
    coords: [44.814477934338036, -86.06679056425415],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'South Manitou Island',
    coords: [45.040654909426316, -85.95307458442464],
    range_nm: 15,
    light_color: 'red'
  },
  {
    name: 'North Manitou Shoal',
    coords: [45.02010614394718, -85.95565849357946],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Grand Traverse',
    coords: [45.21085302851332, -85.54893812540249],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Mission Point',
    coords: [44.991736184737015, -85.47723185338035],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'South Fox Island old',
    coords: [45.37877365495746, -85.83656766050125],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Charlevoix South Pier',
    coords: [45.32032499795123, -85.2644342777067],
    range_nm: 6,
    light_color: 'red'
  },
  {
    name: 'Charlevoix Buoy Depot',
    coords: [45.32101971114568, -85.23700245911866],
    range_nm: 8,
    light_color: 'white'
  },
  {
    name: 'Mississagi Strait',
    coords: [45.916638033518346, -83.14370604016662],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Forty Mile Point',
    coords: [45.4863143373835, -83.91299444329212],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'New Presque Isle Lighthouse',
    coords: [45.35974039122252, -83.48888555189133],
    range_nm: 18,
    light_color: 'white'
  },
  {
    name: 'Old Presque Isle Lighthouse',
    coords: [45.34405782482675, -83.47257772047936],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Presque Isle Front Range',
    coords: [45.33816866102487, -83.49100455595645],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Presque Isle Rear Range',
    coords: [45.338162152524255, -83.49310348192004],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Middle Island',
    coords: [45.19365436078513, -83.31897247256671],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Alpena Light',
    coords: [45.060558010068966, -83.42294183118452],
    range_nm: 13,
    light_color: 'red'
  },
  {
    name: 'Thunder Bay Island Light',
    coords: [45.03724219548463, -83.19412957956277],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Sturgeon Point Lighthouse',
    coords: [44.71278439041368, -83.27209888938785],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Tawas Point',
    coords: [44.25394685516113, -83.44952600431331],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Charity Island',
    coords: [44.03794061146363, -83.43848975106216],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Gravelly Shoal',
    coords: [44.022400580563605, -83.52504391283136],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Saginaw River Rear Range',
    coords: [43.63562699956113, -83.85040744663618],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Port Austin Reef',
    coords: [44.08178958372265, -82.98124906430867],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Harbor Beach',
    coords: [43.84579661229183, -82.63120876196653],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Port Sanilac',
    coords: [43.52017063106569, -82.29316950168048],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Fort Gratiot',
    coords: [43.00693912702596, -82.42161951799245],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Point Edward Range',
    coords: [43.002736649583234, -82.41570974347634],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Lightship Huron LV 103/WAL 526',
    coords: [42.990072426829954, -82.42787585688555],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Goderich Breakwater Light Beacon Stations',
    coords: [43.746992635828676, -81.7337556544996],
    range_nm: 12,
    light_color: 'red'
  },
  {
    name: 'Goderich Lighthouse',
    coords: [43.74252817334804, -81.72371346374844],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Point Clark',
    coords: [44.07291477761204, -81.75703775452904],
    range_nm: 20,
    light_color: 'white'
  },
  {
    name: 'Kincardine',
    coords: [44.17715192790101, -81.63764346244645],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Chantry island lighthouse or Imperial Lighthouse',
    coords: [44.4897054167082, -81.4005026217493],
    range_nm: 18,
    light_color: 'white'
  },
  {
    name: 'McNab Point',
    coords: [44.4741165777147, -81.37941052068592],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'Southampton Front Range Light Beacon Station',
    coords: [44.50170709379146, -81.37444496118383],
    range_nm: 6,
    light_color: 'white'
  },
  {
    name: 'Saugeen River Range Rear Lighthouse',
    coords: [44.50127857330943, -81.36502504308714],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Big Tub',
    coords: [45.257774706790734, -81.6722308046927],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Cove Island',
    coords: [45.32710898820131, -81.73474343166872],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Flowerpot Island',
    coords: [45.3072780557479, -81.61382952003478],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'South Baymouth Rear Range',
    coords: [45.5541933525002, -82.01693061259536],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Gore Bay (Janet Head)',
    coords: [45.94604175377646, -82.48051420548694],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Kagawong Marina Lighthouse',
    coords: [45.91098095312929, -82.25560957857638],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'Kagawong Lighthouse',
    coords: [45.910115022886146, -82.2604160974096],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'Little Current',
    coords: [45.980451970702305, -81.92229096180638],
    range_nm: 10,
    light_color: 'red'
  },
  {
    name: 'Strawberry Island',
    coords: [45.97351600492029, -81.85382848136746],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Manitowaning',
    coords: [45.74487978126678, -81.80456011814641],
    range_nm: 6,
    light_color: 'white'
  },
  {
    name: 'Killarney Northwest',
    coords: [45.98389115193849, -81.53145110092717],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Killarney East',
    coords: [45.96831981412298, -81.48814715860125],
    range_nm: 8,
    light_color: 'red'
  },
  {
    name: 'Lonely Island',
    coords: [45.574, -81.468],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Bustard Rocks Lighthouse',
    coords: [45.890989687069336, -80.95173757951859],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Gereaux Island',
    coords: [45.74526018126832, -80.6552716875643],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Byng Inlet Front Range',
    coords: [45.753267976619966, -80.64191936442563],
    range_nm: 10,
    light_color: 'green'
  },
  {
    name: 'Byng Inlet Range Rear Lighthouse',
    coords: [45.752831893270844, -80.64001056833087],
    range_nm: 10,
    light_color: 'green'
  },
  {
    name: 'Cabot Head',
    coords: [45.24522434131657, -81.29220693488097],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Lions Head Harbour',
    coords: [44.99103472378057, -81.24719432692677],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Pointe au Baril Range Front',
    coords: [45.559673342198295, -80.50264388254143],
    range_nm: 10,
    light_color: 'green'
  },
  {
    name: 'Pointe au Baril Range Rear Lighthouse',
    coords: [45.55675862357357, -80.48582106771403],
    range_nm: 10,
    light_color: 'green'
  },
  {
    name: 'Red Rock',
    coords: [45.361111132344604, -80.40564045605556],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Cape Croker',
    coords: [44.95645257749965, -80.96044161955693],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Snug Harbour Rear Range',
    coords: [45.373738496570994, -80.31116804650671],
    range_nm: 6,
    light_color: 'red'
  },
  {
    name: 'Cape Robert',
    coords: [45.996770624185906, -82.80979226973021],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Spruce Island Shoal',
    coords: [45.501534472669135, -80.02784711136117],
    range_nm: 8,
    light_color: 'white'
  },
  {
    name: 'Jones Island Range Front',
    coords: [45.31659588736282, -80.27846753449755],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'Jones Island Range Rear',
    coords: [45.30032345293827, -80.25155738690205],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'Western Islands',
    coords: [45.036801676129556, -80.35360664703644],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Griffith Island',
    coords: [44.850773206958785, -80.89104266610656],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Hope Island',
    coords: [44.9157984323727, -80.16526015952749],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Meaford Rear Range',
    coords: [44.68954702633005, -80.58474468395755],
    range_nm: 13,
    light_color: 'red'
  },
  {
    name: 'Nottawasaga Island',
    coords: [44.538592042929096, -80.25840796511336],
    range_nm: 17,
    light_color: 'white'
  },
  {
    name: 'Nancy Island',
    coords: [44.518501084449234, -80.02110287528672],
    range_nm: 6,
    light_color: 'red'
  },
  {
    name: 'Christian Island',
    coords: [44.78675059286493, -80.1554916893823],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Brébeuf Island',
    coords: [44.8769786417172, -79.88367991821195],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Beausoleil Island',
    coords: [44.87715299793147, -79.87577989072639],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Midland Point Rear Range',
    coords: [44.788105873101415, -79.86293694780409],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Victoria Harbour Range Rear',
    coords: [44.74986048988061, -79.77741790410994],
    range_nm: 7,
    light_color: 'red'
  },
  {
    name: 'Corunna Rear Range',
    coords: [42.84086187426258, -82.46205150858165],
    range_nm: 10,
    light_color: 'red'
  },
  {
    name: 'Peche Island Rear Range',
    coords: [42.71650697310233, -82.49126346997389],
    range_nm: 15,
    light_color: 'red'
  },
  {
    name: 'St. Clair Flats front Range',
    coords: [42.55415011763319, -82.6981924971244],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Lake St. Clair Old South Channel Rear Light',
    coords: [42.53956399582946, -82.69013380753695],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Lake St. Clair Old South Channel Front Light',
    coords: [42.538552132203066, -82.69476866488561],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Lake St. Clair',
    coords: [42.465385768566435, -82.75473117297855],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Thames River Rear Range',
    coords: [42.31733886961049, -82.45371718905878],
    range_nm: 10,
    light_color: 'red'
  },
  {
    name: 'Windmill Point',
    coords: [42.35762818365739, -82.92990221974753],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Pelee Passage Lighthouse',
    coords: [42.33964072627678, -82.93040466524215],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Grosse Ile Lighthouse',
    coords: [42.16828115071409, -83.13979510441527],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Bois Blanc Island (BobLo)',
    coords: [42.08709404151574, -83.11950996209393],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Detroit River',
    coords: [42.00052499350937, -83.14041143140848],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Toledo Harbor',
    coords: [41.7617389970642, -83.32836579095353],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Turtle Island',
    coords: [41.753442035972625, -83.39116630292371],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Manhattan Front Range',
    coords: [41.6771455235057, -83.49816201450943],
    range_nm: 8,
    light_color: 'red'
  },
  {
    name: 'Manhattan Rear Range Light',
    coords: [41.67636472995369, -83.49905222637726],
    range_nm: 16,
    light_color: 'red'
  },
  {
    name: 'West Sister Island',
    coords: [41.737022571257604, -83.11054064677295],
    range_nm: 18,
    light_color: 'white'
  },
  {
    name: 'Port Clinton',
    coords: [41.515057005509775, -82.93447066213446],
    range_nm: 5,
    light_color: 'white'
  },
  {
    name: 'Kingsville',
    coords: [42.02805405866723, -82.7363477052189],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Leamington',
    coords: [42.03037048687781, -82.60316721977088],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Green Island',
    coords: [41.64576349488957, -82.86750398915973],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'South Bass Island',
    coords: [41.62868710212019, -82.8414386180867],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Pelee Island Lighthouse',
    coords: [41.83190617862074, -82.63910986466482],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Pelee Passage New',
    coords: [41.85208491453561, -82.5814541404581],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Cedar Point',
    coords: [41.48834426131947, -82.69347261980928],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Huron Harbor',
    coords: [41.40468813523076, -82.54389548625191],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Vermilion',
    coords: [41.42494448183946, -82.36658764679498],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Lorain Harbor Lighthouse',
    coords: [41.47817216485905, -82.1908544398948],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Lorain Harbor Lighthouse Lookout',
    coords: [41.476693131918815, -82.18072641851532],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Cleveland East Breakwater Lighthouse',
    coords: [41.51052560012568, -81.71542251903688],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Cleveland Harbor West Pierhead Lighthouse',
    coords: [41.509020592206156, -81.71773934767303],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Fairport Harbor West Breakwater',
    coords: [41.76780287757934, -81.28112621793431],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Fairport Harbor',
    coords: [41.75702126524286, -81.27721047802368],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Ashtabula',
    coords: [41.918658103568504, -80.79574024861529],
    range_nm: 17,
    light_color: 'white'
  },
  {
    name: 'Conneaut West Breakwater',
    coords: [41.97974812000104, -80.55766340442868],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Presque Isle',
    coords: [42.165806280301425, -80.11528896208831],
    range_nm: 20,
    light_color: 'white'
  },
  {
    name: 'Presque Isle North Pierhead',
    coords: [42.15601248734052, -80.0712156116317],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Erie Land',
    coords: [42.14429232100539, -80.06176767558051],
    range_nm: 21,
    light_color: 'white'
  },
  {
    name: 'Barcelona (Portland Harbor)',
    coords: [42.34109747119469, -79.59493580440287],
    range_nm: 17,
    light_color: 'white'
  },
  {
    name: 'Buffalo South Entrance North Side',
    coords: [42.833481752321106, -78.86736798111508],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'South Buffalo Southside',
    coords: [42.83348868387402, -78.8672576991335],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Buffalo Main',
    coords: [42.87784793330557, -78.88952899087361],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Horseshoe Reef',
    coords: [42.881247832872056, -78.91517146203692],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Buffalo Intake Crib',
    coords: [42.87972236191728, -78.91196957108045],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Point Abino',
    coords: [42.83574158896894, -79.09533344115717],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Port Colborne Inner',
    coords: [42.86755662502511, -79.25299710436498],
    range_nm: 8,
    light_color: 'red'
  },
  {
    name: 'Port Colborne Outer',
    coords: [42.862576955205135, -79.2548798820336],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Mohawk Island',
    coords: [42.834002103413404, -79.5226041601852],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Port Maitland West Pier',
    coords: [42.85300813243852, -79.57983410436606],
    range_nm: 8,
    light_color: 'green'
  },
  {
    name: 'Port Dover West Pier',
    coords: [42.78111454562692, -80.20167787553478],
    range_nm: 8,
    light_color: 'green'
  },
  {
    name: 'Long Point',
    coords: [42.54889877117588, -80.0494246467151],
    range_nm: 17,
    light_color: 'white'
  },
  {
    name: 'Old Cut Lighthouse',
    coords: [42.58650560418203, -80.39720442941407],
    range_nm: 5,
    light_color: 'white'
  },
  {
    name: 'Port Burwell',
    coords: [42.64528247363806, -80.8072643133116],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Port Stanley',
    coords: [42.655170723521614, -81.2134248755439],
    range_nm: 9,
    light_color: 'green'
  },
  {
    name: 'Rondeau West Breakwater Range',
    coords: [42.253526531529, -81.90940015016889],
    range_nm: 9,
    light_color: 'green'
  },
  {
    name: 'Burlington Rear Light',
    coords: [43.298519566278756, -79.7951773340994],
    range_nm: 12,
    light_color: 'green'
  },
  {
    name: 'Burlington Rear Light',
    coords: [43.30098790264922, -79.7906322057259],
    range_nm: 12,
    light_color: 'green'
  },
  {
    name: 'Port Dalhousie Range Rear',
    coords: [43.20704033494381, -79.26308919082041],
    range_nm: 12,
    light_color: 'green'
  },
  {
    name: 'Port Dalhousie Range Front',
    coords: [43.211059724787034, -79.26343251351574],
    range_nm: 12,
    light_color: 'green'
  },
  {
    name: 'Port Weller Outer',
    coords: [43.244381144833206, -79.20774080608928],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Fort Niagara',
    coords: [43.26190738583618, -79.06050327221506],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Niagara River Front Range',
    coords: [43.25386371336181, -79.06040571969147],
    range_nm: 19,
    light_color: 'white'
  },
  {
    name: 'Olcott Lighthouse',
    coords: [43.338857593280785, -78.71512370433084],
    range_nm: 13,
    light_color: 'white'
  },
  {
    name: 'Thirty Mile Point',
    coords: [43.37468318345184, -78.48447608183552],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Oak Orchard',
    coords: [43.37233616201842, -78.19145948898252],
    range_nm: 10,
    light_color: 'red'
  },
  {
    name: 'Braddock Point',
    coords: [43.34106005960886, -77.76191859083995],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Charlotte Genesee',
    coords: [43.25260572042103, -77.61093719765668],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Sodus Bay',
    coords: [43.27382956294803, -76.98616939239767],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Sodus Outer',
    coords: [43.277305069948625, -76.97397775717376],
    range_nm: 10,
    light_color: 'green'
  },
  {
    name: 'Oswego West Pierhead',
    coords: [43.47324030047846, -76.5167359331574],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Selkirk (Salmon River)',
    coords: [43.574758843886215, -76.20229357547709],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Horse Island',
    coords: [43.94300229617926, -76.14450583126774],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Galloo Island',
    coords: [43.889, -76.444],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'East Charity Shoal',
    coords: [44.04169260785083, -76.49719950427918],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Pigeon Island',
    coords: [44.066070216494445, -76.54885163496897],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Tibbetts Point',
    coords: [44.100661898539954, -76.37009680613],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Cape Vincent Breakwater',
    coords: [44.11959756357449, -76.33220996610291],
    range_nm: 6,
    light_color: 'green'
  },
  {
    name: 'Nine Mile Point',
    coords: [44.151665862784284, -76.55588358892523],
    range_nm: 18,
    light_color: 'white'
  },
  {
    name: 'Québec Head',
    coords: [44.238783831094636, -76.1845308850562],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Rock Island',
    coords: [44.28081555744772, -76.01643536193437],
    range_nm: 14,
    light_color: 'white'
  },
  {
    name: 'Sunken Rock',
    coords: [44.345723989485165, -75.91539365735187],
    range_nm: 6,
    light_color: 'red'
  },
  {
    name: 'Sisters Island',
    coords: [44.41418485270296, -75.84436360425153],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Crossover Island',
    coords: [44.496993182049096, -75.77833373493705],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Cole Shoal Front Range',
    coords: [44.532828376034345, -75.7566639613289],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Cole Shoal Range Rear',
    coords: [44.541801787008765, -75.75165641329305],
    range_nm: 7,
    light_color: 'white'
  },
  {
    name: 'Prescott Heritage Harbor',
    coords: [44.709895851298675, -75.50950959957268],
    range_nm: 5,
    light_color: 'white'
  },
  {
    name: 'Prescott Rotary',
    coords: [44.710342565010016, -75.51171680493162],
    range_nm: 5,
    light_color: 'white'
  },
  {
    name: 'Windmill Point',
    coords: [44.721149443737225, -75.4872560434389],
    range_nm: 10,
    light_color: 'white'
  },
  {
    name: 'Main Duck Island',
    coords: [43.93123778406222, -76.63817784661443],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'False Duck Island',
    coords: [43.948, -76.799],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Prince Edward Point',
    coords: [43.93739925513734, -76.85871928894109],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Point Petre',
    coords: [43.839474127201505, -77.15276146562161],
    range_nm: 16,
    light_color: 'white'
  },
  {
    name: 'Scotch Bonnet Island',
    coords: [43.89946880353094, -77.54238519492779],
    range_nm: 9,
    light_color: 'white'
  },
  {
    name: 'Presquîle Point',
    coords: [43.997825498849224, -77.67560513278679],
    range_nm: 11,
    light_color: 'white'
  },
  {
    name: 'Cobourg East Pierhead',
    coords: [43.95239556657042, -78.16462017544931],
    range_nm: 12,
    light_color: 'red'
  },
  {
    name: 'Toronto Harbour',
    coords: [43.61356047438975, -79.3434301669129],
    range_nm: 12,
    light_color: 'white'
  },
  {
    name: 'Gibraltar Point',
    coords: [43.61374518821384, -79.38539998218374],
    range_nm: 15,
    light_color: 'white'
  },
  {
    name: 'Queens Wharf',
    coords: [43.63590770087019, -79.40490496198191],
    range_nm: 6,
    light_color: 'red'
  },
  {
    name: 'Eastern Gap Lighthouse',
    coords: [43.61842910927114, -79.4795892480425],
    range_nm: 8,
    light_color: 'green'
  },
  {
    name: 'Oakville',
    coords: [43.43945425155979, -79.66545270432346],
    range_nm: 6,
    light_color: 'green'
  }
];

// Map lighthouse light color to hex:
const colorMap = {
  'white': '#EEEEEE',
  'red':   '#FA5252',
  'green': '#51CF66',
  'blue':  '#339AF0',
  'yellow': '#FFD43B',
  'orange': '#FFA94D'
  // Extend if needed
};

// Set minimum/maximum marker radii in pixels
const minRadius = 6;
const maxRadius = 24;
const maxVisibility = Math.max(...lighthouses.map(lh => lh.range_nm));
const minVisibility = Math.min(...lighthouses.map(lh => lh.range_nm));

// Map a visibility range to a marker radius
function scaleRadius(range_nm) {
  return (
    ((range_nm - minVisibility) / (maxVisibility - minVisibility))
    * (maxRadius - minRadius) + minRadius
  );
}

const map = L.map('map', {
  center: [45.5, -84.0],   // Centered between the Great Lakes
  zoom: 6,
  zoomControl: true,
  attributionControl: true
});

// Add CartoDB Dark Matter base layer
L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }
).addTo(map);

// Add lighthouse markers
lighthouses.forEach(lh => {
  const color = colorMap[lh.light_color] || '#CCCCCC';
  const radius = scaleRadius(lh.range_nm);

  // Custom circle marker
  const marker = L.circleMarker(lh.coords, {
    radius: radius,
    color: color,
    fillColor: color,
    fillOpacity: 0.75,
    weight: 2,
    opacity: 1
  });

  marker.bindPopup(
    `<strong>${lh.name}</strong><br>
      <span>Visibility: ${lh.range_nm} NM</span><br>
      <span>Light color: <span style="color:${color}">${lh.light_color}</span></span>`
  );

  marker.addTo(map);
});
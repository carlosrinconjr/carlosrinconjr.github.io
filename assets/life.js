/* "Life back then / Cómo se vivía" panels, one per chapter (keyed by chapter k).
   Every number and claim comes from the source linked on that item (checked 17 Nov 2026).
   Ages are worked out from the dates in findings-log.md / data.js. Where nothing reliable was found, the item is left out.
   Living people: never named with dates or places here. */
(function(){
const EN = t => 'https://en.wikipedia.org/wiki/' + t;
const ES = t => 'https://es.wikipedia.org/wiki/' + t;
const CM = t => 'https://commons.wikimedia.org/wiki/File:' + t;
const SRC = {
  zacEN:['Zacatecas City', EN('Zacatecas_City')],
  zacES:['Zacatecas, census table (Spanish)', ES('Zacatecas_(Zacatecas)#Demografía'), 'Zacatecas census'],
  porf:['Porfiriato', EN('Porfiriato')],
  chiEN:['Chihuahua City', EN('Chihuahua_City')],
  chiES:['Chihuahua, census table (Spanish)', ES('Chihuahua_(Chihuahua)#Demografía_y_economía'), 'Chihuahua census'],
  rev:['Mexican Revolution', EN('Mexican_Revolution')],
  flu:['Spanish flu', EN('Spanish_flu')],
  torEN:['Torreón', EN('Torreón')],
  torES:['Torreón, history and census (Spanish)', ES('Torreón_(Coahuila)'), 'Torreón (Spanish)'],
  lala:['Grupo Lala', EN('Grupo_Lala')],
  cardenas:['Lázaro Cárdenas', EN('Lázaro_Cárdenas')],
  laguna:['Laguna Region', EN('Laguna_Region')],
  papMun:['Municipio de Santiago Papasquiaro (Spanish)', ES('Municipio_de_Santiago_Papasquiaro'), 'Papasquiaro census'],
  papES:['Santiago Papasquiaro (Spanish)', ES('Santiago_Papasquiaro'), 'Santiago Papasquiaro'],
  papINAFED:['INAFED, Enciclopedia de los Municipios: Santiago Papasquiaro (archived)', 'https://web.archive.org/web/20211201161939/http://www.inafed.gob.mx/work/enciclopedia/EMM10durango/municipios/10032a.html', 'INAFED'],
  mono1889:['Monografía General de Durango, 1889 (UJED edition, transcribed by Tierra Mixta)', 'https://tierramixta.com.mx/2017/04/02/monografia-de-1889-parte-2/', '1889 Durango monograph'],
  arqui:['Arquidiócesis de Durango, on Santiago Papasquiaro (2011)', 'https://arquidiocesisdurango.org/2011/04/24/santiago-papasquiaro-ante-la-violencia-e-inseguridad-solo-la-fe-y-esperanza-en-jesus/', 'Archdiocese of Durango'],
  cristero:['Cristero War', EN('Cristero_War')],
  canEN:['Cañadas de Obregón', EN('Cañadas_de_Obregón')],
  canES:['Cañadas de Obregón, census (Spanish)', ES('Cañadas_de_Obregón'), 'Cañadas census'],
  canMun:['Municipio de Cañadas de Obregón (Spanish)', ES('Municipio_de_Cañadas_de_Obregón'), 'Cañadas municipality'],
  canINAFED:['INAFED, Enciclopedia de los Municipios: Cañadas de Obregón (archived)', 'https://web.archive.org/web/20210518084912/http://www.inafed.gob.mx/work/enciclopedia/EMM14jalisco/municipios/14117a.html', 'INAFED'],
  altos:['Los Altos de Jalisco', EN('Los_Altos_de_Jalisco')],
  bracero:['Bracero Program', EN('Bracero_Program')],
  chicago:['Chicago (U.S. Census table)', EN('Chicago#Demographics'), 'Chicago'],
  mexchi:['Mexicans in Chicago', EN('Mexicans_in_Chicago')],
  lv:['South Lawndale (Little Village)', EN('South_Lawndale,_Chicago'), 'Little Village'],
  sworks:['South Works', EN('South_Works')],
  heat:['1995 Chicago heat wave', EN('1995_Chicago_heat_wave')],
  oc:['Orange County (U.S. Census table)', EN('Orange_County,_California#Demographics'), 'Orange County'],
  log:['Logroño (INE census table)', EN('Logroño'), 'Logroño'],
  carlist:['Carlist Wars', EN('Carlist_Wars')]
};
const s = k => SRC[k];

window.LIFE = {
 larioja:{
  intro:'Logroño, the capital, around the time of the family story (about 1850).',
  glance:[
   {i:'👥', k:'Logroño then', v:'11,239', sub:'people in 1857', s:'log'},
   {i:'🏙️', k:'Logroño today', v:'150,596', sub:'people in 2021', s:'log'},
   {i:'⛰️', k:'Elevation', v:'384 m', sub:'1,260 ft, on the Ebro River', s:'log'},
   {i:'🌤️', k:'Climate', v:'13.9 °C', sub:'yearly average; about 400 mm of rain', s:'log'}
  ],
  chart:{title:'Logroño’s population, census by census', src:'log', era:[1842,1857], pts:[[1842,6843],[1857,11239],[1877,13888],[1887,15933],[1900,18866],[1920,28207],[1940,43674],[1960,59373],[1981,109536],[2001,133058],[2021,150596]]},
  events:[
   {y:'1833–1840', t:'The First Carlist War, a civil war over who should inherit the Spanish throne, fought mostly in the Basque Country, Aragon, Catalonia and Valencia.', who:'Ended about ten years before the family story says the Rincóns came to Zacatecas.', s:'carlist'},
   {y:'1854', t:'A cholera epidemic devastated Logroño. Queen Isabella II gave the city the title of “Excellence” for how it behaved during the outbreak.', who:'Around the time the family story places the move to Zacatecas.', s:'log'}
  ],
  tn:{place:'Calle Portales, looking toward the cathedral towers',
   then:{f:'logrono-calle-portales-1900s.jpg', y:'1900–1910', by:'Alberto Muro · Logroño municipal archive', lic:'Public domain', url:CM('Vista_de_la_calle_portales.jpg')},
   now:{f:'logrono-calle-portales-2023.jpg', y:'2023', by:'Krzysztof Golik', lic:'CC BY-SA 4.0', licUrl:'https://creativecommons.org/licenses/by-sa/4.0/', url:CM('Calle_Portales_in_Logrono_(1).jpg')}},
  movePhoto:true
 },

 zacatecas:{
  glance:[
   {i:'👥', k:'Then', v:'32,866', sub:'people in 1900, two years before Bruno was born', s:'zacES'},
   {i:'🏙️', k:'Today', v:'138,444', sub:'people in the city, 2020 census', s:'zacEN'},
   {i:'⛰️', k:'Elevation', v:'2,440 m', sub:'about 8,000 ft, in the mountains', s:'zacEN'},
   {i:'🌵', k:'Climate', v:'15.7 °C', sub:'yearly average · cold semi-arid', s:'zacEN'}
  ],
  chart:{title:'Zacatecas city, census by census', src:'zacES', era:[1900,1900], pts:[[1900,32866],[1910,25900],[1921,15462],[1930,18800],[1940,21846],[1950,30211],[1970,50251],[1990,100051],[2010,129011],[2020,138444]], note:'The city lost more than half its people between 1900 and 1921, a span that includes the Revolution.'},
  day:[
   {i:'⛏️', h:'Work', t:'Silver built the city. The hills around it were full of mines; El Edén, inside the Cerro de la Bufa, was worked from 1586 until 1960.', s:'zacEN'},
   {i:'🪙', h:'Money', t:'Zacatecas had its own mint, the Casa de Moneda, which struck coins from 1802 to 1905.', s:'zacEN'},
   {i:'🏛️', h:'Homes and streets', t:'The city was built tight against the mines on rough, steep ground, and its landmark buildings are of pink cantera stone: “a face of pink stone and a heart of silver.”', s:'zacEN'},
   {i:'🧺', h:'Market', t:'Beside the cathedral, the González Ortega Market opened in 1889 as a traditional Mexican market. Its original front still stands.', s:'zacEN'},
   {i:'🚂', h:'Travel', t:'A railroad to nearby Guadalupe opened in 1880, and by 1884 trains ran to Mexico City and to El Paso on the U.S. border.', s:'zacEN'},
   {i:'📚', h:'School', t:'Most people could not read. In Mexico’s 1910 census, only 33% of men and 27% of women were literate.', s:'porf'}
  ],
  events:[
   {y:'1873', t:'The world price of silver dropped, a hard blow for a silver city.', who:'Genaro was about 24, if the unsourced family-tree birth year of about 1849 is right.', s:'porf'},
   {y:'1884', t:'Trains began running from Zacatecas to Mexico City and to El Paso.', who:'Juan was about 4.', s:'zacEN'},
   {y:'June 1914', t:'The Battle of Zacatecas: Pancho Villa’s army took the city from Victoriano Huerta’s forces, opening the road to Mexico City.', who:'Juan was 35 and Bruno 11. We don’t know whether the family was still living in the city by then.', s:'zacEN'}
  ],
  tn:{place:'The cathedral’s front',
   then:{f:'zacatecas-cathedral-1880.jpg', y:'1880', by:'Unknown photographer · INAH Mediateca', lic:'Public domain', url:CM('Zacatecas_Cathedral_in_1880.jpg')},
   now:{f:'zacatecas-cathedral-2020.jpg', y:'2020', by:'Martín Daniel Cordero Amézquita', lic:'CC BY-SA 3.0', licUrl:'https://creativecommons.org/licenses/by-sa/3.0/', url:CM('Fachada_Frontal_de_la_Catedral_de_Zacatecas,_Zac.jpg')}},
  movePhoto:true
 },

 chihuahua:{
  glance:[
   {i:'👥', k:'Then', v:'30,405', sub:'people in 1900; 45,595 by 1931, the year Bruno and Natalia married', s:'chiES'},
   {i:'🏙️', k:'Today', v:'925,762', sub:'people, 2020 census', s:'chiES'},
   {i:'⛰️', k:'Elevation', v:'1,415 m', sub:'4,635 ft, on the edge of the Chihuahuan Desert', s:'chiEN'},
   {i:'☀️', k:'Climate', v:'Hot semi-arid', sub:'about 3,081 hours of sun a year', s:'chiEN'}
  ],
  chart:{title:'Chihuahua city, census by census', src:'chiES', era:[1900,1930], pts:[[1895,19520],[1900,30405],[1910,39706],[1921,37078],[1930,45595],[1940,56805],[1950,87000],[1970,257027],[1990,516153],[2020,925762]], note:'1895 figure from the Dirección General de Estadística, as quoted on Wikipedia’s Chihuahua City page.'},
  day:[
   {i:'🚋', h:'Getting around', t:'Streetcars pulled by animals ran from 1884; they went electric in August 1908 and disappeared in early 1922. The first city buses began running in 1931.', s:'chiEN'},
   {i:'🚗', h:'First cars', t:'The first automobile arrived in the city in the second half of 1902.', s:'chiEN'},
   {i:'💧', h:'Water', t:'As the city grew, the Chuvíscar dam opened on 16 Sep 1908, holding five million cubic meters of water.', s:'chiEN'},
   {i:'🏭', h:'Work', t:'After the Revolution, from 1920, factories reopened: breweries, foundries, flour mills and textile mills. Until the 1970s the city was largely a trading post for cattle and farm goods.', s:'chiEN'},
   {i:'📻', h:'Radio and movies', t:'The city’s first radio-telephone station was installed in December 1923, and homes began putting in radio sets, called “radiolas.” In November 1929 the Cine Alcázar showed the city’s first talking picture, “The Jazz Singer.”', s:'chiEN'}
  ],
  events:[
   {y:'20 Nov 1910', t:'The Mexican Revolution began. Chihuahua was at its center: in 1911 the city was held by Pascual Orozco’s rebels.', who:'Natalia was 7. Bruno was 8.', s:['rev','chiEN']},
   {y:'Dec 1913', t:'Pancho Villa arrived and took over as provisional governor of the state; the city was at times the base of his División del Norte.', who:'Natalia was 10.', s:'chiEN'},
   {y:'1918–1920', t:'The great flu pandemic. Its third wave, in 1919, hit Mexico especially hard, and another wave came in February–March 1920.', who:'Natalia was 15 to 17.', s:'flu'},
   {y:'Oct 1931', t:'The year the first buses ran, Chihuahua had 45,595 people.', who:'Bruno and Natalia, both 28, married here on 3 Oct 1931.', s:'chiEN'}
  ],
  tn:{place:'The cathedral on the Plaza de Armas',
   then:{f:'chihuahua-cathedral-1880s.jpg', y:'1882–1891', by:'William Henry Jackson · Boston Public Library', lic:'Public domain', url:CM('The_cathedral,_Chihuahua,_Mexico_-_DPLA_-_509038ebc7563e438491319f4e0153e5.jpg')},
   now:{f:'chihuahua-cathedral-2015.jpg', y:'2015', by:'Comisión Mexicana de Filmaciones', lic:'CC BY-SA 2.0', licUrl:'https://creativecommons.org/licenses/by-sa/2.0/', url:CM('Catedral_de_Chihuahua,_Plaza_de_las_Armas,_Chihuahua-_Chihuahua_cathedral_(24256572941).jpg')}},
  movePhoto:true
 },

 torreon:{
  glance:[
   {i:'👥', k:'Then', v:'75,796', sub:'people in 1940, a year after the family’s first record here', s:'torES'},
   {i:'🏙️', k:'Today', v:'720,848', sub:'people, 2020 census', s:'torES'},
   {i:'⛰️', k:'Elevation', v:'1,120 m', sub:'3,670 ft, “low for the Mexican interior”', s:'torEN'},
   {i:'🌵', k:'Climate', v:'Desert', sub:'hot days, cool nights, little rain', s:'torEN'}
  ],
  chart:{title:'Torreón, census by census', src:'torES', era:[1940,1990], pts:[[1892,200],[1900,13845],[1910,34271],[1921,50902],[1930,66001],[1940,75796],[1950,128971],[1960,179901],[1970,223104],[1980,328086],[1990,439436],[2020,720848]], note:'1892 is an estimate (“about 200”) from the English Wikipedia page; the rest are census figures.'},
  day:[
   {i:'🌱', h:'Work', t:'Cotton made Torreón. Irrigated cotton fields surrounded the city, and by the mid-1900s it had also become an industrial city of textiles, clothing and metals.', s:'torEN'},
   {i:'🥛', h:'Milk', t:'The dairy company Lala was founded in Torreón in 1949. Today the Laguna region makes about 14% of Mexico’s milk.', s:['lala','laguna']},
   {i:'🌮', h:'Food', t:'Carne asada, discada, gorditas, and the long “pan francés” baked in brick ovens over mesquite wood. Menudo is the classic Sunday breakfast, sold at the old Mercado Juárez.', s:'torES'},
   {i:'🎡', h:'Fiestas', t:'The first Cotton Fair was held in 1925; it is still held every September as the Cotton and Grape Fair.', s:['torES','torEN']},
   {i:'🎭', h:'Going out', t:'The Teatro Isauro Martínez opened in 1930. In 1941 the Bosque Venustiano Carranza park was planted with about 18,000 trees.', s:'torES'},
   {i:'🚂', h:'Travel', t:'The city was born around its railroad junction: tracks reached the Rancho de Torreón in 1883 and the first international train in 1888. A new central bus station opened in 1988.', s:'torES'}
  ],
  events:[
   {y:'1936', t:'President Lázaro Cárdenas’s land reform broke up big cotton estates in La Laguna and created ejidos for farm workers.', who:'Bruno was about 34. The family’s first Torreón record is from 1939.', s:'cardenas'},
   {y:'Jan 1947', t:'The first snowfall in the city’s recorded history.', who:'Bruno was 44, Natalia about 44.', s:'torES'},
   {y:'11 Jan 1967', t:'Snow again, after 20 years without it.', who:'Bruno was 64, Natalia 64.', s:'torES'}
  ],
  tn:{place:'Downtown Torreón (not the same spot)',
   then:{f:'torreon-street-1910.jpg', y:'about 1910', by:'Unknown photographer · Library of Congress', lic:'Public domain', url:CM('Street_in_Torreon,_(Mexico)_LCCN2003688900.jpg'), cap:'A street'},
   now:{f:'torreon-plaza-de-armas-2022.jpg', y:'2022', by:'México en Fotos, A.C.', lic:'CC BY-SA 2.0', licUrl:'https://creativecommons.org/licenses/by-sa/2.0/', url:CM('Plaza_de_Armas_de_Torreón.jpg'), cap:'The Plaza de Armas from above'}},
  movePhoto:true
 },

 papasquiaro:{
  glance:[
   {i:'👥', k:'Then', v:'6,000+', sub:'people in the town in 1889', s:'mono1889'},
   {i:'🏙️', k:'Today', v:'30,063', sub:'people in the town in 2020; 49,207 in the municipality', s:'papMun'},
   {i:'⛰️', k:'Elevation', v:'1,750 m', sub:'5,742 ft, on the Sierra Madre slopes', s:'papES'},
   {i:'🌲', k:'Land', v:'≈80% forest', sub:'of the municipality · cold semi-arid climate', s:['papINAFED','papES']}
  ],
  noEra:'We couldn’t find a reliable population figure for 1940; the closest is an 1889 description of the district.',
  dayNote:'“Work” and “School” come from that 1889 description. The food and fiestas are long-standing traditions recorded by INAFED, not a record of 1940 itself.',
  day:[
   {i:'🌽', h:'Work', t:'In 1889 most people farmed, above all corn, beans and wheat, followed by trade and cattle. Others mined, drove mule trains, cut timber, and made panocha (raw cane sugar), candles and soap. The district had about 23,150 head of cattle.', s:'mono1889'},
   {i:'📚', h:'School', t:'In 1889 the whole district had 22 schools, with about 671 children attending on an average day. Only about 100 of them were girls.', s:'mono1889'},
   {i:'🐴', h:'Travel', t:'The mail coach to Santiago Papasquiaro, photographed in January 1900, was pulled by a team of six animals (see the photo below).', s:'photo'},
   {i:'🌶️', h:'Food', t:'The dishes the town is known for are chile pasado, chile verde con carne, and chiles rellenos.', s:'papINAFED'},
   {i:'🎉', h:'Fiestas', t:'A yearly fair from 15 to 25 July, with the feast of the Señor del Santo Entierro on 22 July, and dances in Holy Week and December.', s:'papINAFED'},
   {i:'✈️', h:'Leaving', t:'Many people from the municipality have emigrated to the United States, and many of them live in the Chicago area.', s:'arqui'}
  ],
  events:[
   {y:'21 Apr 1911', t:'During the Revolution, the brothers Domingo and Mariano Arrieta took Santiago Papasquiaro by force.', who:'About eight years before Juan was born.', s:'papINAFED'},
   {y:'29 Sep 1926', t:'A Cristero uprising broke out in the state of Durango, led by Trinidad Mora.', who:'Juan was about 7.', s:'cristero'},
   {y:'5 Oct 1940', t:'Silvestre Revueltas, the composer born in this town in 1899, died.', who:'The same year Juan married María del Refugio here.', s:'papES'}
  ]
 },

 canadas:{
  glance:[
   {i:'🏘️', k:'Town, 1990', v:'2,374', sub:'people in the town (cabecera)', s:'canINAFED'},
   {i:'🏙️', k:'Town today', v:'3,024', sub:'people in 2020; 4,388 in the whole municipality', s:'canES'},
   {i:'⛰️', k:'Elevation', v:'1,850 m', sub:'6,070 ft, in the highlands', s:'canEN'},
   {i:'🌤️', k:'Climate', v:'19 °C', sub:'yearly average · semi-dry, rain in June–July', s:'canEN'}
  ],
  chart:{title:'The town of Cañadas, census by census', src:'canES', era:[], pts:[[1990,2374],[1995,2405],[2000,2358],[2005,2483],[2010,2625],[2020,3024]], note:'1990 and 1995 from INAFED; 2000–2020 from INEGI via Spanish Wikipedia. We couldn’t find a reliable figure for the 1900s–1940s.'},
  day:[
   {i:'🐄', h:'Work', t:'Most of the land is for livestock: about 32,600 hectares for cattle against 8,300 for crops. Livestock and dairy are central to Los Altos.', s:['canEN','altos']},
   {i:'🐎', h:'Charros', t:'Los Altos has one of Jalisco’s strongest charro traditions, the horsemanship behind the charreada.', s:'altos'},
   {i:'🕯️', h:'La Candelaria', t:'The big fiesta runs 24 Jan–5 Feb: charreadas, cockfights, band music and fireworks. On 1 Feb the town welcomes home its “hijos ausentes” with a dance; on 2 Feb pilgrims arrive with candles and flowers.', s:'canINAFED'},
   {i:'🍲', h:'Food', t:'Pozole, jocoque, fish cooked on a mezcal-agave leaf, and milk sweets, above all cajeta. To drink: tequila and mezcal.', s:'canINAFED'},
   {i:'⛪', h:'Faith', t:'The region is deeply Catholic; in 2020, 96% of the town’s people were Catholic.', s:'canES'},
   {i:'✈️', h:'Leaving and sending home', t:'The municipality has lost people to emigration, mostly to the United States, and money sent home is one of its main incomes.', s:'canEN'}
  ],
  events:[
   {y:'Feb 1920', t:'The great flu pandemic hit Mexico again: a fourth wave came in February–March 1920.', who:'Ranulfo was born here on 16 Feb 1920.', s:'flu'},
   {y:'1926–1929', t:'The Cristero War. Los Altos was one of its main battlegrounds, and churches in and around Jalisco were closed for two years. About 90,000 people died in all.', who:'Ranulfo was 6 to 9, Clemencia 4 to 7. Pedro and Petra were in their thirties with a young family.', s:'cristero'},
   {y:'Mar 1929', t:'Cañadas was renamed Villa Obregón, after President Álvaro Obregón, killed the year before.', who:'Clemencia was 7.', s:'canEN'},
   {y:'1942–1964', t:'The Bracero Program offered 4.6 million U.S. work contracts to Mexican laborers. Jalisco was among the states that sent large numbers of workers.', who:'Ranulfo was 22 to 44.', s:'bracero'}
  ]
 },

 chicago:{
  glance:[
   {i:'👥', k:'Then', v:'2,783,726', sub:'people in 1990', s:'chicago'},
   {i:'🏙️', k:'Today', v:'2,746,388', sub:'people, 2020 census', s:'chicago'},
   {i:'📏', k:'Elevation', v:'182 m', sub:'597 ft, on Lake Michigan', s:'chicago'},
   {i:'❄️', k:'Climate', v:'Four seasons', sub:'hot summers, cold winters', s:'chicago'}
  ],
  chart:{title:'Chicago, U.S. Census', src:'chicago', era:[1990,1990], pts:[[1900,1698575],[1920,2701705],[1940,3396808],[1950,3620962],[1960,3550404],[1970,3366957],[1980,3005072],[1990,2783726],[2000,2896016],[2010,2695598],[2020,2746388]], note:'Chicago peaked at 3.6 million in 1950.'},
  day:[
   {i:'🏘️', h:'Neighborhoods', t:'In the 1990s, about a third of the Chicago area’s Mexican-origin people lived in Pilsen, and 40% of them had come there straight from Mexico.', s:'mexchi'},
   {i:'🏭', h:'Work', t:'South Chicago had long been a steel-mill district. The giant U.S. Steel South Works, which once employed about 20,000 people, announced its closing on 9 Jan 1992.', s:'sworks'},
   {i:'🛍️', h:'26th Street', t:'Little Village’s 26th Street is the heart of Mexican shopping in Chicago, and every September it hosts the city’s biggest Hispanic parade for Mexican Independence Day.', s:'lv'},
   {i:'📈', h:'A growing community', t:'Between the 1990 and 2000 censuses, Chicago’s Mexican population grew by 50%.', s:'mexchi'}
  ],
  events:[
   {y:'Jan 1992', t:'U.S. Steel announced the closing of South Works.', who:'Carlos Rincón Beltrán was 59.', s:'sworks'},
   {y:'July 1995', t:'A five-day heat wave killed 739 people in Chicago, most of them elderly residents without air conditioning.', who:'Carlos was 62.', s:'heat'}
  ],
  eventsNote:'We don’t know when Carlos came to Chicago; these are the city’s big moments in the years before he died there.'
 },

 orange:{
  glance:[
   {i:'👥', k:'1890', v:'13,589', sub:'people in the county’s first census', s:'oc'},
   {i:'🏙️', k:'Today', v:'3,186,989', sub:'people, 2020 census', s:'oc'},
   {i:'⛰️', k:'Highest point', v:'5,689 ft', sub:'Santiago Peak', s:'oc'},
   {i:'🍊', k:'Climate', v:'Mild', sub:'Mediterranean; the county was named for the orange', s:'oc'}
  ],
  chart:{title:'Orange County, U.S. Census', src:'oc', era:[2020,2020], pts:[[1890,13589],[1910,34436],[1930,118674],[1950,216224],[1960,703925],[1970,1420386],[1980,1932709],[1990,2410556],[2000,2846289],[2010,3010232],[2020,3186989]], note:'The county more than tripled in the 1950s as suburbs replaced the groves.'}
 }
};
window.LIFE_SRC = SRC;
})();

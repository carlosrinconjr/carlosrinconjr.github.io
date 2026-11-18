/* "Where we come from / De dónde venimos" chapters.
   History text: summarized only from the linked sources (Wikipedia, checked 17 Nov 2026).
   Photos: Wikimedia Commons, license checked on each file page. Illustrations: generated, not real photos.
   "family" entries use only facts from findings-log.md / tree.md, with their labels. Living people are not tied to places here. */
(function(){
const V='verified', L='likely', S='story';
const WP = t => 'https://en.wikipedia.org/wiki/' + t;
const CM = t => 'https://commons.wikimedia.org/wiki/File:' + t;
window.CHAPTERS = [
 {k:'larioja', n:'La Rioja, Spain', es:'La Rioja, España', era:'Family story · around 1850', l:S,
  illus:'illus-larioja.jpg',
  history:[
   'La Rioja is a small region in northern Spain. It covers part of the valley of the Ebro River, with the Iberian mountains to the south, and its capital is Logroño.',
   'For centuries the area was split between the provinces of Burgos and Soria. In 1833 the province of Logroño was created; it was renamed La Rioja in 1980.',
   'The region is best known for its wine. In 1852 Luciano Murrieta made the first fine Rioja wine there, after learning the method in Bordeaux.'
  ],
  sources:[['La Rioja (Spain)',WP('La_Rioja_(Spain)')],['Rioja (wine)',WP('Rioja_(wine)')]],
  photos:[{f:'logrono-calle-portales-1900s.jpg', cap:'Calle Portales and the cathedral towers, Logroño, 1900–1910', by:'Alberto Muro', src:'Logroño municipal photo archive, via Wikimedia Commons', lic:'Public domain', url:CM('Vista_de_la_calle_portales.jpg')}],
  family:[{who:'genaro', t:'The family says he came from La Rioja to Zacatecas around 1850. No record found so far mentions Spain or La Rioja, and one unsourced family tree places his christening in Zacatecas around 1849, so it may have been an earlier generation.', l:S}],
  note:'This chapter is a family story. We haven’t found a record that ties the Rincóns to La Rioja yet.'},

 {k:'zacatecas', n:'Zacatecas', es:'Zacatecas, Zacatecas', era:'1879–1902 · the silver city', l:V,
  illus:'illus-zacatecas.jpg',
  history:[
   'Zacatecas began in the mid-1500s as a Spanish mining camp at the foot of the Cerro de la Bufa, after rich silver deposits were found in its hills. It quickly became one of the most important mining cities in New Spain.',
   'Its pink-stone cathedral was built mainly between 1731 and 1752, although its north tower wasn’t finished until 1904.',
   'For most of the 1800s, liberals and conservatives fought for control of the city. The first railroad linking Zacatecas with Guadalupe was finished in 1880.',
   'In 1914, during the Mexican Revolution, Francisco Villa’s army took the city in the Battle of Zacatecas. Today its colonial center is a World Heritage Site.'
  ],
  sources:[['Zacatecas City',WP('Zacatecas_City')],['Zacatecas Cathedral',WP('Zacatecas_Cathedral')]],
  photos:[
   {f:'zacatecas-panorama-1885.jpg', cap:'Panorama of Zacatecas, about 1885', by:'William Henry Jackson', src:'Library of Congress (cph.3b09554), via Wikimedia Commons', lic:'Public domain', url:CM('William_Henry_Jackson,_Zacatecas,_Mexico,_ca._1885.jpg')},
   {f:'zacatecas-cathedral-1880.jpg', cap:'Zacatecas Cathedral, 1880', by:'Unknown photographer', src:'INAH Mediateca, via Wikimedia Commons', lic:'Public domain (PD-old-100)', url:CM('Zacatecas_Cathedral_in_1880.jpg')}
  ],
  family:[
   {who:'genaro', t:'Named as the father on his children’s baptisms here (1879, 1881, 1883) and on Marcos’s 1882 death. A christening here about 1849 comes only from an unsourced family tree.', l:V},
   {who:'sacramento', t:'Named as Juan’s mother on his 1879 baptism here.', l:V},
   {who:'juanrb', t:'Baptized 29 May 1879 at Nuestra Señora de Guadalupe, Zacatecas.', l:V},
   {who:'juana', t:'Married Juan Rincón in the church on 28 Jun 1897, Jesús parish, Zacatecas.', l:L},
   {who:'bruno', t:'Born here 6 Oct 1902.', l:L}
  ]},

 {k:'chihuahua', n:'Chihuahua', es:'Chihuahua, Chihuahua', era:'1903–1932 · the northern capital', l:V,
  illus:'illus-chihuahua.jpg',
  famPhotos:['bruno','crb'],
  history:[
   'Chihuahua grew out of a silver-mining settlement. In 1718 it became the villa of San Felipe el Real de Chihuahua, and a tax on silver from the Santa Eulalia mines paid for its parish church, today’s cathedral, built between 1725 and 1792.',
   'In 1882 the Mexican Central Railway opened its line from Ciudad Juárez to Chihuahua. During the presidency of Porfirio Díaz the city grew explosively.',
   'During the Mexican Revolution (1910–1917), Chihuahua was at times the base of Pancho Villa’s División del Norte. His former house is now the Historical Museum of the Mexican Revolution.'
  ],
  sources:[['Chihuahua City',WP('Chihuahua_City')],['Chihuahua Cathedral',WP('Chihuahua_Cathedral')]],
  photos:[{f:'chihuahua-cathedral-1880s.jpg', cap:'The cathedral, Chihuahua, 1882–1891', by:'William Henry Jackson / W.H. Jackson Photograph and Publishing Co.', src:'Boston Public Library via Digital Public Library of America, on Wikimedia Commons', lic:'Public domain', url:CM('The_cathedral,_Chihuahua,_Mexico_-_DPLA_-_509038ebc7563e438491319f4e0153e5.jpg')}],
  family:[
   {who:'natalia', t:'Born in Chihuahua 3 Jan 1903.', l:L},
   {who:'bruno', t:'Married Natalia Beltrán on 3 Oct 1931 in Chihuahua city.', l:V},
   {who:'joseluis', t:'Named as “Luís Beltrán,” Natalia’s father, on that marriage, with her mother Luz Lozano.', l:V},
   {who:'crb', t:'Born in Chihuahua 11 Aug 1932.', l:V, n:'index'}
  ]},

 {k:'torreon', n:'Torreón, Coahuila', es:'Torreón, Coahuila', era:'1939–1990 · railroads and cotton', l:V,
  illus:'illus-torreon.jpg',
  history:[
   'Torreón was a tiny place until the 1890s. It grew around a tower (torreón) built to watch the floods of the Nazas River, together with a new railroad linking it to El Paso on the U.S. border.',
   'With irrigation, the surrounding Laguna region was developed for large-scale cotton farming. The town grew from about 200 people in 1892 to 34,000 in 1910, and became a city in 1907.',
   'After the fighting of the Revolution, the Laguna was part of President Lázaro Cárdenas’s land reform. Every September, Torreón still holds its Cotton and Grape Fair.'
  ],
  sources:[['Torreón',WP('Torreón')],['Laguna Region',WP('Laguna_Region')]],
  photos:[
   {f:'torreon-street-1910.jpg', cap:'A street in Torreón, about 1910', by:'Unknown photographer', src:'Library of Congress (LCCN 2003688900), via Wikimedia Commons', lic:'Public domain', url:CM('Street_in_Torreon,_(Mexico)_LCCN2003688900.jpg')},
   {f:'torreon-nazas-flood-1910.jpg', cap:'The Nazas River in flood at Torreón, 1910 (postcard)', by:'Unknown author', src:'Wikimedia Commons', lic:'Public domain (PD-US-expired)', url:CM('Crecida_del_Rio_Nazas_en_Torreón,_Coahuila.jpg')}
  ],
  family:[
   {who:'bruno', t:'Torreón civil records show the deaths of two of his and Natalia’s children: baby Juan (20 Oct 1939) and Esperanza, age 20 (8 Jun 1942).', l:V, n:'index'},
   {who:'bruno', t:'Died here 21 Jan 1989, age 85.', l:V, n:'index'},
   {who:'natalia', t:'Died here 3 Aug 1990.', l:L}
  ]},

 {k:'papasquiaro', n:'Santiago Papasquiaro, Durango', es:'Santiago Papasquiaro, Durango', era:'1940 · the Ramírez family', l:L,
  illus:'illus-papasquiaro.jpg',
  history:[
   'Santiago Papasquiaro sits in a valley on the eastern slopes of the Sierra Madre Occidental in Durango, about 1,750 meters above sea level.',
   'Its story goes back to Franciscan and Jesuit missions of the 1500s; a second founding was made in Holy Week of 1597, and its church of the apostle Santiago was finished between 1608 and 1616.',
   'Farming, forestry, and above all cattle ranching have long been the base of the local economy, and the town is known for its pinole. It’s also the birthplace of the Revueltas family of artists, including the composer Silvestre Revueltas (born 1899).'
  ],
  sources:[['Santiago Papasquiaro (English)',WP('Santiago_Papasquiaro')],['Santiago Papasquiaro (Spanish)','https://es.wikipedia.org/wiki/Santiago_Papasquiaro']],
  photos:[{f:'papasquiaro-mail-coaches-1900.jpg', cap:'Mail coaches bound for Santiago Papasquiaro, January 1900', by:'Palacio Postal (Palacio de Correos de México)', src:'Wikimedia Commons', lic:'CC BY 4.0', licUrl:'https://creativecommons.org/licenses/by/4.0/', url:CM('Coches-correos_a_Santiago_Papasquiaro,_Durango,_México._Enero_de_1900.jpg')}],
  family:[
   {who:'jramirez', t:'Married María del Refugio Díaz here in 1940.', l:L},
   {who:'blas', t:'Named with his wife, Luisa Barraza, as the groom’s parents on that 1940 marriage, and remembered by the family.', l:L}
  ]},

 {k:'canadas', n:'Cañadas de Obregón, Jalisco', es:'Cañadas de Obregón, Jalisco', era:'1884–1974 · Los Altos de Jalisco', l:V,
  illus:'illus-canadas.jpg',
  history:[
   'Cañadas de Obregón is a small town in Los Altos de Jalisco, the highlands of eastern Jalisco, about 1,850 meters above sea level. It became a municipality in 1903, was renamed Villa Obregón in 1929 in memory of President Álvaro Obregón, and took the name Cañadas de Obregón in 1980.',
   'Los Altos is known for ranching and dairy, charrería, tequila, and a deeply Catholic culture. The region was one of the main scenes of the Cristero War (1926–1929).',
   'The town’s landmarks include the parishes of Nuestra Señora de la Luz and Nuestra Señora de los Remedios. Like many towns in the region, it has lost people to emigration, mostly to the United States.'
  ],
  sources:[['Cañadas de Obregón',WP('Cañadas_de_Obregón')],['Cañadas de Obregón (Spanish)','https://es.wikipedia.org/wiki/Cañadas_de_Obregón'],['Los Altos de Jalisco',WP('Los_Altos_de_Jalisco')],['Cristero War',WP('Cristero_War')]],
  photos:[
   {f:'canadas-church-tower-2023.jpg', cap:'Church tower in Cañadas de Obregón, 2023', by:'José González Peña', src:'Wikimedia Commons', lic:'CC BY-SA 4.0', licUrl:'https://creativecommons.org/licenses/by-sa/4.0/', url:CM('Cañadas_de_Obregón_(20230325)1.jpg')},
   {f:'canadas-church-side-2023.jpg', cap:'Church in Cañadas de Obregón, 2023', by:'José González Peña', src:'Wikimedia Commons', lic:'CC BY-SA 4.0', licUrl:'https://creativecommons.org/licenses/by-sa/4.0/', url:CM('Cañadas_de_Obregón_(20230325)2.jpg')}
  ],
  family:[
   {who:'jacinto', t:'Born 24 Jul 1887 in nearby Jalostotitlán. Married Josefa de la Torre in 1916, in a civil ceremony at Cañadas and a church wedding at San Miguel el Alto.', l:L},
   {who:'petra', t:'Born in Cañadas 23 Feb 1892.', l:L},
   {who:'ranulfo', t:'Born in Cañadas 16 Feb 1920.', l:V},
   {who:'clemencia', t:'Born in Cañadas 26 Dec 1921.', l:V},
   {who:'pedro', t:'Died here 1 Jan 1937.', l:L},
   {who:'ranulfo', t:'Married Clemencia here on 29 May 1946. Their baby daughter Luz María died here on 19 Jun 1947.', l:V},
   {who:'josefa', t:'Died here 20 Oct 1974.', l:L}
  ],
  noteL:'story', note:'Amparo’s link to Ranulfo and Clemencia is family-confirmed; no record naming her has been found yet.'},

 {k:'chicago', n:'Chicago, Illinois', es:'Chicago, Illinois', era:'1997', l:V,
  illus:'illus-chicago.jpg',
  history:[
   'Chicago’s first big wave of Mexican immigrants came in the mid-to-late 1910s. Most were men from Texas, Guanajuato, Jalisco, and Michoacán working semiskilled and unskilled jobs, and after the 1920s many in Back of the Yards worked in meatpacking.',
   'Pilsen, once a gateway for German, Czech, and other European immigrants, saw Mexican families arrive in the 1950s. Today Pilsen, Little Village, and South Chicago are among the city’s Mexican neighborhoods.',
   'By 1990 Cook County had 786,423 residents of Mexican origin, the largest Mexican community in the United States outside the Southwest.'
  ],
  sources:[['Mexicans in Chicago',WP('Mexicans_in_Chicago')]],
  photos:[{f:'chicago-pilsen-2010.jpg', cap:'Pilsen Historic District, Chicago, 2010 (a historic Mexican neighborhood; not a place tied to our family by any record)', by:'Andrew Jameson', src:'Wikimedia Commons', lic:'CC BY-SA 3.0', licUrl:'https://creativecommons.org/licenses/by-sa/3.0/', url:CM('Pilsen_Historic_District_Chicago_IL.jpg')}],
  family:[{who:'crb', t:'Died in Chicago on 11 Oct 1997, age 65.', l:V, n:'index'}]},

 {k:'orange', n:'Orange County, California', es:'Condado de Orange, California', era:'Today', l:S,
  illus:'illus-orange.jpg',
  history:[
   'The Acjachemen people lived here for thousands of years. Under Spanish and then Mexican rule, large land grants such as Rancho Santiago de Santa Ana (granted in 1810) were used for cattle ranching.',
   'Orange County separated from Los Angeles County in 1889, with Santa Ana as its seat.',
   'Farming, especially citrus, dominated the county until the mid-1900s. By the 1950s, suburbs were replacing the groves.'
  ],
  sources:[['Orange County, California',WP('Orange_County,_California')]],
  photos:[{f:'santa-ana-orange-pickers-1900.jpg', cap:'Orange pickers in a grove, Santa Ana, about 1900', by:'Unknown photographer', src:'California Historical Society / USC Digital Library, via Wikimedia Commons', lic:'Public domain', url:CM('Orange_fruit_pickers,_Santa_Ana,_ca.1900_(CHS-154).jpg')}],
  family:[
   {who:'carlosjr', t:'With Diana. Home today.', l:null, living:true},
   {who:'baby', t:'Carlos Jr. and Diana’s baby girl, the newest branch, arrives in December 2026.', l:null, living:true}
  ]}
];
})();

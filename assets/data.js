/* Family data for the Familia Rincón family-history site (SAMPLE). Relationships are from Carlos Jr.'s point of view.
   Source: family research notes, Nov 2026.
   Labels: "verified" = a primary record (or its index) names this; "likely" = shared tree or secondary source;
   "story" = told by family, not yet confirmed. Living people: name and relationship only. */
(function(){
const FS = id => 'https://www.familysearch.org/ark:/61903/1:1:' + id;
const V='verified', L='likely', S='story';

const people = {
  baby:{name:'Baby girl Rincón', living:true, gen:0, sex:'f', side:'both', rel:'Daughter · Hija', note:'Coming December 2026, the newest branch of the family.', parents:['carlosjr','diana']},
  carlosjr:{name:'Carlos Rincon Jr.', living:true, gen:1, sex:'m', side:'dad', rel:'Starting point', parents:['carlossr','amparo']},
  diana:{name:'Diana', living:true, gen:1, sex:'f', side:'mom', rel:'Wife · Esposa', parents:[]},
  /* ---------- Carlos Jr.’s brothers and sisters and their families (all living: names only) ---------- */
  dorima:{name:'Dorima Hamilton', living:true, today:true, gen:1, sex:'f', side:'dad', rel:'Sister · Hermana', note:'Born Rincon; Hamilton is her married name.', src:'Family story · from Carlos, Nov 2026', parents:['carlossr','amparo']},
  jasonh:{name:'Jason J. Hamilton', living:true, today:true, gen:1, sex:'m', side:'dad', rel:'Brother-in-law · Cuñado', note:'Dorima’s husband.', src:'Family story · from Carlos, Nov 2026', parents:[]},
  penelope:{name:'Penelope Rose Hamilton', living:true, today:true, gen:0, sex:'f', side:'dad', rel:'Niece · Sobrina', note:'Dorima and Jason’s daughter.', src:'Family story · from Carlos, Nov 2026', parents:['dorima','jasonh']},
  alexander:{name:'Alexander Hamilton', living:true, today:true, gen:0, sex:'m', side:'dad', rel:'Nephew · Sobrino', note:'Dorima and Jason’s son.', src:'Family story · from Carlos, Nov 2026', parents:['dorima','jasonh']},
  vanessa:{name:'Vanessa Rincon', living:true, today:true, gen:1, sex:'f', side:'dad', rel:'Sister-in-law · Cuñada', note:'Joshua’s wife, born Salcedo.', src:'Family story · from Carlos, Nov 2026', parents:[]},
  elijah:{name:'Elijah Rincon', living:true, today:true, gen:0, sex:'m', side:'dad', rel:'Nephew · Sobrino', note:'Joshua and Vanessa’s son.', src:'Family story · from Carlos, Nov 2026', parents:['joshua','vanessa']},
  kirsten:{name:'Kirsten “Key” Rincon', living:true, today:true, gen:1, sex:'f', side:'dad', rel:'Sister-in-law · Cuñada', note:'Sammy’s wife.', src:'Family story · from Carlos, Nov 2026', parents:[]},
  joshua:{name:'Joshua Rincon', living:true, today:true, gen:1, sex:'m', side:'dad', rel:'Brother · Hermano', src:'Family story · from Carlos, Nov 2026', parents:['carlossr','amparo']},
  daniel:{name:'Daniel Samuel “Sammy” Rincon', living:true, today:true, gen:1, sex:'m', side:'dad', rel:'Brother · Hermano', src:'Family story · from Carlos, Nov 2026', parents:['carlossr','amparo']},

  /* ---------- Dad's father's line (Rincón) ---------- */
  carlossr:{name:'Carlos Rincon', living:true, gen:2, sex:'m', side:'dad', line:'rincon', parents:['crb','aurora']},
  crb:{link:'Link to son Carlos: family-confirmed, no record', name:'Carlos Rincón Beltrán', gen:3, sex:'m', side:'dad', line:'rincon', years:'1932–1997', label:V,
    places:['Chihuahua, Chihuahua, Mexico','Chicago, Illinois, USA'],
    facts:[
      {t:'Born 11 Aug 1932 in Chihuahua, Mexico; birth registered 10 Oct 1932 in Chihuahua city.', l:V, n:'index'},
      {t:'His parents on the birth record: Carlos Rincón and Natalia Beltrán.', l:V, n:'index'},
      {t:'Died 11 Oct 1997 in Chicago, Illinois, age 65.', l:V, n:'index'},
      {t:'One of about eight children, per the FamilySearch Family Tree.', l:L},
      {t:'Several of his brothers and sisters died young in Torreón, including baby Juan (1939) and Esperanza, age 20 (1942).', l:V, n:'index'},
      {t:'Father of Carlos Rincon (Carlos Jr.’s dad). This link is family-confirmed; no record of it has been found yet.', l:S},
      {t:'Married Aurora Ramírez. Their marriage record has not been found yet.', l:S}
    ],
    story:"Carlos Jr.’s dad remembers that his father died in Chicago, and the Cook County death record agrees.",
    records:[
      {t:'Birth registration, Chihuahua, 1932', l:V, n:'index', url:FS('QGCK-JKB2'), img:'1932-birth-carlos-rincon-beltran-index-screenshot.jpg'},
      {t:'Death, Cook County, Illinois, 1997', l:V, n:'index', url:FS('6Z3J-HMR8'), img:'1997-death-carlos-rincon-cook-county-index-screenshot.jpg'}
    ], parents:['bruno','natalia']},
  aurora:{name:'Aurora Ramírez', living:true, gen:3, sex:'f', side:'dad', line:'rincon', privateNote:'Kept private until we know more.', parents:['jramirez','refugio']},

  bruno:{name:'Bruno Carlos Rincón Barbosa', gen:4, sex:'m', side:'dad', line:'rincon', years:'about 1903–1989', label:V,
    places:['Zacatecas, Zacatecas','Chihuahua, Chihuahua','Torreón, Coahuila'],
    facts:[
      {t:'Born 6 Oct 1902 in Zacatecas, Zacatecas, per a family tree; no birth record found yet.', l:L, n:'family tree'},
      {t:'Age 85 on his January 1989 death record, so born about 1903.', l:V, n:'index'},
      {t:'Married Natalia Beltrán on 3 Oct 1931 in Chihuahua, Chihuahua. The record names his parents as Juan Rincón and Juana Barbosa.', l:V},
      {t:'Died 21 Jan 1989 in Torreón, Coahuila, age 85. (One family tree says 20 Jun 1989; the civil record date is used here.)', l:V, n:'index'},
      {t:'His marriage record calls him simply Carlos Rincón.', l:V}
    ],
    story:"Carlos Jr.’s dad remembered his grandparents as Carlos Rincón and Natalia Beltrán, and his great-grandparents as Juan Rincón and Juana. The 1931 marriage record proved him right.",
    records:[
      {t:'Civil marriage, Chihuahua, 1931', l:V, url:FS('QGZM-R2K4'), img:'1931-marriage-carlos-rincon-natalia-beltran.jpg'},
      {t:'Civil death, Torreón, 1989', l:V, n:'index', url:FS('QV5S-3K7F'), img:'1989-death-carlos-bruno-rincon-barbosa.jpg'}
    ], parents:['juanrb','juana']},
  natalia:{name:'Natalia Beltrán Lozano', gen:4, sex:'f', side:'dad', line:'rincon', years:'Married 1931 · Chihuahua', label:V,
    places:['Chihuahua, Chihuahua','Torreón, Coahuila'],
    facts:[
      {t:'Married Bruno Carlos Rincón on 3 Oct 1931 in Chihuahua, age 25. Her parents are named as Luís Beltrán and Luz Lozano.', l:V},
      {t:'Born 3 Jan 1903 in Chihuahua, per a family tree. (Her age of 25 on the 1931 marriage points to about 1906.)', l:L, n:'family tree'},
      {t:'Died 3 Aug 1990 in Torreón, Coahuila, per a family tree; no death record found yet.', l:L, n:'family tree'}
    ],
    records:[{t:'Civil marriage, Chihuahua, 1931', l:V, url:FS('QGZM-R2K4'), img:'1931-marriage-carlos-rincon-natalia-beltran.jpg'}],
    parents:['joseluis','luz']},

  juanrb:{name:'Juan Rincón Barrón', gen:5, sex:'m', side:'dad', line:'rincon', years:'Baptized 1879', label:V,
    places:['Zacatecas, Zacatecas'],
    facts:[
      {t:'Baptized 29 May 1879 at Nuestra Señora de Guadalupe, Zacatecas. His parents: Genaro Rincón and Sacramento Barrón.', l:V},
      {t:'Church marriage to Juana Barbosa on 28 Jun 1897, Jesús parish, Zacatecas.', l:L},
      {t:'A family tree also lists a 1929 marriage in Chihuahua, probably the civil registration of the same couple.', l:L},
      {t:'Named as the father on his son Carlos’s 1931 marriage and 1989 death record.', l:V},
      {t:'Died in 1951, per a family tree; no death record found yet.', l:L, n:'family tree'},
      {t:'His little brother Marcos (baptized 1881, died 1882) and sister Ma. Agustina (baptized 1883) are on Zacatecas church records with the same parents.', l:V}
    ],
    story:"The Rincón family story says Juan’s father, Genaro, came from La Rioja, Spain. Juan’s baptism is the record that proves Genaro was really his dad.",
    records:[
      {t:'Baptism, Zacatecas, 1879', l:V, url:FS('6MDP-D4T2'), img:'1879-baptism-juan-rincon-barron.jpg'},
      {t:'Marriage papers with Juana Barbosa, Zacatecas, 1897', l:L, img:'1897-marriage-intent-juan-rincon-juana-barbosa.jpg'}
    ], parents:['genaro','sacramento']},
  juana:{name:'María Juana Barbosa García', gen:5, sex:'f', side:'dad', line:'rincon', years:'b. 1881', label:L,
    places:['Zacatecas, Zacatecas'],
    facts:[
      {t:'Named as Juana Barbosa on her son’s 1931 marriage, and as Juanita Barbosa on his 1989 death record.', l:V},
      {t:'Born in 1881.', l:L},
      {t:'Her parents: Macedonio Barbosa and Encarnación García.', l:L},
      {t:'Married Juan Rincón on 28 Jun 1897 in Zacatecas.', l:L}
    ],
    records:[{t:'Marriage papers with Juan Rincón, Zacatecas, 1897', l:L, img:'1897-marriage-intent-juan-rincon-juana-barbosa.jpg'}],
    parents:['macedonio','encarnacion']},
  joseluis:{name:'José Luis Beltrán González', gen:5, sex:'m', side:'dad', line:'rincon', years:'b. 1875', label:L,
    facts:[{t:'Named as Luís Beltrán, father of the bride, on the 1931 marriage.', l:V},{t:'Born 20 Jun 1875.', l:L}],
    records:[{t:'Civil marriage of his daughter Natalia, 1931', l:V, url:FS('QGZM-R2K4'), img:'1931-marriage-carlos-rincon-natalia-beltran.jpg'}], parents:[]},
  luz:{name:'María de la Luz Lozano Martínez', gen:5, sex:'f', side:'dad', line:'rincon', years:'b. 1881', label:L,
    facts:[{t:'Named as Luz Lozano, mother of the bride, on the 1931 marriage.', l:V},{t:'Born in 1881.', l:L}],
    records:[{t:'Civil marriage of her daughter Natalia, 1931', l:V, url:FS('QGZM-R2K4'), img:'1931-marriage-carlos-rincon-natalia-beltran.jpg'}], parents:[]},

  genaro:{name:'Genaro Rincón', gen:6, sex:'m', side:'dad', line:'rincon', years:'Living in Zacatecas 1879–1883', label:V,
    places:['La Rioja, Spain (family story)','Zacatecas, Zacatecas'],
    facts:[
      {t:'Named as the father on his children’s baptisms in Zacatecas: Juan (1879), Marcos (1881), and Ma. Agustina (1883), and on Marcos’s death in 1882. These records show him living in Zacatecas from 1879 to 1883.', l:V},
      {t:'His own birth date and place are unknown. One shared family tree gives a christening in Zacatecas about 1849, but it cites no record.', l:L, n:'unsourced family tree'},
      {t:'No record found so far mentions Spain or La Rioja. If he really was christened in Zacatecas, it may have been an earlier generation that crossed the ocean.', l:V, n:'records checked so far'},
      {t:'Came from La Rioja, Spain, to Zacatecas around 1850, the first Rincón in Mexico.', l:S}
    ],
    story:"Carlos Jr.’s dad tells it this way: Genaro de Rincón came over from La Rioja, Spain, around 1850, and he was the first of our Rincóns in Mexico.",
    records:[{t:'Baptism of his son Juan, Zacatecas, 1879', l:V, url:FS('6MDP-D4T2'), img:'1879-baptism-juan-rincon-barron.jpg'}], parents:[]},
  sacramento:{name:'Sacramento Barrón', gen:6, sex:'f', side:'dad', line:'rincon', years:'Living in Zacatecas 1879', label:V,
    places:['Zacatecas, Zacatecas'],
    facts:[{t:'Named as the mother on her son Juan’s 1879 baptism.', l:V},{t:'Her birth date is unknown. One family tree gives about 1861, without a source.', l:L, n:'unsourced family tree'}],
    records:[{t:'Baptism of her son Juan, Zacatecas, 1879', l:V, url:FS('6MDP-D4T2'), img:'1879-baptism-juan-rincon-barron.jpg'}], parents:[]},
  macedonio:{name:'Macedonio Barbosa', gen:6, sex:'m', side:'dad', line:'rincon', label:L,
    facts:[{t:'Father of Juana Barbosa.', l:L}], records:[], parents:[]},
  encarnacion:{name:'Encarnación García', gen:6, sex:'f', side:'dad', line:'rincon', label:L,
    facts:[{t:'Mother of Juana Barbosa.', l:L}], records:[], parents:[]},

  /* Aurora's parents (Ramírez / Díaz) */
  jramirez:{name:'Juan Ramírez', gen:4, sex:'m', side:'dad', line:'rincon', years:'b. about 1919', label:L,
    places:['Santiago Papasquiaro, Durango'],
    facts:[
      {t:'Married María del Refugio Díaz in 1940 in Santiago Papasquiaro, Durango.', l:L},
      {t:'Born about 1919. His parents on the marriage: Blas Ramírez and Luisa Barraza.', l:L},
      {t:'Named by Carlos Jr.’s dad as his mother Aurora’s father.', l:S}
    ],
    story:"Carlos Jr.’s dad named his mother’s parents as Juan Ramírez and María del Refugio Díaz, and he knew Blas and Luisa as her grandparents. The 1940 marriage record matches all four names.",
    records:[{t:'Marriage, Santiago Papasquiaro, 1940', l:L, url:FS('QGC8-ZRCV'), img:'1940-marriage-juan-ramirez-maria-refugio-diaz.jpg'}],
    parents:['blas','luisa']},
  refugio:{name:'María del Refugio Díaz', gen:4, sex:'f', side:'dad', line:'rincon', label:L,
    places:['Santiago Papasquiaro, Durango'],
    facts:[{t:'Married Juan Ramírez in 1940 in Santiago Papasquiaro, Durango.', l:L},{t:'Named by Carlos Jr.’s dad as his mother Aurora’s mother.', l:S}],
    records:[{t:'Marriage, Santiago Papasquiaro, 1940', l:L, url:FS('QGC8-ZRCV'), img:'1940-marriage-juan-ramirez-maria-refugio-diaz.jpg'}], parents:[]},
  blas:{name:'Blas Ramírez', gen:5, sex:'m', side:'dad', line:'rincon', label:L, places:['Durango'],
    facts:[{t:'Named as the groom’s father on the 1940 Ramírez–Díaz marriage.', l:L},{t:'Carlos Jr.’s dad knew him as his mother’s grandfather.', l:S}],
    records:[{t:'Marriage of his son Juan, 1940', l:L, url:FS('QGC8-ZRCV'), img:'1940-marriage-juan-ramirez-maria-refugio-diaz.jpg'}], parents:[]},
  luisa:{name:'Luisa Barraza', gen:5, sex:'f', side:'dad', line:'rincon', label:L, places:['Durango'],
    facts:[{t:'Named as the groom’s mother on the 1940 Ramírez–Díaz marriage.', l:L},{t:'Carlos Jr.’s dad knew her as his mother’s grandmother.', l:S}],
    records:[{t:'Marriage of her son Juan, 1940', l:L, url:FS('QGC8-ZRCV'), img:'1940-marriage-juan-ramirez-maria-refugio-diaz.jpg'}], parents:[]},

  /* ---------- Dad's mother's line (Jiménez / Muñoz) ---------- */
  amparo:{name:'Amparo Jiménez', living:true, gen:2, sex:'f', side:'dad', line:'jimenez', parents:['ranulfo','clemencia']},
  ranulfo:{link:'Link to Amparo: family-confirmed, no record', name:'Ranulfo Jiménez Loza', gen:3, sex:'m', side:'dad', line:'jimenez', years:'b. 1920', label:V,
    places:['Cañadas de Obregón, Jalisco'],
    facts:[
      {t:'Born 16 Feb 1920 in Cañadas de Obregón, Jalisco; registered 19 Feb 1920. Parents: Pedro Jiménez and Petra Loza.', l:V},
      {t:'Married Clemencia Muñoz on 29 May 1946 in Cañadas de Obregón, age 25.', l:V},
      {t:'Their daughters include Luz María, who died as a baby in 1947, and Rosa Elena (1958–2006).', l:V},
      {t:'Marked as deceased in the FamilySearch Family Tree.', l:L},
      {t:'Father of Amparo Jiménez (Carlos Jr.’s mom). This link is family-confirmed: names and town match, but no record naming Amparo has been found yet.', l:S}
    ],
    story:"Amparo (Carlos Jr.’s mom) names her parents as Ranulfo Jiménez and Clemencia Muñoz de la Torre, both from Cañadas de Obregón. The family also confirms that Amparo’s sisters passed away, and that Rosa died in 2006.",
    records:[
      {t:'Civil birth, Cañadas de Obregón, 1920', l:V, url:FS('QG7J-9JDC'), img:'1920-birth-ranulfo-jimenez-loza.jpg'},
      {t:'Civil marriage, Cañadas de Obregón, 1946', l:V, url:FS('QGWM-NBM7'), img:'1946-marriage-ranulfo-jimenez-clemencia-munoz.jpg'},
      {t:'Death of baby daughter Luz María, 1947', l:V, url:FS('QGWJ-Y9TY'), img:'1947-death-luz-maria-jimenez-munoz.jpg'}
    ], parents:['pedro','petra']},
  clemencia:{link:'Link to Amparo: family-confirmed, no record', name:'Clemencia Muñoz de la Torre', gen:3, sex:'f', side:'dad', line:'jimenez', years:'b. 1921', label:V,
    places:['Cañadas de Obregón, Jalisco'],
    facts:[
      {t:'Born 26 Dec 1921 in Cañadas de Obregón, Jalisco; registered 2 Jan 1922. Parents: Jacinto Muñoz and Josefa de la Torre.', l:V},
      {t:'Married Ranulfo Jiménez Loza on 29 May 1946, age 24 (written “Cemencia” in the index).', l:V},
      {t:'Marked as deceased in the FamilySearch Family Tree.', l:L},
      {t:'Mother of Amparo Jiménez (Carlos Jr.’s mom). This link is family-confirmed: names and town match, but no record naming Amparo has been found yet.', l:S}
    ],
    records:[
      {t:'Civil birth, Cañadas de Obregón, 1921', l:V, url:FS('QG7J-YWV2'), img:'1921-birth-clemencia-munoz-de-la-torre.jpg'},
      {t:'Civil marriage, Cañadas de Obregón, 1946', l:V, url:FS('QGWM-NBM7'), img:'1946-marriage-ranulfo-jimenez-clemencia-munoz.jpg'}
    ], parents:['jacinto','josefa']},
  pedro:{name:'Pedro Jiménez Covarrubias', gen:4, sex:'m', side:'dad', line:'jimenez', years:'1896–1937', label:L, places:['Cañadas de Obregón, Jalisco'],
    facts:[{t:'Named as “Pedro Jiménez,” Ranulfo’s father, on his 1920 birth and 1946 marriage.', l:V},{t:'Full name Pedro Jiménez Covarrubias, born 1896, died 1 Jan 1937 in Cañadas de Obregón, per the FamilySearch Family Tree.', l:L}],
    records:[{t:'Birth of his son Ranulfo, 1920', l:V, url:FS('QG7J-9JDC'), img:'1920-birth-ranulfo-jimenez-loza.jpg'}], parents:['jdrefugio','cayetana']},
  petra:{name:'Petra Loza Mercado', gen:4, sex:'f', side:'dad', line:'jimenez', years:'b. 1892', label:L, places:['Cañadas de Obregón, Jalisco'],
    facts:[{t:'Named as “Petra Loza,” Ranulfo’s mother, on his 1920 birth and 1946 marriage.', l:V},{t:'Born 23 Feb 1892 in Cañadas.', l:L}],
    records:[{t:'Birth of her son Ranulfo, 1920', l:V, url:FS('QG7J-9JDC'), img:'1920-birth-ranulfo-jimenez-loza.jpg'}], parents:['sostenes','emilia']},
  jacinto:{name:'Jacinto Muñoz de la Torre', gen:4, sex:'m', side:'dad', line:'jimenez', years:'b. 1887', label:L, places:['Jalostotitlán, Jalisco','Cañadas de Obregón, Jalisco'],
    facts:[{t:'Named as “Jacinto Muñoz,” Clemencia’s father, on her birth and 1946 marriage.', l:V},{t:'Born 24 Jul 1887 in Jalostotitlán; died in Cañadas.', l:L},{t:'Married Josefa de la Torre in 1916: civil marriage in Cañadas de Obregón, church marriage in San Miguel el Alto.', l:L}],
    records:[{t:'Birth of his daughter Clemencia, 1921', l:V, url:FS('QG7J-YWV2'), img:'1921-birth-clemencia-munoz-de-la-torre.jpg'}], parents:['damaso','clemdlt']},
  josefa:{name:'Josefa de la Torre de la Torre', gen:4, sex:'f', side:'dad', line:'jimenez', years:'1900–1974', label:L, places:['Cañadas de Obregón, Jalisco'],
    facts:[{t:'Named as “Josefa de la Torre,” Clemencia’s mother, on her birth and 1946 marriage.', l:V},{t:'Born 1900; died 20 Oct 1974 in Cañadas.', l:L}],
    records:[{t:'Birth of her daughter Clemencia, 1921', l:V, url:FS('QG7J-YWV2'), img:'1921-birth-clemencia-munoz-de-la-torre.jpg'}], parents:['manuel','regina']},
  jdrefugio:{name:'José del Refugio Jiménez Pérez', gen:5, sex:'m', side:'dad', line:'jimenez', years:'1850–1922', label:L, facts:[{t:'Pedro’s father, per the FamilySearch Family Tree.', l:L}], records:[], parents:[]},
  cayetana:{name:'Cayetana Covarrubias Padilla', gen:5, sex:'f', side:'dad', line:'jimenez', years:'1853–1914', label:L, facts:[{t:'Pedro’s mother, per the FamilySearch Family Tree.', l:L}], records:[], parents:[]},
  sostenes:{name:'Sostenes de Loza Chávez', gen:5, sex:'m', side:'dad', line:'jimenez', years:'1857–1935', label:L, facts:[{t:'Petra’s father, per the FamilySearch Family Tree.', l:L}], records:[], parents:[]},
  emilia:{name:'Emilia Mercado Jiménez', gen:5, sex:'f', side:'dad', line:'jimenez', years:'b. about 1860', label:L, facts:[{t:'Petra’s mother, per the FamilySearch Family Tree.', l:L}], records:[], parents:[]},
  damaso:{name:'Dámaso Muñoz Gutiérrez', gen:5, sex:'m', side:'dad', line:'jimenez', years:'1862–1911', label:L, places:['San Miguel el Alto, Jalisco'], facts:[{t:'Jacinto’s father, per the FamilySearch Family Tree.', l:L},{t:'Married Clemencia de la Torre Márquez in 1884 in San Miguel el Alto.', l:L}], records:[], parents:[]},
  clemdlt:{name:'Clemencia de la Torre Márquez', gen:5, sex:'f', side:'dad', line:'jimenez', years:'1861–1907', label:L, places:['San Miguel el Alto, Jalisco'], facts:[{t:'Jacinto’s mother, per the FamilySearch Family Tree.', l:L},{t:'Married Dámaso Muñoz Gutiérrez in 1884 in San Miguel el Alto.', l:L}], records:[], parents:[]},
  manuel:{name:'Manuel de la Torre Herrera', gen:5, sex:'m', side:'dad', line:'jimenez', years:'1866–1947', label:L, facts:[{t:'Josefa’s father, per the FamilySearch Family Tree.', l:L}], records:[], parents:[]},
  regina:{name:'Regina de la Torre González', gen:5, sex:'f', side:'dad', line:'jimenez', years:'1877–1956', label:L, facts:[{t:'Josefa’s mother, per the FamilySearch Family Tree.', l:L}], records:[], parents:[]}
};

/* Timeline: only dated events from the research files. who = person id it opens. */
const events = [
  {p:'zacatecas', y:'c. 1849', s:1849, t:'Genaro Rincón is born or christened in Zacatecas, per an unsourced family tree.', l:L, side:'rincon', who:'genaro'},
  {p:'larioja', y:'c. 1850', s:1850, t:'Family story: Genaro de Rincón comes from La Rioja, Spain, to Zacatecas. No record found so far mentions Spain.', l:S, side:'rincon', who:'genaro'},
  {y:'1875', s:1875, t:'José Luis Beltrán González is born (20 Jun).', l:L, side:'rincon', who:'joseluis'},
  {p:'zacatecas', y:'1879', s:1879, t:'Juan Rincón is baptized at Nuestra Señora de Guadalupe, Zacatecas (29 May).', l:V, side:'rincon', who:'juanrb'},
  {p:'canadas', pl:'Los Altos de Jalisco', y:'1884', s:1884, t:'Dámaso Muñoz and Clemencia de la Torre marry in San Miguel el Alto, Jalisco.', l:L, side:'jimenez', who:'damaso'},
  {p:'canadas', pl:'Los Altos de Jalisco', y:'1887', s:1887, t:'Jacinto Muñoz de la Torre is born in Jalostotitlán, Jalisco (24 Jul).', l:L, side:'jimenez', who:'jacinto'},
  {p:'canadas', y:'1892', s:1892, t:'Petra Loza Mercado is born in Cañadas (23 Feb).', l:L, side:'jimenez', who:'petra'},
  {y:'1896', s:1896, t:'Pedro Jiménez Covarrubias is born.', l:L, side:'jimenez', who:'pedro'},
  {p:'zacatecas', y:'1897', s:1897, t:'Juan Rincón and Juana Barbosa marry in the church in Zacatecas (28 Jun).', l:L, side:'rincon', who:'juanrb'},
  {p:'zacatecas', y:'1902', s:1902, t:'Bruno Carlos Rincón Barbosa is born in Zacatecas (6 Oct).', l:L, side:'rincon', who:'bruno'},
  {p:'chihuahua', y:'1903', s:1903, t:'Natalia Beltrán Lozano is born in Chihuahua (3 Jan).', l:L, side:'rincon', who:'natalia'},
  {p:'canadas', y:'1916', s:1916, t:'Jacinto Muñoz and Josefa de la Torre marry, civil in Cañadas, church in San Miguel el Alto.', l:L, side:'jimenez', who:'jacinto'},
  {p:'canadas', y:'1920', s:1920, t:'Ranulfo Jiménez Loza is born in Cañadas de Obregón (16 Feb).', l:V, side:'jimenez', who:'ranulfo'},
  {p:'canadas', y:'1921', s:1921, t:'Clemencia Muñoz de la Torre is born in Cañadas de Obregón (26 Dec).', l:V, side:'jimenez', who:'clemencia'},
  {p:'chihuahua', y:'1931', s:1931, t:'Bruno Carlos Rincón and Natalia Beltrán marry in Chihuahua (3 Oct).', l:V, side:'rincon', who:'bruno'},
  {p:'chihuahua', y:'1932', s:1932, t:'Carlos Rincón Beltrán is born in Chihuahua (11 Aug).', l:V, side:'rincon', who:'crb'},
  {p:'canadas', y:'1937', s:1937, t:'Pedro Jiménez Covarrubias dies in Cañadas (1 Jan).', l:L, side:'jimenez', who:'pedro'},
  {p:'papasquiaro', y:'1940', s:1940, t:'Juan Ramírez and María del Refugio Díaz marry in Santiago Papasquiaro, Durango.', l:L, side:'rincon', who:'jramirez'},
  {p:'canadas', y:'1946', s:1946, t:'Ranulfo Jiménez and Clemencia Muñoz marry in Cañadas de Obregón (29 May).', l:V, side:'jimenez', who:'ranulfo'},
  {y:'1951', s:1951, t:'Juan Rincón Barrón dies.', l:L, side:'rincon', who:'juanrb'},
  {p:'canadas', y:'1974', s:1974, t:'Josefa de la Torre dies in Cañadas (20 Oct).', l:L, side:'jimenez', who:'josefa'},
  {p:'torreon', y:'1989', s:1989, t:'Bruno Carlos Rincón Barbosa dies in Torreón, Coahuila (21 Jan).', l:V, side:'rincon', who:'bruno'},
  {p:'torreon', y:'1990', s:1990, t:'Natalia Beltrán Lozano dies in Torreón (3 Aug).', l:L, side:'rincon', who:'natalia'},
  {p:'chicago', y:'1997', s:1997, t:'Carlos Rincón Beltrán dies in Chicago, Illinois (11 Oct).', l:V, side:'rincon', who:'crb'},
  {p:'orange', y:'2026', s:2026, t:'The newest branch: Carlos Jr. and Diana’s baby girl is due in December.', l:S, side:'both', who:'baby', baby:true}
];

/* Map stops (keys match MAP_DATA.points). */
const stops = [
  {k:'larioja', n:'La Rioja, Spain', y:'c. 1850', l:S, t:'Where the family story says Genaro de Rincón came from.'},
  {k:'zacatecas', n:'Zacatecas', y:'1879–1902', l:V, t:'Juan Rincón was baptized here in 1879; his son Bruno Carlos was born here in 1902, per a family tree.'},
  {k:'chihuahua', n:'Chihuahua', y:'1931–1932', l:V, t:'Bruno Carlos and Natalia married here in 1931; their son Carlos was born here in 1932.'},
  {k:'torreon', n:'Torreón, Coahuila', y:'1939–1990', l:V, t:'Records place the Rincón Beltrán family here from 1939. Bruno Carlos died here in 1989.'},
  {k:'papasquiaro', n:'Santiago Papasquiaro, Durango', y:'1940', l:L, t:'Juan Ramírez and María del Refugio Díaz married here, the Ramírez line.'},
  {k:'canadas', n:'Cañadas de Obregón, Jalisco', y:'1920–1946', l:V, t:'Home of the Jiménez and Muñoz families: Ranulfo and Clemencia were born and married here.'},
  {k:'chicago', n:'Chicago, Illinois', y:'1997', l:V, t:'Carlos Rincón Beltrán died here in 1997.'},
  {k:'orange', n:'Orange County, California', y:'2026', l:S, t:'Home today for Carlos Jr. and Diana, and soon their baby girl.'}
];

/* Family photos confirmed by family (from FamilySearch Memories). Only deceased ancestors. */
const MEM = pid => 'https://www.familysearch.org/tree/person/memories/' + pid;
const BY = 'Family tree contributor JaramilloVillanuevaFlorinade1';
people.crb.photo = {avatar:'carlos-rincon-beltran-face.jpg', f:'carlos-rincon-beltran-portrait.jpg', w:515, h:542,
  cap:'Carlos Rincón Beltrán (1932–1997)', title:'“Mi tío Carlos Rincón Beltrán”', by:BY, url:MEM('L6T1-VR9')};
const wedding = {f:'bruno-natalia-wedding.jpg', w:717, h:960,
  cap:'Natalia Beltrán and Bruno Carlos Rincón, likely their wedding, about 1931', title:'“Mis abuelos Natalia y Carlos Bruno”', by:BY};
people.bruno.photo = Object.assign({avatar:'bruno-rincon-face.jpg', url:MEM('KCSD-NHR')}, wedding);
people.natalia.photo = Object.assign({avatar:'natalia-beltran-face.jpg', url:MEM('KHKT-CYN')}, wedding);
Object.values(people).forEach(x => { if (x.living) delete x.photo; });

/* Children of Carlos Sr. and Amparo, oldest to youngest. To add a spouse or children later,
   add the person above and list their id here as spouse or in kids. */
const siblings = [
  {id:'dorima', spouse:'jasonh', kids:['penelope','alexander']},
  {id:'carlosjr', you:true},
  {id:'joshua', spouse:'vanessa', kids:['elijah']},
  {id:'daniel', spouse:'kirsten'}
];

window.FAMILY = {people, events, stops, siblings};
})();

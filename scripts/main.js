const questions = [
["Die Drachenbrücke in Bratislava gilt als Meister­werk des Wiener Jugendstils.",
"Für die Produktion von Manchego-Käse wird Schafsmilch verwendet.",
"Eine ledige Dirndlträgerin bindet Ihre Schürze auf der linken Seite.",
"Die Firma \"Carglass\" heißt in England \"Autoglass\".",
"Das Mutterland des Croissants ist Frankreich.",
"Chichén Itzá in Mexiko ist eine bedeutende Ruinenstätte der Inka.",
"Die Donau fließt durch zehn Länder.",
"Hamburg hat mehr Brücken als Venedig und Amsterdam zusammen.",
"Der Nil entspringt am Victoria-See.",
"Kangeroo Island ist die größte australische Insel."
],
["Baskisch, gesprochen im Baskenland, gilt als die älteste Sprache Europas.",
"Ecuador beheimatet mehr Tierarten als Europa und Nordamerika zusammen.",
"Zürich ist die brunnenreichste Stadt der Welt.",
"Die Burgruine Hals liegt im Karlsbader Stadtteil Hals.",
"Wales beherbergt die meisten Schlösser und Burgen pro Quadratkilometer weltweit.",
"Hauptstadt der Slowakei ist Bratilava.",
"Normalerweise hat ein erwachsener Mensch 32 Zähne.",
"In dem Wappen von Puntland sieht man zwei Elefanten.",
"Der Geitlandsjökull ist ein Seitengletscher des großen Gletscherschildes Langjökull im Süden von Island.",
"Susanna Capurso ist eine dänische Schauspielerin. Sie wurde durch die Rolle der Sabrina Buchstab-Scholz in der Fernsehserie Lindenstraße bekannt."
],
["Die Abkürzung \"KGaA\" steht für Kommanditgesellschaft auf Aktien.",
"Eichhörnchen halten keinen Winterschlaf.",
"Der Morsecode besteht immer aus 5stelligen Gruppen.",
"Mit Ohm wird der elektrische Widerstand gemessen.",
"Oxymoron ist der innere Widerspruch.",
"In Atlanta fanden 1996 die Olympischen Spiele statt.",
"Obama nungara ist eine räuberisch lebende Küchenschabe, die aktiv Regenwürmer und Schnecken jagt. ",
"Als Cäsar den Rubikon überquerte sagte er : \" alea iacta est \"",
"Der Film \"Titanic\" gewann 11 Oscars.",
"Nikolaus Kopernikus verbreitete das heliozentrische Weltbild."
],
["Atemluft hat 21 % Sauerstoff.",
"In der Ukraine steht die erste Gut-gemacht-Maschine der Welt.",
"Der Ohrfleck-Röhrenaal hat drei Ohren, aber gar keine Flecken.",
"Vatikan ist der kleinste Staat der Welt.",
"Auf der Bath Bridge gilt seit 1933 ein Tempo­limit für Pferde.",
"der Hundertjährige Krieg dauerte 116 Jahre.",
"Der Bau des Kölner Doms dauerte 632 Jahre.",
"Gauthierit ist nicht sehr selten, ungefährlich und schön anzusehen.",
"Ein gelbes Dreieck weist Wanderern den Weg vom Harz in den Thüringer Wald.",
"Sieben Bisse von Riesenläufern verliefen nachweisbar tödlich."
],
["Das erste iPhone wurde im Januar 2007 vorgestellt.",
"Der kleine Trotzkopf steht in Finnland.",
"Die fünfte Netzwanzen-Art der Gattung Corythucha hat Deutsch­land erreicht.",
"Eine Meile entspricht 1609,344 Metern.",
"Canberra ist die Hauptstadt von Australien.",
"\"Ein Mops kam in die Küche\" besteht immer aus vier Strophen.",
"Der Hochwanner ist der zweihöchste Berg Deutschlands.",
"70% der Erde ist mit Wasser bedeckt.",
"Frankfort ist die Hauptstadt des US-Bundesstaates Kentucky.",
"Die blauen Pferde von Franz Marc wurde alle im Zeitraum 1903 bis 1908 gemalt."
],
["Der Rhein ist der längste Fluss innerhalb Deutschlands.",
"Der Newtontoppen hat 1713 meter Höhe und gehört zu Finnland.",
"Antonia Matt wurde am 07. März 1888 in Ludesch geboren.",
"Jane Doe wurde in der Nacht vom 27. auf 28. Mai 1974 ermordet. Der Mörder ist immer noch auf freiem Fuß.",
"Die Chinesische Mauer ist gerundet 21.000 km lang.",
"Parlamentarische Monarchie ist die Staatsform Englands.",
"Pizzino sind höchstens 15 cm große Teigfladen mit Tomatensauce und Käse überbacken.",
"Robert Langdon ist die Hauptfigur in Dan Browns Büchern.",
"Der längste Fluss ist der Amazonas.",
"Der Umfang des Äquators beträgt 40.075,017 km."
],
["Ein Golfball hat 336 Einkerbungen.",
"Die BeerBitches veröffentlichten 2021 17 Meisterwerke. ",
"ca 80 cm lang ist der Begattungsapparat der 15 cm langen Bananenschnecke.",
"Die Straße Muro di Sormano liegt östlich der lombardischen Gemeinde Sormano in Italien.",
"Das hawaiianische Alphabet hat 12 Buchstaben.",
"Das zweitgrößte Land der Erde ist Kanada.",
"Goethe hat 64 Jahre an \"Faust\" gearbeitet.",
"Ein Mensch hat 23 Bandscheiben.",
"Friedrich Dürrenmatt schrieb \"Die Physiker\".",
"1905 brachte Mirzl Hofer den Steinklopfer-Marsch auf den Markt."
],
["Die häufigste Lautäußerung des Riesentagschläfer klingen wie whoap, oorrr oder oorroo.",
"Ein Regenbogen beginnt von unten mit der Farbe violett.",
"1993 bekam Nelson Mandela den Friedensnobelpreis.",
"Die zur Gattung der Pfeilwurze (Maranta) gehörende Maranta leuconeura, auch Gebetspflanze genannt, ist eine auf den indonesischen Inseln beheimatete krautige Pflanze aus der Familie der Marantaceae.",
"Der Viaduc de la Chocolatière wurde nach dem ersten französischen Chocolatièr benannt.",
"Makapansgat liegt ca 200 km nordöstlich von Kapstadt.",
"In ca 29 Jahren hat der Saturn einmal die Sonne umrundet.",
"Der Nil ist schon einmal zugefroren.",
"\"Trockenbeerenauslese\" hat 7 Silben.",
"Der Blauwal hat keine Zähne."
],
["\"Froh zu sein bedarf es wenig\" wurde schon 1660 urkundlich erwähnt. ",
"Emma heißt die Lokomotive bei Jim Knopf.",
"Unter der Rinde von Trauerweiden findet man häufig Nosoderma diabolicum.",
"Die Laguna-Garzón-Brücke wurde am 22. Juli 2011 dem Verkehr übergeben.",
"Skagerrak ist die Meerenge zwischen Dänemark und Norwegen.",
"Das Oberwolfach-Problem wurde bereits 1811 gelöst.",
"Der Ural trennt Europa und Asien.",
"Sir Francis Drake hat die Kartoffel nach Europa gebracht.",
"Fräulein Prüsselius ist die Lehrerin von Tommy und Annika.",
"Die Corythucha kommt nur einmal in Deutschland vor."
],
["Doris Dörrie führte die Regie bei dem Film \"Die Friseuse\".",
"Eine Giraffe kann mit ihrer über einen Meter langen Zunge ihr Ohr putzen.",
"Die Antarktis ist die größte Wüste der Welt.",
"Im Ragnarök gelingt es Thor nicht die Schlange Midgard zu besiegen.",
"Dickbauchseepferdchen sind in den meisten Fällen bigam.",
"Die Punta La Marmora ist 2357 meter hoch.",
"Orchideen sind weltweit verbreitet.",
"Der Schwalbenschwanz ist ein Ritterfalter.",
"Bonnie Taylors einzigste Platz Eins Platzierung in Österreich gelang Ihr mit \"Silhouette in Red\"",
"V838 Herculis erreichte eine Helligkeit von 50 mag."
],
["Albert Paris von Gütersloh wurde am 5. Februar 1887 geboren.",
"Wachtendonk hatte im Jahre 2000 7756 Einwohner.",
"Sardinien ist die größte Insel Italiens.",
"Bei den olympischen Winterspielen 2022 entzündet Dinigeer Yilamujiang das Eröffnungsfeuer.",
"Im Deutschen Pferdemuseum in Verden ist auch ein Pummeleinhorn zu sehen.",
"William Anthony „Bill“ Foulkes bestritt 679 Pflichtspiele.",
"Zur Aussichtsplattform der Frankenwarte führen 371 Stufen.",
"Das Gallium-Experiment dauerte von 1991 bis 1997.",
"Yumbel liegt in Chile.",
"Der Schwarzhörnige Fleckenbock lebt nur in den Nordostalpen."
],
["Die erste Fassung des Kalevala erschien 1835.",
"Die Erstbesteigung des Gipfels der Gamsspitze erfolgte am 12. August 1945. ",
"Weiße Zwerge mit einer Masse von weniger 0,35 Sonnenmassen und Temperaturen zwischen 8500 und 10.000 K werden als ELMVs bezeichnet.",
"Pomarose kommt in der Natur nur in Italien vor.",
"Die Pasterze ist der längste Gletscher der Ostalpen.",
"L’amore innocente fand während des Karnevals 1770 im Wiener Burgtheater statt. ",
"Die Grenze zwischen Dänemark und Schweden ist ausschließlich eine Seegrenze.",
"Carolyn und Roger Perron haben drei Söhne und eine Katze.",
"Der Rotax 532 hat 65 PS.",
"Rasbora sind Süßwasserfische und leben in Süd- und Südostasien."
],
["Die Aflenz mündet in die Ostsee.",
"Der grasgrüne Täubling wächst typischerweise unter Birken.",
"Die TV-Premiere von Tod am Morgen fand am 1. August 1967 im Programm der ARD statt.",
"Michaela Reichör wurde am 17.Oktober 1986 geboren.",
"Die Hochschwab-Tragödie von 1988 wird mit dem am Gipfel stehenden Vogauer Kreuz erinnert.",
"Das Alpen-Edelweiß gehört zu den Korbblütlern.",
"Der Ambouli ist ein saisonal wasserführendes Gewässer in Dschibuti.",
"Der Neufelder See entstand durch eine tektonische Einsenkung während der Würm-Kaltzeit.",
"Mit dem Gründungsdatum 1888 ist Bösendorfer der am längsten bestehende Klavierhersteller der Welt.",
"Der falsche Mexikaner wurde von Morris gezeichnet."
],
["Montegiovi liegt in der Toskana.",
"Kurt Engl beendete seine Karriere im März 2008.",
"An der Kreuzung der großen Querallee mit der Fohlenhofallee steht der \"Steinobelisk zum Rosenhügel\". 1735 sollen sich hier Maria Theresia und Matthias Corvinus verlobt haben. ",
"Die Wiener Linien haben 1071 Haltestellen.",
"Per aspera ad astra ist der Wappenspruch des preußischen Adelsgeschlechts von Wernsdorff.",
"Ein Haflinger zählt zu den Ponyrassen.",
"Fortuna ist eine römische Glücksgöttin.",
"Nora Frey überlebte nur knapp einen Absturz in Süditalien.",
"Die Sizilianische Mauereidechse ist hauptsächlich an der Küste verbreitet.",
"Sulo Jääskeläinen fliesst 137 km durch Finnland."
],
["\"nimm Dir Zeit, nicht das Leben\" ist der Einstieg zu den Buchbinderkindern.",
"Die rote Säule ist 2993 Meter hoch.",
"Tulu wird von rund 50.000 als Muttersprache angegeben.",
"Das Chianina ist die größte Rinderrasse der Welt.",
"Das Hertzsprung-Russell-Diagramm wurde 1913 entwickelt.",
"Das Kartenspiel Uno erschien 1971.",
"Der gewimperte Erdstern ist nur im Frühjahr sichtbar.",
"Die Agentur der Europäischen Union für Flugsicherheit hat ihren Sitz in Köln.",
"Der Titicacasee liegt auf einer Höhe von 3812 Meter.",
"Die höchste Kartenhand beim Poker ist der Royal Flush."
],
["Ein gelbes Wollknäuel hilft Purl dabei, sich treu zu bleiben.",
"Das Vechur gehört zu den kräftigsten Ziegen der Welt.",
"Dr. Doolittle fuhr mit Tin Lizzie von einem Ende Kanadas zum anderen.",
"Das Refuge du Nid d’Aigle liegt in den Schweizer Ostalpen.",
"Senner Pferde gelten als weit verbreitet.",
"Die Chamäleonart Brookesia nana passt auf eine Finger­spitze.",
"Jennifer Chandler war die erste Frau die einen 2,5-fachen Salto in einem Wettbewerb vorführte.",
"Im Latemarwald wachsen überwiegend Buchen und Erlen.",
"Ein Backenzahn aus der Shuqba-Höhle im Westjordan­land belegt den südlichsten Aufenthalts­ort von Neandertalern.",
"Die Braune Jägerspinne duldet ihre Nachkommen fast überall auf ihrem Körper."
],
["Ein Neunzehneck ist nicht mit Zirkel und Lineal konstruierbar.",
"CHIO Aachen findet seit 1898 statt.",
"Nur beim Weinfest von Marino fließt in Italien Wein aus den „Wunderbrunnen“.",
"Bei der Mad Pride gehen weltweit die Verrückten auf die Straße.",
" Der Cimon della Pala wird häufig als das „Matterhorn der Dolomiten“ bezeichnet.",
"Der Senda Sursilvana startet in St.Moritz.",
" Die Kaiserin von Blandings ist mehrfaches Entführungsopfer.",
" Der Strauchige Salbei wird von Vögeln bestäubt.",
" Die Südliche Grashüpfermaus ernährt sich von anderen Mäusen und Skorpionen.",
"Die Quelle der Enns liegt in Schladming."
]
];

const c = [206, 119, 955, 105, 473, 945, 501, 966, 466, 199, 441, 885, 622, 123, 955, 805, 477];

function checkGroup(idx) {
    var res = 0
    for(i = 0; i < 10; i++) {
        if(document.getElementById("cb_" + idx + "_" + i).checked) {
            res |= (0x0001) << i;
        }
    }
    var correct = checkCorrect(c[idx], res)
    var o = "Es sind " + correct + " von 10 Antworten richtig.";
    document.getElementById("out_" + idx).innerHTML = o;
    if(correct == 10) {
        document.getElementById("cap_" + idx).style.color = 'green';
    } else {
        document.getElementById("cap_" + idx).style.color = 'black';
    }
    
}

function checkCorrect(guess, correct) {
    var cc = 0;
    for(i = 0; i < 10; i++) {
        if(((guess >> i) & 0x1) == ((correct >> i) & 0x1)) cc++;
    }
    return cc;
}

document.addEventListener("DOMContentLoaded", function () {
    fillQuestions();
    for(idx = 0; idx < 17; idx++) {
        toggle("frm_" + idx)
    }
});

function fillQuestions() {
    for (grp = 0; grp < 17; grp++) {
        for (idx = 0; idx < 10; idx++) {
            document.getElementById("lbl_" + grp + "_" + idx).innerHTML = questions[grp][idx];
        }
    }
}

function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block' || e.style.display == '') {
      e.style.display = 'none';
    } else {
      e.style.display = 'block';
    }
  }
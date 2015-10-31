# Családi TODO

## Az 1. beadandó feladat - Kuti Bence - HS74YU

Első beadandóként egy kis webes alkalmazás elkészítése a cél szerveroldali technológiák segítségével. A feladatnak mininálisan tartalmaznia kell:

- legalább két modellt, egy-sok kapcsolatban - kész
- legalább 1 űrlapot - kész
- legalább 1 listázó oldalt - kész
- legyen lehetőség új felvételére - kész
- legyen lehetőség meglévő szerkesztésére - kész
- legyen lehetőség meglévő törlésére - kész
- legyenek benne csak hitelesítés után elérhető funkciók - kész
- perzisztálás fájlba történjen - kész
- közzététel Herokun - http://cstodo.herokuapp.com/

Az előző kódrészlet eredménye:

![Adatbázis kapcsolati modell](images/kapcs.png)


## A dokumentáció szerkezete

A dokumentáció felépítésével kapcsolatos elvárások alapvetően megfelelnek az előzménytárgyban megfogalmazott elvárásoknak, de ki is egészülnek a tárgy webes jellegének megfelelően. A következő segédanyagok használhatók ehhez:

- [Az előzménytárgy dokumentációval kapcsolatos elvárásai](http://webprogramozas.inf.elte.hu/alkfejl/A_dokumentacio_felepitese.pdf)
- [A gyakorlatokon tervezéssel kapcsolatban elhangzott diák](http://webprogramozas.inf.elte.hu/alkfejl/03.html#/4)
- [Webes alkalmazások tervezése, tervezési eszközök](http://ade.web.elte.hu/wabp/lecke2_lap1.html)
- [További hallgatói jegyzetek a különböző UML diagramokkal kapcsolatban](http://webprogramozas.inf.elte.hu/alkfejl/dok_uml_hallgatoi_anyagok.zip)

A diagramok elkészítéséhez bármilyen eszköz használható. Néhány ajánlat:

- [nomnoml](http://nomnoml.com/): sokféle diagramtípus
- [js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/): szekvenciadiagramok
- [Lumzy](http://lumzy.com/app/): webes mockupkészítő eszköz
- [LayoutIt](http://www.layoutit.com/build): designtervekhez
- [Bootswatch](http://bootswatch.com/): designtervekhez

A dokumentáció a következő részeket tartalmazza:

- Követelményanalízis
- Tervezés
- Implementáció
- Tesztelés
- Felhasználói dokumentáció


### Követelményanalízis

A követelmény feltárás során felmérik és összegyűjtik a megrendelt szoftverrel szemben támasztott felhasználói követelményeket, elemzik az alkalmazási szakterületet. Részei:

1. Követelmények összegyűjtése: a nyújtandó szolgáltatások ismertetése rövid, szöveges leírásként, sokszor felsorolásként jelenik meg.
    1. Funkcionális elvárások
    2. Nem funkcionális követelmények
2. Szakterületi fogalomjegyzék: ha vannak speciális fogalmak, akkor ezeket itt lehet összegyűjteni és magyarázni.
3. Használatieset-modell
    1. Szerepkörök: lista rövid leírással
    2. Használati eset diagramok: a szerepkörök és az elérhető funkiók kapcsolatát jelenítik meg, ha kell, akkor esetenként rövid magyarázó szöveggel.
    3. Folyamatok pontos menete: legalább 1 folyamat kifejtése.


### Tervezés

1. Architektúra terv
    1. komponensdiagram
    2. Oldaltérkép
    3. Végpontok
2. Felhasználóifelület-modell
    1. Oldalvázlatok
    2. Designterv (nem kell, elég a végső megvalósítás kinézete)
3. Osztálymodell
    1. Adatmodell
    2. Adatbázisterv
    3. Állapotdiagram
4. Dinamikus működés
    1. Szekvenciadiagram

### Implementáció

1. Fejlesztői környezet bemutatása
2. Könyvtárstruktúrában lévő mappák funkiójának bemutatása

### Tesztelés

Automatikus tesztek szükségesek. Nem kell teljeskörű tesztelés, a hallgató mutassa meg, hogy képes ilyen tesztek írására.

1. Tesztelési környezet bemutatása
2. Egységtesztek: legalább 1 adatmodell tesztelése
3. Funkcionális felületi tesztek: legalább 1 folyamat tesztelése
    1. VAGY: Selenium IDE használatával
    2. VAGY: zombie.js használatával
4. Tesztesetek felsorolása: milyen eseteket próbált végig a hallgató

### Felhasználói dokumentáció

1. A futtatáshoz ajánlott hardver-, szoftver konfiguráció
2. Telepítés lépései: hogyan kerül a Githubról a célgépre a program
3. A program használata

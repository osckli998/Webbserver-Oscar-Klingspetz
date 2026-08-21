# DITTNAMN basrepo

Välkommen till webbserverprogrammering. Detta är ditt repo som vi jobber med i kursen! Den här guiden hjälper dig att installera alla nödvändiga verktyg och komma igång med utvecklingsmiljön i VS Code.

**Börja med att ersätta DITTNAMN ovan med ditt namn och ta sedan bort denna rad.**

## Filer du får med

De här filerna finns med som standard i repot och ska inte röras av dig.

**package.json**  
Inställningsfil för npm och pakethantering. Du kommer göra dina egna i undermapparna! Denna behövs för att få eslint att lira som det ska.

**eslint.config.js**  
Regelboken för projektets kodkvalitet. Den talar om för ESLint-verktyget vilka kodregler som gäller (t.ex. att projektet körs i Node.js). Det är tack vare den här filen som VS Code vet exakt när den ska rödmarkera ett fel eller varna för en oanvänd variabel.

**.gitignore**  
Lista på filer för git att ignorera. Talar om för Git vilka filer och mappar som inte ska laddas upp till GitHub. Här ligger mappen node_modules (eftersom den är enorm och återskapas med npm install) och känsliga filer med lösenord/databasnycklar.

**.env**  
Fil med hemliga lösenord mm till databas som inte följer med git

**.vscode/extensions.json**  
En lista med rekommenderade verktyg.

**.vscode/settings.json**  
Projekt-specifika inställningar för VS Code. Bra grundinställningar från Johan.

## Extensions

När du öppnar den här mappen i VS Code bör du få en fråga nere i högra hörnet om att installera rekommenderade tillägg (extensions). Om du missade den, gör så här:

- Gå till Extensions-menyn till vänster (Ctrl+Shift+X / Cmd+Shift+X).
- Skriv @recommended i sökfältet.
- Installera de tillägg som visas i listan.

### ESLint

ESLint läser igenom din JavaScript-kod i realtid och letar efter fel innan du ens har startat servern.

Röda/Gula vågiga linjer: Om du stavar fel på en variabel, glömmer att importera en modul, eller har felaktig syntax, kommer ESLint att stryka under koden.

Hur du ser felen: Håll muspekaren över det understrukna ordet för att se vad som är fel, eller öppna fliken "Problems" längst ner i terminalfönstret för att se en lista över alla fel i hela filen.

Tips: Fixa alltid ESLint-varningar direkt, annars kraschar ofta servern när du försöker köra den!

### Prettier

Välbekant från webb1

### REST Client

Du behöver inte använda externa program som Postman. Öppna filen requests.http (om den finns i projektet, annars skapa en). Skriv ett testanrop, till exempel:

HTTP
GET http://localhost:3000/api/users
Klicka på den lilla texten "Send Request" som dyker upp direkt ovanför texten för att se svaret från din Express-server.

### MongoDB for VS Code

Direktanslutning till din MongoDb Atlas. Klicka på MongoDB-ikonen (det gröna lövet) i din vänstermeny. Anslut till enligt guiden på sajten.
Du kan nu klicka dig in i dina "Collections" och se exakt hur den data du sparar via Mongoose ser ut.

# Ohjelmistosuunnittelumalli: Prototype

Tero Maakivi  
2407546  
AIC24SP

## Ohjelmistosuunnittelumalli: Prototype esimerkkikoodeja

#### inherit kansiossa:

C# koodi, joka näyttää miten perinteinen periytyminen toimii C# ja vastaavissa kielissä. Erittäin barebones esimerkki.

#### prototype_js kansiossa:

Varsinainen JavaScript-koodi, joka näyttää prototype luontimallin toimivuuden.

### Ohjelman suoritus:

cd prototype_js  
node prototype.js

### Ohjelman toiminta lyhyesti

Esimerkkikoodi näyttää miten JavaScriptissä luodaan olio, ja miten sitä käytetään prototyyppinä kun luodaan uusi olio,
josta taas luodaan kolmas olio:  
puppy -> doggy -> animal  
puppyn prototyyppi on doggy, jonka prototyyppi on animal

Olioille lisäillään ohjelman suorituksen aikana metodeja sekä ominaisuuksia, lisäksi lopuksi käydään läpi miten shadowing toimii,
antamalla prototyyppiketjun keskimmäiselle doggy oliolle oma legs ominaisuus ja se poistetaan myöhemmin.

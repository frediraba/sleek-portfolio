# Sleek Portfolio - Fredi Raba

## Ülevaade

Sleek Portfolio on kaasaegne ja interaktiivne veebiarenduse portfoolio, mille eesmärk on esitleda Fredi Raba projekte ja oskusi. Veebisait on loodud kasutades uusimaid veebiarenduse tehnoloogiaid, pakkudes suurepärast kasutajakogemust, sealhulgas keele valik (Eesti ja Inglise keel) ja tumerežiim.

## Funktsionaalsus

- **Tume ja hele režiim**: Kasutajad saavad valida tumeda või heleda režiimi, et sobitada oma eelistustega.
- **Keelevahetus**: Leht toetab kahte keelt - eesti ja inglise keel. Kasutajad saavad veebilehe sisu muuta vajutades keelevalikule.
- **Sujuv liikumine**: Menüüs klikkides liigub leht sujuvalt soovitud sektsioonidesse.
- **Animatsioonid ja dünaamilised efektid**: Oskused sektsioonis protsendid täituvad ainult siis, kui kasutaja jõuab sellele sektsioonile. Animatsioonid ja liikumine on loodud kasutajate tähelepanu püüdmiseks.
- **Kontaktivorm**: Kasutajad saavad hõlpsasti jätta sõnumi, täites kontaktivormi, mis tühjendab sisendi pärast edukat saatmist.

## Sektsioonid

1. **Minust** - Tutvustab Fred Raba kui kirglikku veebiarendajat.
2. **Projektid** - Esitleb interaktiivseid projekte, sealhulgas AI-põhine ilmarakendus, Virtuaalne Portfell, ja E-kaubanduse Tootekaardid.
3. **Oskused** - Kuvab tehnilised oskused ja nende taseme interaktiivsete täitebaaridega.
4. **Võta Minuga Ühendust** - Kontaktivorm, et kasutajad saaksid Fredi Raba-ga ühendust võtta.

## Kasutatud Tehnoloogiad
- **Next.js** - Veebiraamistik, mis võimaldab serveripoolset renderdamist ja lihtsat veebirakenduste loomist.
- **React** - JavaScripti teek, kasutajaliideste loomiseks.
- **Tailwind CSS** - Stiilide jaoks, mis pakub kiiret ja kohandatavat CSS-i raamistiku.
- **TypeScript** - Staatiliselt tüübitud JavaScript, mis muudab arenduse usaldusväärsemaks.

## Paigaldus ja Kasutamine

### Eeltingimused
- Node.js (soovitatavalt viimane versioon)
- npm või yarn (paketihaldur)

### Paigaldus
1. **Klooni see repository**
   ```bash
   git clone https://github.com/frediraba/sleek-portfolio.git
   ```
2. **Liigu projekti kausta**
   ```bash
   cd sleek-portfolio
   ```
3. **Paigalda sõltuvused**
   ```bash
   npm install
   ```
   või
   ```bash
   yarn install
   ```
4. **Käivita arendusserver**
   ```bash
   npm run dev
   ```
   või
   ```bash
   yarn dev
   ```
5. Ava oma veebibrauseris [http://localhost:3000](http://localhost:3000) ja näe veebilehte.

## Korduma Kippuvad Küsimused

1. **Kuidas muuta veebilehe sisu?**
   - Veebilehe sisu saab muuta failides, mis asuvad `src/components` kaustas. Näiteks `Hero.tsx`, `About.tsx`, `Projects.tsx` ja `Contact.tsx`.

2. **Kuidas lisada uusi projekte?**
   - Uued projektid saab lisada `Projects.tsx` failis, täiendades `projects` massiivi, lisades uue objekti projekti pealkirja, kirjelduse ja pildi URL-iga.

## Kontakt
Kui sul on küsimusi või ettepanekuid, võta ühendust Fredi Raba'ga [LinkedInis](https://linkedin.com/in/frediraba) või saada mulle sõnum läbi minu veebilehe.

---
**Autor**: Fredi Raba  
**GitHub**: [frediraba](https://github.com/frediraba)

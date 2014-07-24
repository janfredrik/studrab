/*
  Jan Fredrik Gundersen, Skien - 2014
  Klassen studrab med medlemsdata.
  - all returnerer hele arrayen
  - get returnerer onsket id
*/

angular.module('starter.services', [])

.factory('StudRab', function() {

  // Bedrifter som tilbyr rabatt med adr, txt (hva slags fordel man faar, logo og kategori.
  var studrab = [
    { id: 0, name: '360 grader', adr: 'Jernbanesvingen 6, 2821 Gjøvik', txt: '299,- per mnd for studenter. Alle medlemmer må betale en engangspris for en wellneskey til 1090,-', logo: "img/360.jpg", kat: "trening" },
    { id: 1, name: 'Basic Gym', adr: "Øvre Torvgate 24B, 2815 Gjøvik",txt: '299,- per mnd for studenter.', logo: "img/basic.jpg", kat: "trening"  },
    { id: 2, name: 'Gjøvik Olympiske Fjellhall', adr: "Heimdals gate 2, 2821 Gjøvik", txt: "Svømmehall: Enkeltbillett 50,- (Ordpris 70,-) Klippekort 10 klipp: 400,- (ordpris 550,-) Klatring(Før kl. 16.00): Enkeltbillett 50,- (ordpris 60,-) Klippekort 10 klipp: 550,- (ordpris 750,-) Enkelte konsertbilletter har også studentrabatter", logo: "img/fjellhallen.jpg", kat: "trening" },
    { id: 3, name: 'Toten treningssenter', adr: "Storgata 25, 2815 Gjøvik", txt: "Basismedlemskapet 519,- pr mnd. Alle betaler en klubbkontingent ved oppstart, den er på 990,-. Ønsker studentene å velge medlemskap på Otium Spa, uten tilgang til Toten Treningssenter koster dette 519,- pr mnd. Velges det i medlemskapet og kunne benytte begge steder kommer et tillegg på 150,-", logo: "img/toten.jpg", kat: "trening" },
      { id: 4, name: 'Big Horn Steakhouse', adr: "Strandgata 15 2815 Gjøvik", txt: "10 % rabatt på alt av mat.", logo: "img/bighorn.jpg", kat: "resturant" },
      { id: 5, name: 'Café Pi', adr: "Strandgata 15 2815 Gjøvik", txt: "10 % rabatt på alt av mat.", logo: "img/cafepi.jpg", kat: "resturant" },
      { id: 6, name: 'Dinos Kebab House', adr: "Jernbanegata 7, 2821 Gjøvik", txt: "15 % rabatt på mat og drikke.", logo: "img/dinos.jpg", kat: "resturant", url: "dinoshouse.no" },
      { id: 7, name: 'Egon Gjøvik', adr: "Jernbanegata 5, 2821 Gjøvik", txt: "På Egon Gjøvik kan studenter få en cheeseburger på 150gr med pommes frities og en medium brus til 163,- (Ordinær pris er 206,-)", logo: "img/egon.jpg", kat: "resturant" },
      { id: 8, name: 'Jako Sushi', adr: "Hunnsvegen 7, 2821 Gjøvik", txt: "10 % på alt av mat og drikke ved henting", logo: "img/jako.jpg", kat: "resturant" },
      { id: 9, name: 'Smakfullt Fisk og Delikatesser', adr: "Hunnsveien 4B, 2821 Gjøvik", txt: "10 % på alle varer.", logo: "img/blank.jpg", kat: "resturant" },
      { id: 10, name: 'b.young', adr: "Storgata 3, 2815 Gjøvik", txt: "20 % rabatt på hele kjøpet", logo: "img/byoung-logo.jpg", kat: "klaer" },
      { id: 11, name: 'G-Sport', adr: "Storgata 3, 2815 Gjøvik", txt: "15 % på alle ordinære varer. (Ikke allerede nedsatte varer eller tilbud) 10 % på alle sykler", logo: "img/gsport.jpg", kat: "klaer" },
      { id: 12, name: 'Urban Style', adr: "Storgata 3, 2815 Gjøvik", txt: "10 % rabatt på all behandling", logo: "img/urban.jpg", kat: "klaer" },
      { id: 13, name: 'Gjøvik Taxi', adr: "Jernbanetorget 7, 2821 Gjøvik", txt: "10 % rabatt på din taxitur.", logo: "img/gjoviktaxi.jpg", kat: "transport" },
      { id: 14, name: 'Opplandstrafikk', adr: "Innlandskortet Student 16-29 år", txt: "40 % rabatt (av ordinær voksentakst) på enkeltreiser i Oppland og Hedmark", logo: "img/opplandst.jpg", kat: "transport" },
      { id: 15, name: 'Gjøvik Kino og Kulturhus', adr: "Elvegata 6, 2815 Gjøvik", txt: "10,- i rabatt per kinobillett.", logo: "img/gjovikkino.jpg", kat: "kultur" },
      { id: 16, name: 'Oddproductions', adr: "Friscena, Gjøvik kulturhus", txt: "100,- per billett (ordpris 150,-)", logo: "img/oddprod.jpg", kat: "kultur" },
      { id: 17, name: 'Elvedalen Gokartutleie', adr: "Snertingdalsvegen 1294, 2838 Snertingdal", txt: "110,- per person for 10 minutter (ordpris 130,-)", logo: "img/blank.jpg", kat: "kultur" },
      { id: 18, name: 'Gjøvik og Toten Golfklubb', adr: "Sillongenvegen 147, 2846 Bøverbru", txt: "100.- pr.dag/pr. greenfee. 50% på medlemskap – 750,-", logo: "img/golf.jpg", kat: "kultur" },
      { id: 19, name: 'Telenorbutikken Gjøvik', adr: "Jernbanesvingen 6 2821 Gjøvik", txt: "20 % rabatt på tilbehør til mobiltelefoner", logo: "img/telenor.jpg", kat: "elektronikk" },
      { id: 20, name: 'Gjøvik Vandrerhjem', adr: "Parkvegen 8, 2819 Gjøvik", txt: "Enkelt rom med bad 625,- Enkelt rom med vask 450,- (ordpris 595,-) To sengs rom med bad 800,-  Firesengs rom med bad 1300,- Selvsmurt matpakke 30,- (ordpris 69,-) (OBS! Gjelder kun ved telefonbestilling)", logo: "img/blank.jpg", kat: "annet" },
      { id: 21, name: 'Interoptik Gjøvik', adr: "Storgata 5, 2815 Gjøvik", txt: "15 % på glass og innfatning ved kjøp av komplette briller. 15 % på solbriller.", logo: "img/interoptik.jpg", kat: "annet" },
      { id: 22, name: 'Notabene', adr: "Jernbanesvingen 6, 2821 Gjøvik", txt: "15 % rabatt på rekvisita", logo: "img/notabene.jpg", kat: "annet" },
      { id: 23, name: 'Statoil Mjøsstranda', adr: "Bryggevegen 11, 2821 Gjøvik", txt: "20% rabatt på varm mat og bilvvask", logo: "img/statoil.jpg", kat: "annet" },
      { id: 24, name: 'Synsam', adr: "Jernbanesvingen 6, 2821 Gjøvik", txt: "Mulighet for brillekonto for studenter, hvor man kan dele opp betalingen i 6, 12 eller 24 mnd rentefritt.", logo: "img/synsam.jpg", kat: "annet" }
  ];

  return {
    all: function() {
        return studrab;
    },
    get: function(firmaId) {
      return studrab[firmaId];
    }
  }
});
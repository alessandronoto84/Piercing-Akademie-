/* Schematische Schritt-Animationen (keine Fotos, keine KI): einfache SVG-Grafiken je Schritt, die nacheinander ablaufen.
   Sie stehen im Praxislabor an der Stelle eines Clips, solange es den echten Clip aus dem Studio noch nicht gibt.
   Ablauf und Begriffe folgen Modul 9 (Schritte 11–19) und den Datenblättern in Modul 8.
   Format: KURS.animationen[id] = { titel: {de,en,es}, schritte: [{ text: {de,en,es}, svg: "…" }] }
   Ansicht „lobe“: Ohrläppchen im Querschnitt von der Seite, links vorn (sichtbare Seite), rechts hinten. */
window.KURS = window.KURS || { module: [] };
(function () {
  "use strict";
  var W = 640, H = 360;
  // Farben: Gewebe, Stahl, Kunststoffüberzug, Ansatz der 18G-Kanüle (grün), Titan, Markierung
  var F = { haut: "#F1D3C2", hautRand: "#C98F78", stahl: "#8E98A3", ueberzug: "rgba(150,210,180,.45)", ueberzugRand: "#5E9E80",
    ansatz: "#3E9B5F", titan: "#B8C0C9", titanRand: "#7D8792", mark: "#6B3FA0", gold: "#C9A86A", abwurfGelb: "#F2C230", abwurfRot: "#C8372D" };
  var Y = 180; // Höhe des Stichkanals

  function beschriftung() {
    return '<text x="170" y="40" text-anchor="middle" class="a-txt">' + "{vorne}" + "</text>" +
      '<text x="470" y="40" text-anchor="middle" class="a-txt">' + "{hinten}" + "</text>";
  }
  function lappen(kanal) {
    // Ohrläppchen im Querschnitt: weiches Band, unten abgerundet
    return '<path d="M290 50 L350 50 L350 250 Q350 300 320 300 Q290 300 290 250 Z" fill="' + F.haut + '" stroke="' + F.hautRand + '" stroke-width="2"/>' +
      (kanal ? '<line x1="290" y1="' + Y + '" x2="350" y2="' + Y + '" stroke="' + F.hautRand + '" stroke-width="2" stroke-dasharray="3 3"/>' : "");
  }
  function markierung() {
    return '<circle cx="288" cy="' + Y + '" r="5" fill="' + F.mark + '"/><circle cx="352" cy="' + Y + '" r="5" fill="' + F.mark + '"/>';
  }
  function klemme() {
    // Fensterklemme: zwei Backen mit Fenster am Stichkanal, Griff nach unten links
    return '<g class="a-klemme" fill="none" stroke="' + F.stahl + '" stroke-width="7" stroke-linecap="round">' +
      '<path d="M278 120 L278 ' + (Y - 16) + ' M278 ' + (Y + 16) + ' L278 240"/>' +
      '<path d="M362 120 L362 ' + (Y - 16) + ' M362 ' + (Y + 16) + ' L362 240"/>' +
      '<path d="M278 240 Q300 262 300 300 M362 240 Q340 262 340 300" stroke-width="6"/>' +
      '<circle cx="278" cy="' + Y + '" r="16" stroke-width="4"/><circle cx="362" cy="' + Y + '" r="16" stroke-width="4"/></g>';
  }
  function kanuele(x, mitNadel, ueberzugLinks, ueberzugRechts) {
    // Venenverweilkanüle: Stahlnadel im Kunststoffüberzug, grüner Ansatz links; x = Spitze der Nadel
    var l = ueberzugLinks == null ? x - 200 : ueberzugLinks, r = ueberzugRechts == null ? x - 6 : ueberzugRechts;
    return (mitNadel ? '<line x1="' + (x - 260) + '" y1="' + Y + '" x2="' + x + '" y2="' + Y + '" stroke="' + F.stahl + '" stroke-width="3"/>' +
        '<path d="M' + (x - 14) + " " + (Y - 3) + " L" + x + " " + Y + " L" + (x - 14) + " " + (Y + 3) + 'Z" fill="' + F.stahl + '"/>' : "") +
      '<rect x="' + l + '" y="' + (Y - 6) + '" width="' + (r - l) + '" height="12" rx="4" fill="' + F.ueberzug + '" stroke="' + F.ueberzugRand + '" stroke-width="1.5"/>' +
      (ueberzugLinks == null ? '<rect x="' + (l - 34) + '" y="' + (Y - 12) + '" width="34" height="24" rx="5" fill="' + F.ansatz + '"/>' : "") +
      (mitNadel ? '<rect x="' + (x - 262) + '" y="' + (Y - 9) + '" width="30" height="18" rx="3" fill="#D8DCE0" stroke="' + F.stahl + '"/>' : "");
  }
  function abwurf(offen) {
    return '<g><rect x="40" y="250" width="70" height="70" rx="6" fill="' + F.abwurfGelb + '"/>' +
      '<rect x="36" y="' + (offen ? 238 : 244) + '" width="78" height="10" rx="3" fill="' + F.abwurfRot + '"/>' +
      '<path d="M62 280 l8 -12 l8 12 z" fill="none" stroke="#111" stroke-width="2"/><text x="75" y="310" text-anchor="middle" class="a-klein" fill="#111">{abwurf}</text></g>';
  }
  function schere(x) {
    return '<g transform="translate(' + x + ' ' + (Y - 46) + ')" fill="none" stroke="#555" stroke-width="3">' +
      '<circle cx="-10" cy="-14" r="8"/><circle cx="10" cy="-14" r="8"/><path d="M-6 -7 L6 34 M6 -7 L-6 34"/></g>';
  }
  function labret(x, mitKugel) {
    // Labret: Stab mit flacher Platte (hinten); x = vorderes Ende des Stabs
    return '<line x1="' + x + '" y1="' + Y + '" x2="' + (x + 92) + '" y2="' + Y + '" stroke="' + F.titanRand + '" stroke-width="7" stroke-linecap="round"/>' +
      '<line x1="' + x + '" y1="' + Y + '" x2="' + (x + 92) + '" y2="' + Y + '" stroke="' + F.titan + '" stroke-width="4"/>' +
      '<rect x="' + (x + 92) + '" y="' + (Y - 20) + '" width="7" height="40" rx="3" fill="' + F.titan + '" stroke="' + F.titanRand + '"/>' +
      (mitKugel ? '<circle cx="' + (x - 8) + '" cy="' + Y + '" r="10" fill="' + F.titan + '" stroke="' + F.titanRand + '" stroke-width="1.5"/>' : "");
  }
  function kugel(cx) { return '<circle cx="' + cx + '" cy="' + Y + '" r="10" fill="' + F.titan + '" stroke="' + F.titanRand + '" stroke-width="1.5"/>'; }
  function klemmzange() {
    // Klemmzange hält die Platte hinten: zwei Backen an der Platte, Gelenk, Griffe mit Fingerringen
    return '<g fill="none" stroke="' + F.stahl + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M372 ' + (Y - 14) + ' L440 ' + (Y - 4) + ' L560 ' + (Y - 46) + '"/><path d="M372 ' + (Y + 14) + ' L440 ' + (Y + 4) + ' L560 ' + (Y + 46) + '"/>' +
      '<circle cx="575" cy="' + (Y - 52) + '" r="14"/><circle cx="575" cy="' + (Y + 52) + '" r="14"/><circle cx="440" cy="' + Y + '" r="4" fill="' + F.stahl + '"/></g>';
  }
  function pfeil(x1, x2, y) {
    var r = x2 > x1 ? 1 : -1;
    return '<g stroke="' + F.gold + '" stroke-width="3" fill="' + F.gold + '"><line x1="' + x1 + '" y1="' + y + '" x2="' + (x2 - r * 10) + '" y2="' + y + '"/>' +
      '<path d="M' + x2 + " " + y + " L" + (x2 - r * 12) + " " + (y - 7) + " L" + (x2 - r * 12) + " " + (y + 7) + 'Z"/></g>';
  }
  function bewegt(von, nach, inhalt) {
    // Inhalt gleitet beim Anzeigen des Schritts von „von“ nach „nach“ (Verschiebung in x)
    return '<g class="a-bewegt" style="--a-von:' + von + 'px;--a-nach:' + nach + 'px">' + inhalt + "</g>";
  }
  function bild(inhalt) {
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + beschriftung() + inhalt + "</svg>";
  }

  var T = {
    vorne: { de: "vorn (sichtbare Seite)", en: "front (visible side)", es: "delante (lado visible)" },
    hinten: { de: "hinten", en: "back", es: "detrás" },
    abwurf: { de: "Abwurf", en: "sharps", es: "agujas" }
  };

  var lobe = [
    { text: { de: "Ein- und Austrittsstelle sind markiert und desinfiziert. Die Klemme mit Fenster wird so angelegt, dass die Markierung im Fenster liegt.",
        en: "Entry and exit points are marked and disinfected. The clamp with a window is placed so that the mark sits inside the window.",
        es: "Los puntos de entrada y salida están marcados y desinfectados. La pinza con ventana se coloca de modo que la marca quede dentro de la ventana." },
      svg: bild(lappen(false) + markierung() + bewegt(-60, 0, klemme())) },
    { text: { de: "Gestochen wird von vorn, von der sichtbaren Seite aus: ein zügiger, gerader Stich durch beide Markierungen.",
        en: "You pierce from the front, from the visible side: one swift, straight motion through both marks.",
        es: "Se perfora desde delante, desde el lado visible: un movimiento rápido y recto a través de ambas marcas." },
      svg: bild(lappen(false) + markierung() + klemme() + bewegt(-150, 0, kanuele(390, true)) + pfeil(200, 260, 150)) },
    { text: { de: "Die Stahlnadel wird herausgezogen und kommt sofort in den Nadelabwurfbehälter. Der Kunststoffüberzug bleibt im Stichkanal.",
        en: "The steel needle is pulled out and goes straight into the sharps container. The plastic sheath stays in the channel.",
        es: "La aguja de acero se retira y va directamente al contenedor de objetos punzantes. La vaina de plástico se queda en el canal." },
      svg: bild(lappen(true) + kanuele(390, false) + '<g class="a-weg">' + '<line x1="130" y1="' + Y + '" x2="390" y2="' + Y + '" stroke="' + F.stahl + '" stroke-width="3"/></g>' + abwurf(true)) },
    { text: { de: "Den Überzug hinten mit der Schere leicht kürzen, damit der Schmuck besser hineingeht.",
        en: "Shorten the sheath at the back slightly with scissors so the jewelry goes in more easily.",
        es: "Acorta un poco la vaina por detrás con las tijeras para que la joya entre mejor." },
      svg: bild(lappen(true) + kanuele(390, false, null, 372) + schere(380) + '<line x1="372" y1="' + (Y - 14) + '" x2="372" y2="' + (Y + 14) + '" stroke="' + F.gold + '" stroke-width="2" stroke-dasharray="3 3"/>') },
    { text: { de: "Den Ersteinsatz in den Überzug stecken: beim Labret den Stab von hinten, die Platte bleibt hinten.",
        en: "Insert the initial jewelry into the sheath: with a labret, the post goes in from the back and the disc stays at the back.",
        es: "Introduce la joya inicial en la vaina: en el labret, la barra entra por detrás y el disco se queda detrás." },
      svg: bild(lappen(true) + kanuele(390, false, null, 372) + bewegt(80, 0, labret(372, false)) + pfeil(520, 470, 220)) },
    { text: { de: "Den Schmuck durch den Stichkanal drücken, nicht ziehen. Der Überzug wird dabei nach vorn hinausgeschoben. Den Kunden dabei ausatmen lassen.",
        en: "Push the jewelry through the channel, do not pull. This pushes the sheath out at the front. Have the client breathe out while you do it.",
        es: "Empuja la joya a través del canal, no tires. Así la vaina sale por delante. Pide al cliente que espire mientras lo haces." },
      svg: bild(lappen(true) + bewegt(0, -100, kanuele(390, false, null, 372)) + bewegt(0, -100, labret(372, false)) + pfeil(470, 410, 220)) },
    { text: { de: "Das Röhrchen vorsichtig vom Schmuck abziehen. Der Stab steckt jetzt im Stichkanal, die Platte liegt hinten an.",
        en: "Carefully pull the tube off the jewelry. The post now sits in the channel, with the disc resting at the back.",
        es: "Retira con cuidado el tubo de la joya. La barra ya está en el canal y el disco queda apoyado detrás." },
      svg: bild(lappen(true) + '<g class="a-weg-links">' + kanuele(290, false, 120, 286) + "</g>" + labret(258, false)) },
    { text: { de: "Den Schmuck mit der Klemmzange festhalten und die Kugel vorn fest aufdrehen. Danach nochmals mit Kodan einsprühen.",
        en: "Hold the jewelry with the forceps and screw the ball on firmly at the front. Then spray with Kodan once more.",
        es: "Sujeta la joya con las pinzas y enrosca bien la bola por delante. Después, vuelve a pulverizar con Kodan." },
      svg: bild(lappen(true) + labret(258, false) + klemmzange() + bewegt(-60, 0, kugel(250)) + '<path d="M232 ' + (Y + 26) + ' a18 18 0 1 0 36 0" fill="none" stroke="' + F.gold + '" stroke-width="3"/><path d="M268 ' + (Y + 18) + ' l0 10 l-9 -2 z" fill="' + F.gold + '"/>') },
    { text: { de: "Fertig: Kugel vorn auf der sichtbaren Seite, Platte hinten. Dem Kunden das Piercing im Spiegel zeigen.",
        en: "Done: ball at the front on the visible side, disc at the back. Show the client the piercing in the mirror.",
        es: "Listo: bola delante en el lado visible y disco detrás. Enséñale el piercing al cliente en el espejo." },
      svg: bild(lappen(true) + labret(258, true) + '<path d="M440 150 l22 24 l44 -52" fill="none" stroke="' + F.gold + '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>') }
  ];

  KURS.animationen = {
    "labor-lobe": {
      titel: { de: "Animation: Lobe stechen und Labret einsetzen", en: "Animation: piercing the lobe and inserting a labret", es: "Animación: perforar el lóbulo y colocar un labret" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: lobe,
      woerter: T
    }
  };
})();

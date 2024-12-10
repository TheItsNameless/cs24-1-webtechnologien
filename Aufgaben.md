---
theme: blood
highlightTheme: monokai
maxScale: "1"
width: "1920"
height: "1080"
---

## Übung: Portfolio-Webseite Entwicklung
**Webtechnologien**

Das Ziel dieser Übung ist es, eine einfache Portfolio-Webseite zu erstellen, die HTML, CSS und JavaScript verwendet, um eine vollständige Webanwendung zu bauen.

---
## Aufgabe 1

> Erstelle die HTML-Grundstruktur, um einen Header, Hauptinhalt und einen Footer mit Kontaktformular anzuzeigen.

**Hinweis**: Nutze die IDs der Abschnitte und das `href`-Attribut von Links, um die Navigation zu verlinken.
**Bonus**: Nutze Kommentare in deinem HTML, um die verschiedenen Bereiche zu beschreiben (`<!-- Kommentar -->`).

---
### Grundlegendes HTML-Dokument

1. Erstelle ein HTML-Dokument `index.html` und füge die grundlegende Struktur hinzu (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
2. Füge den Titel „Portfolio Webseite“ in den `<title>`-Tag des `<head>`-Bereichs hinzu.

---
### Navigation und Hauptinhalt

1. Füge im `<body>`-Bereich ein `<header>`-Element hinzu, das einen `<h1>`-Titel „Willkommen auf unserem Portfolio!“ und eine Navigationsleiste (`<nav>`) mit Links zu „Über uns“, „Projekte“ und „Kontakt“ enthält.
2. Füge eine `<main>`-Sektion hinzu, die zwei Abschnitte `<section>` mit den IDs `about` und `projects` enthält.

---
### Kontaktbereich    
1. Füge einen `<footer>`-Bereich hinzu, der eine Kontaktsektion und die id `contacts` enthält. Verwende ein `<form>`, um den Namen und die Nachricht des Nutzers abzufragen.

---
## Aufgabe 2

> Style nun deine Website mittels CSS, um sie ansprechender zu gestalten.

**Bonus**: Füge Variablen für Farben hinzu, um das Design flexibler zu gestalten (`--primary-color: #db4c4c;`) und verwende diese Variable.

---
### CSS Grundlagen

1. Erstelle eine CSS-Datei `styles.css` und binde sie in dein HTML-Dokument mit `<link rel="stylesheet" href="styles.css">` ein.
2. Setze die Schriftart des gesamten Dokuments auf Arial oder eine andere serifenlose Schriftart.
3. Style den Header so, dass er einen dunklen Hintergrund und weiße Schrift hat.
4. Stelle sicher, dass die Navigationslinks horizontal zentriert nebeneinander angezeigt werden und einen kleinen Abstand zueinander haben.

---
### Flexbox

1. Verwende Flexbox, um den „Projekte“-Bereich in zwei Spalten zu unterteilen: Links eine Liste von Projekten und rechts einen Bereich, der Projekt-Details anzeigt.
    - Die Liste soll über eine ID `projects` ansteuerbar sein.
    - Die Projektdetails soll einen `<p>` enthalten, der über die ID `details` ansteuerbar ist.
    - Die beiden Bereiche sollen in einem Verhältnis von 1:2 aufgeteilt werden und durch eine graue Linie (`border-right`) getrennt sein.

---
### Weiteres Styling

1. Style das Kontaktformular so, dass alle Elemente auf einer neuen Zeile sind und die Labels zentriert sind.
2. Füge das Bild `wald.jpg` als Seitenhintergrund ein.

---

## Aufgabe 3

> Und weil das noch nicht reicht, machen wir noch mehr CSS.

---
### Hübschere Homepage

1. Sorge dafür, dass der Header runde Ecken und einen Farbverlauf hat.
2. Setze den Hintergrund der Projektnamen beim Hovern auf eine andere Farbe.

---
### Hübscheren Kontakt

1. Sorge dafür, dass der Footer am Seitenende bleibt.
2. Außerdem soll der Footer nur das mittlere Drittel der Seite einnehmen.

**Bonus**: Füge weitere Styles hinzu, um die Seite etwas freundlicher zu gestalten.

---

## Aufgabe 4

> Was wäre eine Website ohne Interaktivität? - Eine Website ohne JavaScript!

**Hinweis**: Verwende `addEventListener()`, um Klick-Events der Projekt-Buttons zu registrieren.

---
### JavaScript einbinden

1. Erstelle eine JavaScript-Datei `script.js` und binde sie in dein HTML-Dokument ein (`<script src="script.js"></script>`).

---
### Projektauswahl-Interaktivität

1. Füge JavaScript hinzu, um die Projektelemente anklicken zu können und auf Klick eine JavaScript-Funktion aufrufen.
2. Verwende die Funktion `zeigeProjektDetails()`, um die Details des entsprechenden Projekts in der rechten Spalte anzuzeigen. Die Projektinformationen sollten in einem Array gespeichert werden.

---
### Formularvalidierung

1. Füge eine JavaScript-Funktion `validiereFormular()` hinzu, die sicherstellt, dass der Benutzer sowohl den Namen als auch die Nachricht eingibt, bevor das Formular abgeschickt wird.

**Hinweis**: Nutze `alert()` um dem Nutzer eine Nachricht zu senden!

---

## Aufgabe 5

> Zum Schluss soll die Website noch interaktiver werden und Daten aus dem Web ziehen.

---
### JSON zur Datenabfrage

1. Nutze `fetch` um die `projects.json` vom Server abzurufen (der Link ist `https://raw.githubusercontent.com/TheItsNameless/cs24-1-webtechnologien/refs/heads/main/projects.json`)
2. Lade die `projects.json` in deinem Script, um Sie für die Anzeige der Daten zu nutzen.

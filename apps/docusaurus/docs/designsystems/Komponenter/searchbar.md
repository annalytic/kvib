---
id: searchbarID
title: (!)Søkefelt
description: Søkefelt som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/søkefelt
displayed_sidebar: designsystemSidebar
---
***OBS! Under konstruksjon:***

- *** Ikke design for dette i Figma-KVIB ***
- ***Nåværende komponent er bygget opp av inputfelt fra KVIB, med en søkeknapp (utgangspunkt i kartverket.no) inni
  feltet ***
- ***Ikke tatt høyde for fokus og hover-funksjoner på hverken knapp eller inputfelt ***
- ***Kartverket.no har enda ikke et felles design for søkefelt, men dette kommer etterhvert ***

***

For å endre lengden til søkefeltet, må det legges inn i et <code><div\></code>-element, deretter kan størrelsen endres
ved å sette bredde på <code><div\></code>-elementet.

<div class="kv-searchbar__wrapper">
<div class="kv-form__input__wrapper">
    <input class="kv-form__input" type="text" id="inputFieldID" placeholder="Søk..."/>
</div>
    <button class="kv-button kv-searchbar__button">
        <span class="material-symbols-outlined">search</span>
    </button>
</div>

<br/>

```markup
<div class="kv-searchbar__wrapper">
<div class="kv-form__input__wrapper">
    <input class="kv-form__input" type="text" id="inputFieldID" placeholder="Søk..."/>
</div>
    <button class="kv-button kv-searchbar__button">
        <span class="material-symbols-outlined">search</span>
    </button>
</div>
```
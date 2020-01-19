# Prequsites
1. You need to have `node` and `npm` installed. (prefferably latest versions)
2. Clone repo
3. Inside directory run `npm i`

# Development
All of the domain code goes to `/src`. \
All of the tests go to `/test`. You should name test file like so: `entity.spec.ts`

# Unit tests
To run tests run either `npm t` or `npm run test` it will run jest runner with watch mode enabled.
____________________________________________________________________________________________________________________________
# Przepisy

#

1. Opis projektu

Aplikacja ma za zadanie gromadzenie przepisów kuchennych dodawanych przez użytkowników, które następnie będą wyświetlane w liście. Przepisy można filtrować za pomocą wbudowanej wyszukiwarki przy użyciu tytułu dania, łatwości przyrządzenia, i czasu przygotowania. Każdy przepis będzie zawierać:

- tytuł,
- autora,
- opis dania,
- czas przygotowania,
- trudność przygotowania,
- potrzebne składniki,
- przygotowanie krok po kroku,
- wartości odżywcze.



Jako niezalogowany użytkownik, zakres możliwości to wyszukiwanie i przeglądanie dodanych już przepisów.

Jako użytkownik zalogowany moje uprawnienia rozszerzają się o dodawanie nowych przepisów.

Opiekę nad aplikacją będą sprawować administratorzy. Będzie on mógł edytować lub usuwać dodane już przepisy. Będzie miał także możliwość blokowania użytkowników.

W kolejnej wersji aplikacji dodany zostanie moduł zliczania wartości odżywczych.

Każdy użytkownik zalogowany będzie mógł ustawić sobie dzienne zapotrzebowanie kaloryczne i makroelementy. Użytkownik będzie mógł dodać dany przepis do jego dziennego dziennika który automatycznie podsumuje wartości i na koniec dnia wyśle e-mail z raportem.

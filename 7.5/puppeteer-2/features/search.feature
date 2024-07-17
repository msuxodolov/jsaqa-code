Feature: Registration cinema
    Scenario: Stalker positive test
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user clicks date
        When user clicks time Stalker
        Then user the selection of the location and the start of the session opens "Начало сеанса: 13:00"
        When user chooses a place
        When user book a place
        Then user he has chosen a ticket and receives a code "Вы выбрали билеты:"
        When user receives the booking code
        Then user gets a ticket "Электронный билет"

    Scenario: Micki-Mouse positive test
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user clicks date
        When user clicks time Micki Mouse
        Then user the selection of the location and the start of the session opens "Начало сеанса: 00:00"
        When user chooses a place
        When user book a place
        Then user he has chosen a ticket and receives a code "Вы выбрали билеты:"
        When user receives the booking code
        Then user gets a ticket "Электронный билет"

    Scenario: Gone with the wind occupied place
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user clicks date
        When user clicks time Gone with the wind
        Then user the selection of the location and the start of the session opens "Начало сеанса: 17:00"
        When user select an occupied place
        Then user the button is inactive

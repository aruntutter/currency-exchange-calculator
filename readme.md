# Currency Exchange Rate Calculator

## Table of Contents

- [Links](#links)
- [Description](#description)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Api Used](#api-used)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [What I Learned](#what-i-learned)
- [Project structure](#project-structure)
- [Credits](#credits)
- [Note](#note)
- [Contributing](#contributing)

## Links

- Solution URL: [GitHub Repository](https://github.com/aruntutter/currency-exchange-calculator)
- Live Demo: [Live Demo URL](https://unrivaled-faloodeh-1e477c.netlify.app)

## Description

This is a currency exchange rate calculator that allows users to convert currency amounts between different countries. The calculator uses the ExchangeRate-API to fetch the latest exchange rates.

## Demo

You can access the live demo of the Currency Exchange Rate Calculator at [Live Demo URL](https://unrivaled-faloodeh-1e477c.netlify.app).

## Features

- Currency selection: Choose the currency you want to convert from and to using dropdown menus.
- Amount input: Enter the amount you want to convert in the input fields.
- Real-time conversion: The converted amount is instantly displayed as you type or change the currencies.
- Exchange rate display: The application shows the exchange rate between the selected currencies.
- Swap functionality: Clicking the "Swap" button allows you to quickly switch the currencies for conversion.

## Technologies Used

- HTML
- CSS
- JavaScript
- Font Awesome (for the custom icon)
- Google Fonts (for font families 'Poppins', 'Kanit', and 'Rajdhani')

## API Used

The calculator fetches the latest exchange rates from the ExchangeRate-API using the following endpoint:

`https://v6.exchangerate-api.com/v6/972fc1c6613911a718ec109f/latest/`

## How it Works

- When the page loads, the calculator fetches the list of currency codes from the API and populates the dropdowns with the available currencies, excluding the base currency "INR" (Indian Rupee).
- The user can select the currencies and enter the amount to get the converted value and exchange rate.
- The exchange rate is displayed below the input fields and is updated whenever the user changes the input values or selects different currencies.
- The "Swap" button allows the user to quickly switch the currencies, updating the conversion accordingly.


## Usage

1. Open the live demo of the Currency Exchange Rate Calculator using the provided link.
2. Choose the currency you want to convert from in the first dropdown.
3. Enter the amount you want to convert in the input field next to the first dropdown.
4. Choose the currency you want to convert to in the second dropdown.
5. The converted amount will be displayed in the input field next to the second dropdown.
6. The exchange rate between the selected currencies will be displayed below the input fields.
7. To switch the currencies, click on the "Swap" button.

## What I Learned

During the development of this project, I learned:

- How to fetch data from an API using JavaScript's `fetch` function.
- Dynamically populating dropdowns with data fetched from an API.
- Handling user interactions with event listeners in JavaScript.
- Working with external libraries (Font Awesome and Google Fonts) to enhance the project's appearance.

## Project Structure

- `index.html`: Contains the HTML structure of the currency exchange rate calculator.
- `styles/normalize.css`: Provides a reset for consistent rendering across different browsers.
- `styles/style.css`: Contains custom CSS styles for the calculator.
- `scripts/script.js`: Contains the JavaScript code for fetching data from the API and handling user interactions.

## Credits

- Font Awesome: Used for the custom icon of the "Swap" button.
- Google Fonts: Used for the font families 'Poppins', 'Kanit', and 'Rajdhani' used in the calculator.

## Note

Please ensure you have an active internet connection to fetch the latest exchange rates from the API.

Feel free to use and modify this currency exchange rate calculator for your needs. Happy coding!

## Contributing

I welcome contributions to this project. If you find any bugs, have suggestions for improvements, or want to add new features, feel free to open an issue or submit a pull request in the GitHub repository. Let's make this project even better together!
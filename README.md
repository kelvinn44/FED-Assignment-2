# FED-Assignment-2 (Tan Guo Zhi Kelvin & Liang Dingxuan)
## Member Allocation
Tan Guo Zhi Kelvin: Homepage, Signin_Signup, and Preloader

Liang Dingxuan: Game, Store, and Checkout

## GitHub Deployment
https://kelvinn44.github.io/FED-Assignment-2/

## About
Introducing Bmazon, the reliable eCommerce store! We provide essentials at affordable prices for you. By playing our card matching game, you would gain more discounts on top of our affordable products. Bmazon is always at your service :)

## Design Process
As a user of this website, I want to use it to purchase essentials and play the card matching game in the website to earn more discounts. For instance, when I'm in the home page, I can read the brief features about Bmazon, view featured products, and interact at the section where they are promoting their card matching game. The game page is where I can play the card matching game and the store page is where I can browse, and purchase essentials.

- Adobe XD link for the desktop and mobile view of all the wireframes: https://xd.adobe.com/view/ff832958-c23c-4e85-8457-2b456c4f8289-aad0/grid

## Features
1. In the sign in - sign up page, user can sign in to a existing account or create a new account.
2. The "Sign In"/"Log Out" button would change from Blue to Red or Red to Blue when a account has been logged in or logged out respectively.
3. In the game page, user can play our card matching game and earn points for discount ($0.10/point), the score will be saved when user is signed in with an account and they can continue to earn more points on top of their previous points.
4. In the store and checkout page, user can browse products or purchase products respectively.

## Technologies Used
- [GitHub](https://github.com/)
    - This project uses **GitHub** to collaborate, host and deploy as a website, and keep track of changes.
- [Visual Studio Code](https://code.visualstudio.com/)
    - This project uses **Visual Studio Code** to develop the HTML pages, CSS, and JavaScript.
- [Bootstrap](https://getbootstrap.com/)
  - This project uses **Bootstrap** to help with website responsiveness and creation of the navbar.
- [JQuery](https://jquery.com/)
    - This project uses **JQuery** to simplify DOM manipulation.
- [RestDB API](https://restdb.io/)
    - This project uses **RestDB API** to help with account creation, handling, and signing in.
- [Lottie](https://lottiefiles.com/)
    - This project uses **Lottie** to help with graphical animation.
- [Adobe XD](https://helpx.adobe.com/sg/xd/help/adobe-xd-overview.html)
  - This project uses **Adobe XD** to help with the creation of wireframes.
- [JSON](https://www.json.org/json-en.html)
  - This project uses **JSON** to help with product listing, and card matching game product image appearance.
- [HTML](https://html.spec.whatwg.org/)
  - This project uses **HTML** to help with the structure and creation of the website.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
  - This project uses **CSS** to help with making and formatting the HTML elements/website nicer.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - This project uses **Javascript** to help with making the website interactive.
- [Normalize.css](https://necolas.github.io/normalize.css/)
  - This project uses **Normalize.css** to help with making browsers render all elements more consistently and in line with modern standards.

## Testing
1. Sign in - Sign up & Log out (Test account - Email: John@doe.com ; Password: Password123 , Email and Password are case-sensitive.)
   1. Click on the blue "Log in" button on either Home, Game, or Store page.
   2. You will see the Sign In form, either Sign In with an existing account or click "SIGN UP?" to go to the Sign Up form to create a new account.
   3. If you were at the Sign Up form, and want to go back to the Sign In form, click "SIGN IN?".
   4. After Signing in or Signing up, the website will show a successful or unsuccessful alert respectively. If unsucessful, it will ask you to try again. If successful, it will redirect you to a 8 second preloader to the Home page.
   5. After that you'll see the blue "Sign In" button text and colour change to "Log out" and red, respectively.
   6. When you click on the red "Log Out" button, it will show you a successful log out alert and change back to the blue "Sign In" button. And when you click it, it will bring you to the Sign In - Sign Up page again.
2. Card matching game
   1. Click on the game tab in the navigation bar.
   2. You will see twelve cards and when clicked on, it will display a image of a product sold in our store and to win the game you need to click and match the cards to the same product.
   3. The game has a base score of 20 and each time you flip 2 cards, and it does not match the other card, it'll deducts one point, and the final score will determine how much discount you will get. Each point is equvent to $0.10.
   4. You'll be able to continue earning more points on top of your previous points as it will be linked to your account when you're logged in. And you'll be able to view your discount when checking out. 
3. Store & Checkout
   1. In the store page, you can find essentials. Hover over any product and it will display a "Add To Cart" button over that product. Click on "Add To Cart" and that product will be added to your cart.
   2. After adding a product to your cart, view your cart by clicking on the cart icon.
   3. You'll see a cart menu bar appear on the right. You can either click on the "Close" button to close the cart menu bar or the "Checkout" button which links you to the checkout page.
   4. When you're at the checkout page it will show you your total amount. You can click on the "Keep shopping?" link to go back to the store page.
   5. If you would like to checkout, type all of the required info in the form, and click on the "CHECKOUT" button, the website will show an alert telling you that your checkout is successful if you have entered all of the info required in the form. Else, it will show you an alert asking you to type all of the info needed.

## Credits
### Content
The products about were from their own product pages on amazon.sg, in the Media section are their links.

### Media
- https://images.app.goo.gl/vBCZDsYQSNTzoVPy7
- https://images.app.goo.gl/28VyGkkh4t13uYVP7
- https://lottiefiles.com/animations/loading-40-paperplane-pXSmJB5J2C
- https://lottiefiles.com/animations/store-CEsNeiKpLS
- https://pattern.monster/herringbone-4/
- https://www.amazon.sg/SanDisk-SDSSDE30-1TB-G25-USB-Portable-Black/dp/B08RSH8YDJ
- https://www.amazon.sg/Tide-Washing-Machine-Machines-Packaging/dp/B00757ADZ8
- https://www.amazon.sg/NONIO-Whitening-Toothpaste-Concentration-Fluorine/dp/B08DRT1QC4
- https://www.amazon.sg/Command-Picture-14-Pairs-17206-ES-PH206-14NA/dp/B073XR4X72
- https://www.amazon.sg/Philips-929001916107-LEDBulb-White-3000K/dp/B07HS8L4KW
- https://www.amazon.sg/SanDisk-SDSQXAO-256G-GNCZN-Nintendo-Switch-MicroSDXC/dp/B07QD6R5L7

### Acknowledgements
- We received inspiration for this project from https://amazon.sg/ and https://shopee.sg/

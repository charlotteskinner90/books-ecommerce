# Mr Men Bookstore

This ecommerce book store app has been written in React Native, with Expo integrated for fast, efficient development. To run this app, simply clone the repository and run ```yarn start``` in the terminal to start the Expo server.

## Approach

- The app consists of a Home page, a Book lister page and Book detail page. 
- In the time allotted I managed to flesh out the UI of the above pages, with the user journey fairly intuitive.
- I took inspiration from searching for toy store apps, ecommerce and book store apps on [Dribbble](https://dribbble.com/shots/6834697-Mobile-App-for-Toy-Store-Concept) 
- The pages are linked together using react-navigation
  - I used a stack navigator in this case as it allowed me to pass params (the id of the book) through the navigation, and stack navigators are generally used when there is a heirarchy of pages you are moving through (as is the case here)
  - If I were to start this project again, I would create a tab navigator across the bottom of the screen to navigate to Home, the Book Lister and the users Cart (with a numeric badge indicating items in the cart) as this is better UX to have the area's easily accessible in the user journey
  - Alternatively, I would have the cart displaying in the header navigation to the right
- User journey:
  - The user lands on the homepage upon first opening. The name of the bookstore is featured on the main banner - I have made this a bright, fun colour to reflect the bright, fun characters of Mr Men!
  - The user clicks on the call to action button to access the store. The user is navigated to the book lister
  - On the book lister, the books are separated by Mr Men and Little Miss books.
  - The books are displayed on cards, in swipeable lists. The user can click on a card to view the book detail page.
  - The user can view the details of the book, then input their email and click the add to cart button
  - Upon clicking add to cart, the user is redirected back to the homepage.
- Data: 
  - I collated all the data into one JSON file and sliced them to create data for the two flat lists.
  - On the book detail page, the data (name, image) is displayed on an elevated card in a horizontal flatlist. I chose to use horizontal flatlists here as it feels intuitive to swipe through books or products when using other ecommerce apps.
  This also allowed me to break the data up nicely, whilst having it still remain within the screen size - the user doesn't have to infinitely scroll down the page to view the information they need.
  - When the user clicks on a book 'card', the id of the book they have clicked on is passed through the params of the navigation to the detail page. The detail page then renders the correct information of the book chosen.

## Things that went well
- I was pleased with how the setting up the user journey went, with React Navigation. I feel as though it's quite simple to use and navigate through the app.
- While the UI could definitely be more polished, i'm happy with the way the data is displayed on the lister and detail page. 

## Things that did not go well & what I'd do differently next time
- I ran out of time to implement the redux/data persist side of things to track the user journey through the app.
- I could have stored the user viewing/cart data in async storage and then retrieved the async storage data to display on a 'recently viewed' and 'purchased' area on the homepage.
- With redux, I would have created a global redux store to the app to hold the state, utilising redux-thunk
- I would have a books reducer which would hold information about all the books in the json file. I would have a cart reducer which would hold information about items in the cart, and a purchase reducer with information about the purchases made.
- I would use types to define what types of actions will be acting upon the state. These could be 'ADD_TO_CART', 'FETCH_BOOKS' for example.
- I could then use actions to mutate the state and produce new state. Actions would include fetching all the books, adding a book to a cart, removing a book from the cart, or adding the item to a purchase order.
- On the necessary pages in the app I could then call these actions whenever I need to access or transform data. For example, on the book lister page I could call an action which fetches all the books. On the detail page I can call the action which adds the item to the cart

## Things i've learnt
- I have learned the difference between different types of navigators, their uses and how they can be combined. I had previously only used stack navigators so it was interesting to see how else navigators can be used.
- I have found learning about different accessibility methods really interesting while building this app. Simple additions such as adding accessibility labels to views/touchableopacity can make a huge difference to users requiring the use of screen readers to navigate our app. 
Furthermore, the use of bright colours and larger clickable areas such as buttons and cards can ease user navigation around the site. This is something that I will be enforcing in my work as a developer in future.

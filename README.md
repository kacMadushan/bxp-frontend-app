# Building a back-office application
A back-office application used to manage admin business processes like payroll, user, products and etc.

## Use cases
The user shall be able to:

- Login to the back office with email and password
- See and navigate a product category tree
- See a list of products belonging to a specific category in pages of 5, 10, 20, 50 elements per page
- Sort product list by different fields (e.g., id, name) in ascending/descending order
- View the product information on a separate product details page
- Add/modify attributes of a product. Possible attribute types: "number", "text", "url", "tags", "boolean"
- See the last modified product in a custom widget on top of the page (custom here means that you have to implement a new component, not using the one that the component library of your choice provides)
- Logout from the back office

## Key features
Implement crud operations in bxp app:

- Add new product
- Edit and delete product
- Products listing - (sort: abc, search, limit)
- Add new attribute value
- Edit and delete attribute
- Attributes list
- User profile
- User authentication 

## Tech Stack
Using tech stack:

- React
- TypeScript
- React Router - (v6.2.1)
- Ant Design
- Ant Icons
- Tailwind CSS
- uuid
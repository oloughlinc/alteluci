# Alteluci

**[This project is in progress}**

A static website built in Angular. This website is for a client business, Alteluci, and the code is shared here with their permission. The primary concern of this project is front-end design with compatibility across modern browsers and screen sizes
from widescreen to mobile. It was built from an active design template provided by the client, with some input from myself as to functionality.

The core CSS for the page layout is a custom Grid with common breakpoints based on screen width using media queries. This custom approach allows as fine a control as needed over the content display.
Animations are done through the Angular animations framework in Typescript. 

### Why Angular

A static website can instead be built and hosted as a multi-page service hosted by any number of framework servers. The advantage there is that each individual page has a small and consistent loading time. However, this is a long term project
with multiple design iterations planned. The end result will be a larger website which the client wishes each customer to load once upon visit, and then allow their customers to navigate smoothly. This is what an Angular SPA provides. 

### Why AWS

For a low-volume, low-bandwidth website, the cost of service on AWS S3 is attractive compared to more traditional hosting options. Further, the AWS environment offers other necessary tools such as domain name service and certificates. 

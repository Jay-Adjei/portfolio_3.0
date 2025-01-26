***********************
*                     *
*    P O R T I F Y    *
*                     *
***********************

# Changelog & Documentation
Beta / Still in Work

Current Problems:
[ ]
[ ]
[ ]

--------------------------

Lookbook:
Updates / Fixes:

0.0.19 - Latest Updates

• Holographic Card:
handleMouseMove & handleMouseLeave: Functions properly defined to control 3D effects when moving the mouse or leaving the card.
GSAP Animations: Shine and glare animations with delay and linear effect for smooth movement.
Styling: styleVars dynamically passed to the card’s style attribute to update effects.
• Added Guestbook Via Gisco
• Trying to add PostgreSQL for database saving likes/view counter
PostgreSQL Installation and Setup:
    -PostgreSQL was installed on the local machine and integrated with VSCode.
    -A connection to PostgreSQL was successfully established, and databases like "likes" and "views" were created.
Creating Tables in PostgreSQL:
    -Tables for Likes and Views were created in the PostgreSQL database, with appropriate columns (e.g., id, sessionId, createdAt).
    -SQL commands for creating and checking the tables were successfully executed.
Frontend Integration in React:
    -A Like button was created in React, utilizing the useState hook to manage the "like" status and count.
    -The button saves the like status and count in the browser’s localStorage.
Connecting with PostgreSQL for Storage:
    -The code was adjusted to store likes in the PostgreSQL database by inserting a session ID and the timestamp of the like into the Likes table.
    -The like count is stored and updated via API endpoints or directly through SQL commands in the database.
Security Measures (GitHub):
    -Added the .env file to .gitignore to ensure sensitive data like passwords do not get pushed to the public GitHub repository.
Npm Install uuid
Added: Each user receives a unique UUID on their first visit, stored in localStorage and saved as sessionId in the database. A UNIQUE constraint prevents multiple likes from the same user.



0.0.18 - Previous Updates

• Deactivated the mobile/tablet card hover effect  
• Started working on responsive settings for the header in mobile view  
• Adjusted the portfolio page button layout for better responsiveness  
• Made the features section responsive and customized the button design  
• Currently working on a 3D carousel and menu hover design to enhance interactivity and improve the UI/UX experience  
• Refined the code structure, but there’s still more to be done  
• Created a better GitHub repository for archiving and sharing purposes

0.0.17 - Previous Updates

• Developed the audio indicator, dark mode toggle with SVG animation, and a hamburger menu (design improvements to follow)  
• Built the features component  
• Converted the portfolio to React after research revealed that Next.js offers better functionality and performance for the project  
• Selected Next.js for its server-side rendering and routing capabilities, which align with the project’s needs  
• Found the syntax of Next.js familiar and enjoyable, with similarities to my experience with Unity C#—its structure and flow make it easier and more fun to work with  
• Expect protocol updates soon, including improved performance and new features


0.0.16 - Previous Updates

• Started working on the portfolio again
• Cleaned up some CSS and grouped using #regio and #endregio (learned from C#)  
• Renamed the filter to "design," "coding," and "marketing"  
• Added slider transitions and navigation dots  
• Disabled the previous visibility of Holo Effects  
• Deleted the HTML acard2 ID  
• Made the progress bar clickable, and updated the timer functionality  

0.0.15 - Previous Updates

• Updated portfolio holographic effect  
• Added filter with various options  
• Refactored JavaScript code into smaller segments for better readability  
• Cleaned up unnecessary CSS code  
• Enhanced custom cursor and dark-mode script performance  
• Improved performance of hamburger menu (JS/CSS)  
• Added filter bar to the portfolio page  
• Added footer  
• Overall code improvements  

0.0.14 - Previous Updates

• Improved project file management for cleaner organization  
• Split style.css into multiple parts  
• Implemented SASS (learned something new #Newbie)  

0.0.13 - Previous Updates

• Updated cursor functionality: clicking, following, and circle effect  
• Added dark-mode JSON Lottie file with switching functionality  
• Working on updating holographic cards (coming soon)  
• Implemented transparent header with smooth transition  

0.0.12 - Previous Updates

• Improved CSS documentation  
• New landing page slider with dark mode, responsive design, and dot navigation  
• Implemented custom cursor with hide feature  
• Added new GIFs to the landing page  

0.0.11 - Previous Updates

• Integrated Quicksand font locally  
• Added Skills page  
• Included Bootstrap/FontAwesome icons  
• Fixed dark mode on the single card information on the Portfolio page  
• Updated menu text  
• Applied CSS ascending ordering  
• Improved code organization  
• Implemented custom cursor  

0.0.10 - Previous Updates

• New footer design  
• Added simple "About Me" page  
• Implemented loading animation (gsap.min.js with SVG code)  
• Created new gallery for single card  
• Improved header icons position  
• Fixed various bugs  
• Fixed layout for single card  
• Integrated JS scripts locally  
• Added simple lightbox for gallery (single card)  

0.0.9 - New Single Portfolio Page

• Clicking on cards opens /Pages/Cards/Card1.html for detailed information  

0.0.8 - Header Enhancements

• Improved header design and functionality  
• Refined icon positioning  
• Added new logo  
• Fixed spacing/margin/padding issues  
• Added responsive toggle for menu bar  
• Animated menu  
• Logo click now navigates to home  
• Added scale animation  
• Added favicon  
• Implemented sticky header  

0.0.7 - Header Structure / Menu Organization

• Established header structure  
• Organized the menu for intuitive navigation  

0.0.6 - Portfolio Card Design Refinement

• Enhanced the design of portfolio cards for aesthetics and usability  

0.0.5 - Local Font Integration

• Integrated fonts locally for improved performance and design consistency  

0.0.4 - Vanilla JavaScript / Pop-Up and Glare Effect

• Incorporated Vanilla JavaScript for functionality  
• Added pop-up feature and glare effect for enhanced user experience  

0.0.3 - Responsive Card Design

• Implemented responsive design for cards:  
  • Mobile: 2 rows  
  • Tablet: 3 rows  
  • PC: 4 rows  

0.0.2 - GitHub Integration

• Installed GitHub and connected repository  

0.0.1 - Portfolio and Personal Website

• Began the development of the Portfolio/Home section  
• Established the foundational structure of the website and navigated through initial challenges  
• Defined Readme.md as Updates & Logs  

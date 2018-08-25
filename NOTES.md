# Basic Functionality

## MVP

* Provide method for user to send list of files to delete to node
    * Display "Are you sure" in modal with yes/no buttons

## V2

* Prompt once to select a folder to use and save the location

* Allow user to change folder source
    * Open modal asking for folder path with browse button
    * Refresh folder source after yes/no

* Provide method for user to send list of files to delete to node
    * Display spinner in modal while waiting
    * Show results in modal of how many deleted and how many failed
    * If any images failed to delete, report the filename


* 2 column mode to see image side-by-side

* No-results page for when selected folder has no photos


## Tech Debt

* Should I make other components connected?

* Should I create a color pallete?

* Make getFiles a thunk so it can get the selected folder automatically


# QA Testing Scenarios

* Open a massive folder (like 1000 images)

* Delete a massive amount of images

* Try to delete a file you don't have permission to delete

* Try to delete a file that doesn't exist anymore

* View a folder without any photos but has other files


# User Testing

_What do you think happens in this program?_  
* When pictures meet your criteria they go into the trash

_Do you think anything in this application is clickable?_
* The image (clicks it, nothing happens). States nothing is clickable.

_What do you think the icons are for?_
* The folder is for pictures to go when you keep them. The checkmark is to save it. The trash is where they go when you delete them.

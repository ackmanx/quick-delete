# Basic Functionality

## V2

* Remove Open Folder modal
    * On click of menu, immediately open dialog and on selection immediately refresh

* Delete modal maybe should be a view? Show thumbnails of all about to delete

* Provide method for user to send list of files to delete to node
    * Show results of how many deleted and how many failed
    * If any images failed to delete, report the filename

* 2 column mode to see image side-by-side

* Hotkey to hide rejected and show only rejected

* Create thumbnails of images and cache to improve performance

* Add video support
    * Give a visual cue that this is a video

* Support windows paths

* File name bar on top should use ... if it wraps to a 2nd line


## Tech Debt

* Should I create a color pallete?


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

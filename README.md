# custom-file-upload-button
Custom styled file upload button with hidden input and label update."


A simple **custom file upload button** built with HTML, CSS, and JavaScript.  
It replaces the default ugly `<input type="file">` with a styled button and label.


## Features
- Custom button instead of the default file input.
- Works with **single or multiple file uploads**.
- Updates a label to show the selected file names.
- Uses plain **vanilla JavaScript** (no frameworks needed).

## How It Works
1. The real `<input type="file">` is **hidden**.
2. A styled `<button>` is shown instead.
3. Clicking the button triggers the hidden input (`hiddenInput.click()`).
4. When a file is selected, the file names are displayed in a label.


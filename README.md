# sign_up_form_odin

Source for background image: Photo by <a href="https://unsplash.com/@haliewestphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Halie West</a> on <a href="https://unsplash.com/photos/green-leaf-plant-in-close-up-photography-25xggax4bSA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

This assignment requires some creative use of CSS to achieve the same look as the image guide:
https://cdn.statically.io/gh/TheOdinProject/curriculum/afdbabfab03fbc34783c6b6f3920aba4a4d3b935/intermediate_html_css/forms/project_sign_up_form/imgs/sign-up-form.png
Partial CSS reset was applied, at the top of the CSS file \* { }.
Currently Arial font is used as the main font for a consistent look across all browsers. The website looks different with
Firefox due to the system theme and fonts. Consistent look is possible for Chromium and Edge.

source: https://stackoverflow.com/questions/44901499/how-get-current-text-size-in-css
As recomended by W3C

    Set Font Size With Em To allow users to resize the text (in the browser menu), many developers use em instead of pixels.
    The em size unit is recommended by the W3C.
    1em is equal to the current font size. The default text size in browsers is > 16px. So, the default size of 1em is 16px.
    The size can be calculated from pixels to em using this formula: pixels/16=em

Here are some examples

h1 {
font-size: 2.5em; /_ 40px/16=2.5em _/
}
h2 {
font-size: 1.875em; /_ 30px/16=1.875em _/
}
p {
font-size: 0.875em; /_ 14px/16=0.875em _/
}

page height 985.833px;

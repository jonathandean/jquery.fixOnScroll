Basic usage
-----------
When you scroll past an element it will fix itself to the top of the browser window and scroll down with the user. When you scroll back up past its original spot, it goes back to where it started.

    $('some_selector').fixOnScroll();

Workaround for iOS and mobile devices
-------------------------------------
Some mobile devices don't support the CSS 'position: fixed' property, which this plugin uses by default. To use absolute position instead, just use the positioning option:

    $('some_selector').fixOnScroll({ positioning: 'absolute' });

If you want to do this automatically based on whether or not you are using iOS, here's an imperfect solution:

    var pos = 'fixed';
    if(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)) {
      pos = 'absolute';
    }
    $('some_selector').fixOnScroll({ positioning: pos });

If there's a way to detect for browser support of 'position: fixed' universally and more reliably, use that instead... and let me know so I can add it to the plugin :)  There are probably other mobile browsers outside of iOS that needs this too.

Other options
-------------
You can also set the z-index value manually if scrolling the element down causes it to go behind other elements:

    $('some_selector').fixOnScroll({ zIndex: 1 });

Examples
--------
Coming soon
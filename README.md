# ts-material-icons-svg
Attempt to make the latest Material Icons SVG designs available in typescript.

# Google Material Icons
Google Material Icons are released under APL-2.0 https://www.apache.org/licenses/LICENSE-2.0.html

# Installation
``` 
npm i --save https://github.com/MarcusCalidus/ts-material-icons-svg.git
```

# Usage - how to import into TypeScript

There are two ways to include the icons. One is via the curly braces and one without. 
Both have different results when packing your app with Webpack or Angular respectively.
The curly brackets offer you a good amount of code completion and add to code readability. 
The downside of them is that the packaging code will generate one asset in your distribution 
for each icon of the selected style. This will have no impact to the loading speed but will 
generate unnecessary assets. Maybe there will be asset tree shaking in the future - one is 
allowed to dream.

The direct import on the other hand give you the possibility to streamline your code, to only
add what you really want to add. Your asset folder will contain the imported files only.

## Typings
In order for this package to work it is necessary to import the necessary typings

`import 'ts-material-icons-svg';`

Once you have imported this you can also import svg from other sources and use them the 
same way as you would use the Material Icons included in this package. Like so:

```
import icon_wrench from '@fortawesome/fontawesome-pro/svgs/regular/wrench.svg';
```

## Baseline Icons
To include one icon of a whole set

`import icon_edit from 'ts-material-icons-svg/svg/baseline/edit.svg';`

## Outline Icons
To include one icon of a whole set

`import icon_edit from 'ts-material-icons-svg/svg/outline/edit.svg';`


## Sharp Icons
To include one icon of a whole set


`import icon_edit from 'ts-material-icons-svg/svg/sharp/edit.svg';`

## Round Icons
To include one icon of a whole set

`import icon_edit from 'ts-material-icons-svg/svg/round/edit.svg';`

## Twotone Icons
To include one icon of a whole set

`import icon_edit from 'ts-material-icons-svg/svg/twotone/edit.svg';`

# Usage - the icon names
The names of the icons correspond to the official icon names by Google (see here: https://material.io/tools/icons)
Since some of their names are reserved words, like delete, each icon's name is prefixed with "icon_".

# Usage with Angular <mat-icon>
Simply import the needed icons into the MatIconRegistry.

Example `app.module`

```
// your imports go here


import {MatIconRegistry} from "@angular/material";

import 'ts-material-icons-svg';  // this import is for typing purposes only
import {
    icon_more_vert,
    icon_edit,
    icon_check,
    icon_menu,
    icon_remove_circle,
    icon_question_answer,
    icon_info,
    icon_play_circle_filled,
    icon_search,
    icon_save,
    icon_add,
    icon_undo,
    icon_arrow_drop_down,
    icon_keyboard_arrow_left,
    icon_keyboard_arrow_right,
    icon_verified_user,
    icon_lock
} from 'ts-material-icons-svg/dist/outline';


const iconsToImport = [
    {name: 'more_vert', url: icon_more_vert},
    {name: 'edit', url: icon_edit},
    {name: 'check', url: icon_check},
    {name: 'menu', url: icon_menu},
    {name: 'remove_circle', url: icon_remove_circle},
    {name: 'question_answer', url: icon_question_answer},
    {name: 'info', url: icon_info},
    {name: 'play_circle_filled', url: icon_play_circle_filled},
    {name: 'search', url: icon_search},
    {name: 'save', url: icon_save},
    {name: 'add', url: icon_add},
    {name: 'arrow_drop_down', url: icon_arrow_drop_down},
    {name: 'keyboard_arrow_left', url: icon_keyboard_arrow_left},
    {name: 'keyboard_arrow_right', url: icon_keyboard_arrow_right},
    {name: 'undo', url: icon_undo},
    {name: 'verified_user', url: icon_verified_user},
    {name: 'edit', url: icon_edit},
    {name: 'lock', url: icon_lock},
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        MaterialModule,
        // ... your stuff comes here
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        // the loop is for simplification only. No one wants to type all of that
        iconsToImport.forEach(
            icon => matIconRegistry.addSvgIcon(
                icon.name,
                domSanitizer.bypassSecurityTrustResourceUrl(icon.url),
            )
        )
    }
}
```

## To use your imported icon in the template, follow the rules of Angular
```
<mat-icon svgIcon="keyboard_arrow_right"></mat-icon>
```
# Changelog

## 0.0.6
improved help in ReadMe.md

repaired following icons - only black boxes before
    
* Outline airplay
* Outline fast_forward 
* Outline forward_10
* Outline mic
* Outline pause_circle_filled
* Outline queue_music
* Outline replay
* Outline surround_sound
* Outline web
* Round star
* Sharp airplay
* Sharp fast_forward
* Sharp forward_10
* Sharp mic
* Sharp pause_circle_filled
* Sharp queue_music
* Sharp replay
* Sharp surround_sound
* Sharp web
* Twotone airplay
* Twotone fast_forward 
* Twotone forward_10
* Twotone mic
* Twotone pause_circle_filled
* Twotone queue_music
* Twotone replay
* Twotone surround_sound
* Twotone web

## 0.0.1 First release
Some icons are still buggy. But they were already buggy upon download.


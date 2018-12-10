# ts-material-icons-svg
Attempt to make the latest Material Icons SVG designs available in typescript

# Installation
``` 
npm i --save https://github.com/MarcusCalidus/ts-material-icons-svg.git
```

# Usage - how to import into TypeScript

## Baseline Icons
`import {icon_edit} from 'ts-material-icons-svg/dist/baseline';`

## Outline Icons
`import {icon_edit} from 'ts-material-icons-svg/dist/outline';`

## Sharp Icons
`import {icon_edit} from 'ts-material-icons-svg/dist/sharp';`

## Round Icons
`import {icon_edit} from 'ts-material-icons-svg/dist/round';`

## Twotone Icons
`import {icon_edit} from 'ts-material-icons-svg/dist/twotone';`

# Usage - the icon names
The names of the icons correspond to the official icon names by Google (see here: https://material.io/tools/icons)
Since some of their names are reserved words, like delete, each icon's name is prefixed with "icon_".

# Usage with Angular <mat-icon>
Simply import the needed icons into the MatIconRegistry.

Example `app.module`

```
// your imports go here


import {MatIconRegistry} from "@angular/material";

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
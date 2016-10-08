import { Component, Input } from '@angular/core'
import { Logging } from '../../services/utility.service';

var loadScript = require('scriptjs');
declare var CKEDITOR;


@Component({
   selector: 'ckeditor',
   template: `<div [id]="ckEditorInstanceID">Hello world! This is some default text for the <strong>rich text</strong> editor, CKEditor!</div>`
})
export class CKEditor {

   @Input() ckEditorInstanceID: string;

   constructor() {}

   ngOnInit() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"CKEditor\" component!', Logging.normal.lime); }
   }

   ngAfterViewInit() {

      loadScript('/js/ckeditor/ckeditor.js', () => {

         CKEDITOR.replace(this.ckEditorInstanceID, {
            customConfig: '',
            skin: 'office2013',
            toolbarGroups: [
               { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
               { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
               { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
               { name: 'forms', groups: [ 'forms' ] },
               { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
               { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
               { name: 'links', groups: [ 'links' ] },
               { name: 'insert', groups: [ 'insert' ] },
               { name: 'styles', groups: [ 'styles' ] },
               { name: 'colors', groups: [ 'colors' ] },
               { name: 'tools', groups: [ 'tools' ] },
               { name: 'others', groups: [ 'others' ] },
               { name: 'about', groups: [ 'about' ] }
         ],
            removeButtons: 'Cut,Copy,Paste,Anchor,Underline,Strike,Subscript,Superscript,Find,Replace,PageBreak,About',
            removeDialogTabs: 'link:advanced',
            height: 150,

         });



         if (Logging.isEnabled.verbose) {
            console.log('%c CKEditor loaded async!', Logging.normal.purple);
         }
      });
   }
}

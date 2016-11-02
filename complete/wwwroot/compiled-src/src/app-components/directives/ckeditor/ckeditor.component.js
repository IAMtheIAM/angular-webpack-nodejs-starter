"use strict";
var core_1 = require('@angular/core');
var utility_service_1 = require('../../services/utility.service');
var loadScript = require('scriptjs');
var CKEditor = (function () {
    function CKEditor() {
    }
    CKEditor.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"CKEditor\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    CKEditor.prototype.ngAfterViewInit = function () {
        var _this = this;
        loadScript('/js/ckeditor/ckeditor.js', function () {
            CKEDITOR.replace(_this.ckEditorInstanceID, {
                customConfig: '',
                skin: 'office2013',
                toolbarGroups: [
                    { name: 'document', groups: ['mode', 'document', 'doctools'] },
                    { name: 'clipboard', groups: ['clipboard', 'undo'] },
                    { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                    { name: 'forms', groups: ['forms'] },
                    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
                    { name: 'links', groups: ['links'] },
                    { name: 'insert', groups: ['insert'] },
                    { name: 'styles', groups: ['styles'] },
                    { name: 'colors', groups: ['colors'] },
                    { name: 'tools', groups: ['tools'] },
                    { name: 'others', groups: ['others'] },
                    { name: 'about', groups: ['about'] }
                ],
                removeButtons: 'Cut,Copy,Paste,Anchor,Underline,Strike,Subscript,Superscript,Find,Replace,PageBreak,About',
                removeDialogTabs: 'link:advanced',
                height: 150,
            });
            if (utility_service_1.Logging.isEnabled.verbose) {
                console.log('%c CKEditor loaded async!', utility_service_1.Logging.normal.purple);
            }
        });
    };
    CKEditor.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ckeditor',
                    template: "<div [id]=\"ckEditorInstanceID\">Hello world! This is some default text for the <strong>rich text</strong> editor, CKEditor!</div>"
                },] },
    ];
    /** @nocollapse */
    CKEditor.ctorParameters = [];
    CKEditor.propDecorators = {
        'ckEditorInstanceID': [{ type: core_1.Input },],
    };
    return CKEditor;
}());
exports.CKEditor = CKEditor;
//# sourceMappingURL=ckeditor.component.js.map
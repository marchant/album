montageDefine("ba9c197","ui/token-field/token-field.reel/token-field.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=token-field.css>\n    <script type=text/montage-serialization>{"owner":{"prototype":"ui/token-field/token-field.reel","properties":{"element":{"#":"token-field"},"_autocomplete":{"@":"autocomplete"},"_tokenList":{"@":"tokenList"},"_tokensController":{"@":"tokensController"}},"bindings":{"_suggestedValue":{"<-":"@autocomplete.suggestedValue"},"_autocompleteValue":{"<-":"@autocomplete.value"}}},"tokensController":{"prototype":"montage/core/range-controller","properties":{"selectAddedObjects":true},"bindings":{"content":{"<->":"@owner.values"}}},"tokenList":{"prototype":"montage/ui/repetition.reel","properties":{"element":{"#":"token-list"},"isSelectionEnabled":true,"contentController":{"@":"tokensController"}}},"token":{"prototype":"ui/token-field/token.reel","properties":{"element":{"#":"token"}},"bindings":{"value":{"<-":"@tokenList:iteration.object"},"tokensController":{"<-":"@tokenList.contentController"},"textPropertyPath":{"<-":"@owner.textPropertyPath"},"allowAdHocValues":{"<-":"@owner.allowAdHocValues"}}},"autocomplete":{"prototype":"ui/autocomplete/autocomplete.reel","properties":{"element":{"#":"autocomplete"},"identifier":"autocomplete","delay":"500","value":""},"bindings":{"textPropertyPath":{"<-":"@owner.textPropertyPath"},"placeholder":{"<-":"@owner.placeholder"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=token-field class=matte-TokenField>\n        <div data-montage-id=token-list class=matte-TokenField-list>\n            <span data-montage-id=token></span>\n        </div>\n        <input data-montage-id=autocomplete class=matte-TokenField-Autocomplete tabindex=0>\n    </div>\n\n\n</body></html>'});
montageDefine("b15df60","core/serialization/serializer/montage-visitor",{dependencies:["../../core","./montage-serializer","./properties-serializer","./self-serializer","./unit-serializer","../alias","mousse/serialization/visitor"],factory:function(e,t){var n=e("../../core").Montage,r=e("./montage-serializer"),i=e("./properties-serializer").PropertiesSerializer,a=e("./self-serializer").SelfSerializer,o=e("./unit-serializer").UnitSerializer,s=e("../alias").Alias,l=e("mousse/serialization/visitor").Visitor,u=n.specialize.call(l,{_MONTAGE_ID_ATTRIBUTE:{value:"data-montage-id"},_require:{value:null},_units:{value:null},_elements:{value:null},constructor:{value:function u(){}},initWithBuilderAndLabelerAndRequireAndUnits:{value:function(e,t,n,r){return l.call(this,e,t),this._require=n,this._units=r,this._elements=[],this}},getTypeOf:{value:function(e){return e.isModuleReference?"Module":e instanceof s?"Alias":"getInfoForObject"in e||"getInfoForObject"in e.constructor?"MontageObject":e.thisIsAReferenceCreatedByMontageSerializer?"MontageReference":"undefined"!=typeof Element&&Element.isElement(e)?"Element":void 0}},visitMontageReference:{value:function(e,t,n){this.builder.top.setProperty(n,t.reference)}},visitElement:{value:function(e,t,n){var r,i;if(i=t.getAttribute(this._MONTAGE_ID_ATTRIBUTE),!i)throw Error("Not possible to serialize a DOM element with no "+this._MONTAGE_ID_ATTRIBUTE+" assigned: "+t.outerHTML);r=this.builder.createElementReference(i),this.storeValue(r,t,n),this._elements.push(t)}},visitModule:{value:function(e,t,n){var r,i;try{i=t.resolve(this._require)}catch(a){throw Error("Not possible to serialize module reference "+t.id+" from package "+t.require.location+" inside package "+this._require.location)}r=this.builder.createModuleReference(i),this.storeValue(r,t,n)}},visitAlias:{value:function(e,t){var n=this.labeler.getTemplatePropertyLabel(t),r=this.builder.createCustomObject();r.setProperty("alias",t.value),this.builder.top.setProperty(n,r)}},visitMontageObject:{value:function(e,t,n){this.isObjectSerialized(t)?this.serializeReferenceToMontageObject(e,t,n):this.handleMontageObject(e,t,n)}},handleMontageObject:{value:function(e,t,n){var r,i=this.builder.createCustomObject();this.setObjectSerialization(t,i),r=this.serializeMontageObject(e,t,i),r?this.serializeSubstituteObject(e,t,n,i,r):(i.setLabel(this.labeler.getObjectLabel(t)),this.builder.top.setProperty(n,i))}},serializeReferenceToMontageObject:{value:function(e,t,n){var r=this.labeler.getObjectLabel(t),i=this.builder.createObjectReference(r);this.builder.top.setProperty(n,i)}},serializeSubstituteObject:{value:function(e,t,n,r,i){var a,o,s,l;a=this.labeler.getObjectLabel(t),this.labeler.isUserDefinedLabel(a)?(o=this.labeler.getObjectLabel(i),this.labeler.setObjectLabel(i,a),this.builder.relabelReferences(o,a),l=this.getObjectSerialization(i),l&&(l.setLabel(a),this.labeler.isUserDefinedLabel(o)&&this.builder.createObjectReference(a).setLabel(o)),e.visit(i,n)):(e.visit(i,n),s=this.labeler.getObjectLabel(i),this.labeler.setObjectLabel(t,s),this.builder.relabelReferences(a,s))}},serializeMontageObject:{value:function(e,t,n){var r,i,o=this.builder.createObjectLiteral();return this.setObjectType(t,n),n.setProperty("properties",o),this.builder.push(n),"function"==typeof t.serializeSelf?(r=(new a).initWithMalkerAndVisitorAndObject(e,this,t,n),i=t.serializeSelf(r)):(this.setObjectProperties(e,t),this.setObjectCustomUnits(e,t)),this.builder.pop(),0===o.getPropertyNames().length&&n.clearProperty("properties"),i}},setObjectType:{value:function(e,t){var r=n.getInfoForObject(e).isInstance,i=this.getObjectLocationId(e),a=this.builder.createString(i);r?t.setProperty("prototype",a):t.setProperty("object",a)}},getObjectModuleId:{value:function(e){var t=n.getInfoForObject(e);return this._require.identify(t.moduleId,t.require)}},getObjectLocationId:{value:function(e){var t,i=this.getObjectModuleId(e),a=n.getInfoForObject(e),o=a.objectName;return t=r.MontageSerializer.getDefaultObjectNameForModuleId(i),t===o?i:i+"["+o+"]"}},setObjectProperties:{value:function(e,t){var n,r;r=this.builder.top.getProperty("properties"),this.builder.push(r),"function"==typeof t.serializeProperties?(n=(new i).initWithMalkerAndVisitorAndObject(e,this,t),t.serializeProperties(n)):this.setSerializableObjectProperties(e,t),this.builder.pop()}},setSerializableObjectProperties:{value:function(e,t){for(var r,i,a=n.getSerializablePropertyNames(t),o=a.length,s=0;o>s;s++)i=a[s],r=n.getPropertyAttribute(t,i,"serializable"),this.setProperty(e,i,t[i],r)}},hackIsReferenceAllowedForValue:{value:function(e){return"object"==typeof e&&null!=e&&!("undefined"!=typeof Element&&Element.isElement(e))}},setProperty:{value:function(e,t,n,r){var i;if("reference"===r&&this.hackIsReferenceAllowedForValue(n)){i=this.labeler.getObjectLabel(n);var a=this.builder.createObjectReference(i);this.builder.top.setProperty(t,a)}else e.visit(n,t)}},setObjectCustomUnits:{value:function(e,t){for(var n in this._units)this.setObjectCustomUnit(e,t,n)}},setObjectCustomUnit:{value:function(e,t,n){var r,i,a=this._units[n];a&&(i=(new o).initWithMalkerAndVisitorAndObject(e,this,t),r=a(i,t),null!=r&&e.visit(r,n))}},getExternalObjects:{value:function(){for(var e,t={},n=this.builder.getExternalReferences(),r=0;e=n[r];r++)t[e]=this.labeler.getObjectByLabel(e);return t}},getExternalElements:{value:function(){return this._elements}}});t.MontageVisitor=u}});
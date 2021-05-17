var TcHmi;!function(TcHmi){let Controls;!function(Controls){let Beckhoff;!function(Beckhoff){class TcHmiInput extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__locked=!1,this.__triggerUIFinishedOnBlur=!0,this.__onKeydown=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__triggerUIFinishedOnBlur=!0,"Escape"===event.key?(this.__setText(this.__oldText),TcHmi.EventProvider.raise(this.__id+".onUserInteractionCanceled"),this.__triggerUIFinishedOnBlur=!1,this.__autoFocusOut&&this.__elementInput.blur()):"Enter"===event.key&&(this.__oldText=this.__text,this.__triggerUIFinishedOnBlur=!1,this.__autoFocusOut&&(this.__elementInput.blur(),this.__unlock()),TcHmi.EventProvider.raise(this.__id+".onUserInteractionFinished"),event.preventDefault()))},this.__onInput=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__triggerUIFinishedOnBlur=!0,this.__setText(this.__elementInput.value.replace(/\\t/gm,"\\\\t").replace(/\t/gm,"\\t"),!1))},this.__onPaste=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__triggerUIFinishedOnBlur=!0,window.setTimeout(()=>{this.__setText(this.__elementInput.value.replace(/\\t/gm,"\\\\t").replace(/\t/gm,"\\t"),!1)}))},this.__onCut=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__triggerUIFinishedOnBlur=!0,window.setTimeout(()=>{this.__setText(this.__elementInput.value.replace(/\\t/gm,"\\\\t").replace(/\t/gm,"\\t"),!1)}))},this.__onFocusIn=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__triggerUIFinishedOnBlur=!0,this.__oldText=this.__text,this.__elementInput.classList.add("tchmi-focus"),this.__autoSelectText&&(this.__elementInput.setSelectionRange(0,0),this.__elementInput.select()),TcHmi.EventProvider.raise(this.__id+".onFocusIn",event),this.__elementInput===document.activeElement&&this.__lock())},this.__onFocusOut=event=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__unlock(),this.__elementInput.classList.remove("tchmi-focus"),TcHmi.EventProvider.raise(this.__id+".onFocusOut",event),this.__oldText=this.__text,this.__triggerUIFinishedOnBlur&&TcHmi.EventProvider.raise(this.__id+".onUserInteractionFinished"),this.__triggerUIFinishedOnBlur=!0)},this.__onResolverForContentPaddingWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("contentPadding"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__contentPadding)||(this.__contentPadding=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ContentPadding"}),this.__processContentPadding()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiInput, Id="+this.getId()+", Attribute=ContentPadding] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForTextColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("textColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__textColor)||(this.__textColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextColor"}),this.__processTextColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiInput, Id="+this.getId()+", Attribute=TextColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))}}__previnit(){if(this.__elementTemplateRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiInput-template")[0],this.__elementInput=this.__elementTemplateRoot.getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiInput-template-input")[0],!this.__elementTemplateRoot||!this.__elementInput)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init();const passiveEventOptions=!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&{passive:!0,capture:!1},activeEventOptions=!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&{passive:!1,capture:!1};this.__elementTemplateRoot.addEventListener("focusin",this.__onFocusIn,passiveEventOptions),this.__elementTemplateRoot.addEventListener("focusout",this.__onFocusOut,passiveEventOptions),this.__elementInput.addEventListener("keydown",this.__onKeydown,activeEventOptions),this.__elementInput.addEventListener("input",this.__onInput,passiveEventOptions),this.__elementInput.addEventListener("paste",this.__onPaste,passiveEventOptions),this.__elementInput.addEventListener("cut",this.__onCut,passiveEventOptions)}__attach(){super.__attach()}__detach(){super.__detach()}destroy(){if(this.__keepAlive)return;const passiveEventOptions=!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&{passive:!0,capture:!1},activeEventOptions=!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&{passive:!1,capture:!1};this.__elementTemplateRoot.removeEventListener("focusin",this.__onFocusIn,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("focusout",this.__onFocusOut,passiveEventOptions),this.__elementInput.removeEventListener("keydown",this.__onKeydown,activeEventOptions),this.__elementInput.removeEventListener("input",this.__onInput,passiveEventOptions),this.__elementInput.removeEventListener("paste",this.__onPaste,passiveEventOptions),this.__elementInput.removeEventListener("cut",this.__onCut,passiveEventOptions),super.destroy()}setText(valueNew){!0!==this.__locked&&this.__setText(valueNew)}__setText(valueNew,process=!0){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Text")),convertedValue!==this.__text&&(this.__text=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Text"}),TcHmi.EventProvider.raise(this.__id+".onTextChanged",this.__text),process&&this.__processText())}getText(){return this.__text}__processText(){void 0!==this.__text&&(this.__elementInput.value=this.__text)}setTextHorizontalAlignment(valueNew){let convertedValue=TcHmi.ValueConverter.toHorizontalAlignment(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextHorizontalAlignment")),convertedValue!==this.__textHorizontalAlignment&&(this.__textHorizontalAlignment=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextHorizontalAlignment"}),this.__processTextHorizontalAlignment())}getTextHorizontalAlignment(){return this.__textHorizontalAlignment}__processTextHorizontalAlignment(){switch(this.__textHorizontalAlignment){case"Left":TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput,"text-align","left");break;case"Center":TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput,"text-align","center");break;case"Right":TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput,"text-align","right");break;default:TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput,"text-align",null)}}setContentPadding(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ContentPadding"));let resolverInfo=this.__objectResolvers.get("contentPadding");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("contentPadding",{resolver:resolver,watchCallback:this.__onResolverForContentPaddingWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForContentPaddingWatchCallback)})}getContentPadding(){return this.__contentPadding}__processContentPadding(){TcHmi.StyleProvider.processContentPadding(this.__elementInput,this.__contentPadding)}setTextFontSize(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSize")),convertedValue!==this.__textFontSize&&(this.__textFontSize=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSize"}),this.__processTextFontSize())}getTextFontSize(){return this.__textFontSize}__processTextFontSize(){TcHmi.StyleProvider.processFontSize(this.__elementInput,this.__textFontSize,this.__textFontSizeUnit)}setTextFontSizeUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toFontSizeUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSizeUnit")),convertedValue!==this.__textFontSizeUnit&&(this.__textFontSizeUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSizeUnit"}),this.__processTextFontSizeUnit())}getTextFontSizeUnit(){return this.__textFontSizeUnit}__processTextFontSizeUnit(){TcHmi.StyleProvider.processFontSize(this.__elementInput,this.__textFontSize,this.__textFontSizeUnit)}setTextFontFamily(valueNew){let convertedValue=TcHmi.ValueConverter.toFontFamily(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontFamily")),convertedValue!==this.__textFontFamily&&(this.__textFontFamily=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontFamily"}),this.__processTextFontFamily())}getTextFontFamily(){return this.__textFontFamily}__processTextFontFamily(){TcHmi.StyleProvider.processFontFamily(this.__elementInput,this.__textFontFamily)}setTextFontStyle(valueNew){let convertedValue=TcHmi.ValueConverter.toFontStyle(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontStyle")),convertedValue!==this.__textFontStyle&&(this.__textFontStyle=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontStyle"}),this.__processTextFontStyle())}getTextFontStyle(){return this.__textFontStyle}__processTextFontStyle(){TcHmi.StyleProvider.processFontStyle(this.__elementInput,this.__textFontStyle)}setTextFontWeight(valueNew){let convertedValue=TcHmi.ValueConverter.toFontWeight(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontWeight")),convertedValue!==this.__textFontWeight&&(this.__textFontWeight=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontWeight"}),this.__processTextFontWeight())}getTextFontWeight(){return this.__textFontWeight}__processTextFontWeight(){TcHmi.StyleProvider.processFontWeight(this.__elementInput,this.__textFontWeight)}setPlaceholder(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Placeholder")),convertedValue!==this.__placeholder&&(this.__placeholder=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Placeholder"}),this.__processPlaceholder())}getPlaceholder(){return this.__placeholder}__processPlaceholder(){this.__placeholder?this.__elementInput.setAttribute("placeholder",this.__placeholder):this.__elementInput.removeAttribute("placeholder")}setTextColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextColor"));let resolverInfo=this.__objectResolvers.get("textColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue);this.__objectResolvers.set("textColor",{resolver:resolver,watchCallback:this.__onResolverForTextColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForTextColorWatchCallback)})}getTextColor(){return this.__textColor}__processTextColor(){TcHmi.StyleProvider.processTextColor(this.__elementInput,this.__textColor)}setAutoFocusOut(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("AutoFocusOut")),convertedValue!==this.__autoFocusOut&&(this.__autoFocusOut=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"AutoFocusOut"}),this.__processAutoFocusOut())}getAutoFocusOut(){return this.__autoFocusOut}__processAutoFocusOut(){}__lock(){this.__locked=!0}__unlock(){this.__locked=!1}__processControlActivation(){const textInput=this.__elementInput;TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()?textInput.disabled=!1:(textInput.blur(),textInput.disabled=!0)}__processIsEnabled(){super.__processIsEnabled(),this.__processControlActivation()}__processAccessConfig(){super.__processAccessConfig(),this.__processControlActivation()}setAutoSelectText(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("AutoSelectText")),convertedValue!==this.__autoSelectText&&(this.__autoSelectText=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"AutoSelectText"}))}getAutoSelectText(){return this.__autoSelectText}}Beckhoff.TcHmiInput=TcHmiInput}(Beckhoff=Controls.Beckhoff||(Controls.Beckhoff={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiInput","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiInput);
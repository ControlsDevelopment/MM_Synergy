var TcHmi;!function(TcHmi){let Controls;!function(Controls){let Beckhoff;!function(Beckhoff){class TcHmiStateImage extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs)}__previnit(){if(super.__previnit(),this.__elementImage=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiStateImage-image")[0],!this.__elementImage)throw new Error("Invalid Template.html")}__init(){super.__init()}__attach(){super.__attach(),this.__handleState()}__detach(){super.__detach()}destroy(){this.__keepAlive||super.destroy()}__displayCurrentState(iconpath){""===iconpath?(this.__elementImage.style.visibility="hidden",this.__elementImage.src=iconpath):(this.__elementImage.src=iconpath,this.__elementImage.style.visibility="visible")}__handleState(){if(this.__stateList)for(let v of this.__stateList){if(tchmi_equal(v.state,this.__state))return this.__displayCurrentState(v.stateIcon),void(TCHMI_DESIGNER&&null===this.__elementImage.parentElement&&(this.__element[0].innerHTML="",this.__element[0].append(this.__elementImage)));this.__fallbackImage?(this.__displayCurrentState(this.__fallbackImage),TCHMI_DESIGNER&&null===this.__elementImage.parentElement&&(this.__element[0].innerHTML="",this.__element[0].append(this.__elementImage))):(this.__displayCurrentState(""),TCHMI_DESIGNER&&(null!==this.__elementImage.parentElement&&this.__elementImage.remove(),this.__element[0].innerHTML="No configured fallbackImage.<br>Please add a fallback image for the case the current state is not defined in the state list."))}else this.__displayCurrentState(""),TCHMI_DESIGNER&&(null!==this.__elementImage.parentElement&&this.__elementImage.remove(),this.__element[0].innerHTML="No configured StateList.<br>Please add definitions for states.")}setStateList(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("StateList")),convertedValue!==this.__stateList&&(this.__stateList=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StateList"}),this.__processStateList())}getStateList(){return this.__stateList}__processStateList(){this.__isAttached&&this.__handleState()}setState(valueNew){null===valueNew&&(valueNew=this.getAttributeDefaultValueInternal("State")),valueNew!==this.__state&&(this.__state=valueNew,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"State"}),this.__processState())}getState(){return this.__state}__processState(){this.__isAttached&&this.__handleState()}setFallbackImage(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("FallbackImage")),convertedValue!==this.__fallbackImage&&(this.__fallbackImage=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"FallbackImage"}),this.__processFallbackImage())}getFallbackImage(){return this.__fallbackImage}__processFallbackImage(){this.__isAttached&&this.__handleState()}}Beckhoff.TcHmiStateImage=TcHmiStateImage}(Beckhoff=Controls.Beckhoff||(Controls.Beckhoff={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiStateImage","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiStateImage);
var TcHmi;!function(TcHmi){let Functions;!function(Functions){let Beckhoff;!function(Beckhoff){Beckhoff.TrimToLength=function(value,trimToLength){if(null===value)return null;const convertedValue=TcHmi.ValueConverter.toString(value);if(null===convertedValue)throw new TypeError("Function TrimToLength: Could not cast parameter to string.");if(null===trimToLength)return convertedValue;var contentLength=convertedValue.length;return"string"==typeof trimToLength&&(trimToLength=parseInt(trimToLength,10)),isNaN(trimToLength)?convertedValue:trimToLength>0&&contentLength>trimToLength?convertedValue.substr(0,trimToLength):trimToLength<0&&contentLength>-trimToLength?convertedValue.substr(contentLength+trimToLength):convertedValue}}(Beckhoff=Functions.Beckhoff||(Functions.Beckhoff={}))}(Functions=TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("TrimToLength","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.TrimToLength);
var TcHmi;!function(TcHmi){let Functions;!function(Functions){let Beckhoff;!function(Beckhoff){Beckhoff.Log=function(level,message,...optionalParameters){switch(level){case"Error":TcHmi.Log.errorEx(message,...optionalParameters);break;case"Warning":TcHmi.Log.warnEx(message,...optionalParameters);break;case"Info":TcHmi.Log.infoEx(message,...optionalParameters);break;case"Debug":default:TcHmi.Log.debugEx(message,...optionalParameters)}}}(Beckhoff=Functions.Beckhoff||(Functions.Beckhoff={}))}(Functions=TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("Log","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.Log);
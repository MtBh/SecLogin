javascript:(function(active){if(active&&active.type=='password')alert(active.value);}(document.activeElement));

javascript:(function(doc,path){
  "use strict";
  function get(callback,url,hash){
    var r=new XMLHttpRequest();
    r.open("GET",url,true);
    r.onreadystatechange=function(){
      if(r.readyState===4){
        r.onreadystatechange=null;
        if(callback){
          try{
            if(hash){
              callback(r.responseText,hash,doc);
            }else{
              callback(r.responseText,url)
            }
          }catch(e){
           if(e.name&&e.name==="HashMismatchException"){
            doc.writeln(e.message);
            doc.writeln("while loading: '"+url+"'");
            doc.writeln(e.reason);
           }
           else{throw e;}
          }
        }
      }
    };
    r.send();
  }
  get(function(text){
    try{
      var SecLoad=eval(text);
      get(SecLoad.loadStyle,path+"themes/black-tie/jquery-ui.min.css","co9_a8oxeWWetF9j27DmvI9eUyj3KW7X5977s4eVnOU=");
      get(SecLoad.loadScript,"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js","iaFenEC8axSAnyNu6M0-0epCOTwfbKVceFXNd5s_ki4=");
      get(SecLoad.loadScript,"//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js","oTyWrNiP6Qftu4vs2g0RPCKr3g1a6QTlITNgoebxRc4=");
      get(SecLoad.loadScript,path+"SecLogin.js","EOqfVd0ZmOJQ9RbId4Ktjbh8UmoTDKSyKPHcJrtgHVQ=");
    }catch(e){
      console.log(e);
    }
  },path+"SecLoad.js");
})
(window.open().document,
  "https://dl.dropboxusercontent.com/u/11633734/myapps/seclogin/v0.6/");
  
  
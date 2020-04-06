
    var mailsList = document.querySelectorAll('.zt>tbody')[1];
    var x = document.querySelector("#myAudio");
    var check = false;
    var x = null;
    var play;
    var yodelBuffer;
//   (function () {

//     // Check if the browser supports web audio. Safari wants a prefix.
//     if ('AudioContext' in window || 'webkitAudioContext' in window) {

//       play = function play(audioBuffer) {
//         var source = context.createBufferSource();
//         source.buffer = audioBuffer;
//         source.connect(context.destination);
//         source.start();
//       };

//       var URL = 'https://audio.clyp.it/4izbp3vc.mp3?Expires=1583230236&Signature=RLz~-UQTGd-iVHp2OHKRcFfbmDwp7NunkTKQ~SUWP0QOw~m5b9wHdLhRGZs4dOYm5srF15Kr8VPG8lu5pj9iVdAOsZvQM0ilH9n8OEHFHUG8Mu4Xb0ffksxkbxxiBmkrbGuJai11PyoBcX96CPBJR40l-SOaSw6I4gnYFN~JgXo_&Key-Pair-Id=APKAJ4AMQB3XYIRCZ5PA';
//       var AudioContext = window.AudioContext || window.webkitAudioContext;
//       var context = new AudioContext(); // Make it crossbrowser
//       var gainNode = context.createGain();
//       gainNode.gain.value = 1; // set volume to 100%
//       yodelBuffer = void 0;

//       // The Promise-based syntax for BaseAudioContext.decodeAudioData() is not supported in Safari(Webkit).
//       window.fetch(URL)
//         .then(response => response.arrayBuffer())
//         .then(arrayBuffer => context.decodeAudioData(arrayBuffer,
//            audioBuffer => {
//               yodelBuffer = audioBuffer;
//             },
//             error =>
//               console.error(error)
//           ))
//     }
//   }
// )();


    setInterval(function(){
        newMailsList = document.querySelectorAll('.zt>tbody')[1];
        if(mailsList !== newMailsList){
            var div22 = document.createElement("div");
            div22.innerHTML ='<div><audio id="myAudio"><source src="./myAudio.mp3" type="audio/mp3"></audio></div>'
            const body = document.querySelector("body");
            body.appendChild(div22);
            mailsList = newMailsList;
            var mailsListChild = newMailsList.children[0];
            var tableElement = mailsListChild.querySelector('.yX.xY').childNodes[0];
            var data = tableElement.innerText;
            const dataArray = data.split(',');
            const From = dataArray[1].trim();
            const Time = dataArray[3].trim();
            const Message = dataArray[4].trim();
            
            function showData(){
              console.warn('From : ', From);
              console.warn('Time : ', Time);
              console.warn('Message : ', Message);
            }
            
            // if(From === 'Fiverr' && check === true ){ 
              
            if(check === true){ 
              showData();
              // play(yodelBuffer);
              const newWin = window.open('https://www.gmail.com', '_blank');
              newWin.focus();
            }
            else{
                return check = true;
            }
        }
        else{    
            // console.log('nothing new here!');
        }
    }, 3000);









